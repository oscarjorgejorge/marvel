import { useContext } from "react";
import { FavouriteContext } from "../providers/favourites/favouritesProvider";

export function useFavourites() {
  return useContext(FavouriteContext);
}
