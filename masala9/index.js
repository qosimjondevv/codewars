////////////////////////////////// 1.
let x = "8 j 8   mBliB8g  imjB8B8  jl  B";
function noSpace(x) {
  return x.replaceAll(" ", ""); //✅
}
console.log(noSpace(x));

/////////////////////////////////// 2.

let n = 35231;
function digitize(n) {
  if (n.length === 0) return [0];
  return [...n.toString()].reverse().map((item) => Number(item));
} //✅
console.log(digitize(n));

// //////////////////////////////////////// 3.

let string = "A1,A2,3,232,23ew,wdw";

function array(string) {
  let result = string.split(",");
  if (result.length < 3) return null;
  return result.slice(1, -1).join(" ");
} //✅
console.log(array(string));

/////////////////////////// 4.
function whoIsPaying(name) {
  return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
} //✅

// /////////////////////// 5.

let str = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
function highAndLow(str) {
  let strnn = str.split(" ").sort((a, b) => a - b);
  return `${strnn[strnn.length - 1]} ${strnn[0]}`;
} /// ✅
console.log(highAndLow(str));


