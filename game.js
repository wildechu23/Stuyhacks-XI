class Game{
    constructor() {
        this.isRunning = true;
        this.pause = false;
        this.player = new Player();
        this.enemies = [];
        this.projectiles = [];
    }

    draw() {
        this.player.draw();

        for(enemy in enemies) {
            enemy.draw();
        }

        for(proj in projectiles) {
            proj.draw();
        }
    }

    update() {
        this.player.update();
        for(enemy in enemies) {
            enemy.update();
        }
        for(proj in projectiles) {
            proj.draw();
        }

    }

    get running() {
        return this.isRunning;
    }

    click() {

    }
}