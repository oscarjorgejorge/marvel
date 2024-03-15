import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCharacters } from "../../core/hooks/api/useGetCharacters";
import { defaultRequestConditionsInit } from "../../core/interfaces/api_request_condition";
import { GetQueryCharactersConditions } from "../../core/api/characters";
import { paths } from "../../routes";
import { useQueryParams } from "../../core/hooks/useQueryParams";
import { Pagination } from "../shared/Pagination";
import { Search } from "../shared/Search";
import { CharactersCardList } from "../shared/CharactersCardList";
import { CharactersCardListSkeleton } from "../shared/CharactersCardListSkeleton";

export const initialCharactersState: GetQueryCharactersConditions = {
  ...defaultRequestConditionsInit,
};

interface CharactersProps {}

export const Characters: FC<CharactersProps> = () => {
  const {
    limit = initialCharactersState.limit,
    offset = initialCharactersState.offset,
    ...params
  } = useQueryParams<GetQueryCharactersConditions>();
  const navigate = useNavigate();

  const { data, ...charactersState } = useGetCharacters({
    limit,
    offset,
    ...params,
  });

  const { total = 0, results = [] } = data || {};

  const handleSearchChange = (value: string) => {
    if (!value) {
      navigate(
        `${paths.CHARACTERS}?offset=0&limit=${initialCharactersState.limit}`,
      );
    } else {
      navigate(
        `${paths.CHARACTERS}?offset=0&limit=${initialCharactersState.limit}&nameStartsWith=${value}`,
      );
    }
  };

  return (
    <div className="space-y-10">
      <div>
        <Search
          onInputChange={handleSearchChange}
          placeholder="Search a character..."
        />
        <p className="mt-[8px] text-sm uppercase">{total} Results</p>
      </div>
      {charactersState.isLoading && <CharactersCardListSkeleton />}
      {!charactersState.isLoading && (
        <CharactersCardList
          characters={results}
          alertText="Not characters found"
        />
      )}
      <Pagination
        currentPage={offset / limit}
        rowsPerPage={limit}
        totalPages={total / limit - 1}
        path={paths.CHARACTERS}
      />
    </div>
  );
};
