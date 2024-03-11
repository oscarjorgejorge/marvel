import { FC, useMemo, useRef } from "react";
import { useGetFavouritesCharacters } from "../../core/hooks/api/useGetFavouritesCharacters";
import { useFavourites } from "../../core/hooks/useFavourites";
import { CharactersCardList } from "../shared/CharactersCardList";
import { CharactersCardListSkeleton } from "../shared/CharactersCardListSkeleton";
import { ICharacter } from "../../core/interfaces/characters.model";

interface FavouritesProps {}

export const Favourites: FC<FavouritesProps> = () => {
  const { favourites } = useFavourites();

  const favouritesRef = useRef(favourites);
  const currentFavourites = favouritesRef.current;

  const { data, ...stateUseGetFavouritesCharacters } =
    useGetFavouritesCharacters(currentFavourites);

  const { results = [] } = data || {};

  const favouritesToShow = useMemo(
    () =>
      results.filter((character: ICharacter) =>
        favourites.includes(character.id),
      ),
    [results, favourites],
  );

  return (
    <div className="space-y-10">
      {stateUseGetFavouritesCharacters.isLoading && (
        <CharactersCardListSkeleton length={favourites.length} />
      )}
      {!stateUseGetFavouritesCharacters.isLoading && (
        <CharactersCardList characters={favouritesToShow} />
      )}
    </div>
  );
};
