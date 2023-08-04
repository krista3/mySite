let firstJSON = [];
let secondJSON = [];

function getFirstCoords() {
    owmGeocode.city = document.getElementById("firstcity").value;
    owmGeocode.request(getFirstWeather);
}

function getFirstWeather() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();

    owmWeather.request(getSecondCoords);
}

function getSecondCoords() {
    firstJSON = owmWeather.json;

    owmGeocode.city = document.getElementById("secondcity").value;
    owmGeocode.request(getSecondWeather);
}

function getSecondWeather() {
    owmWeather.lat = owmGeocode.getLat();
    owmWeather.lon = owmGeocode.getLon();

    owmWeather.request(displayBoth);
}

function displayBoth() {
    // firstJSON = owmWeather.json;
    secondJSON = owmWeather.json;
    let firstTemp = Number((firstJSON.main.temp).toFixed(2));
    let secondTemp = Number((secondJSON.main.temp).toFixed(2)); 
    if (firstTemp > secondTemp) document.getElementById("compare1").innerHTML = `${document.getElementById("firstcity").value} has a ${firstTemp - secondTemp} higher temperature than ${document.getElementById("secondcity").value}.`;
    
    else if (firstTemp < secondTemp) document.getElementById("compare1").innerHTML = `${document.getElementById("secondcity").value} has a ${secondTemp - firstTemp} higher temperature than ${document.getElementById("firstcity").value}.`;
    
    else document.getElementById("compare1").innerHTML = `${document.getElementById("firstcity").value} has the same temperature as ${document.getElementById("secondcity").value}.`;
    
    let firstHum = firstJSON.main.humidity;
    let secondHum = secondJSON.main.humidity; 
    if (firstHum > secondHum) document.getElementById("compare2").innerHTML = `${document.getElementById("firstcity").value} has a ${firstHum - secondHum} higher humidity than ${document.getElementById("secondcity").value}.`;
    
    else if (firstHum < secondHum) document.getElementById("compare2").innerHTML = `${document.getElementById("secondcity").value} has a ${secondHum - firstHum} higher humidity than ${document.getElementById("firstcity").value}.`;
    
    else document.getElementById("compare2").innerHTML = `${document.getElementById("firstcity").value} has the same humidity as ${document.getElementById("secondcity").value}.`;

    let firstPres = firstJSON.main.pressure;
    let secondPres = secondJSON.main.pressure; 
    if (firstPres > secondPres) document.getElementById("compare3").innerHTML = `${document.getElementById("firstcity").value} has a ${firstPres - secondPres} higher pressure than ${document.getElementById("secondcity").value}.`;
    
    else if (firstPres < secondPres) document.getElementById("compare3").innerHTML = `${document.getElementById("secondcity").value} has a ${secondPres - firstPres} higher pressure than ${document.getElementById("firstcity").value}.`;
    
    else document.getElementById("compare3").innerHTML = `${document.getElementById("firstcity").value} has the same pressure as ${document.getElementById("secondcity").value}.`;
}   