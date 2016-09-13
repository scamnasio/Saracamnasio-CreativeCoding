function setup() {
  createCanvas(600,600);
  frameRate(10);
  println("Look I can code!");
}

function draw() {
  //background(random(250), random(250), random(250));
  background(250);
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(random(400), random(400), pmouseX, pmouseY);
  stroke(random(255), random(255),random(255));
  line(pmouseX,pmouseY,random(400), random(400));
  
  stroke(100);
  ellipse(pmouseX,pmouseY, 50, 40);
  
}