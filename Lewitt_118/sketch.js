function setup() {
  createCanvas(800,600);
  background(255, 167, 98);
  frameRate(10);
  x1 = 200;
  y1 = 400;
  howMany = 0;
}

function draw() {
  line(x1,y1, x2=random(800), y2=(random(600)));
  x1=x2;
  y1=y2;
  howMany++;
  if (howMany>50) {
    noLoop();
  }
}