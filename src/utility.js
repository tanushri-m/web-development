export default class Utility {
    static convertToDate(seconds){
        return new Date(seconds * 1000);
    }

    static kelvin2Cel (kelvin) {
        return kelvin - 273.15;
    }

    static destinationTime(timezone){
        let time = new Date();
        let currentLocalTime = time.getTime();
        let currentOffsetTime = time.getTimezoneOffset();
        let utc = currentLocalTime + currentOffsetTime * 60 * 1000;
        let countryTimeOffset = timezone * 1000;

        return new Date(utc + countryTimeOffset);
    }

    static getCurrentDate(time, days){
        let currentDate = time.getDate();
        let currentDateObject =  days.filter(ele => ele.day.getDate() === currentDate);
        return currentDateObject;
    }

    static overlappingTime(time, days) {

        let currentDate = this.getCurrentDate(time,days);
        let currentTime = currentDate[0].day.getHours();
        let periods = currentDate[0].period;

        let min = 7785222222222;
        let currentObject = 0;
        for(let i = 0;i < periods.length; i ++){
             let count = 0;
             let differenceInTime = currentTime - periods[i].time.getHours();
             if(differenceInTime >= 0 ){
                  count = differenceInTime;
                  if(count < min){
                     min = count;
                     currentObject = periods[i];
                
                    }
                }
        }
        return currentObject;
    }

    static timeConversions(time, min){
        if(time > 12) {
            if(min < 10){
            return "0"+ time-12 +":"+ "0"+ min +" "+"PM";
            }
        
            return "0"+ time-12 +":"+ min +" "+"PM";

        }
        else{ if(time > 9 && time <= 12){
                 if(min < 10){
                return  time +":"+ "0"+ min +" "+"AM";
                }
            
                return  time +":"+ min +" "+"AM";
            }
            else{
                if(min < 10){
                    return  time +":"+ "0"+ min +" "+"AM";
                    }
                
                    return "0"+ time +":"+ min +" "+"AM";
            }
        }

        
    }

    static getDayintoMin(min){
        return min.getMinutes();
    }

    static leftIntervals(time, days) {
        let currentDate = this.getCurrentDate(time, days);
        let currentZone = this.overlappingTime(time,days);
        let currentTime = currentZone.time.getHours();
       
        let periods = currentDate[0].period;
        let result = periods.map(period =>{
            return{
                delta : Math.abs(period.time.getHours() - currentTime),
                obj   : period
            }
        }).sort((periodA, periodB) =>(periodA.delta - periodB.delta))
         .slice(0,3).map(period =>period.obj).sort((periodA, periodB) =>periodA-periodB);
        

        return result;

    }
    static getWeek(number){
        switch(number){
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "Sunday";
        }

    }

    static getDateFromGMT(date){
        let day = date.getDay();
        let weekDay = this.getWeek(day);
        let num = date.getDate();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let alphaMonth = this.getMonth(month);
        let hour = date.getHours();
        let min = date.getMinutes();
        let time = this.timeConversions(hour,min);


        let dateObj =  ""+ num+this.getDateSuffix(num)+" "+ alphaMonth+" "+ year+ " ";
        return dateObj; 
    }

    static createHour(hour) {
        let hr = hour.getHours();
        if(hr > 12)
         return hr -12 +" "+"PM";
        else{
            return hr + " " + "AM";
        }
    }

    static getCurrentTime(date) {
        let hour = date.getHours();
        let min = date.getMinutes();
        let time = this.timeConversions(hour,min);
        return time;
    }

   static roundNumber(temp){
        return temp.toFixed(2);
    }
    static getDayIntoHours(time){
        return time.getHours();
    }

    static getDateSuffix(day){
        if(day > 3 && day < 21)
            return "th";
        
        switch(day % 10){
                case 1 : return "st";
                case 2 : return  "nd";
                case 3:  return "rd";
                default: return "th";
            }
    }
    static convertDateMonth(day){
            let days = day.getDate();
            let month = day.getMonth() +1;
            let alphaMonth = this.getMonth(month);
            let suffix = this.getDateSuffix(days);
            return ""+days + suffix+" " + alphaMonth;
            
        }

    static getYearOfDate(day){
        return day.getFullYear();
    }

    static convertDate(day) {
        this.convertDateMonth(day);
        this.getYearOfDate(day);
        return this.convertDateMonth(day) + this.getYearOfDate(day);
    }
    static getMonth(month){
            switch(month){
                case 1: return "January";
                case 2: return "February";
                case 3: return "March";
                case 4: return "April";
                case 5: return "May";
                case 6: return "June";
                case 7: return "July";
                case 8: return "August";
                case 9 : return "September";
                case 10: return "October";
                case 11: return "November";
                case 12: return "December";
            }
        }


    static leftDays(time, days){
        let currentDate = this.getCurrentDate(time, days);
        let compare = currentDate[0].day.getDate();
        let afterDays = days.filter(ele => ele.day.getDate() >compare ).slice(0,2);
        return afterDays;
    }

    static getMinTemprature(periods) {
        return periods.reduce( (acc, cur) => Math.min(acc, cur.temperature), 10000);
    }
    
    static getMaxTemprature(periods) {
        return periods.reduce( (acc, cur) => Math.max(acc, cur.temperature), -10000);
    }

    static getCurrentPeriod (date, currentHour, days) {
       
       if(currentHour%3 != 0){
            currentHour -= currentHour%3; 
            currentHour = Math.max(currentHour, 0);
       }
       let currentDay =  this.getCurrentDate(date, days)[0];
       let filteredDate = currentDay.period.filter(period => {
           let time = new Date(period.time);
           return time.getHours() === currentHour;
        });
      return filteredDate[0];  
    }

    static getWeatherIcon(condition){
        switch(condition.toLowerCase()) {
            case 'clear' : return 'fa-sun';
            case 'clouds' : return 'fa-cloud-sun';
            case 'drizzle': return 'fa-cloud-rain';
            case 'rain': return 'fa-cloud-showers-heavy';
            case 'thunderstorm': return 'fa-bolt';
            case 'snow': return 'fa-snowflake';
            case 'atmosphere': return 'fa-smog';
        }
        return 'fa-cloud-sun';
    }
}

