import WeatherAPI from './weatherAPI.js';
import weatherView from './weatherView.js'; 

class WeatherController {

    constructor(apiKey) {
        this.weatherAPI = new WeatherAPI(apiKey);
    }

    updateView(weatherData) {
        let view = new weatherView(weatherData);

    }

    updateCity(cityName) {
        if(cityName == undefined || cityName.trim().length == 0)
            return;

        return this.weatherAPI
                .getWeather(cityName)
                .then(data => this.updateView(data))
    }
}


let addEvent = function(){
    let element = document.getElementById("search");
    element.addEventListener("blur",(event)=> execute(event.target.value));
    element.addEventListener('keyup', (event) => {
        if (event.keyCode == 13 || event.which == 13) {
            execute(event.target.value);
            event.preventDefault();
        }
    });
}


let execute = function(query){
    let controller = new WeatherController("0b7342e5520defa0db6bac89db34d064");
    controller.updateCity(query)
            .catch(error => console.log(error));
    document.querySelector("#search").value="";
}

addEvent();