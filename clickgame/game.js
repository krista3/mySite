let goatCost = 15000;

function buy(store) {
    let cost = parseInt(store.getAttribute("cost"));
    let bank = parseInt(score.innerHTML);

    // Break if not enough points to buy
    if (bank < cost) return;

    changeScore(-1 * cost);


    let widget = document.createElement("div");
    widget.className = "widget";
    fillWidget(store, widget);

    if (widget.getAttribute("name")=="G.O.A.T.") {
        goat(widget);
        return;
    }

    widget.onclick = () => {
        harvest(widget);
    }

    document.getElementById("widget-container").appendChild(widget);
    if (widget.getAttribute("auto") == 'true') {
        harvest(widget);
    }
}

function harvest(widget) {
    // Only run if currently not harvesting
    if (widget.hasAttribute("harvesting")) return;

    // Set harvesting flag
    widget.setAttribute("harvesting", "");

    if (widget.getAttribute("auto") != 'true') {
        changeScore(widget.getAttribute("reap"));
        showPoint(widget);
    }

    setTimeout(() => {
        // Remove the harvesting flag
        widget.removeAttribute("harvesting");

        // Collect points if automatic
        if (widget.getAttribute("auto") == 'true') {
            changeScore(widget.getAttribute("reap"));
            showPoint(widget);
            harvest(widget);
        }
    }, parseFloat(widget.getAttribute("cooldown")) * 1000);
}

function changeScore(amount) {
    score.innerHTML = parseInt(score.innerHTML) + parseInt(amount);

    for (let store of stores) {
        let cost = parseInt(store.getAttribute("cost"));
        let bank = parseInt(score.innerHTML);

        // Display overlay if broke
        if (cost <= bank) {
            store.removeAttribute("broke");
        } else {
            store.setAttribute("broke", "");
        }
    }
}

function showPoint(widget) {

    let number = document.createElement ("span");
    number.className = "point";
    number.innerHTML = "+" + widget.getAttribute("reap");
    number.style.left = "50%";
    number.style.top = "50%";
    number.onanimationend = () => {
        widget.removeChild(number);
    }
    widget.appendChild(number);
}

function goat(widget) {
    changeScore(parseInt(score.innerHTML));s
    //console.log(widget.getAttribute("cost"));

    goatCost+=goatCost;
    widget.setAttribute("cost", goatCost);
    //console.log(goatCost);
    // for (let store of stores) {
    //     if (store.getAttribute("name") == "G.O.A.T.") {
    //         store.setAttribute("cost", goatCost);
    //     }
    // }

    // for (let store of stores) {
    //     let cost = parseInt(store.getAttribute("cost"));
    //     let bank = parseInt(score.innerHTML);

    //     // Display overlay if broke
    //     if (cost <= bank) {
    //         store.removeAttribute("broke");
    //     } else {
    //         store.setAttribute("broke", "");
    //     }

    //     if (store.getAttribute("name" == "G.O.A.T.")) {
            
    //         console.log("it ran");
    //         let cost = parseInt(widget.getAttribute("cost"));    
    //         console.log(cost);
    //         let newCost = cost * 2;
    //         widget.setAttribute("cost", newCost);
    //     }
    // }

    // // let cost = parseInt(widget.getAttribute("cost"));    
    // // let newCost = cost * 2;
    // // widget.setAttribute("cost", newCost);
}