/**
 * Kevin's notes: adds comments 
 */
function setup() {
  createCanvas(800,600);
  background(0);
  //remember to declare your variables with the word var
  x1=300;
  y1=550;
  x2=500;
  y2=550;
}

function draw() {
  stroke(250);
  line(400, 550, 400, 350);
  noFill();
  stroke(250);
  triangle(x1, y1, x2, y2, 400, 350);
  stroke(250);
  quad(x1, y1, x2, y2, 500, 350, 300, 350);
  stroke(250);
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(561.803, 396.116);
  vertex(400, 242.232);
  vertex(238.197,396.116);
  vertex(x1, y1);
  endShape();
  
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(600, 396.116);
  vertex(500, 220);
  vertex(300,220);
  vertex(200,396.116);
  vertex(x1, y1);
  endShape();
  
  beginShape();
  vertex(x1, y1);
  vertex(x2, y2);
  vertex(650, 400);
  vertex(600, 200);
  vertex(400,100);
  vertex(200,200);
  vertex(150,400);
  vertex(x1, y1);
  endShape();
  
  
}
