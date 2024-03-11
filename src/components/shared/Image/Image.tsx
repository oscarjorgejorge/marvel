import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { IImage } from "../../../core/interfaces/image.model";

interface ImageProps {
  image: IImage;
  alt: string;
  className?: string;
}

export const Image: FC<ImageProps> = (props: ImageProps) => {
  const { image, className, alt } = props;

  const url = `${image.path}.${image.extension}`;

  return (
    <img
      loading="lazy"
      className={twMerge("h-[210px] w-full object-cover", className)}
      alt={`${alt} image`}
      src={url}
    />
  );
};
