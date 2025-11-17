// /////// 1.
function cookie(x) {
  let names;
  if (typeof x === "string") {
    names = "Zach!";
  } else if (typeof x === "number") {
    names = "Monica!";
  } else {
    names = "the dog!";
  }
  return `Who ate the last cookie? It was ${names}`;
}

/////////////////////////////////////// ///////// 2.
function removeChar(str) {
  if (str.length > 2) {
    return str.slice(1, -1);
  } else if (str.length < 3) {
    return "";
  }
}

// function removeChar(str){
//   if(str.length <= 2) return '';
//   const strArr = [...str];
//   strArr.shift();
//   strArr.pop();
//   return strArr.join("");
// }; 2 yechim

//////////////////////////////////////// ///// 3.
function sumArray(array) {
  if (!array || array === null || array.includes(null) || array.length < 3)
    return 0;
  const sortedArray = array.sort((a, b) => a - b);
  sortedArray.shift();
  sortedArray.pop();

  return sortedArray.reduce((cq, list) => cq + list);
}
