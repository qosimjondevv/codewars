// /////////////////////////////////////////  3.

const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  } //✅
};

// ////////////////////////////////////////////  4.

let numbers = [1, 5.2, 4, 0, -1];
function sum(numbers) {
  if (numbers.lenght === 0) return 0;
  return numbers.reduce((a, b) => a + b);
} //✅
// const sum = n => n.reduce((a,b) => a+b, 0);  qisqasi

// ///////////////////////////////////////// 5.

function addFive(num) {
  var total = num + 5;
  return total;
} ///✅

