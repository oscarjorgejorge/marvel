import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllFavourites } from "../../api/characters";

export const GetCharactersQueryKey = ["get-favourites-characters"];

export const useGetFavouritesCharacters = (ids: number[]) => {
  const queryKey = useMemo(() => [...GetCharactersQueryKey, ids], [ids]);

  const state = useQuery({
    queryKey,
    queryFn: () => getAllFavourites(ids),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...state, queryKey };
};
