export const isNumber = (char) => {
  return /^\d+$/.test(char);
};

export const filterId = (str) => {
  const regex = /[A-Za-z0-9_-]+/g;
  const matches = str.match(regex);
  return matches.join("");
};
