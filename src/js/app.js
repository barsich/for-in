export default function orderByProps(obj, array) {
  const sortedArray = [];
  const sortedArrayByAlphabet = [];
  array.forEach((key) => {
    if (key in obj) {
      sortedArray.push({ key, value: obj[key] });
    }
  });

  for (const key in obj) {
    if (!array.includes(key)) {
      sortedArrayByAlphabet.push({ key, value: obj[key] });
    }
  }

  sortedArrayByAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...sortedArray, ...sortedArrayByAlphabet];
}
