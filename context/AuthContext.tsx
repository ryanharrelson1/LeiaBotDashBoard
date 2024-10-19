"use client";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: any;
  loading: boolean;
  setData: (userData: any) => void;
  Logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Initially loading is true

  const setData = (userData: any) => {
    setUser(userData);
    console.log("Setting user data:", userData);
    setLoading(false);
    localStorage.setItem("user", JSON.stringify(userData)); // Persist user
  };

  useEffect(() => {
    // Check if user is already persisted
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false); // Stop loading after check
  }, []);

  const Logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setLoading(false);
  };

  console.log("AuthContext - Current User:", user);

  return (
    <AuthContext.Provider value={{ user, loading, setData, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
