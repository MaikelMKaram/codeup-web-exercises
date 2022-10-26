mapboxgl.accessToken = key;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-86.80541779251777, 33.404339086319375],
    zoom: 4,
    projection: 'globe'
});

map.on('style.load', () => {
    map.setFog({});
});

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
var input = coordinates
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: "GET",
        data: {
            appid: weatherKey,
            lat: coordinates.lat,
            lon: coordinates.lng,
            units: "imperial",
        }
    }).done(function (data) {
        $('.row').empty();
        data.list.forEach(function (x) {
            if (x.dt_txt.split(" ")[1] === '00:00:00' && count !== 0) {

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

                $('.row').append(html);
                count--;
            }
        })
    })
}

//Text Input
$('#search').on("change",searchFunction);
$('#submitBtn').click(function (e){
    e.preventDefault();
})

function searchFunction(e){
        e.preventDefault();
        let count = 5;
        let address = e.target.value;
        geocode(address, key).then(function(coordinates){
            marker.setLngLat(coordinates).addTo(map);
            console.log(coordinates);
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast",
            type: "GET",
            data: {
                appid: weatherKey,
                lat: coordinates[1],
                lon: coordinates[0],
                units: "imperial",
            }
        }).done(function(data) {
            $('.row').empty();
            data.list.forEach(function (x) {
                if (x.dt_txt.split(" ")[1] === '00:00:00' && count !== 0) {

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

                    $('.row').append(html);
                    count--;
                }
            })
        })
    })
}