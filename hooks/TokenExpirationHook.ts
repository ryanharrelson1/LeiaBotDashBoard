import { useEffect, useState } from "react";
import axios from "axios";

const useSessionExpiration = (onExpire: () => void) => {
  const [isExpired, setIsExpired] = useState(false);
  const [isActive, setIsActive] = useState(true); // Track if the session is active

  const checkSessionExpiration = async () => {
    try {
      // Only perform the check if the session is active
      if (!isActive) return;

      await axios.get("https://leiabot.onrender.com/admin/test-auth", {
        withCredentials: true,
      });
      setIsExpired(false); // Reset the expired state if the request is successful
    } catch (error) {
      // Handle different error scenarios
      const axiosError = error as {
        response?: { status: number };
        message?: string;
      };
      if (axiosError.response && axiosError.response.status === 401) {
        console.log("Session expired");
        setIsExpired(true);
        setIsActive(false);
        onExpire();
      } else {
        console.error("Error checking session:", axiosError.message || error);
      }
    }
  };

  useEffect(() => {
    // Initial check when the component mounts
    checkSessionExpiration();

    const interval = setInterval(() => {
      checkSessionExpiration();
    }, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Run effect only on mount

  const resetSession = () => {
    setIsExpired(false);
    setIsActive(true);
    checkSessionExpiration(); // Optional: Immediately check after resetting
  };

  return { isExpired, resetSession };
};

export default useSessionExpiration;
