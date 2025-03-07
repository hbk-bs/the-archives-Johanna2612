let x1=0;
let y1=0;
let radius = 80;
let speed = 1;

let x2= 0;
let y2= 0;

function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  y1 = height / 3;
  y2 = 2 * height / 3;
  x1 = -radius;
  x2 = -radius;
  strokeWeight(0.8);
  fill("hsl(39, 100%, 50%)")
}

function draw() {
  background("hsl(195, 53%, 79%)");
  circle(x1, y1, radius);
  circle(x2, y2, radius);
  speed *= 1.0;
  x1 += speed;
  x2 += speed;
  if (x1 > width + radius) {
   x1 = -radius; 
  if (x2 > width + radius) {
    x2 = -radius
  }
   speed = 1;
  }
}
