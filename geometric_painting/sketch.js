function setup() {
  createCanvas(500,600);
  background(0);
  howMany=0;
}

function draw() {
  fill(255);
  noStroke();
  rect(50, 50, 400, 500);
  fill(121, 121, 131);
  noStroke();
  rect(60, 60, 380, 480);
  stroke(91,31,62);
  strokeWeight(3);
  fill(0);
  triangle(440, 540, 440, 59, 415, 59);
  fill(0);
  noStroke();
  rect(439, 40, 30, 550);
  fill(207, 207, 210);
  noStroke();
  ellipse(250, 300, 200, 270);
  noStroke();
  fill(145, 131, 60);
  ellipse(250, 300, 140, 210);
  fill(0);
  stroke(0);
  beginShape();
  curveVertex(60,  200);
  curveVertex(260, 198);
  curveVertex(260,  403);
  curveVertex(60,  300);
  endShape();
  beginShape();
  curveVertex(500,  200);
  curveVertex(247,  198);
  curveVertex(247,  403);
  curveVertex(500,  300);
  endShape();
  rect(247, 197, 12, 206);
  
  
  noStroke();
  fill(196, 193, 184);
  beginShape();
  curveVertex(165,  200);
  curveVertex(250, 235);
  curveVertex(250,  365);
  curveVertex(165,  300);
  endShape();
  beginShape();
  curveVertex(330,  200);
  curveVertex(250, 235);
  curveVertex(250,  365);
  curveVertex(330,  300);
  endShape();
  
  fill(159, 36, 40);
  noStroke();
  triangle(240, 310, 260, 310, 250, 290);

}