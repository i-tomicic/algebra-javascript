/*

// Inicijalizacija varijabli?

var firstName = "Tony";
var firstName = "John";
var lastName = "Doe";
var price = 5;
var discount = 78;
var fullPrice = 0;
var _break = [];
var $myObject = {};

console.log(price);
console.log(firstName);
console.log(lastName);

// Kraj mog programa

var tekst = `algebra ${price + 1}`;
console.log(tekst);

console.log(typeof NaN);

*/

/* Pratite kod u script.js
1. Nađite varijable u listi koje su iste po vrijednosti.
2. Koja je vrijednost varijable x na kraju programa? Koji je to tip podatka?
3. Koja je vrijednost varijable baaa? Objasnite!
4. Provjerite tip podatka varijable w. */

// var x = "Lorem ipsum",
//   y = 2345,
//   z = "2345",
//   q = false,
//   w;

// x += "3" + 1;
// var baaa = "b" + "a" + +"a" + "a";

// console.log(x);
// console.log(baaa);
// console.log(typeof w);
// console.log(y == z);

// var text = " Lorem ipsum dolor sit amet";
// console.log(text.length);
// text = text.replace("amet", "elit");
// console.log(text);
// text += ", consectetur adipiscing elit";
// console.log(text);
// text = text.toUpperCase();
// console.log(text);
// text = text.trim();
// console.log(text);
// console.log(text.charAt(12));
// console.log(text.indexOf("S"));
// console.log(text.substring(4, 18));

// Hands-on First Task

// const printLines = function () {
//   console.log(secondLine);

//   let firstLine = "I'm your first line!";
//   console.log(firstLine);

//   let secondLine = "I'm your second line";
//   console.log(secondLine);
// };

// printLines();

// Hands-on Second Task

/* const madeOfGlass = function () {
  const thing = "window";
  thing = "glass";

  console.log(thing);
};

madeOfGlass(); */

// Hands-on Third Task

/* let first = [1, 2, 3];
let second = [2, 4, 6];

function arrayMachine([], []) {} */

// vježba - 02_47/95

/* 1. Koja je vrijednost varijable trueFalse? Čemu služe dvostruki negacijski znakovi?
Odg: true jer je "false" neprazan string pa je "truthy" object
2., 3. i 4. Koju će vrijednost ispisati console.log? Zašto? 
2. true - NIJE - ispisuje prvi "truthy" objekt, zato "Lorem ipsum"
3. 5, očito
4. "Total: 28.673..." jer se zaokružena vrijednost NIJE pohranila u varijablu
*/

/* var x = "Lorem ipsum",
  y = 2345,
  z = "2345";
q = false;

// 1.
var trueFalse = !!"false" == !!"true";
console.log(trueFalse);

// 2.
console.log(q || x || y || z);

// 3.
var num = 6;
num--;
console.log(num);

// 4.
const price = 26.5;
const taxRate = 0.082;

let totalPrice = price + price * taxRate;
totalPrice.toFixed(2);

console.log("Total:", totalPrice);
*/

// vježba - 02_56/95

/* 1. Napišite while petlju koja će ispisivati brojeve od 3 do 20, osim onih djeljivih sa 9.
2. Koja je vrijednost isprintana u konzoli? 4x4 je 16 */

/* let i = 3;
while (i <= 20) {
  if (i % 9 === 0) {
    i++;
    continue;
  }
  console.log(i);
  i++;
} */

// var varOne = 0;
// for (i = 0; i < 4; i++) {
//   for (j = 0; j < 4; j++) {
//     varOne++;
//   }
// }
// console.log(varOne);

/* Program koji za input prima 0 ili 1 te radi ispis na temelju vrijednosti inputa
let opt = +prompt("Upiši 0 ili 1");
opt !== 0 && opt !== 1
  ? console.log("Upisana vrijednost nije 0 ili 1!")
  : opt
  ? console.log("Čaša je polupuna")
  : console.log("Čaša je poluprazna");
*/

// vježba - 02_58/95

/*
Vježba osnove programiranja
1. Kreirajte varijable firstName i lastName i spojite ih u varijablu fullName, ali s razmakom ("") između imena i prezimena.
2. Razlomite ovu ternarnu operaciju na 3 različite operacije!
var x = z === 2 ? y : 5;
3. Napišite petlju koja će prolaziti kroz brojeve od 1 do 20. Za svaku će iteraciju provjeriti je li trenutni broj paran ili neparan, i console.log-ati rezultat (npr. "Broj 2 je paran").
*/

// 1.
/* let firstName = "Igor",
  lastName = "Tomičić";
fullName = firstName + " " + lastName;
console.log(fullName); */

// 2.
/* let x,
  y,
  z = 0;
if (z === 2) {
  x = y;
} else {
  x = 5;
} */

// 3.
/* for (i = 1; i <= 20; i++) {
  i % 2
    ? console.log("Broj " + i + " je neparan")
    : console.log("Broj " + i + " je paran");
} */

// Nizovi (polja ili array)
// 1. Pomoću petlje napravite iteraciju kroz niz i ispisite u konzolu sve elemente niza.
// 2. Dodajte svoje ime na kraj niza.
// 3. Koristeći petlju, napravite iteraciju kroz ovaj niz te nakon što ispišete "Jane" izađite iz petlje.

var names = ["John", "Jane", "Bob", "Mike"];

for (i in names) {
  console.log(`${names}`);
}

names.push("Igor");
console.log("");

for (i in names) {
  console.log(`${names}`);
}

console.log("");
for (i in names) {
  console.log(names[i]);
  if (names[i] === "Jane") {
    break;
  }
}
