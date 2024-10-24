"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import useLogout from "@/hooks/LogoutHook";

const navbar = () => {
  const { user, loading } = useAuth();
  const { LogoutUser } = useLogout();
  const router = useRouter();
  const HandelCLick = () => {
    router.push("/");
  };

  const Logout = () => {
    LogoutUser();
  };

  return (
    <div className=" sticky bg-green-500 p-4 shadow-custom border-y-light-petal-pink border-b-4">
      <nav className="flex justify-between items-center">
        <div
          onClick={HandelCLick}
          className="flex justify-center items-center cursor-pointer"
        >
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
            welcome {user?.username}
          </h2>
          <div className="pl-4">
            <Button className="bg-light-petal-pink rounded-xl" onClick={Logout}>
              LogOut
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default navbar;
