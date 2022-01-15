class Game{
    constructor() {
        this.isRunning = true;
        this.pause = false;
        // this.player = new Player();
        this.enemies = [];
        this.projectiles = [];
    }

    draw() {
        // this.player.draw();

        for(enemy in this.enemies) {
            enemy.draw();
        }

        for(proj in this.projectiles) {
            proj.draw();
        }
    }

    update() {
        // this.player.update();
        for(enemy in this.enemies) {
            enemy.update();
        }
        for(proj in this.projectiles) {
            proj.draw();
        }

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