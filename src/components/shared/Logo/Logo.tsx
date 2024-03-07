import { FC } from "react";
import { Link } from "react-router-dom";

interface LogoProps {}

export const Logo: FC<LogoProps> = () => {
  return (
    <Link to="/">
      <div className="w-[150px]">
        <img
          src="https://logodownload.org/wp-content/uploads/2017/05/marvel-logo-1-1.png"
          alt="Logo"
        />
      </div>
    </Link>
  );
};
