// ////////////////////////////////////  1.
let input = [2, 3, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];

function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let poSum = 0;
  let neSum = 0;

  for (let num of input) {
    if (num > 0) {
      poSum++;
    } else if (num < 0) {
      neSum += num;
    }
  }
  return [poSum, neSum];
}
console.log(countPositivesSumNegatives(input));

// ////////////////////////////////////  2.

let x = "aba";
function isPalindrome(x) {
  let rest = x.toLowerCase();
  let von = rest[0];
  let tu = rest[rest.length - 1];
  if (von === tu) {
    return true;
  } else {
    return false;
  }
  if (rest.length === 0) return true;
} // ✅✅✅
console.log(isPalindrome(x));

//    eng qisqasi 🥸🥹
// function isPalindrome(x) {
//   return x.toLowerCase().split('').reverse().join('') == x.toLowerCase()
// }


