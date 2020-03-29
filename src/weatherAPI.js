import {WeatherDay, Period} from './weatherModel.js';
import CurrentDay from './currentDayView.js';
class WeatherAPI {
    constructor(apiKey){
        this.apiKey = apiKey;
    }

    transformData(weatherJSON) {
        let periodMap = weatherJSON.list.reduce((accum, current) =>{
            let date = current.dt_txt.split(" ");
            let uniqueDate = date[0];

            if(accum[uniqueDate] === undefined){
                accum[uniqueDate] = [new Period(current, new Date(current.dt_txt))];
            }
            else{
                accum[uniqueDate].push(new Period(current, new Date(current.dt_txt)));
            }
            return accum;
        },{});
        
        let days = Object.keys(periodMap).map(day => new WeatherDay(new Date(day), periodMap[day]));        
        let wetherData = new CurrentDay(weatherJSON.city, days);
        wetherData.clearContainer();

        return days;
    }

    getWeather(city){
        let weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`;
        return fetch(weatherApi)
                .then(response => response.json())
                .then(data => this.transformData(data));
    }
}

export default WeatherAPI;