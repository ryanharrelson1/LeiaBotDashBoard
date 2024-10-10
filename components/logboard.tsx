import React from "react";
import Message from "./message";

const logboard = () => {
  return (
    <section className="bg-dark-dark-green w-[500px] px-5  h-full py-8 rounded-lg ">
      <div className="flex flex-col flex-1 gap-4 h-full">
        <h1 className="text-text-lilly-pad-white font-bold text-2xl">
          Log Channel
        </h1>
        <div className=" border-white border-[1px] rounded-lg overflow-y-scroll custom-scrollbar p-2  ">
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
          <Message />
        </div>
      </div>
    </section>
  );
};

export default logboard;
