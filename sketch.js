var fixed, moving;

function setup() {
  createCanvas(800,400);
  fixed = createSprite(400, 200, 50, 50);
  moving = createSprite(200,300,30,30);
  fixed.shapeColor = "green";
  moving.shapeColor = "yellow";
}

function draw() {
  background(0);  
  drawSprites();

  moving.x = mouseX;
  moving.y = mouseY;

  if(moving.x - fixed.x <= moving.width/2 + fixed.width/2 &&
    fixed.x - moving.x <= moving.width/2 + fixed.width/2 &&
    moving.y - fixed.y <= moving.height/2 + fixed.height/2 &&
    fixed.y - moving.y <= moving.height/2 + fixed.height/2){
    fixed.width = fixed.width+10;;
  }
  else{
    fixed.width = fixed.width;
  }
}