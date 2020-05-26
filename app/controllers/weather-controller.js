import WeatherService from "../services/weather-service.js";
import _store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen

function drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _store.State.weather);
  let weather = _store.State.weather
  if (weather){
    document.getElementById("weather").innerHTML = weather.Template
  }
}
function drawCelsius(){
  let weather = _store.State.weather
  if (weather){
    document.getElementById("weather").innerHTML = weather.SubTemplate
  }
}
export default class WeatherController {
  constructor() {
    _store.subscribe("weather", drawCelsius)
    _store.subscribe("weather", drawWeather);
    WeatherService.getWeather();
  }
  drawCelsius(){
    let weather = _store.State.weather
    if (weather){
      document.getElementById("weather").innerHTML = weather.SubTemplate
    }
}
  drawWeather() {
  console.log("THE WEATHER MAN SAYS:", _store.State.weather);
  let weather = _store.State.weather
  if (weather){
    document.getElementById("weather").innerHTML = weather.Template
  }
}
  
}
