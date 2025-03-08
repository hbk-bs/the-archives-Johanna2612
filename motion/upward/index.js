let x=0;
let y=500;
let radius = 80;
let speed = 10;

function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  
  
  y = height;
  x = width / 2;
  strokeWeight(0.8);
  fill("hsl(39, 100%, 50%)");
  
}

function draw() {
  background("hsl(195, 53%, 79%)");
  circle(x, y, radius);
  speed *= 1.0;
  y -= speed;
  if (y < -radius) {
   y= height; 
   speed = 1.5;
  }
}
