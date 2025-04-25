export const encode = (inputString: string) => {
  return window.btoa(window.btoa(window.btoa(window.btoa(inputString))));
};
