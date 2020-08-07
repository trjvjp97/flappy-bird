function Game() {
    this.canvas = null;
    this.width = 514;
    this.height = 287;
    this.context = null;

    this.bird = null;
    this.bg = null;
    this.pipe = null;
    this.notification = null;
    this.point = null;

    this.isStart = false;
    this.isGameOver = false;

    var self = this;

    this.init = function() {
        this.canvas = document.createElement('canvas');
        document.body.append(this.canvas);
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.context = this.canvas.getContext('2d');

        this.bg = new Bg(this);
        this.bg.init();
        this.pipe = new Pipe(this);
        this.pipe.init();
        this.bird = new Bird(this, this.pipe);
        this.bird.init();
        this.point = new Point(this, this.pipe);
        this.point.init();
        this.notification = new NotificationGame(this, this.point);
        this.notification.init();
        this.eventListen();

        this.loop();
    }

    this.eventListen = function() {
        window.addEventListener('keypress', function(e) {
            self.isStart = true;
            if (e.key === " ") self.bird.jump();
        });
        this.canvas.addEventListener('click', function(e) {
            self.isStart = true;
            self.bird.jump();
        })
    }

    this.update = function() {
        this.bg.update();
        this.pipe.update();
        this.bird.update();
        this.notification.update();
        this.point.update();
    }

    this.draw = function() {
        this.bg.draw();
        this.pipe.draw();
        this.bird.draw();
        this.notification.draw();
        this.point.draw();
    }

    this.loop = function() {
        setInterval(() => {
            this.context.clearRect(0, 0, this.width, this.height);
            self.update();
            self.draw();
        }, 1000 / 200);
    }
}

var game = new Game();
game.init();