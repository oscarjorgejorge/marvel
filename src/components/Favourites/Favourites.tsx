import { FC, useMemo, useRef } from "react";
import { useGetFavouritesCharacters } from "../../core/hooks/api/useGetFavouritesCharacters";
import { useFavourites } from "../../core/hooks/useFavourites";
import { ICharacter } from "../../core/interfaces/characters.model";
import { CharactersCardList } from "../shared/CharactersCardList";
import { CharactersCardListSkeleton } from "../shared/CharactersCardListSkeleton";

interface FavouritesProps {}

export const Favourites: FC<FavouritesProps> = () => {
  const { favourites } = useFavourites();

  const favouritesRef = useRef(favourites);
  const currentFavourites = favouritesRef.current;

  const stateUseGetFavouritesCharacters =
    useGetFavouritesCharacters(currentFavourites);
  const data = stateUseGetFavouritesCharacters.data as ICharacter[];

  const favouritesToShow = useMemo(
    () =>
      data?.filter((character: ICharacter) =>
        favourites.includes(character.id),
      ),
    [data, favourites],
  );

  return (
    <div className="space-y-10">
      {stateUseGetFavouritesCharacters.isLoading && (
        <CharactersCardListSkeleton length={favourites.length} />
      )}
      {!stateUseGetFavouritesCharacters.isLoading && (
        <CharactersCardList
          characters={favouritesToShow}
          alertText="Not favourites added"
        />
      )}
    </div>
  );
};
