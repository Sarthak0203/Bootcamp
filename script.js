const apikey="eef218a1131c6c00800e95ad4e02e91d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");  
const wheatherIcon=document.querySelector(".wheather-icon")

async function checkWheather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);
    var data = await response.json();
    if(data.cod==404){
        document.querySelector(".city").innerHTML = "Invalid City Name";
    }
    else{
        document.querySelector(".city").innerHTML = data.name;
    }
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/hr";
    if(data.weather[0].main=="Clouds"){
        wheatherIcon.src="assets/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wheatherIcon.src="assets/clear.png"
    }
    else if(data.weather[0].main== "Rain"){
        wheatherIcon.src="assets/rain.png"
    }
    else if(data.weather[0].main== "Drizzle"){
        wheatherIcon.src="assets/drizzle.png"
    }
    else if(data.weather[0].main== "Mist"){
        wheatherIcon.src="assets/mist.png"
    }
}

searchbtn.addEventListener("click",()=>{
    checkWheather(searchbox.value);
})

searchbox.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkWheather(searchbox.value);
    }
});
