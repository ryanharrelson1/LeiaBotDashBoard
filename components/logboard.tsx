import React from "react";
import Message from "./message";

const logboard = () => {
  return (
    <section className="bg-dark-dark-green w-[500px] px-5 pt-10 h-full py-2 rounded-lg ">
      <div className="flex flex-col gap-4 overflow-y-scroll h-full custom-scrollbar">
        <h1 className="text-text-lilly-pad-white font-bold text-2xl">
          Log Channel
        </h1>
        <div className=" border-white border-[1px] rounded-lg ">
          <Message />
          <Message />
          <Message />

          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
      </div>
    </section>
  );
};

export default logboard;
