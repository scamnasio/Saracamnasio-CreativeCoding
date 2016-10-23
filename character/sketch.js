var x;
var y;

function setup() {
  createCanvas(600,600);
  
}

function draw() {
  duck(mouseX-300,mouseY-300, c=(mouseX, mouseY, mouseY));
  
}
function duck(x,y,c) {
  // x= shift in x from center
  // y= shift in y from center
  // c=color of the eyes
  
  background(250);
  // face
  noFill();
  stroke("black");
  strokeWeight(2);
  arc(300+x,350+y,185,320, PI, 0);
  // becco
  line(190+x, 350+y, 285+x, 350+y);
  line(315+x, 350+y, 410+x, 350+y);
  fill("yellow");
  noStroke();
  rect(190+x, 351+y, 220, 30);
  stroke("black");
  arc(190+x, 360.5+y, 20, 20, PI/3, (3*PI)/2);
  arc(410+x, 360.5+y, 20, 20, (3*PI)/2, (2*PI)/3);
  arc(190+x, 370+y, 15, 15, (4*PI)/3, PI/3);
  arc(410+x, 370+y, 15, 15, (2*PI)/3, (5*PI)/3);
  arc(195+x, 379+y, 10, 5, PI/3, (3*PI)/2);
  arc(406+x, 378.5+y, 10, 5, (3*PI)/2, (2*PI)/3);
  line(195+x, 381+y, 403+x, 380.5+y);
  //nose arc
  arc(300+x, 351+y, 28, 35, PI, 0);
  //mouth
  fill("pink");
  arc(300+x,382+y,140,200, 0, PI);
  
  //tongue
  fill("red");
  stroke("red");
  triangle(290+x, 382+y, 310+x, 382+y, 300+x, 420+y);
  
  //nose stuff
  noFill();
  stroke("black");
  arc(300+x,370+y,30,10, PI, 0);
  ellipse(290+x,360+y,2,2);
  ellipse(310+x,360+y,2,2);
  
  //eyes
  noFill();
  arc(250+x,350+y,20,100, PI,0);
  arc(350+x,350+y,20,100,PI,0);
  fill(c);
  arc(250+x,350+y,15,35, PI,0);
  arc(350+x,350+y,15,35, PI,0);
  
  //eyebrows
  noFill();
  arc(250+x,270+y,20,10, PI,0);
  arc(350+x,270+y,20,10,PI,0);
  
  //hat
  fill('black');
  rect(225+x, 220+y, 150,25);
  stroke("black");
  fill("blue");
  arc(275+x, 220+y, 100,170, PI,0);
  arc(325+x, 220+y, 100,120, (4*PI)/3,0);
  
  //hat thing
  stroke("black");
  line(246+x, 150+y, 220+x, 175+y);
  line(220+x, 175+y, 210+x, 180+y);
  line(220+x, 175+y, 220+x, 185+y);
  
}