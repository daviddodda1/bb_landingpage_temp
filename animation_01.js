let particles = [];
let circleSize = 50; // The size of each circle
let spacing = 60; // The spacing between circles
let xMargin = 30; // The left and right margin
let yMargin = 30; // The top and bottom margin

function animation_01_setup() {
  let myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("MainCanvas");

  let numCols = floor((width - 2 * xMargin) / spacing);
  let numRows = floor((height - 2 * yMargin) / spacing);

  for (let i = 0; i < numCols + 1; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = xMargin + i * spacing;
      let y = yMargin + j * spacing;

      if (random(1) > 0.9 && userIntraction == true) {
        particles.push(new Particle(x, y, color(0, 255, 194)));
      } else {
        particles.push(new Particle(x, y, color(255)));
      }
    }
  }
  noStroke();
}

let x_temp = 0;
let temp_direction = 1;

function animation_01_draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }
  //   run code every 10 frames
  if (frameCount % 100 == 0) {
    if (x_temp > windowWidth && x_temp < 0) {
      temp_direction *= -1;
    }
  }
  x_temp += temp_direction;
}

class Particle {
  constructor(x, y, color_set) {
    this.pos = createVector(x, y);

    this.size = 50;
    this.color = color_set;
  }

  update() {
    let d = 0;
    // change color based  on the distance between the mouse position and the particle's position
    // update size based on the distance between the mouse position and the particle's position
    d = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    this.size = circleSize + 10 * sin(frameCount * 0.05 + d * 0.008);

    // update the color of the particle
    // this.color = color(50);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
