function setup() {
  createCanvas(480, 580);
  background(170);
  noStroke();
}
 
function draw() {
  noLoop();
  fill(224, 49, 6);
  rect(20,10,440, 350);
  push();
  rotate(radians(2));
  rect(35,350,150, 220);
  pop();
  rotate(radians(0));
  rect(160,350,292, 220);
  fill(163, 65, 41);
  rect(35,20,400, 540);
  
  fill(194, 47, 10);
  beginShape();
    vertex(50,40);
    vertex(50, 90);
    vertex(420,90);
    vertex(418,60);
  endShape();
  
  fill(155, 75, 155);
  beginShape();
    vertex(50,100);
    vertex(200, 98);
    vertex(420,105);
    vertex(420,115);
    vertex(200, 116);
    vertex(50, 110);
  endShape();
  
  fill(155, 75, 155);
  rect(50,122,370, 50);
  
  fill(155, 75, 155);
  beginShape();
    vertex(50,250);
    vertex(418,245);
    vertex(420, 295);
    vertex(50, 300);
  endShape();

  fill(155, 75, 155);
  beginShape();
    vertex(50,310);
    vertex(200,309);
    vertex(418,300);
    vertex(422, 358);
    vertex(50, 350);
  endShape();
  
  rect(50, 370, 370, 20);
  
  beginShape();
    vertex(50,400);
    vertex(200,398);
    vertex(420,396);
    vertex(419, 410);
    vertex(200,425);
    vertex(50, 430);
  endShape();
  
  beginShape();
    vertex(50,440);
    vertex(200,450);
    vertex(420,430);
    vertex(419, 480);
    vertex(200,475);
    vertex(50, 480);
  endShape();
  
  
  //last rect
  fill(155, 75, 155);
  beginShape();
    vertex(50,485);
    vertex(420,495);
    vertex(418, 550);
    vertex(50, 550);
  endShape();
  
  //darker red rectangles
   fill(154, 7, 5);
  beginShape();
    vertex(50,180);
    vertex(418,185);
    vertex(416,217);
    vertex(50, 215);
  endShape();
   
  beginShape();
    vertex(50,220);
    vertex(416,223);
    vertex(416,232);
    vertex(50, 240);
  endShape();
  
  fill(112, 67, 112);
  rect(70,130,338, 40);
  rect(70,255,350, 38);
  rect(70,310,350, 38);
  rect(70,510,350, 30);
  
  beginShape();
    vertex(70,485);
    vertex(416,495);
    vertex(280,497);
    vertex(70, 500);
  endShape();
  
  beginShape();
    vertex(70,410);
    vertex(250,397);
    vertex(416,403);
    vertex(416, 410);
    vertex(250,423);
    vertex(70, 420);
  endShape();
  
   beginShape();
    vertex(70,450);
    vertex(416,447);
    vertex(416, 475);
    vertex(70, 460);
  endShape();
  
  
}