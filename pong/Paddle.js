class Paddle {
    constructor(x, y, l, w, c) {
        this.x = x;
        this.y = y;
        this.vy = 0;
        this.l = l;
        this.w = w;
        this.c = c;
    }

    draw(ctx) {
        // CODE HERE
        ctx.fillStyle = this.c;
        ctx.strokeStyle = "black";

        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);
    }

    move() {
        // CODE HERE
        let newY = this.y + this.vy;
        if (newY < 0 || newY + this.l > boardHeight) return;
        

        this.y = newY;
    }

    moveCPU(ball) {
        // Use the properties of the ball to set a new velocity
        // Helpful pieces:
        //   Math.min() and Math.max() to limit the velocity
        //   ball.y to see where the ball is
        //   ball.vy to see where the ball is going
        let cpuVy = Math.random() + 3;

        if (paddleL.y < ball.y) {
            paddleL.vy = cpuVy;
        } else if (paddleL.y > ball.y) {
            paddleL.vy = -cpuVy;
        }

        


        // this.vy = 0; // Modify this line to add your own code

        // Finally, call move to move the paddle normally
        this.move();
    }

    powerup() {
        this.l += 20;
    }
}