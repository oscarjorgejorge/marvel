import { useQuery } from "@tanstack/react-query";
import {
  GetQueryCharactersConditions,
  getCharacters,
} from "../../api/characters";
import { useMemo } from "react";
import { transformCharactersQueryConditions } from "../../../components/Characters/charactersUtils";

export const GetCharactersQueryKey = ["get-characters"];

export const useGetCharacters = (conditions: GetQueryCharactersConditions) => {
  const queryConditions = useMemo(
    () => transformCharactersQueryConditions(conditions),
    [conditions],
  );

  const queryKey = useMemo(
    () => [...GetCharactersQueryKey, queryConditions],
    [queryConditions],
  );

  const state = useQuery({
    queryKey,
    queryFn: () => getCharacters(queryConditions).then((res) => res.data.data),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...state, queryKey };
};
