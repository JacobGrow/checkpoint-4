export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    this.city = data.name
    this.temp = Math.floor(data.main.temp*(9/5)-459.67)
    this.celsius = Math.floor(data.main.temp - 273.15)
  }

  get Template() {
    return `
    <h4 class="p-0 m-0">${this.city}</h4>
    <h5 class="p-0 m-0 pointer" onclick="app.weatherController.drawCelsius();">${this.temp}&#8457</h5>
    `
  }

  get SubTemplate(){
    return `
    <h4 class="p-0 m-0">${this.city}</h4>
    <h5 class="p-0 m-0 pointer" onclick="app.weatherController.drawWeather();">${this.celsius}&#x2103;</h5>
    `
  }
}