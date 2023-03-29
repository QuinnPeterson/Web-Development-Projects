const cityForm = document.querySelector("form");
const details = document.querySelector(".details");
const card = document.querySelector(".card");
const time = document.querySelector("img.time");
const icon = document.querySelector(".icon img");
const forcast = new Forcast();

const updateUI = (data) => {
  //   const cityDets = data.cityDets;
  //   const weather = data.weather;

  // destructure properties
  const { cityDets, weather } = data;

  // update details template
  details.innerHTML = `
  <h5 class="my-3">${cityDets.EnglishName}</h5>
  <div class="my-3">${weather.WeatherText}</div>
  <div class="display-4 my-4">
    <span>${weather.Temperature.Imperial.Value}</span>
    <span>&deg;F</span>
  </div>
  `;
  console.log(weather);
  //   update the night/day & icon
  const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute("src", iconSrc);

  let timeSrc = null;
  if (weather.IsDayTime) {
    timeSrc = "img/day.svg";
  } else {
    timeSrc = "img/night.svg";
  }
  time.setAttribute("src", timeSrc);

  // remove the d-none class if present
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

cityForm.addEventListener("submit", (e) => {
  //prevent default action on form
  e.preventDefault();

  //   get city value
  const city = cityForm.city.value.trim();
  cityForm.reset();

  //   update UI with new city
  forcast
    .updateCity(city)
    .then((data) => {
      updateUI(data);
    })
    .catch((err) => console.log(err));

  // set local storage
  localStorage.setItem("city", city);
});

if (localStorage.getItem("city")) {
  forcast
    .updateCity(localStorage.getItem("city"))
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
}
