let x = 0;
let y = 0;
let radius = 80;  
let speed = 2;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  y = height - radius;
  x = width - radius;
  
  strokeWeight(0.8);
  fill("hsl(39, 100%, 50%)");
}

function draw() {
  background("hsl(195, 53%, 79%)");

  circle(x, y, radius * 2); 
 
  x -= speed;
  y -= speed;

  if (x < -radius || y < -radius) {
    x = width + radius; 
    y = height + radius; 
  }
}
