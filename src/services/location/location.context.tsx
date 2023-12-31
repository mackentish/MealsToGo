import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.service";

type locationType = {
  lat: string;
  lng: string;
  viewport: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
};

type ContextType = {
  isLoading: boolean;
  error: any;
  location: locationType | undefined;
  search: (searchKeyword: string) => void;
  keyword: string;
};
export const LocationContext = createContext<ContextType>({} as ContextType);

export const LocationContextProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState("San Francisco");
  const [location, setLocation] = useState<locationType | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<any>(undefined);

  const onSearch = (searchKeyword = "Antwerp") => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

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
