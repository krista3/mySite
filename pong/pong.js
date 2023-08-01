const gameboard = document.getElementById("gameboard");
const cpucheck = document.getElementById("cpucheck");
const ctx = gameboard.getContext("2d");

let boardWidth = 500;
let boardHeight = 500;
let paddleSpin = 1.5; // >= 0.0
let paddleForce = 1.1; // >= 1.0
let paddleWidth = 25;
let paddleLength = 100;
let ballRadius = 12.5;

let ball;
let paddleL;
let paddleR;
let scoreL = 0;
let scoreR = 0;

function resetGame() {
    clearInterval(intervalID); // clear the clock
    gameboard.width = boardWidth;
    gameboard.height = boardHeight;
    
    // CODE HERE

    resetBall();
    resetPaddles();

    nextTick(); // start running the clock
}

function resetPaddles() {
    // CODE HERE
    paddleL = new Paddle(0, 0, paddleLength, paddleWidth, "red" , true);
    paddleR = new Paddle(boardWidth-paddleWidth, 0, paddleLength, paddleWidth, "red", false);
}

function resetBall() {
    //Random init velocity
    // 0.5<x<2, -2<x<-0.5
    let horizontal = Math.random();
    let vertical = Math.random();
    let speedX = Math.random() + 1;
    let speedY = Math.random() + 1;
    let veloX;
    let veloY;

    if (horizontal >= 0.5){
        veloX = speedX;
    } else {
        veloX = -1*speedX;
    }
    if (vertical >= 0.5){
        veloY = speedY;
    } else {
        veloY = -1*speedY;
    }
    console.log(veloX, veloY);

    ball = new Ball(boardWidth/2, boardHeight/2, veloX, veloY, ballRadius, "hotpink");
}

function clearBoard() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, boardWidth, boardHeight);
}

function draw() {
    clearBoard();
    
    ball.draw(ctx);
    paddleL.draw(ctx);
    paddleR.draw(ctx);
}

let intervalID;

function nextTick() {
    intervalID = setTimeout(
        () => {
            paddleL.move();
            if (cpucheck.checked) {
                paddleR.moveCPU(ball);
            } else {
                paddleR.move();
            }

            ball.bounceWall();
            if (ball.bouncePaddleL(paddleL)) score("right");
            if (ball.bouncePaddleR(paddleR)) score("left");
            
            ball.move();

            draw();
            nextTick();
        }, 10
    );
}

function score(player) {
    if (player == "left") scoreL++;
    if (player == "right") scoreR++;

    nuke.pause();
    nukeSoundPlay();

    updateScore();
    if (scoreL-scoreR >= 5){
        paddleR.powerup();
    } else if (scoreR-scoreL >= 5){
        paddleL.powerup();
    } else {
        paddleR.l = paddleLength;
        paddleL.l = paddleLength;
    }
    resetBall();
}

async  function nukeSoundPlay(){
    let nuke = document.getElementById("nuke");

    await nuke.play();
}

function updateScore() {
    const scoreboard = document.getElementById("scoreboard");
    scoreboard.innerHTML = `${scoreL} : ${scoreR}`;
}