// const para = document.querySelector("body > h1");

// console.log(para);

// const paras = document.querySelectorAll("p");

// const errors = document.querySelectorAll(".error");

// paras.forEach((para) => {
//   console.log(para);
// });

// console.log(errors);

//======================================================================================================================
// get an element by ID

// const title = document.getElementById("page-title");
// title.style = "color:blue";
// console.log(title);

//get element by class name
// const errors = document.getElementsByClassName("error");
// console.log(errors);
// console.log(errors[0]);

// get element by tag name

// const paras = document.getElementsByTagName("p");
// console.log(paras);
// console.log(paras[1]);
//======================================================================================================================
// const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerText = "HEY QUINN";

// const paras = document.querySelectorAll("p");

// paras.forEach((para) => {
//   console.log(para.innerText);
//   para.innerText += " new text";
// });

// const content = document.querySelector(".content");

// content.innerHTML += "<h2> HEY MAN</h2>";

// console.log(content.innerHTML);

// const people = ["mario", "luigi", "yoshi"];

// people.forEach((person) => {
//   content.innerHTML += `<p class="names"> ${person} </p>`;
// });
//======================================================================================================================
// const link = document.querySelector("a");

// console.log(link.getAttribute("href"));

// link.setAttribute("href", "https://www.thenetninja.co.uk");
// link.innerText = "The Net Ninja Website";
// console.log(link.getAttribute("href"));

// const msg = document.querySelector("p");

// console.log(msg.className);

// msg.setAttribute("class", "sucess");
// msg.setAttribute("style", "color:green");
//======================================================================================================================

// const title = document.querySelector("h1");

// // title.setAttribute("style", "margin: 50px");
// console.log(title.style);

// console.log(title.style.color);

// title.style.margin = "50px";
// title.style.color = "rgb(56 236 245)";
// title.style.fontSize = "60px";
//======================================================================================================================
//ADD REMOVE CLASSES

// const content = document.querySelector("p");

// console.log(content.classList);

// content.classList.add("error");
// content.classList.remove("error");

// content.classList.add("success");

// const content = document.querySelectorAll("p");

// content.forEach((element) => {
//   if (element.innerText.includes("success")) {
//     element.classList.add("success");
//   } else if (element.innerText.includes("error")) {
//     element.classList.add("error");
//   }
// });

// const title = document.querySelector("title");
// title.classList.toggle("test");
//======================================================================================================================
// const article = document.querySelector("article");

// Array.from(article.children).forEach((child) => {
//   child.classList.add("article-element");
// });

// const title = document.querySelector("h2");

// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);

//======================================================================================================================
//
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   console.log("clicked");
// });

// const items = document.querySelectorAll("li");

// items.forEach((item) => {
//   item.addEventListener("click", (event) => {
//     // console.log("item clicked", event.target);
//     event.target.style.textDecoration = "line-through";
//   });
// });
//======================================================================================================================
// const ul = document.querySelector("ul");

// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//   const li = document.createElement("li");
//   li.textContent = "something new todo";
//   ul.prepend(li);
// });
// // const items = document.querySelectorAll("li");

// // items.forEach((item) => {
// //   item.addEventListener("click", (event) => {
// //     event.target.remove();
// //     console.log("event in li");
// //     event.stopPropagation();
// //     // console.log("item clicked", event.target);
// //     // event.target.style.textDecoration = "line-through";
// //   });
// // });

// ul.addEventListener("click", (event) => {
//   // console.log("event in ul");
//   console.log(event.target);

//   if (event.target.tagName === "LI") {
//     event.target.remove();
//   }
// });
//======================================================================================================================
//more about events
const copy = document.querySelector(".copy-me");

copy.addEventListener("copy", () => {
  console.log("content");
});

const box = document.querySelector(".box");

box.addEventListener("mousemove", (event) => {
  // console.log(event.offsetX, event.offsetY);
  box.textContent = `Mouse X: ${event.offsetX}   Mouse Y: ${event.offsetY}`;
});

document.addEventListener("wheel", (event) => {
  console.log(event.pageX, event.pageY);
});
