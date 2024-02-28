import { createContext, useContext, useState } from "react";

type AuthContextValue = {
  isLoggedIn: boolean;
  logIn: () => void;
};

const initialValue: AuthContextValue = {
  isLoggedIn: false,
  logIn: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

// function AuthProvider(props: { children: React.ReactNode }) {
//   return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
// }
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const value: AuthContextValue = { isLoggedIn, logIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
