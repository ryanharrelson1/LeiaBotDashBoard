import axios from "axios";
import { useState } from "react";
import { useToast } from "./use-toast";

const apikey = "rnd_tYhp1Cgey0AXFptnVmc7IjxVbTmd";
const serverid = "srv-cra144d6l47c73d1gpug";

const UseRender = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const RestartService = async () => {
    console.log(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.Service_ID);
    try {
      setLoading(true);
      const res = await axios.post(
        `https://44.233.151.27/restart`,
        {},
        {
          headers: {
            Authorization: `Bearer ${apikey}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 200) {
        toast({
          className: "bg-green-500",
          title: "Success.",
          description: "Your changes where updated.",
        });
        console.log("Service restarted successfully.");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
      console.error("Error restarting service:", error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, RestartService };
};

export default UseRender;
