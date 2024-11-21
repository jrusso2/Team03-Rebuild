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
};

const ManageUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuthenticator();
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/users/${id}`,
          { params: { adminEmail: user?.signInDetails?.loginId } }
        );

        const userData = JSON.parse(response.data.body);
        setUserData(userData);
      } catch (err: any) {
        console.error("API Error:", err);
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, user]);

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
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-600">First Name</label>
                <p className="font-medium">{userData.firstName}</p>
              </div>
              <div>
                <label className="block text-gray-600">Last Name</label>
                <p className="font-medium">{userData.lastName}</p>
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <p className="font-medium">{userData.email}</p>
              </div>
              <div>
                <label className="block text-gray-600">User Type</label>
                <p className="font-medium">{userData.user_type}</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button
              onClick={() => {
                // Implement edit functionality
                alert('Edit functionality to be implemented');
              }}
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
        </div>
      </div>
    </div>
  );
};

export default ManageUser;