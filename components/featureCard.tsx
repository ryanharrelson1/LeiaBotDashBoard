import React from "react";
import { Switch } from "./ui/switch";

const featureCard = () => {
  return (
    <section className="bg-light-petal-pink w-[190px] p-4 rounded-xl">
      <div className="flex flex-col gap-1">
        <div className="flex">
          <Switch />
          <h2 className="pl-2 text-text-lilly-pad-white font-semibold">
            Leveling SYS
          </h2>
        </div>
        <div className="p-1 bg-text-lilly-pad-white rounded-full" />
        <section className=" text-text-lilly-pad-white font-semibold">
          enable or disable the leveling system or click on the card to edit how
          the levling system behavie in the server
        </section>
      </div>
    </section>
  );
};

export default featureCard;
