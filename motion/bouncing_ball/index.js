let x=0;
let y=0;
let radius = 50;
let xspeed = 1;
let yspeed = -1;

function setup(){
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");
  xSpeed =random(-5, 5);
  ySpeed =random(-5, 5);
  x = width / 2;
  y = height / 2;
  
  strokeWeight(0.3);
  fill("orange");
}

function draw() {
  background(0);
  circle(x, y, radius);
  x += xSpeed;
  y += ySpeed;
  if (x > width || x <radius/ 2) {
   xSpeed *= -1; 
   speed = 1;
  }
  if (y > height - radius / 2 || y< radius / 2){
    ySpeed *= -1;
  }
}