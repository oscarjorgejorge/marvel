import React, { ReactNode, useState } from "react";

interface FavouriteContextType {
  favourites: number[];
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
}

export const FavouriteContext = React.createContext<FavouriteContextType>({
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
});

export function FavouriteProvider({ children }: { children: ReactNode }) {
  const [favourites, setFavourites] = useState<number[]>([]);

  function addFavourite(id: number) {
    setFavourites([...favourites, id]);
  }

  function removeFavourite(id: number) {
    setFavourites(favourites.filter((fav) => fav !== id));
  }

  return (
    <FavouriteContext.Provider
      value={{ favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
