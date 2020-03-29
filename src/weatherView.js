class weatherView {

    constructor(weatherReports){
        this.weatherReports = weatherReports;
        this.getDates = this.getWeatherDays();
    }

    getWeatherDays(){
        let set = [];
        Object.keys(this.weatherReports).map(day => set.push(day));
        return[...set];
    }
}

export default weatherView;

    