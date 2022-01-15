class Game{
    constructor() {
        this.isRunning = true;
        this.pause = false;
        this.player = new Player();
        this.enemies = [];
        this.projectiles = [];
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
    }

    update() {
        this.player.update();
        for(enemy in this.enemies) {
            enemy.update();
        }
        for(proj in this.projectiles) {
            proj.draw();
        }

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

    }

    keyReleased(w, a, s, d) {

    }
}