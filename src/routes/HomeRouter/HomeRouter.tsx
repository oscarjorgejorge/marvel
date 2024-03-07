import { FC } from "react";
import { AdminLayout } from "../../components/layouts/admin";
import { Home } from "../../components/Home";

interface HomeRouterProps {}

const HomeRouter: FC<HomeRouterProps> = () => {
  return (
    <AdminLayout>
      <Home />
    </AdminLayout>
  );
};

export default HomeRouter;
