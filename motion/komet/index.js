let x=0;
let y=0;
let radius = 50;
let speed = 1;

function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  y = height / 2;
  x = -radius;
  strokeWeight(0.3);
  fill("hsl(39, 100%, 50%)");
}

function draw() {
  background(173, 216, 230, 20);
  circle(x, y, radius);
  speed *= 1.0;
  x += speed;
  if (x > width + radius) {
   x = -radius; 
   speed = 1;
  }
}