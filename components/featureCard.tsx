"use client";

import { useState } from "react";
import { Switch } from "./ui/switch";
import { useRouter } from "next/navigation";

const featureCard = ({ moduleName, ModuleDescription }: any) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const HandelClick = () => {
    router.push(`/modules/${moduleName}`);
  };
  return (
    <section
      onClick={HandelClick}
      className={`w-[190px] p-4 rounded-xl transition-all duration-500 ease-in-out cursor-pointer ${
        isHovered ? "hover-bg-fade shadow-custom" : "hover-bg-return shadow"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col gap-1">
        <div className="flex">
          <Switch />
          <h2 className="pl-2 text-text-lilly-pad-white font-semibold">
            {moduleName}
          </h2>
        </div>
        <div className="p-1 bg-text-lilly-pad-white rounded-full" />
        <section className=" text-text-lilly-pad-white font-semibold">
          {ModuleDescription}
        </section>
      </div>
    </section>
  );
};

export default featureCard;
