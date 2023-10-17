// contexts/AuthContext.tsx
import { createContext, useContext } from "react";

interface AuthContextProps {
  isAuthorized: boolean;
  appID: string;
  children?: React.ReactNode;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<AuthContextProps> = ({
  children,
  isAuthorized,
  appID,
}) => {
  return (
    <AuthContext.Provider value={{ isAuthorized, appID }}>
      {children}
    </AuthContext.Provider>
  );
};
