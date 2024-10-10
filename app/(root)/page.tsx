import { Button } from "@/components/ui/button";
import React from "react";
import Logboard from "@/components/logboard";

const home = () => {
  return (
    <main className="h-full flex flex-col gap-6">
      <section className="bg-gradient-to-r from-frog-green to-pond-blue p-5  rounded-3xl ">
        <h1 className="absolute text-text-froggie-green font-bold text-4xl underline  w-fit ">
          LeiaBot Dashboard
        </h1>

        <div className="flex justify-between items-center px-20 ">
          <div className="flex flex-col  text-text-lilly-pad-white gap-4 items-center p-10">
            <h1 className="text-text-froggie-green text-5xl font-bold">
              12:45Pm
            </h1>
            <h2 className="text-4xl font-semibold">Bot: Online</h2>
            <Button className="bg-light-petal-pink text-text-lilly-pad-white text-2xl">
              Reset
            </Button>
          </div>

          <section className="h-[550px]">
            <Logboard />
          </section>
        </div>
      </section>
      <section className="bg-gradient-to-r from-frog-green to-pond-blue p-10 rounded-3xl">
        section 2
      </section>
    </main>
  );
};

export default home;
