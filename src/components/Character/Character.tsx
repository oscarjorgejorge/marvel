import { FC } from "react";
import { useParams } from "react-router-dom";
import { useGetOneCharacter } from "../../core/hooks/api/useGetOneCharacter";
import { CharacterImage } from "../shared/CharacterImage";
import { HeartButton } from "../shared/HeartButton";
import { useFavourites } from "../../core/hooks/useFavourites";

interface CharacterProps {}

export const Character: FC<CharacterProps> = () => {
  const { id } = useParams();

  const { data, ...useGetOneCharacterState } = useGetOneCharacter(Number(id));

  const { favourites, addFavourite, removeFavourite } = useFavourites();

  const { results = [] } = data || {};
  const [character] = results;

  console.log({ character });

  return (
    <div>
      {useGetOneCharacterState.isLoading && "Loading..."}
      {!useGetOneCharacterState.isLoading && (
        <>
          <div className="mb-[36px] flex justify-center bg-secondary">
            <div className="flex w-full flex-col sm:w-[80%] sm:flex-row">
              <CharacterImage
                character={character}
                className="h-[400px] sm:w-1/3"
              />
              <div className="clip-triangle container flex flex-col justify-center space-y-8 p-[36px]">
                <div className="flex justify-between">
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
            <div className="w-[80%]">
              <p className="text-3xl font-bold uppercase">Comics</p>
              <ul className="grid grid-cols-2 gap-6 sm:grid-cols-5">
                {character.comics.items.map((comic) => (
                  <li key={comic.resourceURI}>
                    <img
                      className="h-[210px] w-full object-cover"
                      alt={comic.name}
                      src={comic.resourceURI}
                    />
                    <p>{comic.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
