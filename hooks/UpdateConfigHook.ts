import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const useUpdateConfig = () => {
  const { toast } = useToast();
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

      toast({
        className: "bg-green-500",
        title: "Success.",
        description: "Your changes where updated.",
      });
      return res.data; // You may return the response if needed
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.error("Error updating configuration:", err);
    } finally {
      setLoad(false);
    }
  };

  return { updateConfig, load, success };
};

export default useUpdateConfig;
