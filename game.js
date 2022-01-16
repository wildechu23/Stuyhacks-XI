class Game{
    constructor() {
        this.isRunning = true;
        this.pause = false;
        this.player = new Player();
        this.enemies = [];
        this.projectiles = [];
        this.buildings = [];
        this.offset = 0;

        
        for(let i = 0; i < 20; i++) {
            let l = 20+random(40);
            this.buildings[i] = {color: 'hsl(202, 80%,' + l + '%)' ,height: Math.floor(Math.random()*200)+400};
        }
    }

    draw() {
        
        if(this.player.dx < 0 && this.player.x <= windowWidth*0.25-this.player.animation.width/2) {
            this.offset++;
        } else if(this.player.dx > 0 && this.player.x >= windowWidth*0.75-this.player.animation.width/2) {
            this.offset--;
        }

        fill(166, 225, 255);
        rect(0,0,windowWidth,windowHeight*0.75);

        push();
        translate(this.offset*this.player.speed, 0);
        this.drawBuildings();
        //draw floor
        
        for(let i = 0; i < 20; i++) {
            fill(128);
            rect(96*i + 96 * -40 *(Math.floor((this.offset+240)/480)), windowHeight*0.75, 96, windowHeight*0.25);
            rect(96*(i-20) + 96 * -40 *(Math.floor(this.offset/480)) , windowHeight*0.75, 96, windowHeight*0.25);
        }
        pop();
        

        this.player.draw();

        for(enemy in this.enemies) {
            enemy.draw();
        }

        for(proj in this.projectiles) {
            proj.draw();
        }
    }

    update() {
        this.player.move();
        this.collision();
        this.player.update();
        for(enemy in this.enemies) {
            enemy.update();
        }
        for(proj in this.projectiles) {
            proj.update();
        }
    }

    collision() {
        this.player.collision();
    }

    drawBuildings() {
        for(let i = 0; i < 20; i++) {
            fill(this.buildings[i].color)
            rect(96*i + 96 * -40 *(Math.floor((this.offset+240)/480)), windowHeight*0.75, 96, -(this.buildings[i].height));
            // fill(255,0,0);
            rect(96*(i-20) + 96 * -40 *(Math.floor(this.offset/480)) , windowHeight*0.75, 96, -(this.buildings[i].height));
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
        this.player.pressed(w, a, s, d);
    }

    keyReleased(w, a, s, d) {
        this.player.released(w, a, s, d);
    }
}