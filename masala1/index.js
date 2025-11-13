// /// 1.
function swapValues(arr) {
  //  var args = Array.prototype.slice.call(arguments);
  var temp = arr[0]; // xatolari topib to'g'irlandi
  arr[0] = arr[1];
  arr[1] = temp;
  console.log(arr);
}

// /// 2.
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
function arrayPlusArray(arr1, arr2) {
  let sum1 = arr1.reduce((a, b) => a + b);
  let sum2 = arr2.reduce((a, b) => a + b);
  return sum1 + sum2;
}
