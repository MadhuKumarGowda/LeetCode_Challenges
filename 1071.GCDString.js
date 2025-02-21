/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  if (str1 + str2 != str2 + str1) return "";
  let m = str1.length;
  let n = str2.length;

  let gcd = (s1, s2) => {
    while (s2 !== 0) {
      const temp = s2;
      s2 = s1 % s2;
      s1 = temp;
    }
    return s1;
  };

  let result = gcd(m, n);
  return str1.slice(0, result);
};

console.log(gcdOfStrings("ABCABC", "ABC"));
console.log(gcdOfStrings("ABABAB", "ABAB"));
console.log(gcdOfStrings("LEET", "CODE"));
