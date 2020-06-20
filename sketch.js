var thickness, wall;
var bullet,speed, weight;
var bulletRightEdge;
var wallLeftEdge;



function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed = random(40,100);
  weight = random(30,52);

  bullet = createSprite(50,200,50,20);
  wall = createSprite(500,200,50,height/2);

  bullet.velocityX = speed;


}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  

    if(hasCollided(bullet,wall)){
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  

  drawSprites();
}

function hasCollided(bullet2,wall2){
  bulletRightEdge = bullet2.x + bullet2.width;
  wallLeftEdge = wall2.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true;
  }
  return false;
}