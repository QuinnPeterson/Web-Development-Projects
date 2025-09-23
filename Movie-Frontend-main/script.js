let movies = [];
let favourites = JSON.parse(localStorage.getItem("my-fav")) || [];
let ratings = JSON.parse(localStorage.getItem("ratings")) || {}; // Stores ratings by movie ID

document.addEventListener("DOMContentLoaded", () => {
  getRandomMovies();
  updateFavouritesList();
});

async function getMovieRequest(searchValue) {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=449ca763`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.Search) {
    movies = data.Search;
    updateMovieList();
  }
}

async function getRandomMovies() {
  // Fetch random movies by using a predefined popular movie keyword
  const popularKeywords = ["action", "comedy", "adventure", "drama", "sci-fi"];
  const randomKeyword =
    popularKeywords[Math.floor(Math.random() * popularKeywords.length)];
  const url = `http://www.omdbapi.com/?s=${randomKeyword}&apikey=449ca763`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.Search) {
    movies = data.Search;
    updateMovieList();
  }
}

function handleSearchInput(event) {
  const searchValue = event.target.value;
  getMovieRequest(searchValue);
}

function updateMovieList() {
  const movieList = document.getElementById("movie-list");
  movieList.innerHTML = "";
  movies.forEach((movie) => {
    if (movie && movie.Poster) {
      const movieItem = document.createElement("div");
      movieItem.className =
        "movie-item bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center";
      movieItem.innerHTML = `
          <img src="${movie.Poster}" alt="${
        movie.Title
      }" class="object-cover w-full h-48 rounded-lg mb-2">
          <h3 class="text-lg font-bold text-white mt-2">${movie.Title}</h3>
          <p class="text-gray-300 text-sm mt-1">${
            movie.Plot || "No description available"
          }</p>
          <div class="flex mt-2">
            ${getStarRatingHTML(movie.imdbID)}
          </div>
          <button class="bg-blue-500 text-white text-xs sm:text-s px-4 py-2 rounded-lg mt-4 hover:bg-blue-600" onclick="addToFavourites('${
            movie.imdbID
          }')">Add to Favourites ❤️</button>`;
      movieList.appendChild(movieItem);
    }
  });
}

function updateFavouritesList() {
  const favouritesList = document.getElementById("favourites-list");
  favouritesList.innerHTML = "";
  favourites.forEach((movie) => {
    if (movie && movie.Poster) {
      const favouriteItem = document.createElement("div");
      favouriteItem.className =
        "movie-item bg-gray-800 p-4 rounded-lg shadow-md flex flex-col items-center";
      favouriteItem.innerHTML = `
          <img src="${movie.Poster}" alt="${
        movie.Title
      }" class="object-cover w-full h-48 rounded-lg mb-2">
          <h3 class="text-lg font-bold text-white mt-2">${movie.Title}</h3>
          <p class="text-gray-300 text-sm mt-1">${
            movie.Plot || "No description available"
          }</p>
          <div class="flex mt-2">
            ${getStarRatingHTML(movie.imdbID)}
          </div>
          <button class="bg-red-500 text-white text-xs sm:text-s px-4 py-2 rounded-lg mt-4 hover:bg-red-600" onclick="removeFromFavourites('${
            movie.imdbID
          }')">Remove from Favourites 🗑️</button>`;
      favouritesList.appendChild(favouriteItem);
    }
  });
}

function getStarRatingHTML(movieID) {
  const rating = ratings[movieID] || 0;
  let starsHTML = "";
  for (let i = 1; i <= 5; i++) {
    starsHTML += `
        <span class="cursor-pointer ${
          i <= rating ? "text-yellow-400" : "text-gray-400"
        }" onclick="setRating('${movieID}', ${i})">&#9733;</span>
      `;
  }
  return starsHTML;
}

function setRating(movieID, rating) {
  ratings[movieID] = rating;
  localStorage.setItem("ratings", JSON.stringify(ratings));
  updateMovieList();
  updateFavouritesList();
}

function addToFavourites(movieID) {
  const movie = movies.find((m) => m.imdbID === movieID);
  if (movie && !favourites.some((fav) => fav.imdbID === movie.imdbID)) {
    favourites.push(movie);
    saveToLocalStorage();
    updateFavouritesList();
  }
}

function removeFromFavourites(movieID) {
  favourites = favourites.filter((movie) => movie.imdbID !== movieID);
  saveToLocalStorage();
  updateFavouritesList();
}

function saveToLocalStorage() {
  localStorage.setItem("my-fav", JSON.stringify(favourites));
}
