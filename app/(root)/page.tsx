"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import Logboard from "@/components/logboard";
import FeatureCard from "@/components/featureCard";
import { ModuleData } from "@/utils/modulecardData";
import withProtectedRoute from "@/utils/ProtectedComponet";
import CurrentTime from "@/components/CurrentTime";
import UseRender from "@/hooks/RestartBotHook";

const Home = () => {
  const { loading, RestartService } = UseRender();
  const HandelRestart = () => {
    RestartService();
  };
  // Changed home to Home
  return (
    <main className="flex flex-col gap-4 min-h-full min-w-[1250px]">
      <section className="bg-gradient-to-r from-frog-green to-pond-blue p-5 rounded-3xl">
        <h1 className="text-text-froggie-green font-bold text-4xl underline w-fit">
          LeiaBot Dashboard
        </h1>

        <div className="flex justify-between items-center px-20">
          <div className="flex flex-col text-text-lilly-pad-white gap-4 items-center p-10">
            <h1 className="text-text-froggie-green text-5xl font-bold">
              <CurrentTime />
            </h1>
            <h2 className="text-4xl font-semibold">Bot: Online</h2>
            <Button
              onClick={HandelRestart}
              className="bg-light-petal-pink text-text-lilly-pad-white text-2xl"
            >
              Reset
            </Button>
          </div>
          <img src="froggylogonew1.png" width={200} height={200} alt="logo" />

          <section className="h-[550px]">
            <Logboard />
          </section>
        </div>
      </section>
      <section className="bg-gradient-to-r from-frog-green to-pond-blue p-5 rounded-3xl">
        <h1 className="text-text-froggie-green font-bold text-4xl underline w-fit">
          Feature Panel
        </h1>
        <main className="p-4 pt-12 grid grid-cols-4 grid-rows-2 gap-4 justify-center">
          {ModuleData.map((mod) => (
            <FeatureCard
              key={mod.name}
              moduleName={mod.name}
              ModuleDescription={mod.description}
            />
          ))}
        </main>
      </section>
    </main>
  );
};

export default withProtectedRoute(Home);
