 class Player{
    constructor() {
    this.damage = 1;
    this.animation = loadImage("pawn.png");
    this.normal = 1;
    this.spriteNum = 0;
    this.speed = 8;
    this.x = 0;
    this.y = 0;
    this.dx = 0;
    this.dy = 0;
    this.isAlive = true;
    this.hearts = 10;
    this.tint = false;
    this.attackCD = 0.5;
    this.time = Date.now() / 1000 - 1;
    this.time2 = Date.now();
    this.size = 64;
    this.onGround = false;
    }
    
    move() {
      let canMovex = true;
      let canMovey = true;/*
        //else {
          if (floor.cRoom.rocks.get(i).isColliding(this)[0] == 0) {
            canMovex = false;
          }
          if (floor.cRoom.rocks.get(i).isColliding(this)[1] == 0) {
            canMovey = false;
          }
        //}
      }*/
      if (canMovex == true) {
        if(this.dx < 0 && this.x > ((windowWidth*0.25)-(this.animation.width/2)) || this.dx > 0 && this.x < ((windowWidth*0.75)-(this.animation.width/2))) {
          this.x += this.dx * this.speed;
        }
      }
      if (canMovey == true) {
        this.y += this.dy;
      }
      //println(canMovex, canMovey);
    }

    update() {
      if (this.hearts <= 0) {
        this.isAlive = false;
      }
      
      if(this.onGround) {
        this.dy = 0;
      } else {
        if(keyIsDown(87)) {
          this.dy += 1;
        } else {
          this.dy += 2;
        }
      }
      console.log(this.dy);
    }

    collision(){
      if((this.y + this.animation.height) >= 700) {
        this.onGround = true;
        this.y = 700 - this.animation.height;
      } else {
        this.onGround = false;
      }
    }

    pressed(w, a, s, d) { 
      if (a) {
        this.dx = -1;
        this.isMirror = true;
        //spriteNum = 0;
      }
      if (d) {
        this.dx = 1;
        this.isMirror = false;
        //spriteNum = 1;
      }
      if (w && this.onGround) this.dy = -20;
      // if (s) this.dy = 1;
    }
    released(w, a, s, d) { 
      if (a) {
        if(!keyIsDown(68)) this.dx = 0;
      }
      if (d) {
        if(!keyIsDown(65)) this.dx = 0;
      }
    }
    
    draw() {
      if (this.tint == true && Date.now() - this.time2 <= 500) {
        tint(0, 153, 100, 100);
      }
      else {
        this.tint = false;
      }
      applyMatrix();
      if(this.isMirror) {
        scale(-1,1);
        translate(-(2*this.x + this.animation.width),0);
      }
      image(this.animation, this.x, this.y);
      resetMatrix();
      noTint();
    }
  }