//var img;
particleSystem=[]


function setup() {
  createCanvas(500,500);
  background(0);
  noStroke();
  for (var i = 0; i < 1000; i++){
    particleSystem[i]= new Particle(1000-i, -100, random(5),random(0.001,20), random(1,200), random(240,255), random(0.1,1));
  }
}

//function preload() {
  //img = loadImage("snow.png");
//}

function draw() {
  background(0);
  //image(img, 800,20);
  for (var i = 0; i < 1000; i++){
  fill(particleSystem[i].c);
  ellipse(particleSystem[i].x,
          particleSystem[i].y+(0.5*(particleSystem[i].acceleration)*(i/100))+5*particleSystem[i].radius*(frameCount/100), 
          particleSystem[i].radius, 
          particleSystem[i].radius*(particleSystem[i].speed));
  
  }
}

function Particle(x,y,radius, speed, acceleration, c, spread) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.speed = speed;
  this.acceleration = acceleration;
  this.c = c;
  this.spread=spread;
}


