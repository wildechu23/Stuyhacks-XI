// import {Game} from './game.js';

let game;

function setup() {
    createCanvas(windowWidth, windowHeight);
    // put setup code here
    frameRate(60);
    noSmooth();
    noStroke();
    background(0);
    game = null;
}

function draw() {
    // put drawing code here
    if(game != null && game.running && !game.paused) {
        game.update();

        background(0);
        game.draw();
    } else if(game != null && game.paused) {

    } else {
        game = null;
    }
    
    if(game == null) {
        fill(255, 255, 255);
        rect(width / 2 - 45, height / 2, 90, 30);
        fill(0, 0, 0);
        textSize(20);
        text("Start", width / 2 - 20, height / 2 + 25);
    }
}

function keyPressed() {
    if (game != null) {
        game.keyPressed((key == 'w' || key == 'W'), (key == 'a' || key == 'A'), (key == 's' || key == 'S'), (key == 'd' || key == 'D'));
    }
}
  
function keyReleased() {
    if (game != null) {
        game.keyReleased((key == 'w' || key == 'W'), (key == 'a' || key == 'A'), (key == 's' || key == 'S'), (key == 'd' || key == 'D'));
    }
}

function mousePressed() {
    if (game != null) {
        game.click(mouseX, mouseY)
    } else if (mouseX >= width / 2 - 20 && mouseX <= width / 2 + 90 && mouseY >= height / 2 && mouseY <= height / 2 + 30) {
        game = new Game(this);
    }
}
