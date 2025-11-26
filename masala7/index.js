///////////////////////// 1. yoshlarni topish
let ages = [82, 15, 6, 38, 35];
function differenceInAges(ages) {
  if (!ages || ages.length === 0) return [0, 0, 0];
  let min = Math.min(...ages);
  let max = Math.max(...ages);
  return [min, max, max - min]; //✅
}
console.log(differenceInAges(ages));

// ////////////////////////// 2. english sozini topish
let sentence = "engliSHsjoAJDIWoajndAsj";
function spEng(sentence) {
  let harf = sentence.toLowerCase();
  return harf.includes("english"); //✅
}
console.log(spEng(sentence));

// //////////////////////////////// 3. salomni berganmi yomi ?
function validateHello(greetings) {
  const greetingsList = [
    "hello",
    "ciao",
    "salut",
    "hallo",
    "hola",
    "ahoj",
    "czesc",
  ]; //✅

  return greetingsList.some((item) => greetings.toLowerCase().includes(item));
}
