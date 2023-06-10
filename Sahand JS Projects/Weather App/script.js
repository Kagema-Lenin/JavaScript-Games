const apiKey = "--";

const weatherData = document.getElementById('weather-data');
const cityInput = document.getElementById('city-input');
const myForm = querySelector('form');

myForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const cityValue = cityInput.value;
  getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}$units=metric`);
    
    if (!response.ok) { // If the response is not okay: gives any error.
      throw new Error("Network response was not okay");
    }

    const data = await response.json();
    const temperature = Math.round(data.main.temp);
    const description = data.weather[0].description;
    const icon = data.weather[0].icon;

    const details = [
      `Feels like: ${Math.round(data.main.feels_like)}`,
      `Humidity: ${data.main.humidity}%`,
      `Wind speed: ${data.wind.speed} m/s`
    ];

    weatherData.querySelector('.icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon" />`;
    weatherData.querySelector('.temperature').textContent = `${temperature} C`;
    weatherData.querySelector('.description').textContent = `${description}`;
    weatherData.querySelector('.details').innerHTML = details.map((detail) => `<div>${detail}</div>`).join('');

  } catch (error) {
  }
}