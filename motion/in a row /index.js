let circles = [];
let radius = 50;
let speed = 2;

function setup() {
  const canvas = createCanvas(500, 500);
  canvas.parent("sketch");

  strokeWeight(0.8);
  fill("hsl(39, 100%, 50%)"); 

  
  for (let i = 0; i < 4; i++) {
    circles.push({
      x: -radius,       
      y: height / 2,    
      targetX: -radius, 
      moved: false      
    });
  }

  
  for (let i = 0; i < circles.length; i++) {
    circles[i].targetX = (i * (radius + 78)) + radius; 
  }
}

function draw() {
  background("hsl(195, 53%, 79%)"); 

  
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i]; 

    
    if (!circle.moved) {
      circle.x += speed; 
      
      if (circle.x >= circle.targetX) {
        circle.x = circle.targetX; 
        circle.moved = true; 
      }
    }
    
    
    ellipse(circle.x, circle.y, radius * 2, radius * 2); 
  }
}