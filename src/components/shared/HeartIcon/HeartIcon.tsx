import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface HeartIconProps {
  checked?: boolean;
  className?: string;
}

export const HeartIcon: FC<HeartIconProps> = (props: HeartIconProps) => {
  const { checked = false, className = "" } = props;

  return (
    <svg
      className={twMerge(
        `size-6 ${checked ? "fill-red-500 text-red-500 group-hover:fill-white group-hover:text-white" : "fill-none text-white"}
         transform transition-transform ease-in-out hover:scale-125`,
        className,
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
};
