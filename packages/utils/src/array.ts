const isArray = (payload: unknown): payload is Array<any> =>
  Array.isArray(payload);

const isNumber = (payload: unknown): payload is number =>
  !Number.isNaN(payload);

const arrayLength = (payload: unknown): number => {
  if (!isArray(payload)) return 0;
  return payload.length;
};

export { isArray, arrayLength, isNumber };
