import { FC } from "react";

type AlertProps = {
  text: string;
};

export const Alert: FC<AlertProps> = ({ text }: AlertProps) => (
  <p className="rounded-md bg-primary-light p-2 text-white">{text}</p>
);
