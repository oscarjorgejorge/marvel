import { FC } from "react";
import { CharacterCardSkeleton } from "../CharacterCardSkeleton";
import { defaultRequestConditionsInit } from "../../../core/interfaces/api_request_condition";

interface CharactersCardListSkeletonProps {
  length?: number;
}

export const CharactersCardListSkeleton: FC<CharactersCardListSkeletonProps> = (
  props: CharactersCardListSkeletonProps,
) => {
  const { length = defaultRequestConditionsInit.limit } = props;
  return (
    <ul className="grid grid-cols-2 gap-6 sm:grid-cols-5">
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <CharacterCardSkeleton key={index} />
        ))}
    </ul>
  );
};
