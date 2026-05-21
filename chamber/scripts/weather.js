const apiKey = "YOUR_API_KEY";

const lat = 6.34;
const lon = 5.62;

const currentURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getCurrentWeather() {

  const response = await fetch(currentURL);

  const data = await response.json();

  document.querySelector("#current-weather").innerHTML = `
    <p><strong>${data.main.temp}°C</strong></p>
    <p>${data.weather[0].description}</p>
  `;
}

async function getForecast() {

  const response = await fetch(forecastURL);

  const data = await response.json();

  const forecastDiv = document.querySelector("#forecast");

  const filtered = data.list.filter(item =>
    item.dt_txt.includes("12:00:00")
  );

  filtered.slice(0, 3).forEach(day => {

    forecastDiv.innerHTML += `
      <p>
        ${new Date(day.dt_txt).toLocaleDateString()} :
        ${day.main.temp}°C
      </p>
    `;
  });
}

getCurrentWeather();
getForecast();