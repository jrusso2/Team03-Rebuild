import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { CartItem } from '../models';

import { fetchUserAttributes } from 'aws-amplify/auth';
let POINTS_PER_DOLLAR = 10; // Points conversion rate

export type Sponsor = {
  sponsor_id: number;
  fname: string;
  lname: string;
  balance: string;
  conversion_rate: number;
};



const Checkout = ({ driverID, sponsorID }: { driverID: string; sponsorID: string }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [purchaseComplete, setPurchaseComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [user_email, setEmail] = useState<string>("");
  const [sponsors, setSponsors] = useState<Sponsor[] | null>(null);
  const [loading, setLoading] = useState(true);
  loading;
  sponsorID;
  useEffect(() => {
    //fetching the email of the user who is logged in
    const fetchEmail = async () =>{
      const attributes = await fetchUserAttributes();
      let email;
      email = await attributes['email'];
      if(!email) return "";
      setEmail(email);
      return email as string;
    };

  
  const fetchSponsors = async (email:string) => {
    //now, to fetch the sponsors that belong to the driver
    try {
        const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getSponsorsForDriver?driverEmail=' + email);
        const data = await response.json(); 
        const parsed = JSON.parse(data.body) as Sponsor[];
        //console.log()
        setSponsors(parsed);
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }

   };

   const doTasks = async () => {
    let email = await fetchEmail();
    
    await fetchSponsors(email as string);
   };

    const fetchCartItems = async () => {
      const items = await DataStore.query(CartItem);
      setCart(items);
    };

    fetchCartItems();
    doTasks();
    const subscription = DataStore.observe(CartItem).subscribe(() => fetchCartItems());

    
    return () => subscription.unsubscribe();
  }, []);


  const calculateTotalPoints = () => {
    if(sponsors && selectedSponsor && sponsors[selectedSponsor] && sponsors[selectedSponsor].conversion_rate)
    {
      
      POINTS_PER_DOLLAR = sponsors[selectedSponsor].conversion_rate;
    }
    return cart.reduce((total, item) => total + Math.round((item.price || 0) / (POINTS_PER_DOLLAR)), 0);
  };

  const calculateTotalDollars = () => {
    return cart.reduce((total, item) => item.price ? total + item.price : 0, 0);
  };

  const handleCheckout = async () => {
    const totalPoints = calculateTotalPoints();
    console.log("DRIVER ID: " + driverID);

    try
    {
    //grabbing the driver's ID
    let driver_id:number;
    const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getUserIdWithEmail?email=' + user_email);
    const data = await response.json(); 
    const parsed = JSON.parse(data.body);
    console.log(parsed);
    if(false )
    {
      alert("Something went wrong. (User not found).");
      return;
    }
    driver_id = parsed[0].id;

    //console.log("Sponsor i");
    
    if(!sponsors || !selectedSponsor)
    {
      alert("Please choose a sponsor.");
      return;
    }
    if(totalPoints > parseInt(sponsors[selectedSponsor].balance,10))
    {
        alert("You don't have enough points with this sponsor to buy these items. \n\n(Your points with this sponsor: " + sponsors[selectedSponsor].balance + ". Price of cart: "+ totalPoints + ")");
        return;
    }
    //Sponsor's id was selected by user previously
    let sponsor_id = sponsors[selectedSponsor].sponsor_id;

    console.log("driver: " + driver_id + "sponsor: " + sponsor_id);

      try {
        // Call API to update sponsor-driver point balance
        //TODO: make this a post
        const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/updateSponsorDriverPointBalance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            addOrSub: 'sub', // Indicating deduction of points
            amount: totalPoints,
            driverId: driver_id,
            reason: 'Purchase',
            sponsorId: sponsor_id,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to process checkout');
        }
        console.log(response);
        // Clear cart items from DataStore on successful API call
        const itemsToDelete = await DataStore.query(CartItem);
        for (const item of itemsToDelete) {
          await DataStore.delete(item);
        }

        // Update state to show purchase completion message
        setCart([]);
        setPurchaseComplete(true);
        setError(null); // Clear any previous errors
      } catch (err: any) {
        console.error('Error during checkout:', err);
        setError(err.message || 'An unexpected error occurred during checkout.');
      }
    } catch(err: any)
    {
      console.error('Error during checkout:', err);
      setError(err.message || 'An unexpected error occurred during checkout.');
    }
  };

  const handleRemoveItem = async (itemId: string) => {
    const itemToRemove = await DataStore.query(CartItem, itemId);
    if (itemToRemove) {
      await DataStore.delete(itemToRemove);
      setCart(cart.filter((item) => item.id !== itemId));
    }
  };
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    setSelectedSponsor(index);
    console.log("Selected Index:", index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h1>

      {error && (
        <p style={{ color: 'red', textAlign: 'center' }}>
          <strong>Error:</strong> {error}
        </p>
      )}

      {purchaseComplete ? (
        <p style={{ textAlign: 'center', fontSize: '24px', color: 'green', fontWeight: 'bold' }}>
          Congratulations, Purchase Complete!
        </p>
      ) : cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>Your cart is empty.</p>
      ) : (
        <div>
          {(!sponsors ? "You don't have any sponsors" : 
          <select value={selectedSponsor ?? ""} onChange={handleChange}>
            <option value="" disabled>-- Select a Sponsor--</option>
            {sponsors.map((sponsor, index) => (
              <option key={index} value={index}>
                {sponsor.fname + " " + sponsor.lname + ": " + sponsor.balance + " points."}
              </option>
            ))}
          </select>)}
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid #ccc',
                  padding: '10px 0',
                }}
              >
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '18px',
                    color: 'red',
                    cursor: 'pointer',
                    marginRight: '10px',
                  }}
                >
                  X
                </button>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <img
                    src={item.imageUrl ?? ''}
                    alt={item.name}
                    style={{ width: '60px', height: '60px', borderRadius: '8px', marginRight: '10px' }}
                  />
                  <div>
                    <h3 style={{ margin: '0 0 5px' }}>{item.name}</h3>
                    <p style={{ margin: 0, color: '#555' }}>{item.artist}</p>
                  </div>
                </div>
                <p style={{ fontWeight: 'bold', color: '#333' }}>
                  {Math.round((item.price || 0) / POINTS_PER_DOLLAR)} Points (${item.price})
                </p>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h2>Total: {calculateTotalPoints()} Points</h2>
            <h2>(${calculateTotalDollars()})</h2>
          </div>

          <button
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
