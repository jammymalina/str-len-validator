export const isStringLengthValid = (str: string, minLength: number, maxLength: number = Infinity): boolean => {
  return typeof str === "string" && str.length >= minLength && str.length <= maxLength;
};
