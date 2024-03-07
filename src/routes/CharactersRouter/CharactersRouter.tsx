import { FC } from "react";
import { AdminLayout } from "../../components/layouts/admin";
import { Characters } from "../../components/Characters";

interface CharactersRouterProps {}

const CharactersRouter: FC<CharactersRouterProps> = () => {
  return (
    <AdminLayout>
      <Characters />
    </AdminLayout>
  );
};

export default CharactersRouter;
