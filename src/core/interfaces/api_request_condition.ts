export default interface RequestConditions {
  limit: number;
  offset: number;
}

export const defaultRequestConditionsInit: RequestConditions = {
  limit: 10,
  offset: 0,
};
