 class Player{
    constructor() {
    this.damage = 1;
    this.animation = loadImage();
    this.normal = 1;
    this.spriteNum = 0;
    this.speed = 8;
    this.x = 400;
    this.y = 300;
    this.dx = 0;
    this.dy = 0;
    this.isAlive = true;
    this.hearts = 10;
    this.tint = false;
    this.attackCD = 0.5;
    this.time = Date.now() / 1000 - 1;
    this.time2 = Date.now();
    this.time3 = System.currentTimeMillis() - 300;
    this.size = 64;
    }
    
    move() {
      canMovex = true;
      canMovey = true;/*
      for (i = 0; i < floor.cRoom.rocks.size(); i++) {
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
        this.x += this.dx * this.speed;
      }
      if (canMovey == true) {
        this.y += this.dy * this.speed;
      }
      //println(canMovex, canMovey);
    }
    update() {
      if (this.hearts <= 0) {
        this.isAlive = false;
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
      if (w) this.dy = -1;
      if (s) this.dy = 1;
    }
    released(w, a, s, d) { 
      if (a) this.dx = 0;
      if (d) this.dx = 0;
      if (w) this.dy = 0;
      if (s) this.dy = 0;
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