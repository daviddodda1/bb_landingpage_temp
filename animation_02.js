let particles_01 = [];
let circleSize_01 = 40; // The size of each circle
let spacing_01 = 60; // The spacing between circles
let xMargin_01 = 30; // The left and right margin
let yMargin_01 = 30; // The top and bottom margin

function animation_02_setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("MainCanvas");

  let numCols = floor((width - 2 * xMargin_01) / spacing_01);
  let numRows = floor((height - 2 * yMargin_01) / spacing_01);

  for (let i = 0; i < numCols + 1; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = xMargin_01 + i * spacing_01;
      let y = yMargin_01 + j * spacing_01;

      if (random(1) > 0.9 && userIntraction == true) {
        particles_01.push(new Particle_02(x, y, color(0, 255, 194)));
      } else {
        particles_01.push(new Particle_02(x, y, color(255)));
      }
    }
  }
  noStroke();
}

let x_temp_01 = 0;
let temp_direction_01 = 1;

function animation_02_draw() {
  background(0);

  for (let i = 0; i < particles_01.length; i++) {
    particles_01[i].update();
    particles_01[i].display();
  }
  //   run code every 10 frames
  if (frameCount % 100 == 0) {
    if (x_temp_01 > windowWidth && x_temp_01 < 0) {
      temp_direction_01 *= -1;
    }
  }
  x_temp_01 += temp_direction_01;
}

class Particle_02 {
  constructor(x, y, color_set) {
    this.pos = createVector(x, y);
    this.color = color_set;

    this.size = 50;
  }

  update() {
    let d = 0;
    // change color based  on the distance between the mouse position and the particle's position
    // update size based on the distance between the mouse position and the particle's position
    d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    this.size = circleSize_01 + 10 * sin(d * 0.008);

    // update the color of the particle
    // this.color = color(50);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
