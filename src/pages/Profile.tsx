import React, { useEffect, useState } from 'react';
import { fetchUserAttributes, fetchAuthSession } from 'aws-amplify/auth';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        userId: '',
        email: '',
        role: '',
        firstName: '',
        lastName: '',
        phoneNumber:'',
    });

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber:'',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch the username from session
                const session = await fetchAuthSession();
                const username =
                    typeof session.tokens?.accessToken?.payload['username'] === 'string'
                        ? session.tokens.accessToken.payload['username']
                        : 'Unknown Username';

                // Fetch other attributes using fetchUserAttributes
                const attributes = await fetchUserAttributes();
                console.log('User attributes:', attributes);

                // Fetch the user ID from the API using email
                const userIdResponse = await fetch(
                    `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/getUserIdWithEmail?email=${encodeURIComponent(
                        attributes['email'] || ''
                    )}`
                );

                if (!userIdResponse.ok) {
                    throw new Error('Failed to fetch user ID');
                }

                const userIdData = await userIdResponse.json();
                console.log('UserID:', userIdData);

                // Parse the response correctly if the body is a string
                const parsedUserIdData = JSON.parse(userIdData.body); // Parse the body if it's a JSON string
                const userId = parsedUserIdData[0]?.id || 'Unknown User ID';
                console.log('Parsed user id', userId); // Access the first element's id

                // Fetch the full user details (first name, last name, etc.) using the user ID
                const userResponse = await fetch(
                    `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/getUser?id=${userId}`
                );

                if (!userResponse.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await userResponse.json();
                console.log("User Data: ", userData);

                // Parse the body if needed
                const parsedUserData = JSON.parse(userData.body); // Parse the user data body if it's a JSON string
                const user = parsedUserData[0] || {}; // Access the first element's data

                // Set user info state with the correct values
                setUserInfo({
                    username: username, // Add username
                    userId: userId,     // Add userId
                    firstName: user?.firstName || 'N/A',
                    lastName: user?.lastName || 'N/A',
                    phoneNumber: user?.phoneNumber || 'N/A',
                    email: user?.email || 'N/A',
                    role: user?.user_type || 'Unknown Role',
                });

                // Prepopulate form data
                setFormData({
                    email: user?.email || '',
                    firstName: user?.firstName || '',
                    lastName: user?.lastName || '',
                    phoneNumber: user?.phoneNumber || '',
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Build the query string for the API call
            const queryString = new URLSearchParams({
                id: userInfo.userId,
                firstName: formData.firstName || '',
                lastName: formData.lastName || '',
                email: formData.email || '',
                phoneNumber: formData.phoneNumber 
            }).toString();

            const response = await fetch(
                `https://62rwb01jw8.execute-api.us-east-1.amazonaws.com/main/updateUser?${queryString}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log('API Response:', result);
                setMessage('Profile updated successfully.');
                setUserInfo((prev) => ({
                    ...prev,
                    email: formData.email,
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                }));
            } else {
                const error = await response.json();
                console.error('Error response:', error);
                setMessage('Failed to update profile. Please try again.');
            }
        } catch (error) {
            console.error('Error updating user attributes:', error);
            setMessage('Failed to update profile. Please try again.');
        }
    };

    return (
        <div>
            <h1>User Profile</h1>
            <p>User ID: {userInfo.userId}</p>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
            <p>Phone Number: {userInfo.phoneNumber}</p>
            <p>First Name: {userInfo.firstName || '(Not Set)'}</p>
            <p>Last Name: {userInfo.lastName || '(Not Set)'}</p>
            <p>Role: {userInfo.role}</p>
            <hr />

            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                    />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        required
                    />
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Profile;
