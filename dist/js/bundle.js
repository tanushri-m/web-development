/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/main.min.css\");\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ "./src/currentDayView.js":
/*!*******************************!*\
  !*** ./src/currentDayView.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/utility.js\");\n \r\n \r\n class CurrentDay {\r\n    constructor(cityData, days) {\r\n        this.days = days;\r\n        this.city = cityData.name;\r\n        this.country = cityData.country;\r\n        this.location = {\r\n            lat : cityData.coord.lat,\r\n            lon : cityData.coord.lon,\r\n        },\r\n        this.sunrise = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertToDate(cityData.sunrise);\r\n        this.sunset = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertToDate(cityData.sunset);\r\n        this.population = cityData.population;\r\n        this.time = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].destinationTime(cityData.timezone);\r\n        this.period = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentPeriod(this.time, this.time.getHours(), this.days);\r\n    }\r\n\r\n    createCurrentView(){\r\n        let getTime = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentPeriod(this.time, this.time.getHours(), this.days);\r\n        let html = ` <span id = \"current_country\">${this.city},</span><span id =\"country\">${this.country}</span>\r\n                        <div class = \"lat\">\r\n                            <span class = \"lat_lon\">LAT ${this.location.lat}</span><span class=\"lat_lon\">LON ${this.location.lon}</span>\r\n                        </div>\r\n                         <div class =\"temprature-container\">\r\n                         <i class=\"weather-icon fa ${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherIcon(this.period.weather)}\"></i>\r\n                         <div class = \"current_temperatures\">\r\n                                <div>\r\n                                    <div class =\"temp_current\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(getTime.temperature)}<sup>°C</sup></div>\r\n                                </div>\r\n                                <div class = \"present_temp\">\r\n                                    <span class =\"temprature\">\r\n                                        <div class=\"degree\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(getTime.temp_min)}<sup>°c</sup></div>\r\n                                        <div class=\"detail\">MIN</div>\r\n                                    </span>\r\n                                    <span id =\"border-right\"></span>\r\n                                    <span class =\"temprature\">\r\n                                        <div class=\"degree\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(getTime.temp_max)}<sup>°c</sup></div>\r\n                                        <div class=\"detail\">MAX</div>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id = \"currentTimeAndDate\">\r\n                            <div id = \"current_Date\">\r\n                                <span class=\"date\">${this.time.getDate()}<sup>${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getDateSuffix(this.time.getDate())}</sup></span>\r\n                                <span class=\"month\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMonth(this.time.getMonth())},</span>\r\n                                <span class=\"year\">${this.time.getFullYear()}</span>\r\n                            </div>\r\n                            <div id = \"current_Time\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCurrentTime(this.time)}</div>\r\n                        </div>`;\r\n                            \r\n    return html;\r\n   }\r\n\r\n   \r\n\r\n\r\n   createRemainigIntervals(){\r\n      let leftArray =  _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftIntervals(this.time, this.days);\r\n      return leftArray.map(period =>  `<div class = \"next_Interval\">\r\n                                       <div class = \"temp_min\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(period.temp_min)}<sup>°c</sup></div>\r\n                                        <div class = \"nextTime\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createHour(period.time)}</div>\r\n                                        </div>`\r\n                                    \r\n                                ).join(\"\");\r\n   }\r\n\r\n   remainingIntervalsHTML(){\r\n    let currentView = this.createCurrentView(this.time, this.days);\r\n    let leftIntervals = this.createRemainigIntervals(this.time, this.days);\r\n    return `<div class = \"current-Day\">${currentView}<div id = \"left__Interval\">${leftIntervals}</div></div>`;\r\n\r\n}\r\n    \r\n     leftDaysHTML(){\r\n        let nextDays = _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].leftDays(this.time,this.days);\r\n        return nextDays.map(day =>  `<div class = \"next_Day\">\r\n                                    <i class=\"weather-icon fa ${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getWeatherIcon(day.period[3].weather)}\"></i>\r\n                                     <div class = \"nextDay_temp\">\r\n                                     <div class = \"temp\">\r\n                                     <div class = \"curr_temp\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(day.period[3].temperature)}<sup>°c</sup></div>\r\n                                     </div>\r\n                                     <div class = \"nextDayTemperatures\">\r\n                                     <div class =\"temp_minMax\">\r\n                                     <div class = \"temp_min\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMinTemprature(day.period))}<sup>°c</sup></div>\r\n                                     <div class = \"min\">MIN</div>\r\n\r\n                                    </div>\r\n                                    <div class = \"minmax\">\r\n                                    <div class = \"temp_min\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].roundNumber(_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getMaxTemprature(day.period))}<sup>°c</sup></div>\r\n                                    <div class = \"min\">MAX</div>\r\n                                    </div>\r\n                                    </div>\r\n                                    <div class = \"nextDay_time\">${_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].convertDateMonth(day.day)}</div>\r\n                                    </div>\r\n\r\n                                    </div>`\r\n    ).join(\"\");\r\n\r\n}\r\n\r\n   renderLeftDays(){ \r\n       let nextDays = this.leftDaysHTML();\r\n       return`<div class = \"Next__DayReport\">${nextDays}</div>`;\r\n}\r\n\r\n   //renderCurrentView(){\r\n   // return `<div class = \"viewhtml\">${this.renderViewHTML()}${this.remainingIntervalsHTML()} ${this.renderLeftDays()} </div>`;\r\n  //}\r\n\r\n  clearContainer(){\r\n     let container = document.querySelector(\"#weather-container\");\r\n     if(container.innerHTML === \"\"){\r\n        let elements = `${this.remainingIntervalsHTML()} ${this.renderLeftDays()}`;\r\n        container.insertAdjacentHTML(\"beforeend\",elements);\r\n     }\r\n     else{\r\n        container.innerHTML = \"\";\r\n        let elements = `${this.remainingIntervalsHTML()} ${this.renderLeftDays()}`;\r\n        container.insertAdjacentHTML(\"beforeend\",elements);\r\n        \r\n     }\r\n\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CurrentDay);\r\n\r\n\n\n//# sourceURL=webpack:///./src/currentDayView.js?");

/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Utility; });\nclass Utility {\r\n    static convertToDate(seconds){\r\n        return new Date(seconds * 1000);\r\n    }\r\n\r\n    static kelvin2Cel (kelvin) {\r\n        return kelvin - 273.15;\r\n    }\r\n\r\n    static destinationTime(timezone){\r\n        let time = new Date();\r\n        let currentLocalTime = time.getTime();\r\n        let currentOffsetTime = time.getTimezoneOffset();\r\n        let utc = currentLocalTime + currentOffsetTime * 60 * 1000;\r\n        let countryTimeOffset = timezone * 1000;\r\n\r\n        return new Date(utc + countryTimeOffset);\r\n    }\r\n\r\n    static getCurrentDate(time, days){\r\n        let currentDate = time.getDate();\r\n        let currentDateObject =  days.filter(ele => ele.day.getDate() === currentDate);\r\n        return currentDateObject;\r\n    }\r\n\r\n    static overlappingTime(time, days) {\r\n\r\n        let currentDate = this.getCurrentDate(time,days);\r\n        let currentTime = currentDate[0].day.getHours();\r\n        let periods = currentDate[0].period;\r\n\r\n        let min = 7785222222222;\r\n        let currentObject = 0;\r\n        for(let i = 0;i < periods.length; i ++){\r\n             let count = 0;\r\n             let differenceInTime = currentTime - periods[i].time.getHours();\r\n             if(differenceInTime >= 0 ){\r\n                  count = differenceInTime;\r\n                  if(count < min){\r\n                     min = count;\r\n                     currentObject = periods[i];\r\n                \r\n                    }\r\n                }\r\n        }\r\n        return currentObject;\r\n    }\r\n\r\n    static timeConversions(time, min){\r\n        if(time > 12) {\r\n            if(min < 10){\r\n            return \"0\"+ time-12 +\":\"+ \"0\"+ min +\" \"+\"PM\";\r\n            }\r\n        \r\n            return \"0\"+ time-12 +\":\"+ min +\" \"+\"PM\";\r\n\r\n        }\r\n        else{ if(time > 9 && time <= 12){\r\n                 if(min < 10){\r\n                return  time +\":\"+ \"0\"+ min +\" \"+\"AM\";\r\n                }\r\n            \r\n                return  time +\":\"+ min +\" \"+\"AM\";\r\n            }\r\n            else{\r\n                if(min < 10){\r\n                    return  time +\":\"+ \"0\"+ min +\" \"+\"AM\";\r\n                    }\r\n                \r\n                    return \"0\"+ time +\":\"+ min +\" \"+\"AM\";\r\n            }\r\n        }\r\n\r\n        \r\n    }\r\n\r\n    static getDayintoMin(min){\r\n        return min.getMinutes();\r\n    }\r\n\r\n    static leftIntervals(time, days) {\r\n        let currentDate = this.getCurrentDate(time, days);\r\n        let currentZone = this.overlappingTime(time,days);\r\n        let currentTime = currentZone.time.getHours();\r\n       \r\n        let periods = currentDate[0].period;\r\n        let result = periods.map(period =>{\r\n            return{\r\n                delta : Math.abs(period.time.getHours() - currentTime),\r\n                obj   : period\r\n            }\r\n        }).sort((periodA, periodB) =>(periodA.delta - periodB.delta))\r\n         .slice(0,3).map(period =>period.obj).sort((periodA, periodB) =>periodA-periodB);\r\n        \r\n\r\n        return result;\r\n\r\n    }\r\n    static getWeek(number){\r\n        switch(number){\r\n            case 1: return \"Monday\";\r\n            case 2: return \"Tuesday\";\r\n            case 3: return \"Wednesday\";\r\n            case 4: return \"Thursday\";\r\n            case 5: return \"Friday\";\r\n            case 6: return \"Saturday\";\r\n            default: return \"Sunday\";\r\n        }\r\n\r\n    }\r\n\r\n    static getDateFromGMT(date){\r\n        let day = date.getDay();\r\n        let weekDay = this.getWeek(day);\r\n        let num = date.getDate();\r\n        let year = date.getFullYear();\r\n        let month = date.getMonth() + 1;\r\n        let alphaMonth = this.getMonth(month);\r\n        let hour = date.getHours();\r\n        let min = date.getMinutes();\r\n        let time = this.timeConversions(hour,min);\r\n\r\n\r\n        let dateObj =  \"\"+ num+this.getDateSuffix(num)+\" \"+ alphaMonth+\" \"+ year+ \" \";\r\n        return dateObj; \r\n    }\r\n\r\n    static createHour(hour) {\r\n        let hr = hour.getHours();\r\n        if(hr > 12)\r\n         return hr -12 +\" \"+\"PM\";\r\n        else{\r\n            return hr + \" \" + \"AM\";\r\n        }\r\n    }\r\n\r\n    static getCurrentTime(date) {\r\n        let hour = date.getHours();\r\n        let min = date.getMinutes();\r\n        let time = this.timeConversions(hour,min);\r\n        return time;\r\n    }\r\n\r\n   static roundNumber(temp){\r\n        return temp.toFixed(2);\r\n    }\r\n    static getDayIntoHours(time){\r\n        return time.getHours();\r\n    }\r\n\r\n    static getDateSuffix(day){\r\n        if(day > 3 && day < 21)\r\n            return \"th\";\r\n        \r\n        switch(day % 10){\r\n                case 1 : return \"st\";\r\n                case 2 : return  \"nd\";\r\n                case 3:  return \"rd\";\r\n                default: return \"th\";\r\n            }\r\n    }\r\n    static convertDateMonth(day){\r\n            let days = day.getDate();\r\n            let month = day.getMonth() +1;\r\n            let alphaMonth = this.getMonth(month);\r\n            let suffix = this.getDateSuffix(days);\r\n            return \"\"+days + suffix+\" \" + alphaMonth;\r\n            \r\n        }\r\n\r\n    static getYearOfDate(day){\r\n        return day.getFullYear();\r\n    }\r\n\r\n    static convertDate(day) {\r\n        this.convertDateMonth(day);\r\n        this.getYearOfDate(day);\r\n        return this.convertDateMonth(day) + this.getYearOfDate(day);\r\n    }\r\n    static getMonth(month){\r\n            switch(month){\r\n                case 1: return \"January\";\r\n                case 2: return \"February\";\r\n                case 3: return \"March\";\r\n                case 4: return \"April\";\r\n                case 5: return \"May\";\r\n                case 6: return \"June\";\r\n                case 7: return \"July\";\r\n                case 8: return \"August\";\r\n                case 9 : return \"September\";\r\n                case 10: return \"October\";\r\n                case 11: return \"November\";\r\n                case 12: return \"December\";\r\n            }\r\n        }\r\n\r\n\r\n    static leftDays(time, days){\r\n        let currentDate = this.getCurrentDate(time, days);\r\n        let compare = currentDate[0].day.getDate();\r\n        let afterDays = days.filter(ele => ele.day.getDate() >compare ).slice(0,2);\r\n        return afterDays;\r\n    }\r\n\r\n    static getMinTemprature(periods) {\r\n        return periods.reduce( (acc, cur) => Math.min(acc, cur.temperature), 10000);\r\n    }\r\n    \r\n    static getMaxTemprature(periods) {\r\n        return periods.reduce( (acc, cur) => Math.max(acc, cur.temperature), -10000);\r\n    }\r\n\r\n    static getCurrentPeriod (date, currentHour, days) {\r\n       \r\n       if(currentHour%3 != 0){\r\n            currentHour -= currentHour%3; \r\n            currentHour = Math.max(currentHour, 0);\r\n       }\r\n       console.log(currentHour);\r\n       let currentDay =  this.getCurrentDate(date, days)[0];\r\n       let filteredDate = currentDay.period.filter(period => {\r\n           let time = new Date(period.time);\r\n           return time.getHours() === currentHour;\r\n        });\r\n      return filteredDate[0];  \r\n    }\r\n\r\n    static getWeatherIcon(condition){\r\n        switch(condition.toLowerCase()) {\r\n            case 'clear' : return 'fa-sun';\r\n            case 'clouds' : return 'fa-cloud-sun';\r\n            case 'drizzle': return 'fa-cloud-rain';\r\n            case 'rain': return 'fa-cloud-showers-heavy';\r\n            case 'thunderstorm': return 'fa-bolt';\r\n            case 'snow': return 'fa-snowflake';\r\n            case 'atmosphere': return 'fa-smog';\r\n        }\r\n        return 'fa-cloud-sun';\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/utility.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherModel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherModel.js */ \"./src/weatherModel.js\");\n/* harmony import */ var _currentDayView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currentDayView.js */ \"./src/currentDayView.js\");\n\r\n\r\nclass WeatherAPI {\r\n    constructor(apiKey){\r\n        this.apiKey = apiKey;\r\n    }\r\n\r\n    transformData(weatherJSON) {\r\n        let periodMap = weatherJSON.list.reduce((accum, current) =>{\r\n            let date = current.dt_txt.split(\" \");\r\n            let uniqueDate = date[0];\r\n\r\n            if(accum[uniqueDate] === undefined){\r\n                accum[uniqueDate] = [new _weatherModel_js__WEBPACK_IMPORTED_MODULE_0__[\"Period\"](current, new Date(current.dt_txt))];\r\n            }\r\n            else{\r\n                accum[uniqueDate].push(new _weatherModel_js__WEBPACK_IMPORTED_MODULE_0__[\"Period\"](current, new Date(current.dt_txt)));\r\n            }\r\n            return accum;\r\n        },{});\r\n        \r\n        let days = Object.keys(periodMap).map(day => new _weatherModel_js__WEBPACK_IMPORTED_MODULE_0__[\"WeatherDay\"](new Date(day), periodMap[day]));        \r\n        let wetherData = new _currentDayView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](weatherJSON.city, days);\r\n        wetherData.clearContainer();\r\n\r\n        return days;\r\n    }\r\n\r\n    getWeather(city){\r\n        let weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}`;\r\n        return fetch(weatherApi)\r\n                .then(response => response.json())\r\n                .then(data => this.transformData(data));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherAPI);\n\n//# sourceURL=webpack:///./src/weatherAPI.js?");

