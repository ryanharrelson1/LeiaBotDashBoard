import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface AuthContextType {
  Logout: () => void; // Define Logout method
  loading: boolean; // Define loading property
  // Add any other properties or methods you may have
}
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
