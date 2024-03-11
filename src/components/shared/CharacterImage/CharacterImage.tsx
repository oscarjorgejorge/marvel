import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { ICharacter } from "../../../core/interfaces/characters.model";

interface CharacterImageProps {
  character: ICharacter;
  className?: string;
}

export const CharacterImage: FC<CharacterImageProps> = (
  props: CharacterImageProps,
) => {
  const { character, className } = props;

  const url = `${character.thumbnail.path}.${character.thumbnail.extension}`;

  return (
    <img
      loading="lazy"
      className={twMerge("h-[210px] w-full object-cover", className)}
      alt={`${character.name} image`}
      src={url}
    />
  );
};
