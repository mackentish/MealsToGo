import React, { createContext, useState } from "react";
import { Restaurant } from "../../types";

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

  const add = (restaurant: Restaurant) => {
    setFavorites([...favorites, restaurant]);
  };

  const remove = (restaurant: Restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

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
