import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuthenticator } from '@aws-amplify/ui-react';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  user_type: string;
  phoneNumber: string;
};

type Sponsor = {
  sponsor_id: number | undefined;
  fname: string;
  lname: string;
  email: string;
  balance: number;
};

const ManageUser: React.FC = () => {
  
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuthenticator();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [sponsors, setSponsors] = useState<Sponsor[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    firstName: '',
    lastName: '',
    user_type: '',
    phoneNumber: '',
  });
  const [allSponsors, setAllSponsors] = useState<Sponsor[]>([]);
  const [selectedSponsor, setSelectedSponsor] = useState<number | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/getUser',
          { params: { id } }
        );
        
        const userData = JSON.parse(response.data.body)[0];
        setUserData(userData);
        console.log(userData);

        if (userData.phoneNumber) {
          setEditForm({ ...editForm, phoneNumber: userData.phoneNumber });
        }

      } catch (err: any) {
        console.error("API Error:", err);
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [id, user]);

  const loadSponsors = async (driverEmail: string) => {
    try {
      const response = await axios.get(
        'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/getSponsorsForDriver',
        { params: { driverEmail: driverEmail } }
      );
      let sponsorsData = JSON.parse(response.data.body);
      
  
      // Normalize the sponsor data just like in fetchAllSponsors
      sponsorsData = sponsorsData.map((sponsor: any) => ({
        ...sponsor,
        fname: sponsor.fname || sponsor.firstName || '',
        lname: sponsor.lname || sponsor.lastName || '',
      }));
      console.log(sponsorsData);
      setSponsors(sponsorsData);
    } catch (err: any) {
      console.error("API Error:", err);
    }
  };
  

  useEffect(() => {
    if (userData?.user_type === 'driver') {
      loadSponsors(userData.email);
    }
  }, [userData]);

  useEffect(() => {
    const fetchAllSponsors = async () => {
      try {
        const response = await axios.get(
          'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/sponsors'
        );
        let sponsorsData = JSON.parse(response.data.body);

        if (Array.isArray(sponsorsData)) {
          // Normalize sponsor data to have fname/lname
          sponsorsData = sponsorsData.map((sponsor: any) => ({
            ...sponsor,
            fname: sponsor.fname || sponsor.firstName || '',
            lname: sponsor.lname || sponsor.lastName || '',
          }));

          const validSponsors = sponsorsData.filter(
            (sponsor: Sponsor) => sponsor.fname && sponsor.lname
          );
          setAllSponsors(validSponsors);
          console.log(validSponsors);
        } else {
          console.error("Expected an array but got:", sponsorsData);
          setAllSponsors([]);
        }
      } catch (err: any) {
        console.error("API Error:", err);
        setAllSponsors([]);
      }
    };

    fetchAllSponsors();
  }, []);

  const handleEditClick = () => {
    setEditForm({
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      user_type: userData?.user_type || '',
      phoneNumber: userData?.phoneNumber || '',
    });
    setIsEditing(true);
  };

  const handleUpdateUser = async () => {
    try {
      const updates: any = { type: 'updateUser', id: userData?.id };

      if (editForm.firstName !== userData?.firstName) {
        updates.firstName = editForm.firstName;
      }
      if (editForm.lastName !== userData?.lastName) {
        updates.lastName = editForm.lastName;
      }
      if (editForm.user_type !== userData?.user_type) {
        updates.user_type = editForm.user_type;
      }

      const response = await axios.post(
        'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/updateUser',
        updates,
        {
          headers: { 'Content-Type': 'application/json' }
        }
      );

      if (response.status === 200) {
        setUserData({ ...userData!, ...editForm });
        setIsEditing(false);
      }
    } catch (err: any) {
      console.error("Update Error:", err);
      alert('Failed to update user: ' + (err.response?.data?.message || err.message));
    }
  };

  const handleLinkSponsor = async () => {
    if(!selectedSponsor || !allSponsors || !userData)
      {
          alert("Something went wrong.");
          return;
      } 
    let sponsor_index:number = selectedSponsor;
    if (selectedSponsor && userData) {
      try {
        // Include 'type': 'addSponsorDriverRelation' just like you did in the Lambda test
        const response = await axios.post(
          'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/addSponsorDriverRelation?driver_id=' + userData.id + "&sponsor_id=" + sponsor_index,
          { 
            //type: 'addSponsorDriverRelation',
            //driver_id: userData.id, 
            //sponsor_id: sponsor_index
          },
          {
            headers: { 'Content-Type': 'application/json' }
          }
        );

        console.log(response);
  
        if (response.status === 200) {
          alert('Sponsor linked successfully!');
          // If you want to skip reloading the sponsors to avoid the empty array issue, 
          // just comment out or remove the following lines:
          // if (userData.user_type === 'driver') {
          //   await loadSponsors(userData.email);
          // }
        }
      } catch (err: any) {
        console.error("Linking Error:", err);
        alert('Failed to link sponsor: ' + (err.response?.data?.message || err.message));
      }
    }
  };
  

  if (loading) return <div>Loading user details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userData) return <div>User not found</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">User Details</h1>
          <button
            onClick={() => navigate('/user-management')}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Back to Users
          </button>
        </div>

        <div className="space-y-4">
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-2">
              <div>
                <span className="text-gray-600">First Name: </span>
                <span className="font-bold">{userData.firstName}</span>
              </div>
              <div>
                <span className="text-gray-600">Last Name: </span>
                <span className="font-bold">{userData.lastName}</span>
              </div>
              <div>
                <span className="text-gray-600">Email: </span>
                <span className="font-bold">{userData.email}</span>
              </div>
              <div>
                <span className="text-gray-600">Phone Number: </span>
                <span className="font-bold">{userData.phoneNumber}</span>
              </div>
              <div>
                <span className="text-gray-600">User Type: </span>
                <span className="font-bold">{userData.user_type}</span>
              </div>
            </div>
          </div>

          {userData.user_type === 'driver' && (
            <div className="border-b pb-4 mt-6">
              <h2 className="text-xl font-semibold mb-4">Affiliated Sponsors</h2>
              {sponsors.length > 0 ? (
                <div className="space-y-2">
                  {sponsors.map((sponsor, index) => {
                    const sponsorKey = sponsor.sponsor_id ?? `aff-sponsor-fallback-${index}`;
                    return (
                      <div key={sponsorKey} className="p-3 bg-gray-50 rounded">
                        <span className="font-bold">{sponsor.fname} {sponsor.lname}</span>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-500">No sponsors affiliated with this driver.</p>
              )}
            </div>
          )}

          <div className="flex space-x-4">
            <button
              onClick={handleEditClick}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Edit User
            </button>
            <button
              onClick={() => {
                // Implement delete functionality
                alert('Delete functionality to be implemented');
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete User
            </button>
          </div>

          {userData.user_type === 'driver' && (
            <div>
              <label className="block text-gray-700 mb-2">Link Sponsor</label>
              <select
                value={selectedSponsor !== null ? selectedSponsor : ''}
                
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  setSelectedSponsor(isNaN(val) ? null : val);
                  console.log(e.target.value);
                }}
                className="w-full p-2 border rounded"
              >
                <option value="" disabled>Select a sponsor</option>
                {allSponsors.map((sponsor, index) => {
                  const sponsorKey = sponsor.sponsor_id ?? `all-sponsor-fallback-${index}`;
                  const optionValue = sponsor.sponsor_id !== undefined
                    ? sponsor.sponsor_id.toString()
                    : index.toString();

                  return (
                    <option key={sponsorKey} value={optionValue}>
                      {sponsor.fname} {sponsor.lname}
                    </option>
                  );
                })}
              </select>
              <button
                onClick={handleLinkSponsor}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Link Sponsor
              </button>
            </div>
          )}
        </div>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  value={editForm.firstName}
                  onChange={(e) => setEditForm({ ...editForm, firstName: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  value={editForm.lastName}
                  onChange={(e) => setEditForm({ ...editForm, lastName: e.target.value })}
                  className="w-full p-2 border rounded"
                />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">User Type</label>
                <select
                  value={editForm.user_type}
                  onChange={(e) => setEditForm({ ...editForm, user_type: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="driver">Driver</option>
                  <option value="sponsor">Sponsor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleUpdateUser}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUser;
