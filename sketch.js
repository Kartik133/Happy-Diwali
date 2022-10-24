var font,image,font2;

function setup() {
  createCanvas(540,540);

  font = loadFont("font.TTF");
  font2 = loadFont("Wishing.TTF");
  image = loadImage("Diwali.gif");
}

function draw() {
  background(image);

  fill(255,0,0);
  textSize(30);
  noStroke();
  textAlign(CENTER);
  text("Uma Khaitan",270,450);
  push();
  textSize(50);
  textFont(font);
  text("Happy Diwali",270,200);
  pop();
  //textSize(25);
  //text("P K Weaving Mills Pvt Ltd",270,480);
  textSize(25);
  textFont(font2);
  text("May this Diwali bring",270,290);
  text("good luck and",270,320);
  text("happiness to you !!",270,350);
}
