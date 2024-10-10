import React, { ReactNode } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar />

      <div className="flex">
        <section className="flex flex-1 flex-col h-screen px-14  pt-12">
          {children}
        </section>
      </div>
    </main>
  );
};

export default RootLayout;
