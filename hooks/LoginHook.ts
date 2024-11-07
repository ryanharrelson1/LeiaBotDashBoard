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

  const [isTempPassword, setIsTempPassword] = useState(false);

  const LoginUser = async (values: Record<string, unknown>) => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://192.168.1.149:5000/admin/login",
        values,
        { withCredentials: true }
      );

      const Data = res.data;

      if (Data.userId) {
        setIsTempPassword(true);
        localStorage.setItem("userId", Data.userId); // Store userId in local storage
        console.log("User ID set in local storage:", Data.userId);

        return;
      }

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

  const changePassword = async (newPassword: string) => {
    const id = localStorage.getItem("userId"); // Retrieve userId from local storage
    console.log("Attempting to change password...");
    console.log("User ID before change:", id); // Check userId value
    if (!id) {
      console.error("User ID is null! Cannot change password.");
      return;
    }

    try {
      console.log("New Password:", newPassword); // Log new password for debugging
      setLoading(true);

      const res = await axios.post(
        "https://leiabot.onrender.com/admin/change-password",
        { id, newPassword }, // Pass userId and newPassword directly
        { withCredentials: true }
      );

      const Data = res.data;

      if (Data.error) {
        throw new Error(Data.error);
      }

      if (id) {
        localStorage.removeItem("userId");
      }

      setIsTempPassword(false);
      setData(Data);
      resetSession();
      router.push("/");
    } catch (error) {
      console.error("There was an error changing your password:", error);
    } finally {
      setLoading(false);
    }
  };

  return { LoginUser, load, isTempPassword, changePassword };
};

export default useLogin;
