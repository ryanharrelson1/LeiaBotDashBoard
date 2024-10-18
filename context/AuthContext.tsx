"use client";
import {
  Children,
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

interface AuthContextType {
  user: any;
  loading: boolean;
  setData: (userData: any) => void;
  Logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const setData = (userData: any) => {
    setUser(userData);
    console.log(userData);
    setLoading(false);
  };

  console.log(user, "user");

  const Logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, setData, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
