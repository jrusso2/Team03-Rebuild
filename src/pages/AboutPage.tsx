import React, { useEffect, useState } from 'react';

const AboutPage: React.FC = () => {
  const [data, setData] = useState<string | null>(null); // data can be a string or null
  const [error, setError] = useState<string | null>(null); // error can be a string or null
  const [loading, setLoading] = useState(true); // To track loading state

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
        console.log('Current Users:', result); // Log the raw data to verify it
        setData(result.body); // Store the raw body of the response
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error('Fetch error:', error); // Log error in the console
        setError('Failed to load data'); // Set the error message
        setLoading(false); // Stop loading even if there was an error
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading users...</p>; // Show loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>; // Display error message if fetch fails
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>About Us</h1>
      <p>Welcome to our application. This is a simple about page.</p>
      <p>Here you can find information about our mission, vision, and team.</p>

      <h2>Current Users</h2>
      <pre>{data}</pre> {/* Display the raw JSON string here */}
    </div>
  );
};

export default AboutPage;


/*import React, { useEffect, useState } from 'react';

// AboutPage component to fetch and display users
const AboutPage: React.FC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.data); // Assuming result.data contains the user data
      } catch (error) {
        console.error('Fetch error:', error);
        setData(null); // Handle error case
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>About Us</h1>
      <p>Welcome to our application. This is a simple about page.</p>
      <p>Here you can find information about our mission, vision, and team.</p>

      <h2>Users List</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading users...</p>
      )}
    </div>
  );
};

export default AboutPage;
 */