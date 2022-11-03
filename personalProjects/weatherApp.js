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


mapboxgl.accessToken = mapBoxkey;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10',
    // center: [cLong, cLat],
    center: [-86.80541779251777, 33.404339086319375],
    zoom: 6,
    projection: 'globe'
});

navigator.geolocation.getCurrentPosition((success) => {
    let {longitude, latitude} = success.coords;
    let cLong = success.coords.longitude;
    let cLat = success.coords.latitude;
    map.flyTo({center:[cLong, cLat]});
})


getWeatherData();
function getWeatherData(){
    navigator.geolocation.getCurrentPosition((success) => {
    let {latitude, longitude} = success.coords;

//    Current Weather Conditions
$.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            appid: weatherApp_API,
            lat: latitude,
            lon: longitude,
            units: "imperial",
        }
    }).done(function (data){
        console.log(data);
        let dt = data.dt;
    // let time = new Date(${data.dt} * 1000).toLocaleString();
    console.log(dt);
    $('#currentTemp').html(`<p><strong>${data.main.temp.toFixed(1)}˚ F</strong></p>`);
        $('#currentHumidity').html(`<p><strong>${data.main.humidity}</strong></p>`);
        $('#currentWindspeed').html(`<p><strong>${data.wind.speed}</strong></p>`);
        $('#description').html(`<p>${data.weather[0].description}</p>`);
        $('#icon').html(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="height: 80px">`);
        // $('#timeOfDay').html(`<p>${new Date(data.dt + data.timezone + 18000 *1000).toLocaleString().split(',')[1]}</p>`);
        })
    })
}

let date;
let tempMax;
let tempMin;
let icon;
let description;
let humidity;
let wind;
let pressure;


// Click Marker
marker = new mapboxgl.Marker();
map.on('click', mainFunction);

function mainFunction(e){
    let count = 5;
    let coordinates = e.lngLat;
    let address = e.target.value;
    marker.setLngLat(coordinates).addTo(map);
    map.flyTo({center:coordinates,
        zoom: 6,
        duration: 2000,
    });
    // var input = coordinates
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        type: "GET",
        data: {
            appid: weatherApp_API,
            lat: coordinates.lat,
            lon: coordinates.lng,
            units: "imperial",
        }
    }).done(function (data){
        console.log(data);
        $('#currentTemp').html(`<p><strong>${data.main.temp.toFixed(1)}˚ F</strong></p>`);
        $('#currentHumidity').html(`<p><strong>${data.main.humidity}</strong></p>`);
        $('#currentWindspeed').html(`<p><strong>${data.wind.speed}</strong></p>`);
        $('#description').html(`<p>${data.weather[0].description}</p>`);
        $('#icon').html(`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" style="height: 80px">`);
        // $('#timeOfDay').html(`<p>${new Date(data.dt + data.timezone *1000).toLocaleString().split(',')[1]}</p>`);
    })

    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            appid: weatherApp_API,
            lat: coordinates.lat,
            lon: coordinates.lng,
            units: "imperial",
        }
    }).done(function (data) {
        $('.row').empty();
        data.list.forEach(function (x) {
            if (x.dt_txt.split(" ")[1] === '12:00:00' && count !== 0) {

                date = x.dt_txt.split(" ")[0];
                tempMax = x.main.temp_max;
                tempMin = x.main.temp_min;
                icon = x.weather[0].icon;
                description = x.weather[0].description;
                humidity = x.main.humidity;
                wind = x.wind.speed;
                pressure = x.main.pressure;

                let html = "";
                html += '<div class="col card-header"><p class="mb-4 card-header">' + "<strong>" + date +"</strong>" + "</p>";
                html += '<p class="mb-2">' + "<strong>" + tempMin + '˚F' + "</strong>" + ' | ' + "<strong>" + tempMax + '˚F' + "</strong>" + '</p>';
                html += '<img src="http://openweathermap.org/img/w/' + icon + '.png">'
                html += '<p class="mb-2">' + 'Desciption: ' + "<strong>" + description + "</strong>" + '</p>';
                html += '<p class="mb-2">' + 'Humdidity: ' + "<strong>" + humidity + "</strong>" + '</p>';
                html += '<p class="mb-2"> ' + 'Wind: ' + "<strong>" + wind + "</strong>" + '</p>';
                html += '<p>' + 'Pressure: ' + "<strong>" + pressure + "</strong>" + '</p>';
                html += '</div>';

                $('.forecast-row').append(html);
                count--;
            }
        })
    })
}
