export const decode = (inputString: string) => {
  return window.atob(window.atob(window.atob(window.atob(inputString))));
};
