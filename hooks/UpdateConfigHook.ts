import axios from "axios";
import { useState } from "react";

const useUpdateConfig = () => {
  const [success, setSuccess] = useState(false);
  const [load, setLoad] = useState(false);

  const updateConfig = async (partialConfig) => {
    setLoad(true);
    setSuccess(false);

    try {
      const res = await axios.put(
        "http://localhost:5000/auth/discord/update-config",
        { updates: partialConfig }, // Send the partial config as 'updates'
        { withCredentials: true }
      );

      setSuccess(true);
      return res.data; // You may return the response if needed
    } catch (err) {
      console.error("Error updating configuration:", err);
    } finally {
      setLoad(false);
    }
  };

  return { updateConfig, load, success };
};

export default useUpdateConfig;
