import { FC } from "react";

interface AnimatedHeartIconProps {
  checked: boolean;
}

const AnimatedHeartIcon: FC<AnimatedHeartIconProps> = (
  props: AnimatedHeartIconProps,
) => {
  const { checked = false } = props;

  return (
    <div className="heart-container inline-block p-2 cursor-pointer">
      <svg
        className={`heart ${checked ? "text-red-500 fill-red-500" : "text-gray-500 fill-none"} h-12 w-12 transition-transform ease-in-out transform hover:scale-125`}
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
    </div>
  );
};

export default AnimatedHeartIcon;
