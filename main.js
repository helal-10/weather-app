// import { getWeatherByCity } from "./fetch.js";

// async function showWeather() {
//   const weatherData = await getWeatherByCity("Sakaka");
//   console.log(weatherData);
// }

// showWeather();

function activateUlHeroSection() {
  document.getElementById("burger-menu").onclick = () =>
    document.getElementById("burger-menu").classList.toggle("active");
}
activateUlHeroSection();

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("section-text").classList.add("active");
  document.getElementById("login-main-mutton").classList.add("active");
});

window.addEventListener("scroll", (e) => {
  const fullWindoHeight = document.documentElement.clientHeight;
  const fullElementHeight = document.getElementById("about").clientHeight;
  const fromTopToElement = document
    .getElementById("about")
    .getBoundingClientRect().top;
  if (fullWindoHeight - fromTopToElement >= fullElementHeight * 0.5) {
    document.getElementById("about").classList.remove("disappeared");
  }
});
