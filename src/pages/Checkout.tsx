import { useEffect, useState } from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { CartItem } from '../models';

const Checkout = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await DataStore.query(CartItem);
      setCart(items);
    };

    fetchCartItems();

    const subscription = DataStore.observe(CartItem).subscribe(() => fetchCartItems());

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div>
      <h1>Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.artist}</p>
              <p>Price: ${item.price?.toFixed(2) ?? '5.00'}</p>
              <img src={item.imageUrl ?? ''} alt={item.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Checkout;
