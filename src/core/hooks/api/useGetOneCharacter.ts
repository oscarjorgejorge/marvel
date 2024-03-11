import { useQuery } from "@tanstack/react-query";
import { getOneCharacter } from "../../api/characters";

export const GetOneCharacterQueryKey = ["get-one-character"];

export const useGetOneCharacter = (id: number) => {
  const queryKey = [`get-one-character-${id}`];

  const state = useQuery({
    queryKey,
    queryFn: () => getOneCharacter(id).then((res) => res),
    refetchOnMount: false,
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: false,
  });

  return { ...state, queryKey };
};
