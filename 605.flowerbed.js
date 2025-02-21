/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = function (flowerbed, n) {
  let count = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      const prevBed = flowerbed[i - 1] || 0;
      const nextBed = flowerbed[i + 1] || 0;
      if (prevBed === 0 && nextBed === 0) {
        flowerbed[i] = 1;
        count++;
      }
    }
    if (count >= n) {
      return true;
    }
  }
  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
