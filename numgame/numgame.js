const guess = document.getElementById("guess");
const report= document.getElementById("report");
let hasBeenGuessed = false;
let positionX = 0;
let positionY = 0;

const MAXNUM = 100;
let secret;

function victory() {
    console.log("victory");
    if (positionX < 200) {
        positionX++;
    }
}

function loadGame() {
    guess.max = MAXNUM;
    secret = Math.floor(Math.random() * (MAXNUM+1));
}

function makeGuess() {
    let myGuess = guess.value;


    if (myGuess < secret) {
        report.innerHTML += `<br>[${myGuess}] is too small.`;
        // console.log(`myGuess = ${myGuess}`);
    } else if (myGuess > secret) {
        report.innerHTML += `<br>[${myGuess}] is too large.`;
        // console.log(`myGuess = ${myGuess}`);
    } else {
        report.innerHTML += `<br><strong id="win">[${myGuess}] is correct!</strong>`;
        hasBeenGuessed = true;
        victory();
        //win.style.color = `green`;
    }
}