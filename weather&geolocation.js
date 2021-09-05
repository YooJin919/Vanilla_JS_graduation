
const API_KEY = "e5b038d89bff012e315787f5ac01ebc7";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = `You are in ${data.name}\n`;
        weather.innerText = `${data.name}'s weather : ${data.weather[0].main}\ntemperature : ${data.main.temp}℃`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);