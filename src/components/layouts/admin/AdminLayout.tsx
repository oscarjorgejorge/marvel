import { FC, PropsWithChildren } from "react";
import { LeftMenu } from "./LeftMenu";

interface AdminLayoutProps {}

type AdminLayoutPropsWithChidren = PropsWithChildren<AdminLayoutProps>;

export const AdminLayout: FC<AdminLayoutPropsWithChidren> = (
  props: AdminLayoutPropsWithChidren,
) => {
  const { children } = props;
  return (
    <div className="flex">
      <LeftMenu />
      <div className="w-full bg-secondary-light p-[26px] min-h-screen">
        {children}
      </div>
    </div>
  );
};
