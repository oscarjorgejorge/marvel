import { IImage } from "./image.model";
import { IModel } from "./model";

export interface ICharacter extends IModel {
  description: string;
  name: string;
  resourceURI: string;
  modified: Date;
  thumbnail: IImage;
  comics: {
    available: number;
    collectionURI: string;
    items: { name: string; resourceURI: string }[];
    returned: number;
  };
}
