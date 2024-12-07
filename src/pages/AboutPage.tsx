import React, { useEffect, useState } from 'react';
import '../App.css';

const AboutPage: React.FC = () => {
  //const [data, setData] = useState<string | null>(null); // data can be a string or null
  const [error, setError] = useState<string | null>(null); // error can be a string or null
  const [loading, setLoading] = useState(true); // To track loading state
  const [userCount, setUserCount] = useState<number | null>(null); // For user count

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data from API...'); // Log to check if fetch is happening
        const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/users');
        
        // Check if response is okay
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        console.log('API response:', result);
        
        const users = JSON.parse(result.body); // Adjust parsing based on the actual structure
        setUserCount(users.length); // Update the user count
        setLoading(false);

        /*
        const result = await response.json();
        console.log('Current Users:', result); // Log the raw data to verify it
        setData(result.body); // Store the raw body of the response
        setLoading(false); // Stop loading once data is fetched
        */
      } catch (error) {
        console.error('Fetch error:', error); // Log error in the console
        setError('Failed to load data'); // Set the error message
        setLoading(false); // Stop loading even if there was an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading information...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetch fails
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>About Us</h1>
      <p>Welcome to our application!</p>
      <p>This app is designed to reward drivers for demonstrating good driving habits. By partnering with sponsors, drivers can earn points based on their performance and
        safe driving practices. These points can then be used to purchase a variety of items, creating an engaging and rewarding experience. Our mission is to promote safe 
        driving while offering valuable incentives to those who prioritize safety on the road.</p>

      {userCount !== null ? <h2>We Currently Support: {userCount} Users</h2> : <h2>0 Users.</h2>}
      <h2>Version: 1.0</h2>
      <h2>Team Members: Michael Schwab, Elle Hanckel, Jasson Russo, Steven Plant, Liz Chandler</h2>
    </div>
  );
};



export default AboutPage;
