let searchWeather = document.querySelector("[searchWeather]");
let yourWeather = document.querySelector("[yourWeather]");
let city = document.querySelector(".city");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let tempImg = document.querySelector(".temperatureImg");
let windspeed = document.querySelector(".windPercent");
let humidity = document.querySelector(".humidPercent");
let clouds = document.querySelector(".cloudPercent");
let visibility1 = document.querySelector(".visibility1");
let visibility2 = document.querySelector(".visibility2");
let searchbtn = document.querySelector("#search");
let input = document.querySelector("input");
var city_name = "";

yourWeather.addEventListener("click", geoLocation);

function geoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(fethchYourWeatherDetails);
  } else {
    console.log("geolocation access not provided");
  }
}

searchWeather.addEventListener("click", () => {
  visibility1.style.display = "none";
  visibility2.style.display = "flex";
});

yourWeather.addEventListener("click", () => {
  visibility1.style.display = "block";
  visibility2.style.display = "none";
});

searchbtn.addEventListener("click", () => {
  let value = input.value;
  if (value) {
    city_name = value;
    fethchWeatherDetails();
    visibility1.style.display = "block";
    visibility2.style.display = "none";
  }
});

input.addEventListener("keypress", (e) => {
  let value = input.value;
  if (e.key == "Enter") {
    city_name = value;
    fethchWeatherDetails();
    visibility1.style.display = "block";
    visibility2.style.display = "none";
  }
});

const API_key = "bf4f5f4c21a88203587b681896330b9d";

async function fethchYourWeatherDetails(position) {
  try {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    );
    let data = await resp.json();
    console.log("data = ", data);
    // console.log(data.clouds.all);
    temperature.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    city.textContent = data.name;
    humidity.textContent = `${data.main.humidity} %`;
    clouds.textContent = `${data.clouds.all} %`;
    windspeed.textContent = `${data.wind.speed} m/s`;
    weather.textContent = data.weather[0].main;
  } catch (err) {
    console.log("no city found");
  }
}

async function fethchWeatherDetails() {
  try {
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_key}&units=metric`
    );
    let data = await resp.json();
    temperature.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    city.textContent = data.name;
    humidity.textContent = `${data.main.humidity} %`;
    clouds.textContent = `${data.clouds.all} %`;
    windspeed.textContent = `${data.wind.speed} m/s`;
    weather.textContent = data.weather[0].main;
  } catch (err) {
    console.log("no city found");
  }
}
