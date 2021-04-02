const isArray = (payload: unknown): payload is Array<any> =>
  Array.isArray(payload);

export { isArray };
