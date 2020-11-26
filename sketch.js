var bullet,wall,thickness;
var speed,weight;

function setup() {
 createCanvas(1600,400); 
  
 bullet = createSprite(50,90,20,20);
 bullet.velocityX = 4;
 //bullet.debug = true;
 bullet.shapeColor = "white";

 wall = createSprite(1200,90,40,100); 
 wall.shapeColor=color(80,80,80);
 //wall.debug = true; 
 
speed = random(223,321);
weight= random(30,52);
thickness = random(22,83);
}

function draw() {
  background(0);
if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
   
   if(damage>10)
    {
        wall.shapeColor = color(255,0,0);
    }
   
   if(damage<10)
   {
     wall.shapeColor = color(0,255,0);
   }
   
}
  function hasCollided(bullet,wall) 
  { 
    bulletRightEdge = bullet.x + bullet.width;
    wallLeftEdge = wall.x;

    if(bulletRightEdge>=wallLeftEdge)
     {
       return true
     }
       return false;
  }



  drawSprites();
}