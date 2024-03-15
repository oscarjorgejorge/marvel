import React, { ReactNode, useState } from "react";

export interface FavouriteContextType {
  favourites: number[];
  addFavourite: (id: number) => void;
  removeFavourite: (id: number) => void;
}

export const favouriteContextInit: FavouriteContextType = {
  favourites: [],
  addFavourite: () => {},
  removeFavourite: () => {},
};

export const FavouriteContext =
  React.createContext<FavouriteContextType>(favouriteContextInit);

export function FavouriteProvider({
  children,
  value,
}: {
  children: ReactNode;
  value?: FavouriteContextType;
}) {
  const [favourites, setFavourites] = useState<number[]>([]);

  function addFavourite(id: number) {
    setFavourites([...favourites, id]);
  }

  function removeFavourite(id: number) {
    setFavourites(favourites.filter((fav) => fav !== id));
  }

  return (
    <FavouriteContext.Provider
      value={value ? value : { favourites, addFavourite, removeFavourite }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