/***/ }),

/***/ "./src/weatherController.js":
/*!**********************************!*\
  !*** ./src/weatherController.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI.js */ \"./src/weatherAPI.js\");\n/* harmony import */ var _weatherView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherView.js */ \"./src/weatherView.js\");\n\r\n \r\n\r\nclass WeatherController {\r\n\r\n    constructor(apiKey) {\r\n        this.weatherAPI = new _weatherAPI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](apiKey);\r\n    }\r\n\r\n    updateView(weatherData) {\r\n        let view = new _weatherView_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](weatherData);\r\n\r\n    }\r\n\r\n    updateCity(cityName) {\r\n        return this.weatherAPI\r\n                .getWeather(cityName)\r\n                .then(data => this.updateView(data))\r\n    }\r\n}\r\n\r\n\r\nlet addEvent = function(){\r\n    let element = document.getElementById(\"search\");\r\n    element.addEventListener(\"blur\",(event)=> execute(event.target.value));\r\n    element.addEventListener('keyup', (event) => {\r\n        if (event.keyCode == 13 || event.which == 13) {\r\n            console.log(event);\r\n            execute(event.target.value);\r\n            event.preventDefault();\r\n        }\r\n    });\r\n}\r\n\r\n\r\nlet execute = function(query){\r\n    let controller = new WeatherController(\"0b7342e5520defa0db6bac89db34d064\");\r\n    controller.updateCity(query)\r\n            .catch(error => console.log(error));\r\n    document.querySelector(\"#search\").value=\"\";\r\n}\r\n\r\naddEvent();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/weatherController.js?");

