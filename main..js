const apiKey = "c8c9c289c8df70213fa6b42404d8668a";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
 
async function weatherCheck(city){
    const response = await fetch(apiURL + `${city}` + `&appid=${apiKey}`)
    const data = await response.json();
    
    document.querySelector(".temp").innerText = data.main.temp + "°C"
    document.querySelector(".location").innerText = data.name
    document.querySelector(".humidity-text").innerText = data.main.humidity + "%"
    document.querySelector(".wind-text").innerText = data.wind.speed + "km/h"
    if(data.weather[0].main === "Clear"){
        document.querySelector(".weather-icon").src = "Assets/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
        document.querySelector(".weather-icon").src = "Assets/rain.png"
    }
    else if(data.weather[0].main == "Clouds"){
        document.querySelector(".weather-icon").src = "Assets/cloud.png"
    }
    else if(data.weather[0].main == "Snow"){
        document.querySelector(".weather-icon").src = "Assets/snow.png"
    }
    else if(data.weather[0].main == "Fog"){
        document.querySelector(".weather-icon").src = "Assets/fog.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        document.querySelector(".weather-icon").src = "Assets/drizzle.png"
    }
    else if(data.weather[0].main == "Windy"){
        document.querySelector(".weather-icon").src = "Assets/wind.png"
    }
    

}
function search(){
    const city = document.querySelector(".search-bar").value;
    weatherCheck(city);
}
document.querySelector(".search-btn").addEventListener("click", search);




 