// console.log("Fibonacci sequence");

// const fibonacciIterative = (n) => {
//   const array = [];
//   let current = 1;
//   let prev = 0;
//   for (let i = 0; i < n; i++) {
//     array.push(current);
//     let next = current + prev;
//     prev = current;
//     current = next;
//   }
//   return array;s
// };
// console.log(fibonacciIterative(5));

// const fibonacci = (n) => {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// };

// console.log(fibonacci(5));

// const fibonacciSequence = (n) => {
//   const array = [];
//   for (let i = 0; i < n; i++) {
//     array.push(fibonacci(i));
//   }
//   return array;
// };

// console.log(fibonacciSequence(5));

// function createUser(name) {
//   const discordName = "@" + name;

//   let reputation = 0;
//   const getReputation = () => reputation;
//   const giveReputation = () => {
//     reputation++;
//   };

//   return { name, discordName, getReputation, giveReputation };
// }

// function createPlayer(name, level) {
//   const { getReputation, giveReputation } = createUser(name);

//   const increaseLevel = () => {
//     level++;
//   };

//   const getLevel = () => level;
//   return { name, getReputation, giveReputation, increaseLevel, getLevel };
// }

// const josh = createPlayer("josh", 1);
// josh.giveReputation();
// josh.giveReputation();
// josh.increaseLevel();
// josh.increaseLevel();

// console.log({
//   discordName: josh.name,
//   reputation: josh.getReputation(),
//   level: josh.getLevel(),
// });

// const array = [38, 27, 43, 3, 9, 82, 10, 62];

// let newArray = array.sort((a, b) => a - b);

// console.log(newArray);

// const userName = ["ola", "josh", "mike", "john", "james"];
// const password = ["123", "456", "789", "000", "111"];

// const user = "mikee";
// const pass = "789";

// let userFound = false;

// for (let i = 0; i < userName.length; i++) {
//   if (userName[i] === user) {
//     console.log("User found");
//     userFound = true;
//     if (password[i] === pass) {
//       console.log("User authenticated");
//     } else {
//       console.log("Incorrect password");
//     }
//     break;
//   }
// }

// if (!userFound) {
//   console.log("User not found");
// }

const users = [
  {
    username: "loko",
    password: "789",
  },
  {
    username: "yinka",
    password: "456",
  },
  {
    username: "ola",
    password: "789",
  },
];
const user = "mike";
const pass = "798";

let userFound = false;

for (let i = 0; i < users.length; i++) {
  if (users[i].username === user) {
    console.log("User found");
    userFound = true;
    if (users[i].password === pass) {
      console.log("User authenticated");
    } else {
      console.log("Incorrect password");
    }
    break;
  }
}

if (!userFound) {
  console.log("User not found");
}
