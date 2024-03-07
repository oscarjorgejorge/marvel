import { FC } from "react";
import { ICharacter } from "../../../core/interfaces/characters.model";
import AnimatedHeartIcon from "../Heart/Heart";

interface CardProps {
  character: ICharacter;
}

export const Card: FC<CardProps> = (props: CardProps) => {
  const { character } = props;

  function isOdd(number: number) {
    return number % 2 !== 0;
  }

  return (
    <div className="bg-white shadow-md p-4 rounded-lg space-y-6 hover:shadow-xl">
      <img
        alt={`${character.name} image`}
        src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
      />
      <p className="font-bold text-2xl mb-[6px]">
        {character.id} - {character.name}
      </p>
      <p className="line-clamp-4 text-gray-500">{character.description}</p>
      <AnimatedHeartIcon checked={isOdd(character.id)} />
    </div>
  );
};
