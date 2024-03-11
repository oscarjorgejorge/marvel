import { FC } from "react";
import { Link } from "react-router-dom";
import { useFavourites } from "../../../core/hooks/useFavourites";
import { Logo } from "../../shared/Logo";
import { HeartIcon } from "../../shared/HeartIcon";

interface HeaderProps {}

export const Header: FC<HeaderProps> = () => {
  const { favourites } = useFavourites();

  return (
    <header className="flex justify-between border-b-[1px] border-slate-800 bg-secondary p-4">
      <Logo />
      <div className="flex items-center">
        <Link to="/favourites">
          <HeartIcon checked={favourites.length > 0} className="size-8" />
        </Link>
        <p className="ml-[8px] text-xl text-white">
          {favourites.length > 0 && favourites.length}
        </p>
      </div>
    </header>
  );
};
