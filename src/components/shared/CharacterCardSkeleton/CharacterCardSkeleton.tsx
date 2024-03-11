import { FC } from "react";
import { HeartIcon } from "../HeartIcon";

interface CharacterCardSkeletonProps {}

export const CharacterCardSkeleton: FC<CharacterCardSkeletonProps> = () => {
  return (
    <li className="h-[260px] w-full rounded-lg bg-white">
      <div className="h-[210px] animate-pulse bg-slate-300" />
      <div className="h-[5px] bg-slate-300" />
      <div className="clip-triangle flex h-[45px] items-center justify-between bg-slate-500 p-4">
        <div className="h-5 w-[100px] animate-pulse bg-slate-200" />
        <HeartIcon className="animate-pulse text-slate-200" />
      </div>
    </li>
  );
};
