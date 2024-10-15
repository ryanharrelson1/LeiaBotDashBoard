import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Annoucment = () => {
  return (
    <div>
      <section className="flex flex-col gap-[50px]">
        <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
          Announcement Module
        </h1>

        <div className="p-4">
          <h2 className="text-xl text-text-lilly-pad-white font font-bold">
            Annoucement Channel
          </h2>
          <div className="p-4">
            <Select>
              <SelectTrigger className="w-[180px] bg-dark-dark-green text-text-lilly-pad-white border-light-petal-pink">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent className="">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="ml-10">
          <Button className="w-40 bg-light-petal-pink text-text-lilly-pad-white">
            Save
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Annoucment;
