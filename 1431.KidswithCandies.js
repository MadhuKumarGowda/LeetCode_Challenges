/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let maxNumber = () => {
    let maxItem = candies[0];
    for (let i = 0; i < candies.length; i++) {
      if (candies[i] > maxItem) {
        maxItem = candies[i];
      }
    }
    return maxItem;
  };

  let maximumNumber = maxNumber();

  let resultArray = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maximumNumber) {
      resultArray.push(true);
    } else {
      resultArray.push(false);
    }
  }
  return resultArray;
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
console.log(kidsWithCandies([4, 2, 1, 1, 2], 1));
console.log(kidsWithCandies([12, 1, 12], 10));
