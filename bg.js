function Bg(game) {
    this.game = game;

    this.x = 0;
    this.y = 0;
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
            this.x = this.x - 0.25;
            if (this.x <= -514) {
                this.x = 0;
            }
        }
    }

    this.draw = function() {
        if (this.isLoaded === false) return;
        this.game.context.drawImage(this.image, this.x, this.y);
        this.game.context.drawImage(this.image, this.x + 513, this.y);
    }

    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {

            self.isLoaded = true;
        };
        this.image.src = "image/bg.png";
    }
}