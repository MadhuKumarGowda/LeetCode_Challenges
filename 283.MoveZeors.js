moveZeros = (nums) => {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      left++;
    }
  }
  return nums;
};

let numbers = [0, 1, 0, 3, 12];
console.log(moveZeros(numbers));
let numbers1 = [0, 1, 0, 3, 12, 0];
console.log(moveZeros(numbers1));
