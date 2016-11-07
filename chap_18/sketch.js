var leftMargin = 10;
var topMargin = 10;

function setup() {
  createCanvas(400, 600);
  noStroke();
  fill(38, 115, 77);
  rect(0,0,width, height/4);
  fill(121, 210, 166);
  rect(0,height/4,width, height/4);
  fill(233, 177, 150);
  rect(0,height/2,width, height/4);
  fill(0, 77, 57);
  rect(0,3*height/4,width, height/4);
  
}

function draw() {
  //background(220);
  noStroke();
  
  //we can set a translation before our for loop
  //to add margin to our drawing
  translate(leftMargin,topMargin);
  noLoop();
  for(var i=10; i < 400; i+=45){
    for(var j=-1; j < 600; j+=45){
      push();
      translate(i, j);
      fill(random(50),random(100),random(20));
      ellipse(0,0,width/9,width/9);
      pop();
    }
  }
}