function Point(game, pipe) {
    this.game = game;
    this.pipe = pipe;

    this.point = 0;
    this.x = this.game.width - 25;
    this.y = 25;
    this.tempPipe = null;
    this.bestScore = localStorage['best-score'];

    var self = this;

    this.init = function() {

        if (this.bestScore === undefined) {
            localStorage.setItem('best-score', 0);
            this.bestScore = 0;
        }
        this.tempPipe = this.pipe.currentPipe;
    }

    this.update = function() {
        if (this.tempPipe != this.pipe.currentPipe) {
            this.tempPipe = this.pipe.currentPipe;
            this.point++;
        }
        if (this.point > this.bestScore) {
            this.bestScore = this.point;
            localStorage.setItem('best-score', this.bestScore);
        }
    }

    this.draw = function() {
        this.game.context.beginPath();
        this.game.context.font = '25px serif';
        this.game.context.fillStyle = 'red';
        this.game.context.fillText(this.point, this.x, this.y);
        this.game.context.stroke();
    }
}