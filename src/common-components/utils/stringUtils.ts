export const capitalizeFirstLetter = (value: string): string => {
  if (!value) {
    return "";
  }

  const words = value.split("_").map((word) => word.toLowerCase());

  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
