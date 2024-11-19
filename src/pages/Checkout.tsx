import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { CartItem } from '../models';

const POINTS_PER_DOLLAR = 10; // Points conversion rate

const Checkout = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [purchaseComplete, setPurchaseComplete] = useState(false);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await DataStore.query(CartItem);
      setCart(items);
    };

    fetchCartItems();

    const subscription = DataStore.observe(CartItem).subscribe(() => fetchCartItems());

    return () => subscription.unsubscribe();
  }, []);

  const calculateTotalPoints = () => {
    return cart.reduce((total, item) => total + Math.round((item.price || 0) * POINTS_PER_DOLLAR), 0);
  };

  const handleCheckout = async () => {
    // Clear cart items from DataStore
    const itemsToDelete = await DataStore.query(CartItem);
    for (const item of itemsToDelete) {
      await DataStore.delete(item);
    }

    // Update state to show purchase completion message
    setCart([]);
    setPurchaseComplete(true);
  };

  const handleRemoveItem = async (itemId: string) => {
    const itemToRemove = await DataStore.query(CartItem, itemId);
    if (itemToRemove) {
      await DataStore.delete(itemToRemove);
      setCart(cart.filter((item) => item.id !== itemId));
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Checkout</h1>
      
      {purchaseComplete ? (
        <p style={{ textAlign: 'center', fontSize: '24px', color: 'green', fontWeight: 'bold' }}>
          Congratulations, Purchase Complete!
        </p>
      ) : cart.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#555' }}>Your cart is empty.</p>
      ) : (
        <div>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {cart.map((item) => (
              <li 
                key={item.id} 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'space-between', 
                  borderBottom: '1px solid #ccc', 
                  padding: '10px 0' 
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
                  {Math.round((item.price || 0) * POINTS_PER_DOLLAR)} Points
                </p>
              </li>
            ))}
          </ul>

          <div style={{ textAlign: 'right', marginTop: '20px' }}>
            <h2>Total Points: {calculateTotalPoints()}</h2>
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
