export default interface RequestConditions {
  limit: number;
  offset: number;
}

export const defaultRequestConditionsInit: RequestConditions = {
  limit: 50,
  offset: 0,
};
