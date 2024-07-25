const apikey = "6e3f7c046f484444b5932053242107";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Weather data not available");
        }
        const data = await response.json();

        document.querySelector(".city").innerText = data.location.name;
        document.querySelector(".temp").innerText = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerText = data.current.humidity + "%";
        document.querySelector(".wind").innerText = data.current.wind_kph + " km/h";

    
        let condition = data.current.condition.text.toLowerCase();
        if (condition.includes("cloud")) {
            weatherIcon.src = "images/clouds.png";
        } else if (condition.includes("rain")) {
            weatherIcon.src = "images/rain.png";
        } else if (condition.includes("drizzle")) {
            weatherIcon.src = "images/drizzle.png";
        } else if (condition.includes("mist")) {
            weatherIcon.src = "images/mist.png";
        } else {
            weatherIcon.src = "images/default.png";
        }

        // Display the weather card
        document.querySelector(".weather").style.display = "block";
    } catch (error) {
        alert(error.message);
    }
}

searchBtn.addEventListener("click", () => {
    if (searchBox.value.trim() !== "") {
        checkWeather(searchBox.value.trim());
    } else {
        alert("Please enter a city name.");
    }
});