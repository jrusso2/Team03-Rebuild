import React, { useEffect, useState } from 'react';
import { fetchUserAttributes, fetchAuthSession, updateUserAttributes } from 'aws-amplify/auth';

const Profile = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        userId: '',
        email: '',
        role: '',
    });

    const [formData, setFormData] = useState({
        email: '',
        role: '',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch the username from session
                const session = await fetchAuthSession();
                const username = typeof session.tokens?.accessToken?.payload['username'] === 'string'
                    ? session.tokens.accessToken.payload['username']
                    : 'Unknown Username';

                // Fetch other attributes using fetchUserAttributes
                const attributes = await fetchUserAttributes();
                console.log("User attributes:", attributes);

                setUserInfo({
                    username,
                    userId: attributes['sub'] || 'Unknown User ID',
                    email: attributes['email'] || '',
                    role: attributes['custom:role'] || '',
                });

                // Prepopulate form data
                setFormData({
                    email: attributes['email'] || '',
                    role: attributes['custom:role'] || '',
                });
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const attributesToUpdate: Record<string, string> = {
                email: formData.email,
                'custom:role': formData.role,
            };
    
            console.log("Attempting to update attributes directly:", attributesToUpdate);
    
            // Attempt to set the role directly
            await updateUserAttributes({
                userAttributes: attributesToUpdate,
            });
    
            setMessage('Profile updated successfully.');
            setUserInfo((prev) => ({
                ...prev,
                email: formData.email,
                role: formData.role,
            }));
    
            console.log("Attributes updated successfully.");
        } catch (error) {
            console.error("Error updating user attributes:", error);
            setMessage('Failed to update profile. Please try again.');
        }
    };
    
    

    return (
        <div>
            <h1>User Profile</h1>
            <p>Username: {userInfo.username}</p>
            <p>Email: {userInfo.email}</p>
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
                    Role:
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                    >
                        <option value="driver">Driver</option>
                        <option value="sponsor">Sponsor</option>
                        <option value="admin">Admin</option>
                    </select>
                </label>
                <br />
                <button type="submit">Update Profile</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Profile;
