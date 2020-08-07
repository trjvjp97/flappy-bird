function Pipe(game) {
    this.game = game;

    this.x = 150;
    this.y = null;
    this.yMax = -100;
    this.yMin = -200;
    this.pipes = [];
    this.currentPipe = null;
    this.imagePipe = null
    this.isLoadedPipe = false;
    this.imagePipeRotate = null
    this.isLoadedPipeRotate = false;
    this.tempPipe = null;

    var self = this;

    this.init = function() {
        this.loadImage();
        this.pipes = [{
                x: 150,
                y: this.randomPosition(this.yMin, this.yMax)
            },
            {
                x: 300,
                y: this.randomPosition(this.yMin, this.yMax)
            },
            {
                x: 450,
                y: this.randomPosition(this.yMin, this.yMax)
            },
            {
                x: 600,
                y: this.randomPosition(this.yMin, this.yMax)
            }
        ];
        this.currentPipe = this.pipes[0];
        this.tempPipe = this.currentPipe;
    }

    this.update = function() {
        if (this.game.isGameOver) {
            this.game.isStart = false;
            return;
        }
        if (this.game.isStart) {
            this.x = this.x + 0.25;
            for (var i = 0; i < this.pipes.length; i++) {
                if (this.pipes[i].x <= 150) this.currentPipe = this.pipes[i];
                this.pipes[i].x = this.pipes[i].x - 0.25;
            }
            if (this.tempPipe.x != this.currentPipe.x) {
                this.tempPipe = this.currentPipe;
                this.pipes.push({ x: this.pipes[this.pipes.length - 1].x + 150, y: this.randomPosition(this.yMin, this.yMax) })
            }
        }
    }

    this.draw = function() {
        if (!this.isLoadedPipe || !this.isLoadedPipeRotate) return;
        for (var i = 0; i < this.pipes.length; i++) {
            this.game.context.drawImage(this.imagePipe, this.pipes[i].x, this.pipes[i].y + 245 + 70);
            this.game.context.drawImage(this.imagePipeRotate, this.pipes[i].x, this.pipes[i].y);
        }
    }

    this.loadImage = function() {
        this.imagePipe = new Image();
        this.imagePipeRotate = new Image();
        this.imagePipe.onload = function() {

            self.isLoadedPipe = true;
        };
        this.imagePipeRotate.onload = function() {

            self.isLoadedPipeRotate = true;
        };
        this.imagePipe.src = "image/pipe.png";
        this.imagePipeRotate.src = "image/pipe_rotate.png";

    }

    this.randomPosition = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}