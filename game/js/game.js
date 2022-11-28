// let canvas = document.getElementById("game");
//
// let ctx = canvas.getContext && canvas.getContext("2d");
//
// if (!ctx) {
//     alert("Please upgrade your browser");
// } else {
//     startGame();
// }
//
// function startGame() {
//     SpriteSheet.load({
//         ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 }
//         // ship: { sx: 37, sy: 0, w: 42, h: 42, frames: 1 }
//         // ship: { sx: 79, sy: 0, w: 37, h: 42, frames: 1 }
//         // ship: { sx: 116, sy: 0, w: 43, h: 42, frames: 1 }
//         // ship: { sx: 159, sy: 0, w: 43, h: 42, frames: 1 }
//     }, function () {
//         SpriteSheet.draw(ctx, "ship", 0, 0);
//         SpriteSheet.draw(ctx, "ship", 100, 50);
//         SpriteSheet.draw(ctx, "ship", 150, 100);
//     });
//     // ctx.fillStyle = "#FFFF00";
//     // ctx.fillRect(50,100,380,400);
//     //
//     // ctx.fillStyle = "rgba(0,0,128,0.8);";
//     // ctx.fillRect(25,50,380,400);
//     //
//     // var img = new Image();
//     // img.onload = function() {
//     //     ctx.drawImage(img,100,100);
//     // }
//     // img.src = 'images/sprites.png';
// }

var sprites = {
    ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 }
};

var startGame = function() {
    // SpriteSheet.draw(Game.ctx,"ship",100,100,0);
    Game.setBoard(0,new Starfield(20,0.4,100,true))
    Game.setBoard(1,new Starfield(50,0.6,100))
    Game.setBoard(2,new Starfield(100,1.0,50));
    Game.setBoard(3,new TitleScreen("Alien Invasion", "Press space to start playing", playGame));
}

var playGame = function () {
    Game.setBoard(3, new TitleScreen("Alien Invasion", "Game Started..."));
}

window.addEventListener("load", function() {
    Game.initialize("game",sprites,startGame);

});

var Starfield = function(speed,opacity,numStars,clear) {

    // Set up the offscreen canvas
    var stars = document.createElement("canvas");
    stars.width = Game.width;
    stars.height = Game.height;
    var starCtx = stars.getContext("2d");

    var offset = 0;

    // If the clear option is set,
    // make the background black instead of transparent
    if(clear) {
        starCtx.fillStyle = "#000";
        starCtx.fillRect(0,0,stars.width,stars.height);
    }

    // Now draw a bunch of random 2 pixel
    // rectangles onto the offscreen canvas
    starCtx.fillStyle = "#FFF";
    starCtx.globalAlpha = opacity;
    for(var i=0;i<numStars;i++) {
        starCtx.fillRect(Math.floor(Math.random()*stars.width),
            Math.floor(Math.random()*stars.height),
            2,
            2);
    }

    // This method is called every frame
    // to draw the starfield onto the canvas
    this.draw = function(ctx) {
        var intOffset = Math.floor(offset);
        var remaining = stars.height - intOffset;

        // Draw the top half of the starfield
        if(intOffset > 0) {
            ctx.drawImage(stars,
                0, remaining,
                stars.width, intOffset,
                0, 0,
                stars.width, intOffset);
        }

        // Draw the bottom half of the starfield
        if(remaining > 0) {
            ctx.drawImage(stars,
                0, 0,
                stars.width, remaining,
                0, intOffset,
                stars.width, remaining);
        }
    }

    // This method is called to update
    // the starfield
    this.step = function(dt) {
        offset += dt * speed;
        offset = offset % stars.height;
    }
};
