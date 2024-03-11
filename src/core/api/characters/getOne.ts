import { buildPath } from "../../../utils/browser/browser";
import Http from "../../../utils/http";
import { ICharacter } from "../../interfaces/characters.model";
import { IMarvelResponse } from "../../interfaces/marvel_response";

export async function getOneCharacter(id: number) {
  return Http.get<IMarvelResponse<ICharacter>>(
    buildPath(`/characters/${id}`),
  ).then((res) => res.data.data);
}
