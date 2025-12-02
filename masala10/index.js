///////////// 1.
let s = "";
function ensureQuestion(s) {
  if (s.includes("?")) {
    return s;
  }
  return s + "?";
}
console.log(ensureQuestion(s));

// //////////////////////////// 2.

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blue = blueStart - bluePulled;
  let red = redStart - redPulled;
  return blue / (blue + red);
}

// /////////////////////// 3.
let a = [1, 3, 5];
let b = [2, 2, 4, 4, 6];
function mergeArrays(a, b) {
  let result = a.concat(b);
  result.sort((a, b) => a - b);
  return [...new Set(result)]; 
}
console.log(mergeArrays(a, b));
