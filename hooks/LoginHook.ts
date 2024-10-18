import axios from "axios";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const useLogin = () => {
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

      router.push("/");

      if (Data.error) {
        throw new Error(Data.error);
      }
    } catch (error) {
      console.error("there was a error in loging in the user", error);
    } finally {
      setLoading(false);
    }
  };
  return { LoginUser, load };
};

export default useLogin;
