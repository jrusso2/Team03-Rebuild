import React, { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { DataStore } from '@aws-amplify/datastore';
import { CartItem } from '../models';
import { useNavigate } from 'react-router-dom';
import { fetchUserAttributes } from 'aws-amplify/auth';

interface User {
  signInDetails?: {
    loginId?: string;
  };
}

const Catalog = ({ user }: { user: User }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [mediaType, setMediaType] = useState('all');
  const [explicit, setExplicit] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [sponsors, setSponsors] = useState<any[]>([]);
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null);
  let [POINTS_PER_DOLLAR, setPOINTS_PER_DOLLAR] = useState<number>(0.01);
  //const [user_email, setEmail] = useState<string>("");
  const navigate = useNavigate();
  //let POINTS_PER_DOLLAR = 10; // Points conversion rate
 
  useEffect(() => {
    const fetchEmail = async () =>{
      const attributes = await fetchUserAttributes();
      let email;
      email = await attributes['email'];
      if(!email) return "";
      //setEmail(email);
      return email as string;
    };

    const fetchSponsors = async (email:string) => {
      try {
        const response = await fetch(
          `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getSponsorsForDriver?driverEmail=${email}`
        );
        const data = await response.json();
        console.log(data.body)
        setSponsors(JSON.parse(data.body));
        console.log(JSON.parse(data.body));
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    const doTasks = async () => {
      let email = await fetchEmail();
          
      await fetchSponsors(email as string);
     };
     doTasks();
  }, [user]);

  useEffect(() => {
    const loadCart = async () => {
      const cartItems = await DataStore.query(CartItem);
      setCart(cartItems);
    };
    loadCart();

    const subscription = DataStore.observe(CartItem).subscribe(() => loadCart());
    return () => subscription.unsubscribe();
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;

    const formattedQuery = encodeURIComponent(searchTerm);
    const mediaQuery = mediaType !== 'all' ? `&media=${mediaType}` : '';
    const explicitQuery = explicit ? '' : '&explicit=no';

    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${formattedQuery}${mediaQuery}${explicitQuery}&limit=20`
      );

      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.error('Error fetching data from iTunes API');
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  const toggleCartItem = async (item: any) => {
    const isItemInCart = cart.some((cartItem) => cartItem.trackId === item.trackId);

    if (isItemInCart) {
      const itemToDelete = cart.find((cartItem) => cartItem.trackId === item.trackId);
      if (itemToDelete) {
        await DataStore.delete(itemToDelete);
        setCart(cart.filter((cartItem) => cartItem.trackId !== item.trackId));
      }
    } else {
      const newCartItem = new CartItem({
        trackId: item.trackId,
        name: item.trackName || item.collectionName,
        artist: item.artistName,
        price: item.collectionPrice,
        imageUrl: item.artworkUrl100,
      });
      await DataStore.save(newCartItem);
      setCart([...cart, newCartItem]);
    }
  };

  const toggleCartPopup = () => {
    setIsCartOpen(!isCartOpen);
  };

  const emptyCart = async () => {
    const itemsToDelete = await DataStore.query(CartItem);
    for (const item of itemsToDelete) {
      await DataStore.delete(item);
    }
    setCart([]); // Clear the cart state
  };

  const isInCart = (item: any) => cart.some(cartItem => cartItem.trackId === item.trackId);

  const calculateTotalPoints = () => {
    
    console.log(selectedSponsor + " " + sponsors[selectedSponsor || 1].conversion_rate);
    const totalPoints = cart.reduce((total, item) => total + ((item.price || 0) / POINTS_PER_DOLLAR), 0);
    return Math.round(totalPoints);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const index = parseInt(e.target.value, 10);
    setSelectedSponsor(index);
    if(sponsors && index && sponsors[index] && sponsors[index].conversion_rate)
      {
        setPOINTS_PER_DOLLAR(sponsors[index].conversion_rate);
      }
    console.log("Selected Index:", index);
    //window.location.reload();
  };
  return (
    <div>
      <h1>Catalog Page</h1>

      {/* Display sponsors */}
      <div>
        <h2>Select a Sponsor</h2>
        { !sponsors && "You don't have any sponsors"}
        { !selectedSponsor && "Please select a sponsor."}
        { sponsors &&
          (<div> 
          <select value={selectedSponsor ?? ""} onChange={handleChange}>
            <option value="" disabled>-- Select a Sponsor--</option>
            {sponsors.map((sponsor, index) => (
              <option key={index} value={index}>
                {sponsor.fname + " " + sponsor.lname + ": " + sponsor.balance + " points."}
              </option>
            ))}
          </select>
          <p></p>
          <div>
          <div> {selectedSponsor && ("You have " + sponsors[selectedSponsor].balance + " points with this sponsor")} </div>
          <p></p>
          <div>With this sponsor, <b>1</b> points equals <b>{POINTS_PER_DOLLAR}</b> dollars.</div> 
        </div></div>
        )}
      </div>
        <p></p>
      {/* Search Form */}
      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
            <option value="all">All</option>
            <option value="music">Music</option>
            <option value="movie">Movies</option>
            <option value="podcast">Podcasts</option>
            <option value="audiobook">Audiobooks</option>
            <option value="ebook">eBooks</option>
          </select>
          <label>
            <input
              type="checkbox"
              checked={explicit}
              onChange={() => setExplicit(!explicit)}
            />
            Allow Explicit Content
          </label>
          <button type="submit">Search</button>
        </div>
        <div>
          <button onClick={toggleCartPopup} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
            <FaShoppingCart size={24} />
            <span>({cart.length})</span>
          </button>
          <button
            onClick={emptyCart}
            style={{
              marginLeft: '8px',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
          >
            Empty Cart
          </button>
        </div>
      </form>

      {/* Cart Popup Modal */}
      {isCartOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '300px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '16px',
            position: 'relative'
          }}>
            <button onClick={toggleCartPopup} style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              border: 'none',
              background: 'none',
              fontSize: '18px',
              cursor: 'pointer'
            }}>X</button>
            <h2>Cart</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {cart.map((item) => (
                <li key={item.id} style={{ marginBottom: '8px', borderBottom: '1px solid #ddd', paddingBottom: '8px' }}>
                  <img src={item.imageUrl || undefined} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '8px' }} />
                  <span>{item.name}</span>
                  <span> - {Math.round((item.price || 0) / POINTS_PER_DOLLAR)} Points</span>
                </li>
              ))}
            </ul>
            <p>Total Points: {calculateTotalPoints()}</p>
            <button 
              onClick={() => navigate('/checkout')} 
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}>
              Checkout
            </button>
          </div>
        </div>
      )}

      {/* Search Results */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px',
        padding: '16px'
      }}>
        {results.map((item: any) => (
          <div key={item.trackId || item.collectionId} style={{
            border: '1px solid #ccc',
            padding: '16px',
            textAlign: 'center',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9'
        }}>
          <h3>{item.trackName || item.collectionName}</h3>
          <p>{item.artistName}</p>
          <p style={{ fontWeight: 'bold', margin: '8px 0' }}>
              Price: {item.collectionPrice ? `${Math.round(item.collectionPrice / POINTS_PER_DOLLAR)} Points` : 'Not Available'}
          </p>
        <img src={item.artworkUrl100 || undefined} alt={item.trackName || item.collectionName} style={{ width: '100px', height: '100px', marginBottom: '8px' }} />
        <button onClick={() => toggleCartItem(item)} style={{
         backgroundColor: isInCart(item) ? 'red' : 'green',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer'
         }}>
            {isInCart(item) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </div>
        ))}
      </div>

    </div>
  );
};

export default Catalog;
