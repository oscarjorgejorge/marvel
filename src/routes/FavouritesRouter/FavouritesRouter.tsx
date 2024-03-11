import { FC } from "react";
import { MainLayout } from "../../components/layouts/main";
import { Favourites } from "../../components/Favourites";

interface FavouritesRouterProps {}

const FavouritesRouter: FC<FavouritesRouterProps> = () => {
  return (
    <MainLayout className="p-[24px]">
      <Favourites />
    </MainLayout>
  );
};

export default FavouritesRouter;
