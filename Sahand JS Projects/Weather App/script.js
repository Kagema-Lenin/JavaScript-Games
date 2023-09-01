const apiKey = "--";

const weatherData = document.getElementById('weather-data');
const cityInput = document.getElementById('city-input');
const myForm = document.querySelector('form');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}&q=${cityValue}&$units=metric`);
    
    if (!response.ok) { // If the response is not okay: gives any error.
      throw new Error("Network response was not okay");
    }

    const data = await response.json();
    const temperature = Math.round(data.list[26].main.temp);
    const description = data.list[26].weather[0].description;
    const icon = data.list[26].weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.list[26].main.feels_like)}`,
      `Humidity: ${data.list[26].main.humidity}%`,
      `Wind speed: ${data.list[26].wind.speed} m/s`
    ];

    weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`;
    weatherData.querySelector('.temperature').textContent = `${temperature}°C`;
    weatherData.querySelector('.description').textContent = `${description}`;
    weatherData.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');

  } catch (error) {
    weatherData.querySelector('.icon').innerHTML = "";
    weatherData.querySelector('.temperature').textContent = "";
    weatherData.querySelector('.description').textContent = "Error detected. Please try again later.";
    weatherData.querySelector('.details').innerHTML = "";
  }
}