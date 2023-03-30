let particles_03 = [];
let circleSize_03 = 40; // The size of each circle
let spacing_03 = 60; // The spacing between circles
let xMargin_03 = 30; // The left and right margin
let yMargin_03 = 30; // The top and bottom margin

function animation_04_setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("MainCanvas");

  let numCols = floor((width - 2 * xMargin_03) / spacing_03);
  let numRows = floor((height - 2 * yMargin_03) / spacing_03);

  for (let i = 0; i < numCols + 1; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = xMargin_03 + i * spacing_03;
      let y = yMargin_03 + j * spacing_03;

      // generate random number and set color if random number is greater than 0.8

      if (random(1) > 0.9 && userIntraction == true) {
        particles_03.push(new Particle_04(x, y, color(0, 255, 194)));
      } else {
        particles_03.push(new Particle_04(x, y, color(255)));
      }
    }
  }
  noStroke();
}

let x_temp_03 = 0;
let temp_direction_03 = 1;

function animation_04_draw() {
  background(0);

  for (let i = 0; i < particles_03.length; i++) {
    particles_03[i].update();
    particles_03[i].display();
  }
  //   run code every 10 frames
  if (frameCount % 100 == 0) {
    if (x_temp_03 > windowWidth && x_temp_03 < 0) {
      temp_direction_03 *= -1;
    }
  }
  x_temp_03 += temp_direction_03;
}

class Particle_04 {
  constructor(x, y, color_set) {
    this.pos = createVector(x, y);
    this.home = createVector(x, y);

    this.size = circleSize_03;
    this.color = color_set;
    this.velocity = createVector();
    this.acceleration = createVector();
    this.maxSpeed = 3;
    this.maxForce = 0.2;
    this.overlapCount = 0;
  }

  update() {
    let target = createVector();
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    if (d < 100) {
      target = createVector(mouseX, mouseY);
    } else {
      target = this.home;
    }

    let desired = p5.Vector.sub(target, this.pos);
    let mag = desired.mag();
    let speed = map(mag, 0, 100, 0, this.maxSpeed);
    let strength = map(mag, 0, width, 1, 50); // New line to adjust strength based on distance from home
    desired.setMag(speed);
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxForce * strength); // Multiply maxForce by strength
    this.acceleration.add(steer);

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
