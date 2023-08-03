let firstJSON = [];
let secondJSON = [];

function getFirstCoords() {
    owmGeocode.city = "Plainview, NY";
    owmGeocode.request(getFirstWeather);
}

function getFirstWeather() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();

    owmWeather.request(getSecondCoords);
}

function getSecondCoords() {
    firstJSON = owmWeather.json;

    owmGeocode.city = "Philadelphia";
    owmGeocode.request(getSecondWeather);
}

function getSecondWeather() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();

    owmWeather.request(displayBoth);
}

function displayBoth() {
    secondJSON = owmWeather.json;
    // Done :)


    console.log(firstJSON);
    console.log(secondJSON);

    // HTML setting stuff
}