import React from "react";

// Define the prop types for the Message component
interface MessageProps {
  content: string; // Message content should be a string
  author: string; // Author should be a string
  timestamp: number; // Timestamp should be a number (Unix timestamp or date string)
}

const Message: React.FC<MessageProps> = ({ content, author, timestamp }) => {
  return (
    <div className="text-text-froggie-green text-[15px] text-wrap flex flex-col gap-1">
      <strong>{author}:</strong> {content}{" "}
      <span className="text-gray-500 text-[12px]">
        {new Date(timestamp).toLocaleString()} {/* Format the timestamp */}
      </span>
    </div>
  );
};

export default Message;
