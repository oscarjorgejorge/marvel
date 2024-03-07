import { IModel } from "./model";

export interface ICharacter extends IModel {
  description: string;
  name: string;
  resourceURI: string;
  modified: Date;
  thumbnail: { extension: string; path: string };
}
