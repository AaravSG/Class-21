var movingRect;
var fixedRect;

function setup() {
  createCanvas(800,800);
  // movingRect= createSprite(430, 200, 50, 50);
  // movingRect.shapeColor = "green";
  //fixedRect= createSprite(400,200,100,50);
  //fixedRect.shapeColor = "green";

  box1= createSprite(200,100,50,50);
  box1.shapeColor="blue";
  box1.velocityY = 3;

  box2= createSprite(200,600,50,50);
  box2.shapeColor="red";
  box2.velocityY = -3;

  //movingRect.debug= true;
  //fixedRect.debug= true;
}

function draw() {
  background(0);  
  drawSprites();


  bounceOff(box1,box2);


  // movingRect.x = mouseX;
  // movingRect.y = mouseY;

  // if(isTouching(movingRect, box1)){

  //   box1.height = 150;
  //   movingRect.shapeColor ="aqua";
  // }
  // else{
  //   box1.height = 50;
  //   movingRect.shapeColor ="green";

  // }

  
    

}


