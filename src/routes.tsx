import { RouteType } from "./components/Routes";
import CharactersDetailsRouter from "./routes/CharactersDetailsRouter/CharactersDetailsRouter";
import CharactersRouter from "./routes/CharactersRouter/CharactersRouter";
import FavouritesRouter from "./routes/FavouritesRouter/FavouritesRouter";

export const paths = {
  CHARACTERS: "/",
  FAVOURITES: "/favourites",
  CHARACTERS_DETAILS: "/:id",
};

export const routes: RouteType[] = [
  {
    path: paths.CHARACTERS,
    exact: true,
    element: <CharactersRouter />,
  },
  {
    path: paths.FAVOURITES,
    exact: true,
    element: <FavouritesRouter />,
  },
  {
    path: paths.CHARACTERS_DETAILS,
    exact: true,
    element: <CharactersDetailsRouter />,
  },
];
