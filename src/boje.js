
const plaviBrojevi = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

export const getBoja = broj => {
  if (broj === 0) {
    return 'pink';
  }
  return plaviBrojevi.includes(broj) ? 'blue' : 'black';
}