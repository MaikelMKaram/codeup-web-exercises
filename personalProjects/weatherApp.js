const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');
const currentWeatherItemsElement = document.getElementById('current-weather-items');
const timezone = document.getElementById('time-zone');
const countryElement = document.getElementById('country');
const weatherForecastElement = document.getElementById('weather-forecast');
const currentTempElement = document.getElementById('current-temp');

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const key = weatherApp_API;

//Interval function Updates every 1 min
setInterval(() => {
    // Declarations
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'

    //Time Element
    timeElement.innerHTML = hoursIn12HrFormat + ":" + (minutes>=9 ? minutes:"0" + minutes) +  " " + ampm
    //Date Element
    dateElement.innerHTML = `${days[day]}, ${date} ${months[month]}`
}, 1000)

getWeatherData();
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);
    let {latitude, longitude} = success.coords;

        let count = 5;
        let coordinates = e.lngLat;
        let address = e.target.value;
        var input = coordinates
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast",
            type: "GET",
            data: {
                appid: weatherApp_API,
                lat: coordinates.lat,
                lon: coordinates.lng,
                units: "imperial",
            }
        })

    })
}
