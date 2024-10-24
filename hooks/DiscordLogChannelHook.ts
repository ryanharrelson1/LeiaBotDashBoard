import axios from "axios";
import { useState, useEffect } from "react";

const UseLogChannel = () => {
  const [load, setLoad] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchLogMessages = async () => {
      try {
        setLoad(true);

        // Fetch log messages without needing a channelId
        const res = await axios.get(
          "https://leiabot.onrender.com/auth/discord/get-log-messages"
        );

        // Assuming the response structure contains logs as an array
        setMessages(res.data.logs || []); // Update according to the structure returned from the server
      } catch (err) {
        console.error(err);
      } finally {
        setLoad(false);
      }
    };

    fetchLogMessages();
  }, []); // Dependency array remains empty to run once on mount

  return { messages, load };
};

export default UseLogChannel;
