import { FC, PropsWithChildren } from "react";
import { Header } from "./Header";

interface MainLayoutProps {
  className?: string;
}

type MainLayoutPropsWithChidren = PropsWithChildren<MainLayoutProps>;

export const MainLayout: FC<MainLayoutPropsWithChidren> = (
  props: MainLayoutPropsWithChidren,
) => {
  const { children, className = "" } = props;
  return (
    <>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
};
