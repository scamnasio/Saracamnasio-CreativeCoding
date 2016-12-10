var angle = 0.0;
var radius;
//eccentricty:
var e;
//semi-minor axis:
var b;
//semi-major axis:
var a;

function setup(){
  createCanvas(600,600);
}
function draw(){
  background(0); 
   translate(width/2,height/2);
    var amplitude = height/4;//play with the amplitude value 
    
    angle +=2.0;
    var x,y;
    y=cos(radians(angle)) * 100;
    //try adding an offset to our angle here
    x=sin(radians(angle)) * 50;
    fill(100);
    ellipse(x,y,10,10);
}