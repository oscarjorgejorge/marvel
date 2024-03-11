import { buildPath } from "../../../utils/browser/browser";
import Http from "../../../utils/http";
import { IComic } from "../../interfaces/comic.model";
import { IMarvelResponse } from "../../interfaces/marvel_response";

export async function getOneComic(url: string) {
  return Http.get<IMarvelResponse<IComic>>(buildPath(url));
}
