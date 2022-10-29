const timeElement = document.getElementById('time');
const dateElement = document.getElementById('date');

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
    let {latitude, longitude} = success;

//    Current Weather Conditions

$.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            appid: weatherApp_API,
            lat: success.coords.latitude,
            lon: success.coords.longitude,
            units: "imperial",
        }
    }).done(function (data){
        console.log(data);
        $('#currentTemp').replaceWith(`<p>${data.main.temp}</p>`);
        $('#currentHumidity').replaceWith(`<p>${data.main.humidity}</p>`);
        $('#currentWindspeed').replaceWith(`<p>${data.wind.speed}</p>`);
        })
    })
}

