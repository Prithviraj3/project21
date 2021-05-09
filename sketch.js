var bullet,wall
var speed,weight
var thickness
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50,200,50,50)
speed=random(223,321)  
weight=random(30,52)
bullet.velocityX=speed
thickness=random(22,83)
wall=createSprite(1200,200,thickness,height/2)
wall.shapeColor=color(80,80,80)

}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red"
    }
    if(damage<10){
      wall.shapeColor="green"
    }
  }
}