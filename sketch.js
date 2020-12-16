
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
  //creating monkey
  monkey=createSprite(80,315,20,20);
 monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  
  
}


function draw() {
  
  background("lightblue");
  
  if(ground.x<0) {
    ground.x=ground.width/2
  }
  
   //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
    }
      monkey.velocityY = monkey.velocityY + 0.8;
  
      monkey.collide(ground);
  
spawnFood();
  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50)
  
  
  drawSprites();
}
 
function spawnFood(){
  if(frameCount%80===0){
    banana=createSprite(600,150,10,15)
    banana.y=random(150,200)
    banana.velocityX=-4
    banana.addImage(bananaImage)
    banana.scale=0.1
  }
}

function spawnObstacles(){
  if(frameCount%80==0){
    obstacles=createSprite(600,330,20,15)
    obstacles.velocityX=-3
    obstacles.addImage(obstacleImage)
    obstacles.scale=0.1
  }
}







