import { useEffect, useState } from "react";
import axios from "axios";

const useSessionExpiration = (onExpire) => {
  const [isExpired, setIsExpired] = useState(false);
  const [isActive, setIsActive] = useState(true); // Track if the session is active

  const checkSessionExpiration = async () => {
    if (!isActive) return;

    try {
      await axios.get("http://localhost:5000/admin/test-auth", {
        withCredentials: true,
      });
      setIsExpired(false); // Reset the expired state if the request is successful
    } catch (error) {
      if (error.response && error.response.status === 401) {
        console.log("Session expired");
        setIsExpired(true);
        setIsActive(false);
        onExpire();
      } else {
        console.error("Error checking session:", error);
      }
    }
  };

  useEffect(() => {
    checkSessionExpiration();

    const interval = setInterval(() => {
      checkSessionExpiration();
    }, 1000 * 60 * 60); // Check every hour

    return () => clearInterval(interval);
  }, [isActive]); // Depend on isActive to re-run effect

  const resetSession = () => {
    setIsExpired(false);
    setIsActive(true);
  };

  return { isExpired, resetSession };
};

export default useSessionExpiration;
