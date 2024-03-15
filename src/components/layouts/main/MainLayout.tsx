import { FC, PropsWithChildren } from "react";
import { Header } from "./Header";
import useScrollToTopOnPathChange from "../../../core/hooks/useScrollToTopOnPathChange";

interface MainLayoutProps {
  className?: string;
}

type MainLayoutPropsWithChidren = PropsWithChildren<MainLayoutProps>;

export const MainLayout: FC<MainLayoutPropsWithChidren> = (
  props: MainLayoutPropsWithChidren,
) => {
  useScrollToTopOnPathChange();

  const { children, className = "" } = props;

  return (
    <>
      <Header />
      <main className={className}>{children}</main>
    </>
  );
};
