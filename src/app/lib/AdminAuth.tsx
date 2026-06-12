import { createContext, useContext, useState, ReactNode } from "react";
import { loginAdmin } from "./enquiryApi";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!sessionStorage.getItem("embehome_admin_token");
  });

  const login = async (username: string, password: string) => {
    const token = await loginAdmin(username, password);
    sessionStorage.setItem("embehome_admin_token", token);
    sessionStorage.setItem("embehome_admin", "true");
    setIsLoggedIn(true);
    return true;
  };

  const logout = () => {
    sessionStorage.removeItem("embehome_admin_token");
    sessionStorage.removeItem("embehome_admin");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
