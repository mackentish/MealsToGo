import React, { useState, createContext, ReactNode } from "react";
import { loginRequest } from "./authentication.service";

type ContextType = {
  user: any;
  isLoading: boolean;
  error: string | undefined;
  onLogin: (email: string, password: string) => void;
};

export const AuthenticationContext = createContext<ContextType>(
  {} as ContextType
);

export const AuthenticationContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<any>(undefined);

  const onLogin = (email: string, password: string) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
