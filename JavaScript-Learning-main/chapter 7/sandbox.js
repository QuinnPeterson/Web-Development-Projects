const form = document.querySelector(".signup-form");
// const username = document.querySelector("#username");
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(form.username.value);
  //   console.log(username.value);

  const username = form.username.value;
  const usernamePattern = /^[a-zA-Z]{6,12}$/;
  //Validation
  if (usernamePattern.test(username)) {
    //feedback good info
    feedback.textContent = "that username is valid! :D";
  } else {
    //feedback help info
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long";
  }
});

// const username = "quinner";
// const pattern = /^[a-z]{6,}$/;

// // let result = pattern.test(username);

// // if (result) {
// //   console.log("result passed :)");
// // } else {
// //   console.log("result failed :(");
// // }
// // console.log(result);

// let result = username.search(pattern);
// console.log(result);
