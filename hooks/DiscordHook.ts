import { useState } from "react";
import axios from "axios";

const useDiscordOAuth = () => {
  const [loading, setLoading] = useState(false);

  const redirectToDiscordOAuth = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:5000/auth/discord");
      if (response.status === 200) {
        window.location.href = response.data.DiscordAuthUrl;
      }
    } catch (error) {
      console.error("failed to initiate OAuth", error);
    } finally {
      setLoading(false);
    }
  };

  return { redirectToDiscordOAuth, loading };
};

export default useDiscordOAuth;
