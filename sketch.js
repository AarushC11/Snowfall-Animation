var backgroundImage;
var snowflakeImage;
let snowArray = []; 
let snowNum = 5;

function preload() {
  backgroundImage = loadImage("snow1.jpg");

  snowflakeImage = loadImage('snow4.webp');
}
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  for (let i = 0; i < snowNum; i++){
    snowArray[i] = new Snow();
  }
}

function draw() {
  background(255,255,255);  
  if(backgroundImage) 
   background(backgroundImage);
  //drawSprites();
  for (let i = 0; i < snowNum; i++){
    snowArray[i].show();
  }

}
class Snow{ 
  
  constructor(){ 
    this.snowX = random(width); 
    this.snowY = random(height);
    this.snowflake="snow2.jpg";
  }
  
  show(){ 
    image(snowflakeImage,this.snowX,this.snowY,1,1);
    //rect(this.snowX, this.snowY, 50, 25);
  }
  
}

