// // store data in local storage
// localStorage.setItem("name", "mario");
// localStorage.setItem("age", 50);

// // get data in local storage
// let name = localStorage.getItem("name");
// let age = localStorage.getItem("age");

// // update data
// localStorage.setItem("name", "quinn");
// localStorage.name = "jaeden";

// console.log(name, age);
// =======================================================================================================================
// deleting data
// localStorage.removeItem("name");
// localStorage.clear();
// =======================================================================================================================
const todos = [
  { text: "play", author: "quinn" },
  { text: "play 2", author: "ryan" },
  { text: "play 3", author: "jay" },
];

localStorage.setItem("todos", JSON.stringify(todos));

const stored = localStorage.getItem("todos");

console.log(JSON.parse(stored));
