import React, { ReactNode } from "react";

const authlayout = ({ children }: { children: ReactNode }) => {
  return (
    <main
      className="flex justify-center items-center h-screen bg-froggietheme bg-center bg-no-repeat bg-cover w-full
    "
    >
      {children}
    </main>
  );
};

export default authlayout;
