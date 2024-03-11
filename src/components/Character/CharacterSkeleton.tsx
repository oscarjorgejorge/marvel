import { FC } from "react";
import { HeartIcon } from "../shared/HeartIcon";
import { ComicListSkeleton } from "../shared/ComicListSkeleton";

interface CharacterSkeletonProps {}

export const CharacterSkeleton: FC<CharacterSkeletonProps> = () => {
  return (
    <>
      <div className="clip-triangle flex justify-center bg-secondary">
        <div className="flex w-full flex-col sm:w-[80%] sm:flex-row">
          <div className="h-[400px] animate-pulse bg-slate-600 sm:w-1/3" />
          <div className="container flex flex-col justify-center space-y-8 p-[36px]">
            <div className="flex items-center justify-between">
              <div className="h-[24px] w-[160px] animate-pulse bg-slate-500" />
              <HeartIcon className="size-8 animate-pulse text-slate-500" />
            </div>
            <div className="space-y-4">
              <div className="h-[24px] w-[80%] animate-pulse bg-slate-800" />
              <div className="h-[24px] w-[90%] animate-pulse bg-slate-800" />
              <div className="h-[24px] w-[70%] animate-pulse bg-slate-800" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="my-[42px] w-[80%]">
          <ComicListSkeleton />
        </div>
      </div>
    </>
  );
};
