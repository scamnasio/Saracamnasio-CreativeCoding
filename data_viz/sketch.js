var table;
function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable("nails.csv", "csv", "header");
  
}

function setup() {
  color(255);
  createCanvas(400,600);
  totalData = table.getColumn("Total");
  nailData = table.getColumn("Nail");
  skinData = table.getColumn("Skin");
  textSize(14);
  //stroke(255);
  //count the rows
  text("Total", 10,560);
  text("Nail", 10,360);
  text("Skin", 10,160);
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