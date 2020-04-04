var rectangle, movingRectangle;

function setup() {
  createCanvas(800,400);
  rectangle = createSprite(200, 200, 50, 80);
  movingRectangle = createSprite(240,200,40,60);
  rectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";
  movingRectangle.debug = true;
  rectangle.debug = true;
}

function draw() {
  background(0,0,0);
 movingRectangle.x = World.mouseX;
 movingRectangle.y = World.mouseY;
 if(movingRectangle.x - rectangle.x < rectangle.width/2 + movingRectangle.width/2 
  && rectangle.x - movingRectangle.x < rectangle.width/2 + movingRectangle.width/2
  && movingRectangle.y - rectangle.y < rectangle.height/2 + movingRectangle.height/2
  && rectangle.y - movingRectangle.y < rectangle.height/2 + movingRectangle.height/2){
   movingRectangle.shapeColor = "red";
   rectangle.shapeColor = "red";
 }
 else{
   movingRectangle.shapeColor ="green";
   rectangle.shapeColor = "green";
 }
  drawSprites();
}