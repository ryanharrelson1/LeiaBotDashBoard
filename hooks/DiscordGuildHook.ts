import { useState, useEffect } from "react";
import axios from "axios";

const useDiscordData = () => {
  const [channels, setChannels] = useState([]);
  const [roles, setRoles] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await axios.get("http://localhost:5000/auth/discord/guild");
        setChannels(res.data.textChannel);
        setError(null);

        setRoles(res.data.roles);
        setError(null);
      } catch (error) {
        setError("Error fetching Discord data");
        console.error("error in fetching discord data from endpoint", error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { channels, roles, error, loading };
};

export default useDiscordData;
