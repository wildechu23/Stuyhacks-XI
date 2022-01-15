class Game{
    constructor() {
        this.isRunning = true;
        this.pause = false;
        this.player = new Player();
        this.enemies = [];
        this.projectiles = [];
        this.player = new Player();
    }

    draw() {
        this.drawBackground();

        this.player.draw();

        for(enemy in this.enemies) {
            enemy.draw();
        }

        for(proj in this.projectiles) {
            proj.draw();
        }
        this.player.draw();
    }

    update() {
        this.player.update();
        for(enemy in this.enemies) {
            enemy.update();
        }
        for(proj in this.projectiles) {
            proj.update();
        }
        this.player.update();
        this.player.move();
    }

    drawBackground() {
        fill(166, 225, 255);
        rect(0,0,windowWidth,windowHeight*0.75);
    }

    get running() {
        return this.isRunning;
    }

    get paused() {
        return this.pause;
    }

    click(x, y) {

    }

    keyPressed(w, a, s, d) {
        this.player.pressed(w, a, s, d);
    }

    keyReleased(w, a, s, d) {
        this.player.released(w, a, s, d);
    }
}