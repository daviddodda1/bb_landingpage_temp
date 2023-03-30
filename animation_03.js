let particles_02 = [];
let circleSize_02 = 60; // The size of each circle
let spacing_02 = 60; // The spacing between circles
let xMargin_02 = 30; // The left and right margin
let yMargin_02 = 30; // The top and bottom margin

function animation_03_setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("MainCanvas");

  let numCols = floor((width - 2 * xMargin_02) / spacing_02);
  let numRows = floor((height - 2 * yMargin_02) / spacing_02);

  for (let i = 0; i < numCols + 1; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = xMargin_02 + i * spacing_02;
      let y = yMargin_02 + j * spacing_02;

      if (random(1) > 0.9 && userIntraction == true) {
        particles_02.push(new Particle_03(x, y, color(0, 255, 194)));
      } else {
        particles_02.push(new Particle_03(x, y, color(255)));
      }
    }
  }
  noStroke();
}

let x_temp_02 = 0;
let temp_direction_02 = 1;

function animation_03_draw() {
  background(0);

  for (let i = 0; i < particles_02.length; i++) {
    particles_02[i].update();
    particles_02[i].display();
  }
  //   run code every 10 frames
  if (frameCount % 100 == 0) {
    if (x_temp_02 > windowWidth && x_temp_02 < 0) {
      temp_direction_02 *= -1;
    }
  }
  x_temp_02 += temp_direction_02;
}

class Particle_03 {
  constructor(x, y, color_set) {
    this.pos = createVector(x, y);
    this.home = createVector(x, y);

    this.size = circleSize_02;
    this.color = color_set;
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 3;
    this.maxForce = 0.1;
  }

  update() {
    let target = createVector();
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    if (d < 100) {
      target = createVector(mouseX, mouseY);
      let desired = p5.Vector.sub(target, this.pos);
      let mag = desired.mag();
      let speed = map(mag, 0, 100, 0, this.maxSpeed);
      desired.setMag(speed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);
      this.acceleration.add(steer);
    } else {
      let desired = p5.Vector.sub(this.home, this.pos);
      let mag = desired.mag();
      let speed = map(mag, 0, 100, 0, this.maxSpeed);
      desired.setMag(speed);
      let steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce);
      this.acceleration.add(steer);
    }

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.maxSpeed);
    this.pos.add(this.velocity);
    this.acceleration.mult(0);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
