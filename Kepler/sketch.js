// Everything is in AU

var angle=0.0;
var item=84;
var factor=1000;
var factorTwo;
var factorThree;
var finalFactor;
var infoButton;
var backButton;
var star_rad;
var semiminor;
var semimajor;
var planet_rad;
var lerpAmt;
var lerpedCol;
var au_value;
var original_semiminor;
var original_semimajor;
var sunRad = 0;
var earthRad = 0;

function preload() {
  table = loadTable("cc_planets.csv", "csv", "header");
  helloSound = loadSound('hello.mp3');
  beepSound = loadSound('sputnik-beep.mp3');
  colorbar = loadImage('colorbar.png');
  
}

function setup(){
  createCanvas(800,600);
  background(0);
  fill(255);
  smooth();
  
  // Scale:
  push();
  stroke("white");
  line(850, 100, 870, 100);
  pop();
  
  //Colorbar:
  image(colorbar, 30, 130, 20, 400);
  push();
  textSize(10);
  text("6800", 55, 140) 
  text("5200", 55, 340) 
  text("3600", 55, 530)
  pop();
  
  push();
  fill(255);
  textSize(11);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Temperature" + '\n' + '(K)',40,100);
  pop();
  
  // Define colormap for temperature
  colorFrom = color(255, 255, 0);
  colorTo = color(255, 0, 0);

  // SOUND:
  helloSound.setVolume(0.1);
  helloSound.loop();
  
  // IMPORTING DATA:
  periodData = table.getColumn("pl_orbper");
  semiminData = table.getColumn("pl_semi_min");
  semimaxData = table.getColumn("pl_orbsmax");
  nameData = table.getColumn("NAME");
  planetRadius = table.getColumn("pl_radius_au");
  starRadius = table.getColumn("st_radius");
  starTemp =  table.getColumn("st_teff");
  indexNumbers = table.getColumn('Numbers');
  

  
  // Random button: 
  randomButton = createButton('Change Planet');
  randomButton.position(10, 560);
  randomButton.style("background-color", "black");
  randomButton.style("border", "None");
  randomButton.style("color", "white");
  randomButton.style("font-family", "Arial");
  randomButton.style("font-size", "15px");
  
  
  
  // DEFINING VARIABLES:
    
  temp = starTemp[item];
  semiminor = semiminData[item]*factor;
  semimajor = semimaxData[item]*factor;
  period = periodData[item];
  starRad = starRadius[item];
  planRad = planetRadius[item];
  
  // map radii:
  
  starRadiiAmt = map(starRad, 0.00006360,  0.000998801, 0, 50);
  planetRadiiAmt = map(planRad, 0.00006360,  0.000998801, 0, 50);
  earthRadiiAmt = map(0.00004258750456, 0.00006360,  0.000998801, 0, 50);
  sunRadiiAmt = map(0.0046504672609621574078, 0.00006360,  0.000998801, 0, 50);
  
  // COLORMAP:
  lerpAmt = map(temp, 3652, 6820, 0, 1.0);
  sunlerpedAmt = map(5777, 3652, 6820, 0, 1.0);
  lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt);
  sunlerpedCol = lerpColor(colorFrom, colorTo, sunlerpedAmt);
  
  
  push();
  fill(255);
  textSize(13);
  textFont("Helvetica");
  text("1 second = 1 day",690,20);
  text("Radii of bodies not to scale",10,20);
  text("To view size comparison, click INFO",10,40); 
  nameText = nameData[item]
  pop();
  push(); 
  textSize(20);
  text(nameText,(width)-textWidth(nameText)-20,580);
  pop();

  // Making sure orbiting object does not exit window
  
  if (semimajor>=400 || semiminor>=400) {
    semimajor=semimajor/50;
    semiminor=semiminor/50;
    factorTwo=50;
    original_semiminor=(semiminor*factorTwo)/factor;
    original_semimajor=(semimajor*factorTwo)/factor;
    finalFactor=semimajor/original_semimajor;
    //print(semimajor)
    //print("whoah");
  
    if (semiminor<=30 || semimajor<=30) {
      semimajor=semimajor*10;
      semiminor=semiminor*10;
      factorThree=10;
      original_semiminor=(semiminor*factorTwo)/(factorThree*factor);
      original_semimajor=(semimajor*factorTwo)/(factorThree*factor);
      finalFactor=semimajor/original_semimajor;
      //print(semimajor)
      //print("Why")
  
    } else if (semimajor*2>=400 || semimajor*2>=400) {
      semimajor=semimajor/50;
      semiminor=semiminor/50;
      factorThree=50;
      original_semiminor=(semiminor*factorTwo*factorThree)/(factor);
      original_semimajor=(semimajor*factorTwo*factorThree)/(factor);
      finalFactor=semimajor/original_semimajor
      //print(semimajor)
      //print('uh oh')
    } else {
      print("FLAG")
    }
  } else if (semiminor<=30 || semimajor<=30) {
    semimajor=semimajor*10;
    semiminor=semiminor*10;
    factorTwo = 10;
    original_semiminor=semiminor/(factorTwo*factor);
    original_semimajor=semimajor/(factorTwo*factor);
    finalFactor=semimajor/original_semimajor
    //print(semimajor)
    //print('what')
  } else {
    original_semiminor=semiminor/factor;
    original_semimajor=semimajor/factor;
    finalFactor=factor;
    //print(semimajor)
    //print("lala")
  }
  

  // Info button: 

  infoButton = createButton('INFO');
  infoButton.position(380, 560);
  infoButton.style("background-color", "black");
  infoButton.style("border", "None");
  infoButton.style("color", "white");
  infoButton.style("font-family", "Arial");
  infoButton.style("font-size", "15px");
  
  push();
  fill(255);
  textSize(13);
  textFont("Helvetica");
  text("1 AU =" + " " + finalFactor + "px",690,40);
  pop();
  
}

