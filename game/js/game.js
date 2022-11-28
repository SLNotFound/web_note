let canvas = document.getElementById("game");

let ctx = canvas.getContext && canvas.getContext("2d");

if (!ctx) {
    alert("Please upgrade your browser");
} else {
    startGame();
}

function startGame() {
    SpriteSheet.load({
        ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 }
        // ship: { sx: 37, sy: 0, w: 42, h: 42, frames: 1 }
        // ship: { sx: 79, sy: 0, w: 37, h: 42, frames: 1 }
        // ship: { sx: 116, sy: 0, w: 43, h: 42, frames: 1 }
        // ship: { sx: 159, sy: 0, w: 43, h: 42, frames: 1 }
    }, function () {
        SpriteSheet.draw(ctx, "ship", 0, 0);
        SpriteSheet.draw(ctx, "ship", 100, 50);
        SpriteSheet.draw(ctx, "ship", 150, 100);
    });
    // ctx.fillStyle = "#FFFF00";
    // ctx.fillRect(50,100,380,400);
    //
    // ctx.fillStyle = "rgba(0,0,128,0.8);";
    // ctx.fillRect(25,50,380,400);
    //
    // var img = new Image();
    // img.onload = function() {
    //     ctx.drawImage(img,100,100);
    // }
    // img.src = 'images/sprites.png';
}
