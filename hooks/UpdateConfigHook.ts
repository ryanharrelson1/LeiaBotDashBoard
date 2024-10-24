import axios from "axios";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Define an interface for the partial configuration updates
interface PartialConfig {
  [key: string]: any; // You can replace 'any' with more specific types if known
}

const useUpdateConfig = () => {
  const { toast } = useToast();
  const [success, setSuccess] = useState<boolean>(false); // Specify boolean type
  const [load, setLoad] = useState<boolean>(false); // Specify boolean type

  const updateConfig = async (partialConfig: PartialConfig): Promise<any> => {
    // Specify parameter type and return type
    setLoad(true);
    setSuccess(false);

    try {
      const res = await axios.put(
        "https://leiabot.onrender.com/auth/discord/update-config",
        { updates: partialConfig }, // Send the partial config as 'updates'
        { withCredentials: true }
      );

      setSuccess(true);

      toast({
        className: "bg-green-500",
        title: "Success.",
        description: "Your changes were updated.",
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
