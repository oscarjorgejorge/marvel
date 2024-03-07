import { FC, ReactNode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface RouteType {
  path: string;
  exact: boolean;
  element: ReactNode;
}

export interface RoutersProps {
  routes: RouteType[];
}

const InditexRoutes: FC<RoutersProps> = (props: RoutersProps) => {
  const { routes } = props;
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default InditexRoutes;
