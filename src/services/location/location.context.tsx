import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

type ContextType = {
  isLoading: boolean;
  error: any;
  location: { lat: string; lng: string } | undefined;
  search: (searchKeyword: string) => void;
  keyword: string;
};
export const LocationContext = createContext<ContextType>({} as ContextType);

export const LocationContextProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState<
    { lat: string; lng: string } | undefined
  >(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(undefined);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    onSearch();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
