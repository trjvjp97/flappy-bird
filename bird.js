function Bird(game, pipe) {
    this.game = game;
    this.pipe = pipe;

    this.x = 50;
    this.y = 85;
    this.xSpeed = null;
    this.ySpeed = 0.15;
    this.gravitation = 0.004;
    this.jumpStep = 45;
    this.image = null
    this.isLoaded = false;

    var self = this;

    this.init = function() {
        this.loadImage();
    }

    this.update = function() {
        if (this.game.isGameOver) {
            this.game.isStart = false;
            return;
        }
        if (this.game.isStart) {
            if (this.y + 16 + this.ySpeed >= this.game.height - 45) {
                this.y = this.game.height - 45 - 16;
                this.game.isGameOver = true;
                return;
            }
            if (this.y <= 0) this.y = 0
            if (this.y + this.ySpeed >= this.game.height - 16) {
                this.y = this.game.height - 16;
            } else {
                this.ySpeed = this.ySpeed + this.gravitation;
                this.y = this.y + this.ySpeed;
            }
            if ((this.x + 21 >= this.pipe.currentPipe.x && this.x <= this.pipe.currentPipe.x + 40) && (this.y <= this.pipe.currentPipe.y + 245 || this.y + 16 >= this.pipe.currentPipe.y + 245 + 70)) {
                this.game.isGameOver = true;
                let interval = setInterval(() => {
                    this.y = this.y + 2;
                    if (this.y >= this.game.height - 16) {
                        clearInterval(interval);
                    }
                }, 0.1);
            }
        }
    }

    this.draw = function() {
        if (this.isLoaded === false) return;
        this.game.context.drawImage(this.image, this.x, this.y);
    }

    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {
            self.isLoaded = true;
        };
        this.image.src = "image/bird.png";
    }

    this.jump = function() {
        if (!this.game.isGameOver) {
            let count = 0;
            let interval = setInterval(() => {
                count = count + 1;
                this.y = this.y - 1;
                if (count === self.jumpStep - 1) clearInterval(interval);
            }, 0.1);
            this.ySpeed = 0.1;
        }
    }
}