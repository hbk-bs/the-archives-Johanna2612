

const radius = 100;
let angle = 0;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent('sketch');
  background('black');
  angleMode(DEGREES);
}

function draw() {
  background("hsl(195, 53%, 79%)");

  push();
  translate(width / 2, height / 2);
  
  const x = radius * cos(angle);
  const y = radius * sin(angle);
  
  // Schwarzer Rand
  stroke("black");
  strokeWeight(0.6);
  fill("hsl(39, 100%, 50%)"); 
  circle(x, y, 300); 

  angle += 2;
  pop();
}
