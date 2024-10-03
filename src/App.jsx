import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import AppRoutes from "./routes/routes";
import SplashScreen from "./components/SplashScreen"; // Import the SplashScreen

const App = () => {
  const location = useLocation();
  const [startView, setStartView] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartView(false); // Hide splash screen after 3 seconds
    }, 7800); // Change the duration as needed

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {startView ? (
        <SplashScreen /> // Show splash screen while startView is true
      ) : (
        <>
          <Navbar />
          <AppRoutes />
        </>
      )}
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
