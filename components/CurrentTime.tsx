import React, { useState, useEffect } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date()); // Specify Date type

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const formatTime = (date: Date): string => {
    // Specify Date type for parameter
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <h1 className="text-text-froggie-green text-5xl font-bold">
      {formatTime(currentTime)}
    </h1>
  );
};

export default CurrentTime;
