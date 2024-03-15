import { FC } from "react";
import { ICharacter } from "../../../core/interfaces/characters.model";
import { CharacterCard } from "../CharacterCard";
import { Alert } from "../Alert";

interface CharactersCardListProps {
  characters: ICharacter[];
  alertText: string;
}

export const CharactersCardList: FC<CharactersCardListProps> = (
  props: CharactersCardListProps,
) => {
  const { characters, alertText } = props;
  return (
    <>
      {characters.length > 0 && (
        <ul className="grid grid-cols-2 gap-6 sm:grid-cols-5">
          {characters.map((character, i) => (
            <CharacterCard
              key={character.id}
              character={character}
              data-testid={`character-card-${i}`}
            />
          ))}
        </ul>
      )}
      {characters.length === 0 && <Alert text={alertText} />}
    </>
  );
};
