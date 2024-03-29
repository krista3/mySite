class Ball {
    constructor(x, y, vx, vy, r, c) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.r = r;
        this.c = c;
    }

    draw(ctx) {
        // ctx.fillStyle = this.c;
        // ctx.strokeStyle = "black";
        // ctx.lineWidth = 2;

        // ctx.beginPath();
        // ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        // ctx.stroke();
        // ctx.fill();
        const image = new Image();
        image.src = "nuke.png";
        ctx.drawImage(image, this.x-this.r, this.y, this.r*2, this.r*2);
    }

    move() {
        // CODE HERE
        this.x += this.vx;
        this.y += this.vy;
    }

    bounceWall() {
        // TOP WALL
        if (this.y < 0) {
            this.vy = 1 * Math.abs(this.vy);
        }

        // BOTTOM WALL
        if (this.y > boardHeight - (this.r*2)) {
            this.vy = -1 * Math.abs(this.vy);
        }
    }

    bouncePaddleL(paddle) {
        if (this.x - this.r > paddle.w) return false;
        if (this.x - this.r < 0) return true;
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx < 0) {
            let contactSound = document.getElementById("contactsound");
            contactSound.play();
            this.vx = paddleForce * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2; // between -1.0 and 1.0
            this.vy = this.vy + paddlePos*paddleSpin;
        }
        return false;
    }

    bouncePaddleR(paddle) {
        if (this.x + this.r < paddle.x) return false;
        if (this.x + this.r > paddle.x + paddle.w) return true;
        if (this.y < paddle.y) return false;
        if (this.y > paddle.y + paddle.l) return false;
        if (this.vx > 0) {
            let contactSound = document.getElementById("contactsound");
            contactSound.play();
            this.vx = -paddleForce * Math.abs(this.vx);
            let paddlePos = (this.y - paddle.y - paddle.l/2) / paddle.l * 2; // between -1.0 and 1.0
            this.vy = this.vy + paddlePos*paddleSpin;
        }
        return false;
    }
}