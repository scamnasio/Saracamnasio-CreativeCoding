var lexicon;
var poem = [];
var words = [];
var newpoem;
var punctuation=[];

function preload() {
 poem = loadStrings('Garden.txt');

}

function setup() {
  createCanvas(600, 600);
  background(255);
  var oneString = poem.join(' ');
  var sentences = RiTa.tokenize(oneString);
  lexicon = new RiLexicon();
  textSize(20);
  textAlign(LEFT, TOP);
  //punctuation=[7,15,23,32,41,50,58,65,74,81,91];
  //print(poem);
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
  //var almostThere = sentences.join(' ');
  text(sentences, 0,0,width,height);
  
  
}

function mousePressed() {
  background(255);
  generateWords();
}

function generateWords() {
  //first paragraph
  //lexicon.randomWord("vb", 1) + " " + 
  //lexicon.randomWord("jj", 2) + " " +
  sentences[6]=lexicon.randomWord("nn", 2);
  //second paragraph
  text("Garden of"+" " +sentences[6], 0, 0, width, height);
  //third
}