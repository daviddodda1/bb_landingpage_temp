// function setup() {
//   var myCanvas = createCanvas(windowWidth, windowHeight);
//   myCanvas.parent("MainCanvas");
// }

// function draw() {
//   background(0, 0, 0);
//   fill(255);
//   ellipse(mouseX, mouseY, 100, 100);
// }

let particles = [];
let circleSize = 50; // The size of each circle
let spacing = 60; // The spacing between circles
let xMargin = 30; // The left and right margin
let yMargin = 30; // The top and bottom margin

function setup() {
  var myCanvas = createCanvas(windowWidth, windowHeight);
  myCanvas.parent("MainCanvas");

  let numCols = floor((width - 2 * xMargin) / spacing);
  let numRows = floor((height - 2 * yMargin) / spacing);

  for (let i = 0; i < numCols + 1; i++) {
    for (let j = 0; j < numRows; j++) {
      let x = xMargin + i * spacing;
      let y = yMargin + j * spacing;

      particles.push(new Particle(x, y));
    }
  }
  noStroke();
}

let x_temp = 0;
let temp_direction = 1;

function draw() {
  background(0);

  for (let i = 0; i < particles.length; i++) {
    particles[i].update(windowHeight / 2, x_temp);
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
  constructor(x, y) {
    this.pos = createVector(x, y);

    this.size = 50;
    this.color = color(100);
  }

  update(tx, ty) {
    // update the size to look like a wave motion, both vertically and horizontally
    // this.size =
    //   circleSize +
    //   50 * sin(frameCount * 0.05 + this.pos.x * 0.1) +
    //   50 * sin(frameCount * 0.05 + this.pos.y * 0.1);
    // calculate the distance between the mouse position and the particle's position
    // update the size to look like a wave motion towards the mouse position
    // this.size = circleSize + 10 * sin(frameCount * 0.05 + d * 0.1);

    // change color based  on the distance between the mouse position and the particle's position
    let d = dist(mouseX, mouseY, this.pos.x, this.pos.y);

    // update size based on the distance between the mouse position and the particle's position
    this.size = circleSize + 10 * sin(frameCount * 0.05 + d * 0.008);

    // map the distance to a value between 0 and 255
    let dMappedColor = map(d, 0, 1000, 0, 255);

    // update the color of the particle
    this.color = color(255);
  }

  display() {
    fill(this.color);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