/***/ }),

/***/ "./src/weatherModel.js":
/*!*****************************!*\
  !*** ./src/weatherModel.js ***!
  \*****************************/
/*! exports provided: Period, WeatherDay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Period\", function() { return Period; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"WeatherDay\", function() { return WeatherDay; });\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ \"./src/utility.js\");\n\r\n\r\nclass Period {\r\n    constructor(data, time) {\r\n        this.time        =  time;\r\n        this.temperature =  _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvin2Cel(data.main.temp);\r\n        this.feels_like  =  _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvin2Cel(data.main.feels_like);\r\n        this.temp_min    =  _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvin2Cel(data.main.temp_min);\r\n        this.temp_max    =  _utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].kelvin2Cel(data.main.temp_max);\r\n        this.pressure    =  data.main.pressure;\r\n        this.sea_level   =  data.main.sea_level;\r\n        this.grnd_level  =  data.main.grnd_level;\r\n        this.humidity    =  data.main.humidity;\r\n        this.temp_kf     =  data.main.temp_kf;\r\n        this.weather     =  data.weather[0].main;\r\n    }\r\n}\r\n\r\nclass WeatherDay {\r\n    constructor(day, period){\r\n        this.day = day;\r\n        this.period = period;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/weatherModel.js?");

/***/ }),

/***/ "./src/weatherView.js":
/*!****************************!*\
  !*** ./src/weatherView.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass weatherView {\r\n\r\n    constructor(weatherReports){\r\n        this.weatherReports = weatherReports;\r\n        this.getDates = this.getWeatherDays();\r\n    }\r\n\r\n    getWeatherDays(){\r\n        let set = [];\r\n        Object.keys(this.weatherReports).map(day => set.push(day));\r\n        return[...set];\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (weatherView);\r\n\r\n    \n\n//# sourceURL=webpack:///./src/weatherView.js?");

/***/ }),

/***/ 0:
/*!*********************************************************!*\
  !*** multi ./src/weatherController.js ./scss/main.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! E:\\Project\\showcase\\Weather\\src\\weatherController.js */\"./src/weatherController.js\");\nmodule.exports = __webpack_require__(/*! E:\\Project\\showcase\\Weather\\scss\\main.scss */\"./scss/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/weatherController.js_./scss/main.scss?");

/***/ })

/******/ });