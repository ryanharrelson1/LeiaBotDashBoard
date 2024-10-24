import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const useLogout = () => {
  const { Logout } = useAuth();
  const router = useRouter();
  const [isloading, setLoading] = useState(false);

  const LogoutUser = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://leiabot.onrender.com/admin/logout");
      Logout();
      router.push("/sign-in");
    } catch (error) {
      console.error("there was an error in logging out the user", error);
    } finally {
      setLoading(false);
    }
  };
  return { LogoutUser, isloading };
};

export default useLogout;
