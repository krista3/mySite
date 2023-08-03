let nwsGetGrid = new NWSGetGrid();
let nwsGetForecast = new NWSGetForecast();

function button() {
    // alert("Getting the weather!");
    nwsGetGrid.request(getWeather);
}

function getWeather() {
    nwsGetForecast.gridId = nwsGetGrid.getGridId();
    nwsGetForecast.gridX = nwsGetGrid.getGridX();
    nwsGetForecast.gridY = nwsGetGrid.getGridY();

    nwsGetForecast.request(displayweather);
}

function displayweather() {
    const cond = document.getElementById("condition");
    let condition = nwsGetForecast.getCurrentCondition();
    cond.innerHTML = condition; 
    if (condition.split("then")[0].includes('sun')) {
        document.getElementById("sun").style.display = `block`;
    }
    else if (condition.split("then")[0].includes(`rain`)) {
        document.getElementById("rain").style.display = `block`;
    }
    else if (condition.split("then")[0].includes(`cloudy`)) {
        document.getElementById("cloudy").style.display = `block`;
    }

    let highLow = nwsGetForecast.getHighLow();
    cond.innerHTML += `<br>${highLow.high}&deg;F / ${highLow.low}&deg;F`; 
    if (highLow.high > 85) {
        cond.style.color = `red`;
    }
    if (highLow.low < 28) {
        cond.style.color = `blue`;
        document.getElementById("cold").style.display = `block`;
    }

    let precip = nwsGetForecast.getPrecipitation();
    cond.innerHTML += `<br>${precip}% chance of rain`
    if (precip > 70) {
        document.body.style.filter = `hue-rotate(90deg);`;
    }
}