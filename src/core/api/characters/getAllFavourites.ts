import { getOneCharacter } from ".";

export async function getAllFavourites(ids: number[]) {
  const promises = ids.map((id) => getOneCharacter(id, true));

  return Promise.allSettled(promises).then((data) => {
    return data
      .map((d) => (d.status === "fulfilled" ? d.value : undefined))
      .filter(Boolean);
  });
}
