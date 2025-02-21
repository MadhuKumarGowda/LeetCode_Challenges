/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  // create a set of Vowels
  const vowels = "aeiouAEIOU";
  // Create a word array from given String
  //   const inputArray = s.split(" ");
  const inputArray = Array.from(s);
  // Compare the given string value with vowels
  let l = 0;
  let r = inputArray.length - 1;
  while (l < r) {
    if (vowels.includes(inputArray[l])) {
      while (r > l) {
        if (vowels.includes(inputArray[r])) {
          [inputArray[l], inputArray[r]] = [inputArray[r], inputArray[l]];
          r--;
          break;
        }
        r--;
      }
    }
    l++;
  }

  return inputArray.join("");
};

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("leetcode"));
