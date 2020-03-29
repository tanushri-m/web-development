import Utility from './utility.js' 
 
 class CurrentDay {
    constructor(cityData, days) {
        this.days = days;
        this.city = cityData.name;
        this.country = cityData.country;
        this.location = {
            lat : cityData.coord.lat,
            lon : cityData.coord.lon,
        },
        this.timezone = cityData.timezone;
        
        this.updateTime();

        this.sunrise = Utility.convertToDate(cityData.sunrise);
        this.sunset = Utility.convertToDate(cityData.sunset);
        this.population = cityData.population;
    }

    updateTime () {
        this.time = Utility.destinationTime(this.timezone);
        this.period = Utility.getCurrentPeriod(this.time, this.days);
    }

    createCurrentView(){
        let currentDate = Utility.getCurrentDate(this.time, this.days)[0];
        let getTime = Utility.getCurrentPeriod(this.time, this.days);
        let html = ` <span id = "current_country">${this.city},</span><span id ="country">${this.country}</span>
                        <div class = "lat">
                            <span class = "lat_lon">LAT ${this.location.lat}</span><span class="lat_lon">LON ${this.location.lon}</span>
                        </div>
                         <div class ="temprature-container">
                         <i class="weather-icon fa ${Utility.getWeatherIcon(this.period.weather)}"></i>
                         <div class = "current_temperatures">
                                <div>
                                    <div class ="temp_current">${Utility.roundNumber(getTime.temperature)}<sup>°C</sup></div>
                                </div>
                                <div class = "present_temp">
                                    <span class ="temprature">
                                        <div class="degree">${Utility.roundNumber(Utility.getMinTemprature(currentDate.period))}<sup>°c</sup></div>
                                        <div class="detail">MIN</div>
                                    </span>
                                    <span id ="border-right"></span>
                                    <span class ="temprature">
                                        <div class="degree">${Utility.roundNumber(Utility.getMaxTemprature(currentDate.period))}<sup>°c</sup></div>
                                        <div class="detail">MAX</div>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div id = "currentTimeAndDate">
                            <div id = "current_Date">
                                <span class="date">${this.time.getDate()}<sup>${Utility.getDateSuffix(this.time.getDate())}</sup></span>
                                <span class="month">${Utility.getMonth(this.time.getMonth()+1)},</span>
                                <span class="year">${this.time.getFullYear()}</span>
                            </div>
                            <div id = "current_Time">${Utility.getCurrentTime(this.time)}</div>
                        </div>`;
                            
    return html;
   }

   createRemainigIntervals(){
      let leftArray =  Utility.leftIntervals(this.time, this.days);
      return leftArray.map(period =>  `<div class = "next_Interval">
                                        <div class = "temp_min">${Utility.roundNumber(period.temp_min)}<sup>°c</sup></div>
                                        <div class = "nextTime">${Utility.createHour(period.time.getHours())}</div>
                                        </div>`
                                    
                                ).join("");
   }

   remainingIntervalsHTML(){
    let currentView = this.createCurrentView(this.time, this.days);
    let leftIntervals = this.createRemainigIntervals(this.time, this.days);
    return `<div class = "current-Day">${currentView}<div id = "left__Interval">${leftIntervals}</div></div>`;

}
    
     leftDaysHTML(){
        let nextDays = Utility.leftDays(this.time,this.days);
        return nextDays.map(day =>  `<div class = "next_Day">
                                    <i class="weather-icon fa ${Utility.getWeatherIcon(day.period[3].weather)}"></i>
                                     <div class = "nextDay_temp">
                                     <div class = "temp">
                                     <div class = "curr_temp">${Utility.roundNumber(day.period[3].temperature)}<sup>°c</sup></div>
                                     </div>
                                     <div class = "nextDayTemperatures">
                                     <div class ="temp_minMax">
                                     <div class = "temp_min">${Utility.roundNumber(Utility.getMinTemprature(day.period))}<sup>°c</sup></div>
                                     <div class = "min">MIN</div>

                                    </div>
                                    <div class = "minmax">
                                    <div class = "temp_min">${Utility.roundNumber(Utility.getMaxTemprature(day.period))}<sup>°c</sup></div>
                                    <div class = "min">MAX</div>
                                    </div>
                                    </div>
                                    <div class = "nextDay_time">${Utility.convertDateMonth(day.day)}</div>
                                    </div>

                                    </div>`
    ).join("");

}

   renderLeftDays(){ 
       let nextDays = this.leftDaysHTML();
       return`<div class = "Next__DayReport">${nextDays}</div>`;
}

  render() {
    let container = document.querySelector("#weather-container");
    if(container.innerHTML === ""){
       let elements = `${this.remainingIntervalsHTML()} ${this.renderLeftDays()}`;
       container.insertAdjacentHTML("beforeend",elements);
    }
    else{
       container.innerHTML = "";
       let elements = `${this.remainingIntervalsHTML()} ${this.renderLeftDays()}`;
       container.insertAdjacentHTML("beforeend",elements);
       
    }
  }

  clearContainer(){
    this.render();

    if(refreshHandler != -1){
        clearInterval(refreshHandler);
    }

    refreshHandler = setInterval(() => {
        let currentMinute = this.time.getMinutes();
        this.updateTime();
        let newMinute = this.time.getMinutes();

        if(currentMinute != newMinute){
            this.render();
        }
     }, 500)
  }
}

let refreshHandler = -1;
export default CurrentDay;

