var fixedRect,movingRect, rect1;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  rect1 = createSprite(600, 200, 50, 80);

}

function draw() {
  background("cyan");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

   if (isTouching(movingRect, fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
   }

   else if(isTouching(movingRect, rect1)){
    movingRect.shapeColor="yellow";
    rect1.shapeColor="yellow"; 
   }

   else{
   movingRect.shapeColor="green";
   fixedRect.shapeColor="green";
   rect1.shapeColor="green";
  }

  drawSprites();
}
