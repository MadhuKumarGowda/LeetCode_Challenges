/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let resultArray = [];
  let leftIndex = 1;
  for (let i = 0; i < nums.length; i++) {
    resultArray.push(leftIndex);
    leftIndex *= nums[i];
  }

  let rightIndex = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    resultArray[i] = rightIndex * resultArray[i];
    rightIndex *= nums[i];
  }

  return resultArray;
};

console.log(productExceptSelf([2, 3, 4, 6]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0]));
console.log(productExceptSelf([1, 0]));
console.log(productExceptSelf([9, 0, -2]));
