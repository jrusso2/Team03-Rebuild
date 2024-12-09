import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  user_type: string; // Changed from 'role' to 'user_type'
};

const UserManagement: React.FC = () => {
  const { user } = useAuthenticator();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/users`,
          { params: { adminEmail: user?.signInDetails?.loginId } }
        );

        // Parse the body if it's a JSON string
        const usersData = JSON.parse(response.data.body);
        console.log("Parsed Users Data:", usersData);

        // Set the parsed users data
        setUsers(usersData);
      } catch (err: any) {
        console.error("API Error:", err);
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [user]);

  const handleDeleteUser = async (userId: number) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }

    try {
      let response = await axios.delete(
        'https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/test/deleteUser',
        { 
          params: { 
            id:userId,
            adminEmail: user?.signInDetails?.loginId 
          } 
        }
      );
      //let data = await response.json();
      console.log(response);

      // Update the users list by filtering out the deleted user
      setUsers(users.filter(user => user.id !== userId));
    } catch (err: any) {
      console.error("Delete Error:", err);
      alert('Failed to delete user: ' + (err.message || 'An error occurred'));
    }
    console.log(userId);
    
  };

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return (
      <div>
        <p>Error loading users: {error}</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    );
  }

  if (!users.length) {
    return <div>No users available!</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">User Management</h1>
        <button
          onClick={() => navigate('/create-user')}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Create New User
        </button>
      </div>
      <p className="mb-4">Manage all users in the system:</p>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">User Type</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.user_type}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => navigate(`/manage-user/${user.id}`)}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                  >
                    View User
                  </button>
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
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

export default UserManagement;