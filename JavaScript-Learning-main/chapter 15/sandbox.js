// const userOne = {
//   username: "quinn",
//   email: "quinn@gmail.com",

//   login() {
//     console.log("user logged in ");
//   },

//   logout() {
//     console.log("user logged out ");
//   },
// };

// console.log(userOne.username, userOne.email);
// userOne.login();

class User {
  constructor(username) {
    this.username = username;
    this.score = 0;
  }

  login() {
    console.log(`${this.username} just logged in`);

    return this;
  }
  incScore() {
    this.score++;

    console.log(`${this.username} has a score of ${this.score}`);

    return this;
  }
}

class Admin extends User {
  constructor(username, title) {
    super(username);
    this.title = title;
  }

  deleteUser() {
    // users = users.filter((u) => {
    //   return u.username !== user.username;
    // });
  }
}

const userOne = new User("Quinn");
const userTwo = new User("Ryan");
const userThree = new Admin("Jaeden", "jay jay");

console.log(userThree);
