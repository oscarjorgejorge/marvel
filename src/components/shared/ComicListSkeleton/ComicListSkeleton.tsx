import { FC } from "react";
import { useIsMobile } from "../../../core/hooks/useIsMobile";

interface ComicListSkeletonProps {}

export const ComicListSkeleton: FC<ComicListSkeletonProps> = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div className="mb-[12px] h-[24px] w-[164px] animate-pulse bg-slate-300" />
      <ul className="flex gap-4 overflow-auto pb-[12px]">
        {Array(isMobile ? 2 : 5)
          .fill(0)
          .map((_, index) => (
            <li key={index} className="min-w-[50%] sm:min-w-[18%]">
              <div className="mb-[12px] h-[260px] animate-pulse bg-slate-100 sm:h-[320px]" />
              <div className="mb-[8px] h-[20px] w-[100px] animate-pulse bg-slate-200" />
              <div className="h-[16px] w-[40px] animate-pulse bg-slate-200" />
            </li>
          ))}
      </ul>
    </>
  );
};
