import { IImage } from "./image.model";
import { IModel } from "./model";

export interface IComic extends IModel {
  title: string;
  thumbnail: IImage;
  year: number;
}
