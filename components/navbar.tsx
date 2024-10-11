import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

const navbar = () => {
  return (
    <div className=" sticky bg-green-500 p-4">
      <nav className="flex justify-between items-center">
        <div className="flex justify-center items-center">
          <img src="froggylogonew1.png" height={48} width={48} alt="logo" />
          <h1 className="pl-4 text-text-lilly-pad-white font-bold text-2xl">
            LeiaBot
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h2 className="pl-2 text-text-lilly-pad-white font-semibold text-[18px]">
            welcome Leia
          </h2>
          <div className="pl-4">
            <Button className="bg-light-petal-pink rounded-xl">LogOut</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
