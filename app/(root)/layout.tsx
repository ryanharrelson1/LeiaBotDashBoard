import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";


const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative h-screen overflow-hidden ">
      <Navbar />

        <section className="flex flex-grow flex-1 flex-col h-full px-14 pt-12 overflow-y-auto custom-scrollbar ">
          <div className="min-h-full"> {children}</div>
         
        </section>
      
    </main>
  );
};

export default RootLayout;
