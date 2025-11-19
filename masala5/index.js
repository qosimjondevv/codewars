///////////////// 1
function describeAge(a) {
  return (
    "You're a(n) " +
    (a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly")
  );
}

////////////////////// 2

function weatherInfo(temp) {
  var c = convertToCelsius(temp);
  if (c <= 0) return c + " is freezing temperature";
  else return c + " is above freezing temperature";
}

function convertToCelsius(temperature) {
  var celsius = (temperature - 32) * (5 / 9);
  return celsius;
}

////////////////////////////// 3

textbooks.sort(function (a, b) {
  a = a.toLowerCase();
  b = b.toLowerCase();
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});
return textbooks;

//   function sorter(arr) {
//   return arr.sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
// }                qisqasi

///////////////////// 4

function litres(time) {
  return Math.floor(time * 0.5);
}
