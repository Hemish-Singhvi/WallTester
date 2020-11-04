var wall, bullet, speed, weight;
var thickness, height, deformation;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 25, 12);
  bullet.shapeColor = "white";
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = (80, 80, 80);
  speed = random(50, 90);
  weight = random(400, 1500);
  bullet.velocityX = speed;
  height = 400;
}

function draw() {
  background("black");
  if (bullet.isTouching(wall)){
    bullet.velocityX = 0;
    deformationCalc();
  }
  drawSprites();
}

function deformationCalc(){
  deformation = (0.5 * weight * speed * speed)/(thickness*thickness*thickness);
  if(deformation < 10){
    bullet.shapeColor = "green";
    textSize(40);
    fill("green");
    text("Wall Accepted!", 600, 200);
  }
  if(deformation > 10){
    bullet.shapeColor = "red";
    textSize(40);
    fill("red");
    text("Wall Rejected!", 600, 200);
  }

}