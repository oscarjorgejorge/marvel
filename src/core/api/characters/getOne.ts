import Http from "../../../utils/http";
import { buildPath } from "../../../utils/browser/browser";
import { ICharacter } from "../../interfaces/characters.model";
import { IMarvelResponse } from "../../interfaces/marvel_response";
import { getOneComic } from "../comics";

export async function getOneCharacter(id: number, favourites = false) {
  const [character] = await Http.get<IMarvelResponse<ICharacter>>(
    buildPath(`/characters/${id}`),
  ).then((res) => {
    return res.data.data.results;
  });

  if (favourites) return character;

  const promises = character.comics.items
    .slice(0, 20)
    .map((item) => getOneComic(item.resourceURI));

  const comics = await Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value.data.data : undefined))
      .filter(Boolean)
      .map((d) => {
        if (d) {
          const regex = /\((\d+)\)/;
          const year = Number(d.results[0]?.title.match(regex)?.[1]);
          return {
            ...d.results[0],
            year,
          };
        } else {
          return null;
        }
      })
      .filter((d) => d !== null)
      .sort((a, b) => a!.year - b!.year);
  });

  return {
    character,
    comics,
  };
}
