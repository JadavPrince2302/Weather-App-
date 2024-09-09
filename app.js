const apiId = "fc87d89b27a0ff2c839e06d086330ffb";
const appUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const cloudChange = document.querySelector(".clouds img")

async function checkweather(city) {
    const response = await fetch(appUrl + city + `&appid=${apiId}`);
    var data = await response.json();

    console.log(data);
    
    document.querySelector("#cit").innerHTML = data.name;
    document.querySelector("#tem").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector("#humi").innerHTML = data.main.humidity + "%";
    document.querySelector("#win").innerHTML = data.wind.speed + " KM/H";

    if(data.weather[0].main == "Clouds") {
        cloudChange.src = "images/clouds.png"
    } 
    else if(data.weather[0].main == "Clear") {
        cloudChange.src = "images/clear.png"   
    }
    else if(data.weather[0].main == "Drizzle") {
        cloudChange.src = "images/drizzle.png"   
    }
    else if(data.weather[0].main == "Rain") {
        cloudChange.src = "images/rain.png"   
    }
    else if(data.weather[0].main == "Mist") {
        cloudChange.src = "images/mist.png"   
    }
    else if(data.weather[0].main == "Snow") {
        cloudChange.src = "images/snow.png"   
    }
    
}

searchButton.addEventListener("click",() => {
    checkweather(searchBox.value);
})
