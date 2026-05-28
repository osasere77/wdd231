const apiKey = "bbfbf3543e024102d8c6c02994d56a92";

const lat = 6.34;
const lon = 5.62;

const currentWeatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

/* =========================
   WEATHER ELEMENTS
========================= */

const currentWeather =
document.querySelector("#current-weather");

const forecastContainer =
document.querySelector("#forecast");

/* =========================
   CURRENT WEATHER
========================= */

async function displayCurrentWeather() {

    try {

        currentWeather.innerHTML =
        `<p>Loading weather...</p>`;

        const response =
        await fetch(currentWeatherURL);

        if (!response.ok) {
            throw new Error("Weather data failed");
        }

        const data = await response.json();

        const temperature =
        Math.round(data.main.temp);

        const description =
        data.weather[0].description;

        const icon =
        data.weather[0].icon;

        const iconURL =
        `https://openweathermap.org/img/wn/${icon}@2x.png`;

        currentWeather.innerHTML = `

            <div class="weather-current-card">

                <img src="${iconURL}"
                     alt="${description}">

                <div>

                    <h3>${temperature}°C</h3>

                    <p>
                        ${description}
                    </p>

                    <p>
                        Humidity:
                        ${data.main.humidity}%
                    </p>

                </div>

            </div>
        `;

    } catch(error) {

        console.error(error);

        currentWeather.innerHTML = `

            <p class="weather-error">
                Unable to load weather data.
            </p>
        `;
    }
}

/* =========================
   FORECAST
========================= */

async function displayForecast() {

    try {

        const response =
        await fetch(forecastURL);

        if (!response.ok) {
            throw new Error("Forecast failed");
        }

        const data = await response.json();

        forecastContainer.innerHTML = "";

        const filteredForecast =
        data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        );

        filteredForecast
            .slice(0, 3)
            .forEach(day => {

            const date =
            new Date(day.dt_txt);

            const dayName =
            date.toLocaleDateString(
                "en-US",
                { weekday: "short" }
            );

            const temperature =
            Math.round(day.main.temp);

            const icon =
            day.weather[0].icon;

            const description =
            day.weather[0].description;

            const iconURL =
            `https://openweathermap.org/img/wn/${icon}.png`;

            forecastContainer.innerHTML += `

                <div class="forecast-card">

                    <h4>${dayName}</h4>

                    <img src="${iconURL}"
                         alt="${description}">

                    <p>${temperature}°C</p>

                </div>
            `;
        });

    } catch(error) {

        console.error(error);

        forecastContainer.innerHTML = `

            <p class="weather-error">
                Forecast unavailable.
            </p>
        `;
    }
}

/* =========================
   CALL FUNCTIONS
========================= */

displayCurrentWeather();

displayForecast();