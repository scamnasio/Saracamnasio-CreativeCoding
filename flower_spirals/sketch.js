function setup(){
  createCanvas(400, 400);
}
function draw() {
  //background(200);
   fill(255);
  ellipse(width/4,height/4, 20,20);
  noStroke();
  translate(width/4,height/4);
  fill(0);
  rotate(radians(frameCount%360));
  for(var i =0; i < 10; i++){
    push();
    rotate((TWO_PI) * i / 10);
    fill(80*i, 20*i, 40*i);
    rect(frameCount % (width),0,40,40);
    pop();
  }
}