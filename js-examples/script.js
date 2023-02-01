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

/* var names = ["John", "Jane", "Bob", "Mike"];

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
} */

// ARRAYS (polja, nizovi)
// console.log("\n \n \n ARRAYS:");
// let numbers = [1, 2, 3, 4, 5];
// let names = ["Ivan", "Igor", true, 666, "Jane"];

// console.log(names);

// for (i in names) {
//   console.log(typeof names[i]);
// }

// var weirdArray = [1, , 3];

// console.log(weirdArray);
// console.log(typeof weirdArray[1]);

// var arrayLength5 = new Array(5);
// console.log(arrayLength5);

// var testArray = [];
// console.log(testArray);
// testArray[3] = "testis";
// console.log(testArray);
// testArray[6] = "neutrum";
// console.log(testArray);

// names.push(NaN);
// console.log(names);
// console.log(names.join(" --- "));
// names.pop(1);
// console.log(names);

// names.forEach((tralala) => {
//   console.log(tralala);
//   let education = "needuciran";
//   console.log(tralala + " je " + education);
// });

// let newNames = names.map((name) => {
//   if (name === "Jane") {
//     name = "Jana";
//   }
//   return name;
// });
// console.log(newNames);
// console.log(names);

// let matrix = [numbers, names];
// console.log(matrix);
// console.log(matrix.length);
// console.log(matrix[0][1]);
// console.log((matrix[0][8] = 7));
// console.log(matrix.length);
// console.log(matrix);

// names.forEach((ime) => console.log(ime));
// console.log("");
// matrix.forEach((item) => item.forEach((item2) => console.log(item2)));
// console.log("\n \n \n FUNKCIJE:");

// FUNKCIJE

// function hello() {
//   console.log("Hello, world!");
// }

// function myFunc(a, b) {
//   if (!b) {
//     b = 1;
//   }
//   console.log(a + b);
// }
// myFunc(5);

// valjda se može koristiti .this s ovakvim načinom definiranja funkcije
// let addOne = function (value) {
//   return value + 1;
// };
// console.log(addOne(9));

// console.log("\n \n \n OBJEKTI:");

// OBJEKTI

// object literal, nije (baš) kasnije promjenjiv, inače koristiti operator new ili funkciju Object.create()
// var dog = {
//   breed: "Golden retriever",
//   color: "gold",
//   bark: function () {
//     return "Wuf wuf!";
//   },
//   "has toy": false,
// };

// console.log(dog);
// console.log(dog.breed);
// console.log(dog["has toy"]); // ako naziv keya ima dvije riječi (ili crtice?) ne može se koristiti dog.key
// console.log(dog.bark());
// for (key in dog) {
//   console.log(key);
// }
// Zašto ovo ne radi?
/* for (let value of dog) {
  console.log(value);
} */

// dog.age = 7;
// dog.numberOfLegs = 4;
// dog.name = "Rex";

// console.log(dog);

// console.log(delete dog.numberOfLegs);
// delete dog.name;

// console.log(dog);

// dogJSON = JSON.stringify(dog);
// console.log(dogJSON);

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// let cat = new Animal("Mačka", 45);
// console.log(cat);

// VJEŽBE

let polaznici = [
  {
    name: "Igor",
    surname: "Boroja",
    age: 18,
  },
  {
    name: "Ivan",
    surname: "Munitić",
    age: 13,
  },
  {
    name: "Aleks",
    surname: "Ivanac",
    age: 24,
  },
  {
    name: "Danijel",
    surname: "Hrgić",
    age: 67,
  },
  {
    name: "Darko",
    surname: "Šušnjar",
    age: 12,
  },
  {
    name: "Luka",
    surname: "Modrić",
  },
];

console.log(polaznici);

// function checkAge(age) {
//   if (age < 18) {
//     return "Polaznik je maloljetan";
//   }
//   if (age >= 67) {
//     return "Polaznik je za penziju";
//   }
//   return "Polaznik je punoljetan";
// }

// polaznici.forEach((polaznik) => {
//   console.log("Ime: " + polaznik.name + " " + polaznik.surname);
//   console.log(checkAge(polaznik.age));
// });

// console.log("\n\n");

function checkAge(age, name, surname) {
  let ageResponse = "";
  let fullName = name + " " + surname;
  switch (true) {
    case age < 18:
      ageResponse = fullName + " je maloljetan";
      break;
    case age >= 67:
      ageResponse = fullName + " je za penziju";
      break;
    case age >= 18 && age < 67:
      ageResponse = fullName + " je punoljetan";
      break;
    default:
      ageResponse = fullName + " se nije još rodio!";
  }
  return ageResponse;
}

polaznici.forEach((polaznik) =>
  console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname))
);
console.log("\n\n");

// pazi sad ovo!
polaznici.forEach(({ age, name, surname }) =>
  console.log(checkAge(age, name, surname))
);
