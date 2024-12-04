import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { fetchUserAttributes } from 'aws-amplify/auth';
import { Route, Routes, useNavigate } from 'react-router-dom';
import NavBar from "./ui/NavBar";
import Profile from "./pages/Profile";
import AboutPage from "./pages/AboutPage";
import Catalog from "./pages/Catalog";
import DriverApplication from './pages/DriverApplication';
import SponsorApplication from './pages/SponsorApplication';
import AdminDashboard from './pages/AdminDashboard';
import DriverDashboard from './pages/DriverDashboard';
import SponsorDashboard from './pages/SponsorDashboard';
import Checkout from './pages/Checkout';
import UserManagement from './pages/UserManagement';
import ManageUser from './pages/ManageUser';
import CreateUser from './pages/CreateUser';

type UserRole = "admin" | "driver" | "sponsor" | "guest";

function App() {
  const { user } = useAuthenticator();
  const [initialNavigationDone] = useState(false);
  const [role, setRole] = useState<UserRole | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserRole() {
      try {
        const attributes = await fetchUserAttributes();

        console.log("User attributes:", attributes);

        const userRole = attributes['custom:role'];

        if (!userRole) {
          // Navigate to profile if custom:role is missing
          setRole("guest");
          navigate("/profile");
          alert("Please update your profile information.");
        } else if (userRole === "admin") {
          setRole("admin");
        } else if (userRole === "driver") {
          setRole("driver");
        } else if (userRole === "sponsor") {
          setRole("sponsor");
        } else {
          setRole("guest");
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        setRole("guest");
        navigate("/profile");
        alert("Error fetching user information. Please update your profile.");
      }
    }

    fetchUserRole();
  }, [navigate]);

  useEffect(() => {
    if (initialNavigationDone || role === null) return;

    if (location.pathname === "/") {
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "driver") {
        navigate("/driver-dashboard");
      } else if (role === "sponsor") {
        navigate("/sponsor-dashboard");
      } else {
        navigate("/profile");
      }
    }
  }, [role, navigate, initialNavigationDone]);

  return (
    <>
      <NavBar />
      <main>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
          <div>
            {role === "driver" ? (
              <h1>Welcome, Driver {user?.signInDetails?.loginId ?? 'Guest'}</h1>
            ) : role === "admin" ? (
              <h1>Welcome, Admin {user?.signInDetails?.loginId ?? 'Guest'}</h1>
            ) : role === "sponsor" ? (
              <h1>Welcome, Sponsor {user?.signInDetails?.loginId ?? 'Guest'}</h1>
            ) : (
              <h1>Unauthorized</h1>
            )}
          </div>
        </div>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/catalog" element={<Catalog user={user}/>} />
          <Route path="/DriverApplications" element={<DriverApplication />} />
          <Route path="/SponsorApplications" element={<SponsorApplication />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/driver-dashboard" element={<DriverDashboard />} />
          <Route path="/sponsor-dashboard" element={<SponsorDashboard />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/manage-user/:id" element={<ManageUser />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
