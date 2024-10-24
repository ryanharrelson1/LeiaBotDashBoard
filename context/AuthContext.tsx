"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// Define a type for the user object
interface User {
  id: string;
  username: string;
  email: string;
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null; // Use the User type or null
  loading: boolean;
  setData: (userData: User) => void; // Specify the type for setData
  Logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode; // Explicitly type children as ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null); // Initialize user as null
  const [loading, setLoading] = useState(true); // Initially loading is true

  const setData = (userData: User) => {
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
    setLoading(true); // Optionally set loading to true during logout
  };

  console.log("AuthContext - Current User:", user);

  return (
    <AuthContext.Provider value={{ user, loading, setData, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
