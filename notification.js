function NotificationGame(game, point) {
    this.game = game;
    this.point = point

    this.image = null;
    this.imageScore = null;
    this.isLoaded = false;
    this.isLoadedScore = null;
    this.xGame = (this.game.width / 2) - (200 / 2);
    this.yGame = (this.game.height / 2) - (43 / 2);
    this.xScore = (this.game.width / 2) - (113 / 2);
    this.yScore = (this.game.height / 2) - (57 / 2);
    this.xMedal = 212;
    this.yMedal = 135;
    this.xPoint = 290;
    this.yPoint = 141;
    this.xBestPoint = 290;
    this.yBestPoint = 161;

    this.imageBronze = null;
    this.isLoadedBronze = false;
    this.imageIron = null;
    this.isLoadedIron = false;
    this.imageSilver = null;
    this.isLoadedSilver = false;
    this.imageGold = null;
    this.isLoadedGold = false;
    this.showScoreBoard = false;
    var self = this;

    this.init = function() {
        this.loadImage();
    }

    this.update = function() {
        if (this.game.isGameOver && this.game.isStart) {
            setTimeout(() => {
                let count = 0;
                let interval = setInterval(() => {
                    count++;
                    this.yGame--;
                    if (count === 100) {
                        this.showScoreBoard = true;
                        clearInterval(interval);
                    }
                }, 1);
            }, 1000);
        }
    }

    this.draw = function() {
        if (!this.isLoaded || !this.isLoadedScore || !this.isLoadedBronze || !this.isLoadedIron || !this.isLoadedSilver || !this.isLoadedGold) return;
        if (this.game.isGameOver) this.game.context.drawImage(this.image, this.xGame, this.yGame);
        if (this.showScoreBoard) {
            this.game.context.drawImage(this.imageScore, this.xScore, this.yScore);
            if (this.point.point <= 5) {
                this.game.context.drawImage(this.imageBronze, this.xMedal, this.yMedal);
            } else if (this.point.point > 5 && this.point.point <= 15) {
                this.game.context.drawImage(this.imageIron, this.xMedal, this.yMedal);
            } else if (this.point.point > 15 && this.point.point <= 30) {
                this.game.context.drawImage(this.imageSilver, this.xMedal, this.yMedal);
            } else {
                this.game.context.drawImage(this.imageGold, this.xMedal, this.yMedal);
            }

            this.game.context.beginPath();
            this.game.context.font = '12px serif';

            this.game.context.fillStyle = 'red';
            this.game.context.fillText(this.point.point, this.xPoint, this.yPoint);
            this.game.context.fillText(this.point.bestScore, this.xBestPoint, this.yBestPoint);
            this.game.context.stroke();
        }
    }

    this.loadImage = function() {
        this.image = new Image();
        this.image.onload = function() {
            self.isLoaded = true;
        };
        this.image.src = "image/gameover.png";

        this.imageScore = new Image();
        this.imageScore.onload = function() {
            self.isLoadedScore = true;
        };
        this.imageScore.src = "image/score-board.png";

        this.imageBronze = new Image();
        this.imageBronze.onload = function() {
            self.isLoadedBronze = true;
        };
        this.imageBronze.src = "image/medal-bronze.png";

        this.imageIron = new Image();
        this.imageIron.onload = function() {
            self.isLoadedIron = true;
        };
        this.imageIron.src = "image/medal-iron.png";

        this.imageSilver = new Image();
        this.imageSilver.onload = function() {
            self.isLoadedSilver = true;
        };
        this.imageSilver.src = "image/medal-silver.png";

        this.imageGold = new Image();
        this.imageGold.onload = function() {
            self.isLoadedGold = true;
        };
        this.imageGold.src = "image/medal-gold.png";
    }
}