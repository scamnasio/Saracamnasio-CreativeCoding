/**
 * Kevin's notes: Added some code comments/suggestions 
 * 
 */
function setup() {
  createCanvas(800,600);
  background(255, 167, 98);
  frameRate(10);
  //make sure you declare your variables at the top of the sketch using the word var
  //and then the variable name
  x1 = 200;
  y1 = 400;
  howMany = 0;
}

function draw() {
  //while technically this works, it's a best practice to assign values to variables outside
  //of a method argument.  
  //try something like this:
  // x2 = random(800);
  // y2 = random(600);
  //line(x1,y1,x2,y2);
  line(x1,y1, x2=random(800), y2=(random(600)));
  x1=x2;
  y1=y2;
  howMany++;
  if (howMany>50) {
    noLoop();
  }
}
