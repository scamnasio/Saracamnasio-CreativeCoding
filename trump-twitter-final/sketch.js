var firstWord = ["The New York Times", "Brexit", "Fidel Castro", "Mitt Romney", "Coal", "Angela Merkel", "Ted Cruz", "Fake news", "Russia","Global Warming", "Planned Parenthood","Paul Ryan","Bernie Sanders", "Putin", "My tax return", "Megyn Kelly", "John Kasich", "Ivanka", "ISIS", "The mainstream media","The United States","Mexico","Germany", "Britain", "Jeb Bush",  "The Wall Street Journal", "Bill Clinton", "Politico", "Hillary Clinton", "Obama", "CNN", "Fox News", "The Electoral College"];
var secondWord = ["so crooked", "a Chinese conspiracy", "a loser", "out of control","a scam","such a sham", "going out of business","bad", "very biased", "unbelievably unfair", "failing", "poorly run and managed", "a third rate talent", "so totally biased", "so sad", "so bad", "a joke", "rigged", "goofy", "a puppet", "terrific", "a great success", "amazing", "unbelievably successful", "wonderful", "great", "embarrassing",  "stupid", "winning", "tremendous", "very good", "the best, just the best"];
var thirdWord = ["Sad", "Loser","I don’t think so", "HUGE", "Enjoy", "I love Hispanics","Special", "Not on my watch","No more", "Stay safe", "Big problem", "Apologize", "Too bad", "Very nice", "Very unfair", "Very exciting", "Can’t wait"];
var fourthWord = ["China", "MAGA", "MissUniverse", "CincoDeMayo", "Brexit", "TinyHands", "SmallLoan","Huge","CrookedHillary", "LOSER", "AmericaFirst", "VoterFraud", "CorruptHillary", "ImABigot", "DrainTheSwamp"];
var fifthWord = ["XENOPHOBIC", "MYSOGINIST", "HOMOPHOBIC", "INTOLERANT", "BIGOT"]

function preload() {
  img = loadImage("trump2.png");
  img2 = loadImage("Trump_2016.png");
}

function setup() {
  createCanvas(800,650);
  trumpImg();
  trumpSticker("GREAT");
  //image(img, width/2-300, height/2-100, img.width/2, img.height/2);
  var myBtnOne = createButton("Tweet");
  myBtnOne.position(660, 280);
  myBtnOne.mousePressed( function(){
    bannerChange();
  })
  var myBtnTwo = createButton("Change Tweet");
  myBtnTwo.position(560, 280);
  myBtnTwo.mousePressed(function(){
    tweetChange();
  })
}
function trumpImg() {
  background(41, 56, 126);
  image(img, width/6, height/3, img.width/2, img.height/2);
  fill(255);
  noStroke();
  rect(200, 250, 500, 20);
  
}

function trumpSticker(variable) {
  //var name = random(fifthWord);
  var slogan = "MAKE AMERICA" + " "+ variable +" " +"AGAIN";
  fill(33, 37, 84);
  image(img2, 152,10, img2.width/7, img2.height/9);
  fill("white");
  textSize(23);
  textStyle(BOLD);
  textAlign(CENTER);
  //textFont("Georgia");
  text(slogan, width/2, 120);
}

function tweetChange() {
  background(29, 161, 242);
  trumpImg();
  trumpSticker("GREAT");
  stroke("black");
  fill("black");
  insultee = random(firstWord);
  insult = random(secondWord);
  signoff = random(thirdWord);
  hashtag =  random(fourthWord);
  var output = insultee + " " + "is" + " " + insult + ". " + signoff + "!" + " #" + hashtag;
  textStyle(NORMAL);
  textAlign(LEFT);
  strokeWeight(0);
  textSize(15);
  textFont("Helvetica Neue");
  text(output, 203,260);
}

function bannerChange() {
  trumpSticker(random(fifthWord));
}

