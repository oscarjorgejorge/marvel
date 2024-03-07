import { FC } from "react";
import { paths } from "../../../routes";
import { GiBowman } from "react-icons/gi";
import { FaTachometerAlt } from "react-icons/fa";
import { Logo } from "../../shared/Logo";
import { Link } from "react-router-dom";

interface LeftMenuProps {}

export const LeftMenu: FC<LeftMenuProps> = () => {
  const menuOptions = [
    { path: paths.HOME, text: "Home", icon: <FaTachometerAlt /> },
    { path: paths.CHARACTERS, text: "Characters", icon: <GiBowman /> },
  ];

  return (
    <aside className="w-[260px] p-4 mt-[16px]">
      <div className="flex items-center space-x-6 mb-[10px]">
        <Logo />
      </div>
      {menuOptions.map(({ path, text, icon }) => (
        <Link key={text} to={path}>
          <div className="flex items-center">
            <div className="m-4">{icon}</div>
            {text}
          </div>
        </Link>
      ))}
    </aside>
  );
};
