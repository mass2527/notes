export const isEmpty = <T extends Record<string, unknown>>(obj: T) => {
  return Object.values(obj).every((value) => value === '');
};