function draw(){
  fill(0, 100); // semi-transparent white
  noStroke();
  //stroke(255);
  rect(80, 50, 700, 500);
  rect(225, 0, 400, 650);
  
  //print(finalFactor);

  
  randomButton.mouseClicked(randomize);
  
  
  frameRate(20);
  stroke(lerpedCol);
  fill(lerpedCol);
  ellipse(width/2, height/2, 30,30)
  
  // parameters for exoplanet
  angle +=(360/(period*20));
  var x,y;
  y=(cos(radians(angle)) * semiminor) +height/2;
  x=(sin(radians(angle)) * semimajor)+width/2;
  fill(255);
  noStroke();
  ellipse(x,y, 10, 10);
  
  infoButton.mouseClicked(info);
}


function info() {
  noLoop();
  fill("black");
  rect(0,0,width, height);
  push();
  //text("1 second = 1 day",20,20);
  infoButton.remove();
  randomButton.remove();
  backButton = createButton('GO BACK');
  backButton.position(365, 560);
  backButton.style("background-color", "black");
  backButton.style("border", "None");
  backButton.style("color", "white");
  backButton.style("font-family", "Arial");
  backButton.style("font-size", "15px");
  backButton.mouseClicked(redo);
  pop();
  
  push();
  strokeWeight(2);
  noFill();
  stroke("white");
  ellipse(width/4, (height)/5, planetRadiiAmt, planetRadiiAmt);
  stroke(lerpedCol);
  ellipse(width/4, (3*height)/5, starRadiiAmt, starRadiiAmt);
  
  stroke("DeepSkyBlue");
  ellipse((3*width)/4, (height)/5, earthRadiiAmt, earthRadiiAmt);
  stroke(sunlerpedCol);
  ellipse((3*width)/4, (3*height)/5, sunRadiiAmt, sunRadiiAmt);
  pop();
  
  push();
  noStroke();
  fill("white");
  text(nameText + " " + "+ host star to scale", 10, 30);
  text("Earth + Sun to scale", ((3*width)/4)+80, 30);
  pop();
 
}

function redo() {
  clear();
  loop();
  backButton.style("color", "black");
  createCanvas(800,600);
  background(0);
  fill(255);
  smooth();
  
  //Colorbar:
  image(colorbar, 30, 130, 20, 400);
  
  push();
  textSize(10);
  text("6800", 55, 140) 
  text("5200", 55, 340) 
  text("3600", 55, 530)
  pop();
  
  // Random button: 
  randomButton = createButton('Change Planet');
  randomButton.position(10, 560);
  randomButton.style("background-color", "black");
  randomButton.style("border", "None");
  randomButton.style("color", "white");
  randomButton.style("font-family", "Arial");
  randomButton.style("font-size", "15px");
  
  push();
  fill(255);
  textSize(11);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Temperature" + '\n' + '(K)',40,100);
  pop();
  
 push();
  noStroke();
  fill(255);
  textSize(13);
  textFont("Helvetica");
  text("1 second = 1 day",690,20);
  text("1 AU =" + " " + finalFactor + "px",690,40);
  text("Radii of bodies not to scale",10,20);
  text("To view size comparison, click INFO",10,40); 
  nameText = nameData[item]
  pop();
  push(); 
  textSize(20);
  text(nameText,(width)-textWidth(nameText)-20,580);
  pop();

  // Making sure orbiting object does not exit window

  
  // Info button: 

  infoButton = createButton('INFO');
  infoButton.position(380, 560);
  infoButton.style("background-color", "black");
  infoButton.style("border", "None");
  infoButton.style("color", "white");
  infoButton.style("font-family", "Arial");
  infoButton.style("font-size", "15px");

}

