import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import TokenExpireModelHandelr from "@/components/TokenExpireModelHandelr";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex flex-1 flex-col h-screen overflow-hidden  ">
      <Navbar />

      <section className="flex flex-col px-14 pt-12 overflow-y-auto custom-scrollbar ">
        <TokenExpireModelHandelr />
        {children}
      </section>
    </main>
  );
};

export default RootLayout;
