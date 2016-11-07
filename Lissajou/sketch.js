var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var amplitude = 190;


function setup(){
  createCanvas(400,400);
  frameRate(40);
}
function draw(){
  colorFrom = color(249, 21, 21);
  colorTo = color(19, 14, 220);
  
  
  if(pointCount > 10000){
    noLoop();
  }

  noStroke();
  strokeWeight(10);
  //stroke(100);
  translate(width/2, height/2);

  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = cos(angle)* amplitude;
  angle = i / waveLengthTwo * TWO_PI;
  var x = cos(angle)* amplitude;
  var lerpAmt = map(sin(radians(i)), 1, -1, 0, 1);
  var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
    stroke("white");
  var angle = i/amplitude*PI;
  ellipse(x,y,sin(angle*2)*50, sin(angle*2)*50); 
  }

pointCount++;
}