const isArray = (payload: unknown): payload is Array<any> =>
  Array.isArray(payload);

const isNumber = (payload: unknown): payload is number =>
  typeof payload === "number";

export { isArray, isNumber };
