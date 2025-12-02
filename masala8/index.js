// ////////////////////////////////////// 1.
let longDate = "Friday May 2, 9am";
function shortenToDate(longDate) {
  let result = longDate.split(",");
  return result[0].trim();
} //✅

// ////////////////////////////////// 2.
let classPoints = [2, 3];
let yourPoints = [5];
function betterThanAverage(classPoints, yourPoints) {
  let result = classPoints.reduce((a, b) => a + b);
  //   let qoshish = result + yourPoints;
  let bolish = result / classPoints.length;
  if (yourPoints > bolish) return true;
  if (yourPoints <= bolish) return false; //✅
  // return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; // qisqasi✅
}
betterThanAverage();

// //////////////////////////////////////// 3.
let arr = ["Hello", "Goodbye", "Hello Again"];
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i]);
    }
  }
  return result;
  //   arr.filter((_, index) => index % 2 === 0);  qisqasi ✅
}
removeEveryOther();

// ////////////////////////////////// 4.
const areaOrPerimeter = function (l, w) {
  if (l === w) {
    return l * w;
  } else {
    return 2 * (l + w);
  } //✅`
};
