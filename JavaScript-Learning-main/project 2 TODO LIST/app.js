const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");

const genTemplate = (todo) => {
  const HTML = `
  <!-- ${todo} item start -->
  <li
    class="
      list-group-item
      d-flex
      justify-content-between
      align-items-center
    "
  >
    <span> ${todo} </span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  <!-- ${todo} item end -->
  `;

  list.innerHTML += HTML;
};

addForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const todo = addForm.add.value.trim();
  if (todo.length) {
    genTemplate(todo);
    addForm.reset();
  }
});

//Delete TODOs
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete")) {
    event.target.parentElement.remove();
  }
});

//Search
const filterTODOs = (term) => {
  Array.from(list.children)
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add("filtered"));

  Array.from(list.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (event) => {
  const term = search.value.trim().toLowerCase();
  filterTODOs(term);
});
