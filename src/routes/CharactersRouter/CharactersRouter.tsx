import { FC } from "react";
import { MainLayout } from "../../components/layouts/main";
import { Characters } from "../../components/Characters";

interface CharactersRouterProps {}

const CharactersRouter: FC<CharactersRouterProps> = () => {
  return (
    <MainLayout className="p-[24px]">
      <Characters />
    </MainLayout>
  );
};

export default CharactersRouter;
