console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 7;

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}
// Part 3: Hotdogs
const numberOfHotdogs = 3000000;
console.clear;
if (numberOfHotdogs < 5) {
  console.log("Hotdog price: " + "2 € per hotdog");
} else if (numberOfHotdogs < 100) {
  console.log("Hotdog price: " + "1,50 € per hotdog");
} else if (numberOfHotdogs < 1000000) {
  console.log("Hotdog price: " + "1 € per hotdog");
} else {
  console.log("Hotdog price: " + "0,10 € per hotdog");
}
// Part 4: Daytime
const currentHour = 11.5;

const statement = currentHour < 13 ? "Still need to learn ..." : "Partytime!!!";

console.log(statement);

// Part 5: Greeting
const name = "Feline";

const greeting = "Hello " + (name === "Feline" ? "Coach" : name) + "!";

console.log(greeting);
