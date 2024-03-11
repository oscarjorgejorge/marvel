import { FC } from "react";
import { ICharacter } from "../../../core/interfaces/characters.model";
import { CharacterCard } from "../CharacterCard";

interface CharactersCardListProps {
  characters: ICharacter[];
}

export const CharactersCardList: FC<CharactersCardListProps> = (
  props: CharactersCardListProps,
) => {
  const { characters } = props;
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-5">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </ul>
  );
};
