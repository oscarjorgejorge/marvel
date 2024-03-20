import React from "react";
import { RouteType } from "./components/Routes";

export const paths = {
  CHARACTERS: "/",
  FAVOURITES: "/favourites",
  CHARACTERS_DETAILS: "/:id",
};

const CharactersRouter = React.lazy(
  () => import("./routes/CharactersRouter/CharactersRouter"),
);

const FavouritesRouter = React.lazy(
  () => import("./routes/FavouritesRouter/FavouritesRouter"),
);

const CharactersDetailsRouter = React.lazy(
  () => import("./routes/CharactersDetailsRouter/CharactersDetailsRouter"),
);

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
