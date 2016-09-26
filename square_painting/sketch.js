function setup() {
  createCanvas(500,500);
  background(188, 128, 25);
  howMany=0;
  
}

function draw() {
  fill(170, 114, 0);
  rect(random(500), random(500), 3, 1, 50);
  fill(199, 138, 11);
  rect(random(500), random(500), 2, 2, 50);
  fill(190, 133, 9);
  rect(random(500), random(500), 1, 2, 50);
  fill(196, 138, 30);
  rect(random(500), random(500), 2, 1, 50);
  fill(156, 98, 2);
  rect(random(500), random(500), 2, 2, 50);
  
  howMany++;
  if (howMany>1000) {
    noLoop();
  }
  
  line(0, 0, 500, 500);
  line(0, 500, 500, 0);
  stroke(0);
  fill(0);
  noStroke();
  triangle(0, 500, 500, 500, 250, 250);
}