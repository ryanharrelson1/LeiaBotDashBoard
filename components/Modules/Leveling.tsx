import React from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";

const Leveling = () => {
  return (
    <div>
      <section className="flex flex-col gap-[50px]">
        <h1 className="text-text-lilly-pad-white text-3xl font-bold underline">
          Leveling Module
        </h1>

        <div className="pl-3">
          <h2 className="text-xl text-text-lilly-pad-white font font-bold ">
            XP Per Message
          </h2>
          <div className="max-w-[200px] m-4">
            <Input
              placeholder="10"
              className="bg-dark-dark-green border-light-petal-pink border-[2px] rounded-lg text-text-lilly-pad-white placeholder:text-white"
            />
          </div>
        </div>
        <div className="pl-3">
          <h2 className="text-xl text-text-lilly-pad-white font font-bold">
            Level up Message
          </h2>
          <div className="max-w-[450px] m-4">
            <Textarea
              placeholder="you have leveled up"
              className="bg-dark-dark-green border-light-petal-pink border-[2px] rounded-lg placeholder:text-white h-40 text-text-lilly-pad-white"
            />
          </div>
        </div>

        <section className="flex flex-col gap-[50px]">
          <h1
            className="text-text-lilly-pad-white text-3xl font-bold underline
    "
          >
            Prestige System
          </h1>
          <div className="p-4">
            <h2 className="text-xl text-text-lilly-pad-white font font-bold">
              Master Prestige Role
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
          <div className="p-4">
            <h2 className="text-xl text-text-lilly-pad-white font font-bold">
              Mid Prestige Role
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
      </section>
    </div>
  );
};

export default Leveling;
