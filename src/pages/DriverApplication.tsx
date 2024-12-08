import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';

type Sponsor = {
  id: number;
  firstName: string;
  lastName: string;
};

const DriverApplication: React.FC = () => {
  const { user } = useAuthenticator();
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>("");

  useEffect(() => {
    const fetchEmail = async () =>{
      const attributes = await fetchUserAttributes();
      const user_email = attributes['email'];
      if(user_email)
      {
        setEmail(user_email);
      }
      console.log("***********user email!!" + user_email);
      
    }
    const fetchSponsors = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getSponsorsNotConnectedToDriver`,
          { params: { driverEmail: email } }
        );

        // Parse the body if it's a JSON string
        const sponsorsData = JSON.parse(response.data.body);
        console.log("Parsed Sponsors Data:", sponsorsData);

        // Set the parsed sponsors data
        setSponsors(sponsorsData);
      } catch (err: any) {
        console.error("API Error:", err);
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchEmail();
    fetchSponsors();
  }, [user]);

  const handleApplyToSponsor = async (sponsorId: number) => {
    try {
      {/**TODO: This should almost definitely be a POST, not a get, but I could only get a GET to work for now */}
      const response = await axios.get(
        `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/insertNewApplication`,
        {
          params: {
            driverEmail: email,
            sponsorID: sponsorId,
          },
        }
      );
      alert(`Application to Sponsor ID: ${sponsorId} submitted successfully!`);
      console.log(response);
    } catch (err: any) {
      alert(`Failed to apply to Sponsor ID: ${sponsorId}. Error: ${err.message}`);
    }
  };

  if (loading) {
    return <div>Loading sponsors...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error loading sponsors: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!sponsors.length) {
    return <div>No sponsors available to apply to!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Application Page</h1>
      <p className="mb-4">Select a sponsor to send your application:</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Sponsor Name</th>
              <th className="px-6 py-3">Sponsor ID</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {sponsors.map((sponsor) => (
              <tr key={sponsor.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{`${sponsor.firstName} ${sponsor.lastName}`}</td>
                <td className="px-6 py-4">{sponsor.id}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleApplyToSponsor(sponsor.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Apply to Sponsor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DriverApplication;
