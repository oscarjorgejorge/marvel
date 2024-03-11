import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllFavourites } from "../../api/characters";
import { ICharacter } from "../../interfaces/characters.model";

export const GetCharactersQueryKey = ["get-favourites-characters"];

export const useGetFavouritesCharacters = (ids: number[]) => {
  const queryKey = useMemo(() => [...GetCharactersQueryKey, ids], [ids]);

  const state = useQuery({
    queryKey,
    queryFn: () =>
      getAllFavourites(ids).then((res) => {
        let counter = 0;
        const allResults = res
          .map((r) => {
            counter++;
            return r ? r.results : [];
          })
          .reduce((acc, val) => acc.concat(val), []);
        return { total: counter, results: allResults } as {
          total: number;
          results: ICharacter[];
        };
      }),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...state, queryKey };
};
