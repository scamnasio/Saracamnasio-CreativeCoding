var soundOne, soundTwo, soundThree
var amplitude, cnv;
var drumOne, drumTwo, drumThree, drumFour, drumFive, drumSix;
var volumeChange;
var val=0.2;
var strokeColor=100;
var radio;
var drumsSel, melodySel, synthSel;

function preload() {
  soundOne = loadSound('loops/drum-one.wav');
  soundTwo = loadSound('loops/melody-one.wav');
  soundThree = loadSound('loops/synth-one.wav');
  
  drumOne = loadSound('loops/drum-one.wav');
  drumTwo = loadSound('loops/drum-two.wav');
  drumThree = loadSound('loops/drum-three.wav');
  drumFour = loadSound('loops/drum-four.wav');
  drumFive = loadSound('loops/drum-five.wav');
  drumSix = loadSound('loops/drum-six.wav');
  
  melodyOne = loadSound('loops/melody-one.wav');
  melodyTwo = loadSound('loops/melody-two.wav');
  melodyThree = loadSound('loops/melody-three.wav');
  melodyFour = loadSound('loops/melody-four.wav');
  melodyFive = loadSound('loops/melody-five.wav');
  
  synthOne = loadSound('loops/synth-one.wav');
  synthTwo = loadSound('loops/synth-two.wav');
  synthThree = loadSound('loops/synth-three.wav');
  synthFour = loadSound('loops/synth-four.wav');
  synthFive = loadSound('loops/synth-five.wav');
  
  silence = loadSound('loops/Silence.mp3');
  
  djLogo = loadImage("logo.png");
}

function setup() {
  background(0)
  createCanvas(850, 600)

  soundOne.loop();
  soundTwo.loop();
  soundThree.loop();
  
  soundOne.setVolume(val);
  soundTwo.setVolume(val);
  soundThree.setVolume(val);
  
  amplitudeOne = new p5.Amplitude();
  amplitudeTwo = new p5.Amplitude();
  amplitudeThree = new p5.Amplitude();
  
  amplitudeOne.setInput(soundOne);
  amplitudeTwo.setInput(soundTwo);
  amplitudeThree.setInput(soundThree);
 
  volumeChange = createSlider(1, 5, 0.1);
  volumeChange.position(750, 270);
  volumeChange.style('width', '80px');
  
  
 //radio = createRadio();
  //radio.option("Light");
  //radio.option("Medium");
  //radio.option("Dark");
  //radio.style('width', '60px');
  //textAlign(CENTER);
  smooth();
  
  drumsSel = createSelect();
  drumsSel.position(750, 340);
  drumsSel.option('Drums 1');
  drumsSel.option('Drums 2');
  drumsSel.option('Drums 3');
  drumsSel.option('Drums 4');
  drumsSel.option('Drums 5');
  drumsSel.option('Drums 6');
  drumsSel.option('Off');
  drumsSel.changed(mySelectEventOne);
  drumsSel.style("background-color", "white");
  drumsSel.style("border", "None");
  drumsSel.style("color", "black");
  drumsSel.style("font-family", "Arial");
  drumsSel.style("font-size", "14px");
  
  melodySel = createSelect();
  melodySel.position(750, 360);
  melodySel.option('Melody 1');
  melodySel.option('Melody 2');
  melodySel.option('Melody 3');
  melodySel.option('Melody 4');
  melodySel.option('Melody 5');
  melodySel.option('Off');
  melodySel.changed(mySelectEventTwo);
  melodySel.style("background-color", "white");
  melodySel.style("border", "None");
  melodySel.style("color", "black");
  melodySel.style("font-family", "Arial");
  melodySel.style("font-size", "14px");
  
  synthSel = createSelect();
  synthSel.position(750, 380);
  synthSel.option('Synth 1');
  synthSel.option('Synth 2');
  synthSel.option('Synth 3');
  synthSel.option('Synth 4');
  synthSel.option('Synth 5');
  synthSel.option('Off');
  synthSel.changed(mySelectEventThree);
  synthSel.style("background-color", "white");
  synthSel.style("border", "None");
  synthSel.style("color", "black");
  synthSel.style("font-family", "Arial");
  synthSel.style("font-size", "14px");
  
}

