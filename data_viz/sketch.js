var table;
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("nails.csv", "csv", "header");
  
}

function setup() {
  color(255);
  createCanvas(400,630);
  totalData = table.getColumn("Total");
  nailData = table.getColumn("Nail");
  skinData = table.getColumn("Skin");
  
  noStroke();
  fill(255,110,205);
  rect(0,0, 50,630);
  fill(203,255,110);
  rect(100,0, 50,630);
  fill(255,250,110);
  rect(150,0, 90,630);
  fill(255,169,110);
  rect(238,0, 90,630);
  fill(255);
  rect(0,0, 600,50);
  fill(255);
  rect(0,585, 600,50);
  
  textSize(14);
  fill("black");
  //stroke(255);
  //count the rows
  
  text("Total", 10,560);
  text("Nail", 10,360);
  text("Skin", 10,160);
  
  text("Tue", 110,600);
  text("Wed", 155,600);
  text("Thu", 205,600);
  text("Fri", 255,600);
  text("Sat", 295,600);

  textSize(30);
  text("My hand biting problem", 10,30);
  
  
  
  stroke("black");
  noFill();
  translate(40,530);
  for(var i =0; i < totalData.length; i++){
    translate(45,0);
    push();
    rect(20,50,40,totalData[i] * -5.0);
    pop();
    //translate(45,-100);
    push();
    rect(20,-150,40,nailData[i] * -5.0);
    pop();
    //translate(45,-200);
    push();
    rect(20,-350,40, skinData[i] * -5.0);
    pop();
  
  }
}

//function draw(){
  //if(mouseX > 45 || mouseX < 85){
    //rec1 = true;
  //} else {
    //rec1 = false;
  //}
  
  //while(rec1 === true)
  //{
    //fill("red");
    //rect(45,0,40,600);
  //}
  //else {
    //fill("blue")
  //}
//}