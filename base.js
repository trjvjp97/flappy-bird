// function Base(game) {
//     this.game = game;

//     this.x = 0;
//     this.y = 0;
//     this.image = null
//     this.isLoaded = false;

//     var self = this;

//     this.init = function() {
//         this.loadImage();
//     }

//     this.update = function() {
//         this.x--;
//         if (this.x < -514) {
//             this.x = 0;
//         }
//     }

//     this.draw = function() {
//         if (this.isLoaded === false) return;
//         this.game.context.drawImage(this.image, this.x, this.game.height - 46);
//         this.game.context.drawImage(this.image, this.x + 513, this.game.height - 46);
//     }

//     this.loadImage = function() {
//         this.image = new Image();
//         this.image.onload = function() {

//             self.isLoaded = true;
//         };
//         this.image.src = "image/base.png";
//     }
// }