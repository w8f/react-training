export const forEach = (
  items: number[],
  callback: (number: number) => number
) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
};
