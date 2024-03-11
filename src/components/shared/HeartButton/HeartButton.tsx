import { FC } from "react";
import { HeartIcon } from "../HeartIcon";

interface HeartButtonProps {
  checked?: boolean;
  onLike?: () => void;
  onDislike?: () => void;
  iconClassName?: string;
}

export const HeartButton: FC<HeartButtonProps> = (props: HeartButtonProps) => {
  const { checked = false, onLike, onDislike, iconClassName = "" } = props;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (checked) {
      onDislike?.();
    } else {
      onLike?.();
    }
  };

  return (
    <button className="p-2" onClick={(e) => handleClick(e)}>
      <HeartIcon checked={checked} className={iconClassName} />
    </button>
  );
};
