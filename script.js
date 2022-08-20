let weather = {
  apiKey: "19626a933ca0f8884000d6fc5b4c656a",
  fetchWeather: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description, icon } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerHTML = "Weather in " + name;
    // document.querySelector(".icon").src =
    document.querySelector(".description").innerHTML = description;
    document.querySelector(".temp").innerHTML = temp + "°C";
    document.querySelector(".humidity").innerHTML =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerHTML = "Wind speed: " + speed + "Km/h";

    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = `url('https://source.unsplash.com/random/1920×1080/?${name}')`;
  },
};

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", function() {
    weather.fetchWeather(searchBar.value);
})

searchBar.addEventListener("keyup", function (event) {
    
  if (event.key == "Enter") {
    weather.fetchWeather(searchBar.value);
  }
});
