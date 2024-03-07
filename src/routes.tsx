import { RouteType } from "./components/Routes";
import CharactersRouter from "./routes/CharactersRouter/CharactersRouter";
import HomeRouter from "./routes/HomeRouter/HomeRouter";

export const paths = {
  // ADMIN ROUTES
  HOME: "/",
  CHARACTERS: "/characters",
};

export const routes: RouteType[] = [
  // TO ALL

  // ADMIN ROUTES
  {
    path: paths.HOME,
    exact: true,
    element: <HomeRouter />,
  },
  {
    path: paths.CHARACTERS,
    exact: true,
    element: <CharactersRouter />,
  },
];
