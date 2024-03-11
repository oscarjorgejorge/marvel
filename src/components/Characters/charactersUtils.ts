import { GetQueryCharactersConditions } from "../../core/api/characters";

export function transformCharactersQueryConditions(
  conditions: Partial<GetQueryCharactersConditions>,
) {
  const { limit, offset } = conditions;

  return { ...conditions, limit: Number(limit), offset: Number(offset) };
}
