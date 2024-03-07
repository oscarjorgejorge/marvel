import { FC } from "react";
import { useGetCharacters } from "../../core/hooks/api/useGetCharacters";
import { CardSkeleton } from "../shared/CardSkeleton";
import { Card } from "../shared/Card";
import { defaultRequestConditionsInit } from "../../core/interfaces/api_request_condition";

interface CharactersProps {}

export const Characters: FC<CharactersProps> = () => {
  const { data, ...charactersState } = useGetCharacters();

  console.log(charactersState);
  console.log(data);

  return (
    <div>
      Characters
      {charactersState.isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {Array(defaultRequestConditionsInit.limit)
            .fill(0)
            .map((_, index) => (
              <CardSkeleton key={index} />
            ))}
        </div>
      )}
      {!charactersState.isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
          {data?.results.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
};
