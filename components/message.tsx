import React from "react";

const Message = ({ content, author, timestamp }) => {
  return (
    <div className="text-text-froggie-green text-[15px] text-wrap">
      <strong>{author}:</strong> {content}{" "}
      <span className="text-gray-500 text-[12px]">
        {new Date(timestamp).toLocaleString()}
      </span>
    </div>
  );
};

export default Message;