function draw() {
  background(0);
  
  fill("white");
   noStroke();
   //stroke(255,60, 160);
  textSize(11);
  text("Change Volume:", 750, 260)
  
  push();
  //tint(100, 153, 204);
  filter(INVERT);
  image(djLogo, 740, 20, 90,90);
  pop();
  
  
  ampStuff();
  
  var val = volumeChange.value();
  soundOne.setVolume(val);
  soundTwo.setVolume(val);
  soundThree.setVolume(val);

  
}

function mySelectEventOne() {
  
  soundOne.stop()
  soundTwo.stop()
  soundThree.stop()
 
  if(drumsSel.value()=='Drums 1'){
    soundOne=drumOne;
  }else if(drumsSel.value()=='Drums 2'){
    soundOne=drumTwo;
  }else if(drumsSel.value()=='Drums 3'){
    soundOne=drumThree;
  }else if(drumsSel.value()=='Drums 4'){
    soundOne=drumFour;
  }else if(drumsSel.value()=='Drums 5'){
    soundOne=drumFive;
  }else if(drumsSel.value()=='Drums 6'){
    soundOne=drumSix;
    
  }else if(drumsSel.value()=='Off'){
    soundOne=silence;
  }
    soundOne.loop();
    soundTwo.loop();
    soundThree.loop();
    
   ampStuff();
  
 
}

function mySelectEventTwo() {
  
  soundOne.stop()
  soundTwo.stop()
  soundThree.stop()
 
  if(melodySel.value()=='Melody 1'){
    soundTwo=melodyOne;
  }else if(melodySel.value()=='Melody 2'){
    soundTwo=melodyTwo;
  }else if(melodySel.value()=='Melody 3'){
    soundTwo=melodyThree;
  }else if(melodySel.value()=='Melody 4'){
    soundTwo=melodyFour;
  }else if(melodySel.value()=='Melody 5'){
    soundTwo=melodyFive;
  }else if(melodySel.value()=='Off'){
    soundTwo=silence;
  }
  soundOne.loop();
  soundTwo.loop();
  soundThree.loop();
  
  ampStuff();
  
}

function mySelectEventThree() {
  
  soundOne.stop()
  soundTwo.stop()
  soundThree.stop()

  if(synthSel.value()=='Synth 1'){
    soundThree=synthOne;
  }else if(synthSel.value()=='Synth 2'){
    soundThree=synthTwo;
  }else if(synthSel.value()=='Synth 3'){
    soundThree=synthThree;
  }else if(synthSel.value()=='Synth 4'){
    soundThree=synthFour;
  }else if(synthSel.value()=='Synth 5'){
    soundThree=synthFive;
  }else if(synthSel.value()=='Off'){
    soundThree=silence;
  }
    
  soundOne.loop();
  soundTwo.loop();
  soundThree.loop();
  
 ampStuff();
  
  
}

function ampStuff() {
  
  amplitudeOne.setInput(soundOne);
  amplitudeTwo.setInput(soundTwo);
  amplitudeThree.setInput(soundThree);
  
  stroke(255,60, 160);
  var levelOne = amplitudeOne.getLevel();
  var levelTwo = amplitudeTwo.getLevel();
  var levelThree = amplitudeThree.getLevel();
  
  var sizeOne = map(levelOne, 0, 1, 0, 300);
  var sizeTwo = map(levelTwo, 0, 1, 0, 300);
  var sizeThree = map(levelThree, 0, 1, 0, 300);
  
  strokeWeight(15);
  for(var i =0.4; i < 9; i++){
    stroke(88, 24, 69)
    line(i*80,800, i*80,sizeOne*random(20));
  }
  
  for(var d =0.6; d < 9; d++){
    stroke(144, 12, 63)
    line(d*80,800, d*80, sizeTwo*random(20));
  }
  
  for(var m =0.8; m < 9; m++){
    stroke(199, 0, 57)
    line(m*80,800, m*80, sizeThree*random(20));
  }
  
}


