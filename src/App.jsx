import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNavBar from "./components/SideNavBar";
import AppRoutes from "./routes/routes";
import SplashScreen from "./components/SplashScreen"; // Import the SplashScreen

const App = () => {
  const location = useLocation();
  const [isSplashVisible, setIsSplashVisible] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    // Function to handle hiding the splash screen with an optional delay
    const hideSplashScreen = () => {
      // Add a delay (e.g., 2 seconds after assets are loaded)
      setTimeout(() => {
        setIsSplashVisible(false); // Hide splash screen after the delay
      }, 7400); // 2-second delay (adjust as needed)
    };

    // Check if the assets are already loaded (useful when navigating back to the app)
    if (document.readyState === 'complete') {
      hideSplashScreen();
    } else {
      // Listen for the 'load' event to ensure all assets (images, fonts, icons) are loaded
      window.addEventListener("load", hideSplashScreen);
    }

    // Fallback: hide splash screen after a certain amount of time (e.g., 10 seconds)
    const fallbackTimeout = setTimeout(() => {
      setIsSplashVisible(false); // Hide splash screen even if not all assets are loaded
    }, 10000); // Fallback time (10 seconds, adjust as necessary)

    return () => {
      window.removeEventListener("load", hideSplashScreen);
      clearTimeout(fallbackTimeout); // Cleanup fallback timeout
    };
  }, []);

  return (
    <>
      {isSplashVisible ? (
        <SplashScreen /> // Show splash screen while isSplashVisible is true
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
