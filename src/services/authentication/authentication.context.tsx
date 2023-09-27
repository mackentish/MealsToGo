import React, { useState, createContext, ReactNode } from "react";
import { loginRequest, registerRequest } from "./authentication.service";
import { getAuth } from "firebase/auth";

type ContextType = {
  user: { email: string };
  isLoading: boolean;
  error: string | undefined;
  onLogin: (email: string, password: string) => void;
  onRegister: (
    email: string,
    password: string,
    repeatedPassword: string
  ) => void;
  onLogout: () => void;
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
        setUser(u.user);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (
    email: string,
    password: string,
    repeatedPassword: string
  ) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }
    registerRequest(email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(undefined);
    getAuth().signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
