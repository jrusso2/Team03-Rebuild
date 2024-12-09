import React, { useState, useEffect } from 'react';
import ViewDriversTable from '../ui/Sponsor/ViewDriversTable';
import axios from 'axios';

const SponsorDashboard: React.FC = () => {
  const [conversionRate, setConversionRate] = useState<number>(1.0); // Default value
  const [newRate, setNewRate] = useState<string>(""); // New rate input
  const [showUpdateModal, setShowUpdateModal] = useState<boolean>(false); // Modal visibility

  // Fetch the current conversion rate when the component loads
  useEffect(() => {
    const fetchConversionRate = async () => {
      try {
        const response = await axios.get(
          "https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/getConversionRate", // Replace with your API endpoint
          {
            params: {
              sponsorEmail: "sponsor@example.com", // Replace with actual sponsor email
            },
          }
        );
        setConversionRate(response.data.conversionRate || 1.0); // Default to 1.0 if no value
      } catch (error) {
        console.error("Failed to fetch conversion rate:", error);
      }
    };

    fetchConversionRate();
  }, []);

  // Update conversion rate
  const handleUpdateRate = async () => {
    if (isNaN(parseFloat(newRate)) || parseFloat(newRate) <= 0) {
      alert("Please enter a valid number greater than 0.");
      return;
    }

    try {
      await axios.put("https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/updateConversionRate", {
        sponsorEmail: "sponsor@example.com", // Replace with actual sponsor email
        newRate: parseFloat(newRate),
      });

      alert("Point conversion rate updated successfully!");
      setConversionRate(parseFloat(newRate)); // Update the displayed rate
      setNewRate(""); // Clear the input field
      setShowUpdateModal(false); // Close the modal
    } catch (error) {
      alert("Failed to update conversion rate. Please try again.");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Sponsor Dashboard</h1>
      <p>Current Conversion Rate: {conversionRate} (points to USD)</p>
      <button
        onClick={() => setShowUpdateModal(true)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Update Conversion Rate
      </button>

      {showUpdateModal && (
        <div className="modal">
          <h3>Update Conversion Rate</h3>
          <p>Enter a new conversion rate:</p>
          <input
            type="number"
            value={newRate}
            onChange={(e) => setNewRate(e.target.value)}
            placeholder="New rate (e.g., 0.05)"
            className="border px-2 py-1"
          />
          <div>
            <button
              onClick={handleUpdateRate}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
            <button
              onClick={() => setShowUpdateModal(false)}
              className="ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <ViewDriversTable />
    </div>
  );
};

export default SponsorDashboard;

// import React from 'react';
// import ViewDriversTable from '../ui/Sponsor/ViewDriversTable';


// const SponsorDashboard: React.FC = () => {
//   return (
//     <div>
//       <h1>Sponsor Dashboard</h1>
//       <ViewDriversTable></ViewDriversTable>
//     </div>
//   );
// };

// export default SponsorDashboard;
// import React from 'react';
// import ViewDriversTable from '../ui/Sponsor/ViewDriversTable';


// const SponsorDashboard: React.FC = () => {
//   return (
//     <div>
//       <h1>Sponsor Dashboard</h1>
//       <ViewDriversTable></ViewDriversTable>
//     </div>
//   );
// };

// export default SponsorDashboard;