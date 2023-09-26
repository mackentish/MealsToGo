import React, { createContext, useEffect, useState } from "react";
import { Restaurant } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ContextType = {
  favorites: Restaurant[];
  addToFavorites: (restaurant: Restaurant) => void;
  removeFromFavorites: (restaurant: Restaurant) => void;
};

export const FavoritesContext = createContext<ContextType>({} as ContextType);

export const FavoritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Restaurant[]>([]);

  const saveFavorites = async (value: Restaurant[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@favorites", jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem("@favorites");
      if (value !== null) {
        setFavorites(JSON.parse(value));
      }
    } catch (error) {
      console.log("error loading", error);
    }
  };

  const add = (restaurant: Restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: Restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
