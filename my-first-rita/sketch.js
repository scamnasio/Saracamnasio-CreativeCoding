var lexicon;

function preload() {
  poem = loadStrings('Garden.txt');
}

function setup() {
  createCanvas(600, 450);
  background(255);
  
  //instructions
  textSize(15);
  textAlign(RIGHT, TOP);
  var instructions="Click anywhere for madlibs!";
  text(instructions, 0,100,width,height);
  
  lexicon = new RiLexicon();
  makeTitle();
  var oneString = poem.join(' ');
  var sentences = RiTa.tokenize(oneString);
  textSize(20);
  textAlign(LEFT, TOP);
  sentences[7]="\n";
  sentences[15]="\n";
  sentences[23]="\n";
  sentences[32]="\n"+"\n";
  sentences[41]="\n";
  sentences[50]="\n";
  sentences[58]="\n";
  sentences[65]="\n"+"\n";
  sentences[74]="\n";
  sentences[81]="\n";
  sentences[91]="\n";
  sentences[100]="";
  var almostThere = sentences.join(' ');
  text(almostThere, 0,70,width,height);
}  
  
function makeTitle() {
  textSize(30);
  textAlign(LEFT, TOP);
  var title="The Garden of Love";
  text(title, 0,0,width,height);
  textSize(20);
  var subtitle="by William Blake";
  text(subtitle, 0,30,width,height);
}


function mousePressed() {
  verb=lexicon.randomWord("vbd", 1);
  noun=lexicon.randomWord("nn", 2);
  love=lexicon.randomWord("nns",1);
  flowers=lexicon.randomWord("nns",2);
  background(255);
  textSize(30);
  textAlign(LEFT, TOP);
  var title="The Garden of" + " " + love;
  text(title, 0,0,width,height);
  textSize(20);
  var subtitle="by William Blake";
  text(subtitle, 0,30,width,height);
  var output = "I went to the Garden of " +
     love + "\n"  +
    "And" + " " + verb + " " +
    "what I never had" + " " + verb +"\n" +
    "A" + " " + noun + " " +
    "was built in the midst" + "\n" +
    "Where I used to play on the green" + "\n" + "\n"+
    "And the gates of this" + " " + noun + " "+
    "were shut" + "\n" +
    "And" + " " + "'Thou" + " " 
    + lexicon.randomWord("vbd") + " " 
    + "not" + "'" + "\n"+
    "So I turned to the Garden of"+ " "+ love + "\n"+
    "That so many" + " " + lexicon.randomWord("jj", 1)+ " " + flowers+ 
    " " + "bore" + '\n' + "\n" +
    "And I saw it was filled with" + " " + 
    lexicon.randomWord("nns",2)  + "\n" +
    "And" + " " + lexicon.randomWord("nns",3) + " " +  
    "where" + " " + flowers + " " + "should be" + "\n"+
    "And priests in" + " " + lexicon.randomWord("jj", 1) +
    " " + "gowns were" + " " + lexicon.randomWord("vbg",2) + " "+ "their rounds" + "\n" +
    "And binding with briars my" + " " + lexicon.randomWord("nns",1) + " "+ "and desires.";
    
  textSize(20);
  text(output, 0,70,width,height);
}

