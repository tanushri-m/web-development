import Utility from './utility.js';

export class Period {
    constructor(data, time) {
        this.time        =  time;
        this.temperature =  Utility.kelvin2Cel(data.main.temp);
        this.feels_like  =  Utility.kelvin2Cel(data.main.feels_like);
        this.temp_min    =  Utility.kelvin2Cel(data.main.temp_min);
        this.temp_max    =  Utility.kelvin2Cel(data.main.temp_max);
        this.pressure    =  data.main.pressure;
        this.sea_level   =  data.main.sea_level;
        this.grnd_level  =  data.main.grnd_level;
        this.humidity    =  data.main.humidity;
        this.temp_kf     =  data.main.temp_kf;
        this.weather     =  data.weather[0].main;
    }
}

export class WeatherDay {
    constructor(day, period){
        this.day = day;
        this.period = period;
    }
}