function randomize() {
  clear();
  item=random(indexNumbers);
  
  temp = starTemp[item];
  semiminor = semiminData[item]*factor;
  semimajor = semimaxData[item]*factor;
  period = periodData[item];
  starRad = starRadius[item];
  planRad = planetRadius[item];
  
  // Random button: 
  randomButton = createButton('Change Planet');
  randomButton.position(10, 560);
  randomButton.style("background-color", "black");
  randomButton.style("border", "None");
  randomButton.style("color", "white");
  randomButton.style("font-family", "Arial");
  randomButton.style("font-size", "15px");
  
  // map radii:
  
  starRadiiAmt = map(starRad, 0.00006360,  0.000998801, 0, 50);
  planetRadiiAmt = map(planRad, 0.00006360,  0.000998801, 0, 50);
  // COLORMAP:
  
  lerpAmt = map(temp, 3652, 6820, 0, 1.0);
  lerpedCol = lerpColor(colorFrom, colorTo, lerpAmt);
  
  createCanvas(800,600);
  background(0);
  fill(255);
  smooth();
  
  //Colorbar:
  image(colorbar, 30, 130, 20, 400);
  
  push();
  textSize(10);
  text("6800", 55, 140) 
  text("5200", 55, 340) 
  text("3600", 55, 530)
  pop();
  
  push();
  fill(255);
  textSize(11);
  textAlign(CENTER);
  textFont("Helvetica");
  text("Temperature" + '\n' + '(K)',40,100);
  pop();
  
   push();
  fill(255);
  textSize(13);
  textFont("Helvetica");
  text("1 second = 1 day",690,20);
  text("Radii of bodies not to scale",10,20);
  text("To view size comparison, click INFO",10,40); 
  nameText = nameData[item]
  pop();
  push(); 
  textSize(20);
  text(nameText,(width)-textWidth(nameText)-20,580);
  pop();

  // Making sure orbiting object does not exit window

  
  // Info button: 

  infoButton = createButton('INFO');
  infoButton.position(380, 560);
  infoButton.style("background-color", "black");
  infoButton.style("border", "None");
  infoButton.style("color", "white");
  infoButton.style("font-family", "Arial");
  infoButton.style("font-size", "15px");
  
   if (semimajor>=400 || semiminor>=400) {
    semimajor=semimajor/50;
    semiminor=semiminor/50;
    factorTwo=50;
    original_semiminor=(semiminor*factorTwo)/factor;
    original_semimajor=(semimajor*factorTwo)/factor;
    finalFactor=semimajor/original_semimajor;
    earth=true;
    //print(semimajor)
    //print("whoah");
  
    if (semiminor<=30 || semimajor<=30) {
      semimajor=semimajor*10;
      semiminor=semiminor*10;
      factorThree=10;
      original_semiminor=(semiminor*factorTwo)/(factorThree*factor);
      original_semimajor=(semimajor*factorTwo)/(factorThree*factor);
      finalFactor=semimajor/original_semimajor;
      earth=false;
      //print(semimajor)
      //print("Why")
  
    } else if (semimajor*2>=400 || semimajor*2>=400) {
      semimajor=semimajor/50;
      semiminor=semiminor/50;
      factorThree=50;
      original_semiminor=(semiminor*factorTwo*factorThree)/(factor);
      original_semimajor=(semimajor*factorTwo*factorThree)/(factor);
      finalFactor=semimajor/original_semimajor
      //print(semimajor)
      //print('uh oh')
    } else {
      print("FLAG")
    }
  } else if (semiminor<=30 || semimajor<=30) {
    semimajor=semimajor*10;
    semiminor=semiminor*10;
    factorTwo = 10;
    original_semiminor=semiminor/(factorTwo*factor);
    original_semimajor=semimajor/(factorTwo*factor);
    finalFactor=semimajor/original_semimajor

    //print(semimajor)
    //print('what')
  } else {
    original_semiminor=semiminor/factor;
    original_semimajor=semimajor/factor;
    finalFactor=factor;
    
    //print(semimajor)
    //print("lala")
  }
  
   push();
  fill(255);
  textSize(13);
  textFont("Helvetica");
  text("1 AU =" + " " + finalFactor + "px",690,40);
  pop();

}