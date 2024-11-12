import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

type UserRole = "admin" | "driver" | "sponsor" | "guest";

function NavBar() {
  const { signOut } = useAuthenticator();
  const [role, setRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserRole() {
      try {
        await getCurrentUser(); // Verify user is authenticated
        const session = await fetchAuthSession();
        
        // Type assertion to ensure groups is treated as string array
        const groups = (session.tokens?.accessToken?.payload['cognito:groups'] as string[]) || [];
        
        // Check group membership and set role accordingly
        if (groups.includes("Admin")) setRole("admin");
        else if (groups.includes("Driver")) setRole("driver");
        else if (groups.includes("Sponsor")) setRole("sponsor");
        else setRole("guest");

      } catch (error) {
        console.error('Error fetching user role:', error);
        setRole("guest");
      }
    }

    fetchUserRole();
  }, []);

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    textDecoration: 'none',
    height: '2.5rem', // Ensure consistent height
    marginRight: '1rem'
  };

  const signOutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff0000',
    marginRight: 0 // Remove margin for the last button
  };

  const handleDashboardClick = () => {
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "driver") {
      navigate("/driver-dashboard");
    } else if (role === "sponsor") {
      navigate("/sponsor-dashboard");
    } else {
      navigate("/unauthorized");
    }
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', backgroundColor: '#f8f9fa' }}>
      <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/about" style={buttonStyle}>About</Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/profile" style={buttonStyle}>Profile</Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <button onClick={handleDashboardClick} style={buttonStyle}>Dashboard</button>
        </li>
      </ul>
      <button 
        onClick={signOut}
        style={signOutButtonStyle}
      >
        Sign Out
      </button>
    </nav>
  );
}

export default NavBar;