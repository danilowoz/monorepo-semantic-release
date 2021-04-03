const isArray = (payload: unknown): payload is Array<any> =>
  Array.isArray(payload);

const arrayLength = (payload: unknown): number => {
  if (!isArray(payload)) return 0;

  return payload.length;
};

export { isArray, arrayLength };
