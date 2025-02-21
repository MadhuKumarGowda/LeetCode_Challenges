/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  const word1Len = word1.length;
  const word2Len = word2.length;
  let length = 0;
  let resultArray = "";

  word1Len > word2Len ? (length = word1Len) : (length = word2Len);

  for (let i = 0; i < length; i++) {
    if (word1[i] === undefined) {
      for (let k = i; k < word2Len.length; k++) {
        resultArray = resultArray + word2[k];
      }
    } else {
      resultArray = resultArray + word1[i];
    }

    if (word2[i] === undefined) {
      for (let k = i; k < word1Len.length; k++) {
        resultArray = resultArray + word1[k];
      }
    } else {
      resultArray = resultArray + word2[i];
    }
  }

  return resultArray.trimStart();
};

console.log(mergeAlternately("ab", "pqrs"));
console.log(mergeAlternately("abc", "pqr"));
console.log(mergeAlternately("abcd", "pq"));
