import { buildPath } from "../../../utils/browser/browser";
import Http from "../../../utils/http";
import RequestConditions from "../../interfaces/api_request_condition";
import { ICharacter } from "../../interfaces/characters.model";
import { IMarvelResponse } from "../../interfaces/marvel_response";

export interface CharactersFilters {
  nameStartsWith?: string;
}

export type GetQueryCharactersConditions = RequestConditions &
  CharactersFilters;

export async function getCharacters(conditions: GetQueryCharactersConditions) {
  return Http.get<IMarvelResponse<ICharacter>>(
    buildPath(`/characters`, conditions),
  );
}
