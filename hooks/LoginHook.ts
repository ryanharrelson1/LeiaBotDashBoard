import axios from "axios";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import useSessionExpiration from "./TokenExpirationHook";

const useLogin = () => {
  // Define the handleExpire function to handle session expiration
  const handleExpire = () => {};

  const { resetSession } = useSessionExpiration(handleExpire);
  const { setData }: any = useAuth();
  const [load, setLoading] = useState(false);
  const router = useRouter();

  const LoginUser = async (values: any) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/admin/login",
        values,
        { withCredentials: true }
      );

      const Data = res.data;
      setData(Data);

      // Reset session upon successful login
      resetSession();

      router.push("/");

      if (Data.error) {
        throw new Error(Data.error);
      }
    } catch (error) {
      console.error("There was an error logging in the user:", error);
    } finally {
      setLoading(false);
    }
  };

  return { LoginUser, load };
};

export default useLogin;
