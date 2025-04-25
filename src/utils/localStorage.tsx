import { decode } from "./decode";
import { encode } from "./encode";

export const saveToLocalStorage = (key: string, value: unknown) => {
  const encodedValue = encode(JSON.stringify(value));
  localStorage.setItem(encode(key), encodedValue);
};

export const getDataFromLocalStorage = (key: string): string | null => {
  const encodedValue = localStorage.getItem(encode(key));

  if (encodedValue !== null) {
    return decode(encodedValue);
  } else {
    return null;
  }
};

export const removeDataFromLocalStorage = (key: string) => {
  localStorage.removeItem(encode(key));
};
