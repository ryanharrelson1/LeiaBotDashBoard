import axios from "axios";
import { error } from "console";
import { useState } from "react";

const useLogin = () => {
  const [load, setLoading] = useState(false);

  const LoginUser = async (values: any) => {
    try {
      setLoading(true);

      const res = await axios.post("http://localhost:5000/admin/login", values);

      const Data = res.data;
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
