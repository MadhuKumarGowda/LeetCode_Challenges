/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let inputArray = s.split(" ");
  console.log(inputArray);
  let n = inputArray.length - 1;
  let resultArray = [];
  for (let i = n; i >= 0; i--) {
    if (inputArray[i] != "") {
      resultArray.push(inputArray[i]);
    }
  }
  return resultArray.join(" ");
};

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
