import axios from 'axios';
let today=document.querySelector("#day");
let current=new Date();
let hours=current.getHours();
let minutes =current.getMinutes();
let dayName=current.getDay();
 let days=[
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",];
   let day= days[current.getDay()];
   today.innerHTML=`${day}${hours}:${minutes}`;

function showWeather(response){
  let town=document.querySelector("#town");
  town.innerHTML= response.data.name;
  let sky=document.querySelector("#sky");
  sky.innerHTML=response.data.weather[0].description;
  let temperature=document.querySelector("#temperature");
  temperature.innerHTML= Math.round(response.data.main.temp);
  }
  
function search(event){
  event.preventDefault(); 
  let town = document.querySelector("#search-input").value;
  let apiKey = `3bf114a59306fc3977fc30616a7deec6`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
  let form=document.querySelector(".text");
 form.addEventListener("submit",search);
 
 
