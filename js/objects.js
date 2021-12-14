// Variables
var gravity = 0.2;
var circles = [];

// Circle Class
class Circle {
  constructor(x, y, vx) {
    this.x = x;
    this.y = y;
    this.r = randomInt(25, 50);
    this.color = randomRGB();
    this.maxHeight = cnv.height - this.y - this.r;
    this.velocityX = vx;
    this.velocityY = 0;
  }

  draw() {
    stroke(this.color);
    lineWidth('2px');
    circle(this.x, this.y, this.r, 'stroke');
  }

  move() {
    this.velocityY += gravity;
    this.y += this.velocityY;
    this.x += this.velocityX;
    if (initHeightToggle == false) {
      this.bounce();
    } else if (initHeightToggle == true) {
      this.bounceInitHeight();
    }
    if (this.x + this.r >= cnv.width) {
      this.velocityX *= -1;
      this.x = cnv.width - this.r;
    } else if (this.x - this.r <= 0) {
      this.velocityX *= -1;
      this.x = this.r;
    }
  }

  bounce() {
    if (this.y + this.r >= cnv.height) {
      this.velocityY *= -0.9;
      this.y = cnv.height - this.r;
      this.velocityX *= 0.99
    }
  }

  bounceInitHeight() {
    if (this.y + this.r >= cnv.height) {
      this.velocityY = -1 * Math.sqrt(2 * gravity * this.maxHeight);
      this.y = cnv.height - this.r;
      this.velocityX *= 0.99
    }
  }
}