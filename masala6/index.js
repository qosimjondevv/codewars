// ////////////////////////// 1.
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  const geeseSet = new Set(geese);
  return birds.filter((bird) => !geeseSet.has(bird));
  //   return birds.filter(b => !geese.includes(b)) //qisqa varianti
}

// /////////////////////////////////// 2.

function dutyFree(normPrice, discount, hol) {
  let koPrice = normPrice * (discount / 100);
  const bottl = hol / koPrice;
  return Math.floor(bottl);
  //   return Math.floor((hol / normPrice / discount) * 100); //  qisqasi!
}
console.log(dutyFree(12, 50, 1000));

// ////////////////////////////////////////// 3.

function howManyLightsabersDoYouOwn(name) {
  if (name === "Zach") {
    return 18;
  }
  return 0;
  // return name === 'Zach' ? 18 : 0;   // qisqasi
}

// ////////////////////////////////////// 4.

let haystack = [
  "hay",
  "junk",
  "hay",
  "hay",
  "moreJunk",
  "needle",
  "randomJunk",
];

function findNeedle(haystack) {
  let resutl = haystack.indexOf("needle");
  return "found the needle at position " + resutl;
}
console.log(findNeedle(haystack));

// //////////////////////////////////////// 5.

let Ghost = function () {
  let colors = ["white", "yellow", "purple", "red"];
  return (this.color = colors[Math.floor(Math.random() * colors.length)]);

  //   this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)]; // qisqasi
};
Ghost();
