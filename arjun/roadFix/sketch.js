let posX=0;
let posY=0;
function preload() {
  //load game assets
  bgImage=loadImage("images/road.jpg");
 
}
var player,target,obstacle1,obstacle2;

function setup() {
  createCanvas(600,600);
  bg=createSprite(300,-458); 
  bg1=createSprite(300,-1375); 
}

function draw() {
  console.log("heigth = " + bg.height)
  background("black"); 
  bg.addImage(bgImage);
  bg1.addImage(bgImage);
  bg.velocityY=5;
  bg1.velocityY=5;

  if(bg.y>800){
    bg.y=-458
  }
  if(bg1.y>917){
    bg1.y=-458
  }
  console.log(bg.y)
  console.log(bg1.y)
  drawSprites();

}
