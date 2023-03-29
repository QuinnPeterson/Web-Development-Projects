const list = document.querySelector("ul");
const form = document.querySelector("form");
const button = document.querySelector("button");

const addRecipe = (recipe, id) => {
  let time = recipe.created_at.toDate();
  const HTML = `
    <li data-id="${id}">
        <div> ${recipe.title} </div>
        <div> ${time} </div>
        <button class ="btn btn-danger btn-small my-2"> delete </button>
    </li>
    `;
  list.innerHTML += HTML;
};

const deleteRecipe = (id) => {
  const recipes = document.querySelectorAll("li");
  recipes.forEach((recipe) => {
    if (recipe.getAttribute("data-id") === id) {
      recipe.remove();
    }
  });
};

//get documents
const unsub = DB.collection("recipes").onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    const doc = change.doc;
    if (change.type === "added") {
      addRecipe(doc.data(), doc.id);
    } else if (change.type === "removed") {
      deleteRecipe(doc.id);
    }
  });
});

//add documents
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const now = new Date();
  const recipe = {
    title: form.recipe.value,
    created_at: firebase.firestore.Timestamp.fromDate(now),
  };

  DB.collection("recipes")
    .add(recipe)
    .then(() => {
      console.log("recipe added");
    })
    .catch((err) => {
      console.log(err);
    });
});

//deleting data

list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const id = e.target.parentElement.getAttribute("data-id");
    DB.collection("recipes")
      .doc(id)
      .delete()
      .then(() => {
        console.log("deleted");
      });
  }
});

//unsub from database changes
button.addEventListener("submit", () => {
  unsub();
  console.log("unsubbed");
});
