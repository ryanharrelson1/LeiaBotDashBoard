import React from "react";
import { Button } from "./ui/button";

const TokenExpireModel = ({ onConfirm }: any) => {
  return (
    <main className=" fixed w-full h-screen z-30">
      <section className=" h-screen flex justify-center items-center">
        <div className="bg-dark-dark-green flex text-text-lilly-pad-white flex-col p-2 rounded-xl shadow-lg  gap-8">
          <h2 className="font-semibold">
            Your Session has expired you will be logged out
          </h2>
          <div className="ml-auto">
            <Button onClick={onConfirm} className="bg-light-petal-pink">
              Okay
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TokenExpireModel;
