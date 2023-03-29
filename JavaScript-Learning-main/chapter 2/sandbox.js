// // strings
// console.log("Hello, world");

// let email = "quinn.peterson99@gmail.com";
// console.log(email);

// // string concatentation
// let firstName = "Quinn";
// let lastName = "Peterson";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // getting characters
// console.log(fullName[3]);

// // string length
// console.log(fullName.length);

// // string methiods
// console.log(fullName.toUpperCase());
// let result = fullName.toLowerCase();
// console.log(result, fullName);

// let index = email.indexOf("@");
// console.log(index);

//=======================================================================================================================
// Common string methiods

// let email = "quinn.peterson99@gmail.com";
// let result = email.lastIndexOf("n");

// let result = email.slice(0, 10);

// let result = email.substr(4, 10);

// let result = email.replace("q", "w");

// let result = email.replace("n", "q");

// console.log(result);

//=======================================================================================================================
// NUMBERS

// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi);

// MATH OPERSTORS +, -, /. **, %

// console.log(10 / 2);

//The % devides the two numbers then gives us the remainder
// let result = radius % 3;

// let result = pi * radius ** 2;

// ORDER OF OPERATION - B I D M A S

// let result = 5 * (10 - 3) ** 2;

// console.log(result);

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;

// likes += 10;
// likes =- 5;
// likes *= 2;
// likes /= 5;

// console.log(likes);

//NAN = not a number
// console.log(5 / "number");
// console.log(5 * "number");

// let result = "the blog has " + likes + " likes";
// console.log(result);

//=======================================================================================================================

//TEMPLATE STRINGS
// const title = "Best reads of 2021";
// const author = "Mario";
// const likes = 10;

// //concatination way
// // let result =
// //   "the blog called " + title + " by " + author + " has " + likes + " likes";
// // console.log(result);

// //Template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// //creating HTML templates

// let HTML = `
// <h2> ${title} </h2>
// <p> ${author} </p>
// <span> This blog has ${likes} likes </span>
// `;

// console.log(HTML);

//=======================================================================================================================
// ARRAYS

// let ninjas = ["Quinn", "Ryan", "Jayden"];

// // ninjas[1] = "New Name";
// // console.log(ninjas);

// // let ages = [20, 25, 30, 35];
// // console.log(ages);

// // let random = ["Quinn", "Ryan", 22, 17];
// // console.log(random);

// // console.log(ninjas.length);

// //ARRAY METHIODS

// // let results = ninjas.join(",");

// // let results = ninjas.indexOf("Jayden");

// // let results = ninjas.concat(["Ken", "Rex"]);
// let results = ninjas.push("ken");
// results = ninjas.pop();
// console.log(ninjas);

//=======================================================================================================================
//NULL / UNDEFINED

// let age = null;

// console.log(age, age + 3, `the age is ${age}`);

//=======================================================================================================================
// Loose Vs Strict

//Loose Comp
// let age = 25;

// console.log(age == 25);
// console.log(age == "25");
// console.log(age != 25);
// console.log(age != "25");

//Strict Comp

// console.log(age === 25);
// console.log(age === "25");
// console.log(age !== 25);
// console.log(age !== "25");

//=======================================================================================================================
//TYPE CONVERSION

let score = "100";

// score = Number(score);
// console.log(score + 1);

// let result = Number("hello");
// let result = String(502);
// let result = Boolean(-2);

// let result = Boolean("");

// console.log(result, typeof result);
