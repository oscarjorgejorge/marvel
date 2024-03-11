import { FC } from "react";
import { Link } from "react-router-dom";
import { ICharacter } from "../../../core/interfaces/characters.model";
import { useFavourites } from "../../../core/hooks/useFavourites";
import { CharacterImage } from "../CharacterImage";
import { HeartButton } from "../HeartButton";

interface CharacterCardProps {
  character: ICharacter;
}

export const CharacterCard: FC<CharacterCardProps> = (
  props: CharacterCardProps,
) => {
  const { character } = props;

  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const checked = favourites.includes(character.id);

  return (
    <li>
      <Link to={`/${character.id}`}>
        <div className="group flex h-fit flex-col">
          <CharacterImage character={character} />
          <div
            className="
          before:duration-400
          clip-triangle
          relative
          h-[50px] 
          bg-secondary
          before:absolute 
          before:top-0 before:h-[4px]
          before:w-full 
          before:bg-primary
          before:transition-[height] 
          before:content-[''] group-hover:before:h-[100%]"
          >
            <div className="absolute flex h-full w-full items-center justify-between p-4">
              <p className="text-md line-clamp-1 uppercase text-white">
                {character.name}
              </p>
              <HeartButton
                checked={checked}
                onLike={() => addFavourite(character.id)}
                onDislike={() => removeFavourite(character.id)}
              />
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
