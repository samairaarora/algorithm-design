var fixedrect, movingrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(750,200,80,30);
  fixedrect = createSprite(20,200,50,80);
  fixedrect.velocityX = 2;
  movingrect.velocityX = -2;
  movingrect.shapeColor ="green";
  fixedrect.shapeColor = "green";

  //createSprite(400, 200, 50, 50);

}
/*
function draw() {
  background(0,0,0);  
  movingrect.x = World.mouseX ;
  movingrect.y = World.mouseY ;
  //console.log(movingrect.x - fixedrect.x);
  if(movingrect.x - fixedrect.x < fixedrect.width/2 + movingrect.width/2 &&
    fixedrect.x - movingrect.x < fixedrect.width/2 + movingrect.width/2 &&
    movingrect.y - fixedrect.y < fixedrect.height/2 + movingrect.height/2 &&
    fixedrect.y - movingrect.y < fixedrect.height/2 + movingrect.height/2){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
  }
  else{
    movingrect.shapeColor = "green";
    fixedrect.shapeColor = "green";
  }
  drawSprites();
}
*/


function draw (){
  background(0,0,0);
  if(movingrect.x - fixedrect.x <= fixedrect.width/2 + movingrect.width/2 ){
    movingrect.shapeColor = "red";
    fixedrect.shapeColor = "red";
    fixedrect.velocityX = -2 ;
    movingrect.velocityX = 2;

  }
  
  drawSprites();
  
}