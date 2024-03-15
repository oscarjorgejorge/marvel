import { FC } from "react";
import { useParams } from "react-router-dom";
import { useFavourites } from "../../core/hooks/useFavourites";
import { useGetOneCharacter } from "../../core/hooks/api/useGetOneCharacter";
import { ICharacter } from "../../core/interfaces/characters.model";
import { IComic } from "../../core/interfaces/comic.model";
import { Image } from "../shared/Image";
import { HeartButton } from "../shared/HeartButton";
import { ComicList } from "../shared/ComicList";
import { CharacterSkeleton } from ".";

interface CharacterProps {}

export const Character: FC<CharacterProps> = () => {
  const { id } = useParams();

  const { favourites, addFavourite, removeFavourite } = useFavourites();
  const useGetOneCharacterState = useGetOneCharacter(Number(id));
  const data = useGetOneCharacterState.data as {
    character: ICharacter;
    comics: IComic[];
  };
  const character = data?.character;
  const comics = data?.comics;

  return (
    <div>
      {useGetOneCharacterState.isLoading && <CharacterSkeleton />}
      {!useGetOneCharacterState.isLoading && (
        <>
          <div className="clip-triangle flex justify-center bg-secondary">
            <div className="flex w-full flex-col sm:w-[80%] sm:flex-row">
              <Image
                image={character.thumbnail}
                alt={character.name}
                className="h-[400px] sm:w-1/3"
              />
              <div className="container flex flex-col justify-center space-y-8 p-[36px]">
                <div className="flex items-center justify-between">
                  <p className="text-3xl font-bold uppercase text-white">
                    {character.name}
                  </p>
                  <HeartButton
                    iconClassName="size-8"
                    checked={favourites.includes(character.id)}
                    onLike={() => addFavourite(character.id)}
                    onDislike={() => removeFavourite(character.id)}
                  />
                </div>
                <p className="text-white">{character.description}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="my-[42px] w-[80%]">
              <ComicList comics={comics} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
