import { FC } from "react";
import { MainLayout } from "../../components/layouts/main";
import { Character } from "../../components/Character";

interface CharactersDetailsRouterProps {}

const CharactersDetailsRouter: FC<CharactersDetailsRouterProps> = () => {
  return (
    <MainLayout>
      <Character />
    </MainLayout>
  );
};

export default CharactersDetailsRouter;
