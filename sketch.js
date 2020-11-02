var bullet;
var speed;
var wall;
var weight;
var thickness;


function setup() {
createCanvas(1600,400);
bullet = createSprite(50, 200, 50, 20);
bullet.shapeColor = color("white")
wall = createSprite(1200,200,60,height/2);
speed = random(223,321);
thickness = random(22,83);
weight = random(30,50);
bullet.velocityX = speed;
wall.width = thickness;
}


function draw() {
  background(0,0,0);  

  if(wall.x-bullet.x < (wall.width+bullet.width)/2)
  {
    bullet.velocityX = 0;

    var damage = 0.5* weight* speed * speed/(thickness*thickness*thickness);

    if (damage <= 10){
      wall.shapeColor=color("green");
      }
     

      if (damage > 10 ){
      wall.shapeColor=color("red");
      }
      



  }
  drawSprites();
}