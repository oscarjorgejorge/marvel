import { IImage } from "./image.model";
import { IModel } from "./model";

export interface ICharacter extends IModel {
  description: string;
  name: string;
  resourceURI: string;
  thumbnail: IImage;
  comics: {
    items: { name: string; resourceURI: string }[];
  };
}
