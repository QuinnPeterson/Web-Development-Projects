// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         // callback(undefined, data);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         // callback("can`t fetch data", undefined);
//         reject("error getting file");
//       }
//     });

//     //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("todos/luigi.json")
//   .then((data) => {
//     console.log(data);
//     return getTodos("todos/mario.json");
//   })
//   .then((data) => {
//     console.log("");

//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //promice example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // resolve("some data");
//     reject("some error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Call todos here
// getTodos("todos/luigi.json", (err, data) => {
//   console.log(data);
//   getTodos("todos/mario.json", (err, data) => {
//     console.log(data);
//   });
//   getTodos("todos/quinn.json", (err, data) => {
//     console.log(data);
//   });
//   // if (err) {
//   //   console.log(err);
//   // } else {
//   //   console.log(data);
//   // }
// });

const getTodos = async () => {
  const response = await fetch("todos/luigi.json");

  if(response !== 200){
    throw new Error("cannot fetch data")
  }

  const data = await response.json();
  return data;
};

getTodos()
  .then((data) => console.log(data))
  .catch((err) => console.log(err.message));

// fetch("todos/luigi.json")
//   .then((responce) => {
//     return responce.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
