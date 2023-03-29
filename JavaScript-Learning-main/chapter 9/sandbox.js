// const scores = [10, 20, 30, 24, 50];

// // const filter = scores.filter((score) => {
// //   return score > 20;
// // });
// // console.log(filter);

// const users = [
//   {
//     name: "Quinn",
//     premium: true,
//   },
//   {
//     name: "Ryan",
//     premium: false,
//   },

//   {
//     name: "Ben",
//     premium: true,
//   },
//   {
//     name: "Jay",
//     premium: false,
//   },
// ];

// const premiumUsers = users.filter((user) => {
//   return user.premium;
// });

// console.log(premiumUsers);
// =====================================================================================================================
// const prices = [20, 24, 50, 2, 30, 70, 1, 2, 2.4, 10];

// // const salePrices = prices.map((price) => {
// //   return price / 2;
// // });

// // console.log(salePrices);

// const products = [
//   { name: "gold star", price: 20 },
//   { name: "mushroom", price: 40 },
//   { name: "green shells", price: 30 },
//   { name: "banana skin", price: 10 },
//   { name: "red shells", price: 50 },
// ];

// const saleProducts = products.map((product) => {
//   if (product.price > 30)
//     return { name: product.name, price: product.price / 2 };
//   else return product;
// });

// console.log(saleProducts);
// =====================================================================================================================
// const scores = [10, 20, 30, 24, 50, 70, 51];

// const result = scores.reduce((acc, cur) => {
//   if (cur > 50) acc++;
//   return acc;
// }, 0);

// console.log(result);

// const scores = [
//   { player: "mario", score: 50 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 90 },
//   { player: "josh", score: 76 },
// ];

// const marioScores = scores.reduce((acc, cur) => {
//   if (cur.player === "mario") {
//     acc += cur.score;
//   }
//   return acc;
// }, 0);

// console.log(marioScores);
// =====================================================================================================================
// const scores = [10, 20, 30, 24, 50, 70, 51];

// const firstHighScores = scores.find((score) => {
//   return score > 50;
// });

// console.log(firstHighScores);
// =====================================================================================================================
// const names = ["quinn", "ben", "jay", "ryan"];
// const scores = [10, 20, 30, 24, 50, 70, 51];

// // names.sort();
// // names.reverse();

// console.log(names);

// const players = [
//   { player: "mario", score: 50 },
//   { player: "yoshi", score: 30 },
//   { player: "mario", score: 90 },
//   { player: "josh", score: 76 },
// ];

// players.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (b.score > a.score) {
//     return 1;
//   } else return 0;
// });

// console.log(players);

// players.sort((a, b) => {
//   return b.score - a.score;
// });
// console.log(players);
// =====================================================================================================================
const products = [
  { name: "gold star", price: 30 },
  { name: "mushroom", price: 10 },
  { name: "green shells", price: 40 },
  { name: "banana skin", price: 5 },
  { name: "red shells", price: 50 },
];

// const filtered = products.filter((product) => {
//   return product.price > 20;
// });

// const promos = filtered.map((product) => {
//   return `the ${product.name} is ${product.price / 2} dollars`;
// });

const promos = products
  .filter((product) => {
    return product.price > 20;
  })
  .map((product) => {
    return `the ${product.name} is ${product.price / 2} dollars`;
  });

console.log(promos);
