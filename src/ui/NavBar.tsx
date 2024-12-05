import { Link, useNavigate } from 'react-router-dom';
import { useAuthenticator } from '@aws-amplify/ui-react';
import { useEffect, useState } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

type UserRole = "admin" | "driver" | "sponsor" | "guest";

function NavBar() {
  const { signOut } = useAuthenticator();
  const [role, setRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserRole() {
      try {
        // Fetch the role attribute using `fetchUserAttributes`
        const attributes = await fetchUserAttributes();
        const userRole = attributes['custom:role'] || "guest";
        
        // Validate role and set it
        if (["admin", "driver", "sponsor"].includes(userRole)) {
          setRole(userRole as UserRole);
        } else {
          setRole("guest");
        }
      } catch (error) {
        console.error("Error fetching user attributes:", error);
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
    height: '2.5rem',
    marginRight: '1rem'
  };

  const signOutButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#ff0000',
    marginRight: 0
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

  const handleApplicationClick = () => {
    if (role === "driver") {
      navigate("/DriverApplications");
    } else if (role === "sponsor") {
      navigate("/SponsorApplications");
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
        {role && (role === "driver" || role === "sponsor") && (
          <li style={{ marginRight: '1rem' }}>
            <button 
              onClick={handleApplicationClick} 
              style={buttonStyle}
            >
              Application
            </button>
          </li>
        )}
        <li style={{ marginRight: '1rem' }}>
          <button onClick={handleDashboardClick} style={buttonStyle}>Dashboard</button>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/catalog" style={buttonStyle}>Catalog</Link>
        </li>
        <li style={{ marginRight: '1rem' }}>
          <Link to="/faq" style={buttonStyle}>FAQ</Link>
        </li>
        {role === "admin" && (
          <li style={{ marginRight: '1rem' }}>
            <Link to="/user-management" style={buttonStyle}>User Management</Link>
          </li>
        )}
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
