import { useQuery } from "@tanstack/react-query";
// import { GetQueryUsersConditions, } from "../../api/users";
// import {
//   transformUsersQueryConditions,
//   transformUsersToTable,
// } from '../../../components/Users/userUtils';
// import { useMemo } from "react";
import { getCharacters } from "../../api/characters";

export const GetCharactersQueryKey = ["get-characters"];

export const useGetCharacters = () => {
  // const queryConditions = useMemo(
  //   () => transformUsersQueryConditions(conditions),
  //   [conditions]
  // );

  // const { limit, skip } = queryConditions;

  // const queryKey = useMemo(
  //   () => [...GetUsersQueryKey, limit, skip],
  //   [queryConditions]
  // );

  const state = useQuery({
    queryKey: GetCharactersQueryKey,
    queryFn: () => getCharacters().then((res) => res.data.data),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...state, queryKey: GetCharactersQueryKey };
};
