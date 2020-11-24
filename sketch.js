
var player, player_running;
var ground, groundImage;
var obstacleGroup, obstacleImage;
var bananaGroup, bananaImage;

var backImage, back;

var score;

function preload()
{
  backImage = loadImage("jungle.jpg");
  
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  
  obstacleImage = loadImage("stone.png");
}

function setup() {
  createCanvas(800, 400);
  
  back = createSprite(0, 0, 800, 400);
  back.addImage(backImage);
  back.x = back.width /2;
  back.scale = 1.5;
  
  
  
  player = createSprite(100, 341);
  player.addAnimation("running", player_running);
  player.scale = 0.25;
  
  ground = createSprite(200, 370, 800, 60);
  ground.visible = false;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}

function draw() 
{
    background(220);
  
    back.velocityX = -4 
  
if (back.x < 100)
    {    
    back.x = back.width/2;
    }
  
    score = score + Math.round(getFrameRate()/60);
      
if (keyDown("space") )
   {
    player.velocityY = -12 ;
   }    

    player.velocityY = player.velocityY + 0.8;
  
if (obstacleGroup.isTouching(player))
  {
    player.scale = 0.2;
  } 
  
if (bananaGroup.isTouching(player)) 
  {
    bananaGroup.destroyEach(); 
    
    switch(score)
  {
    case 10: player.scale = 0.21;
             break;
    case 20: player.scale = 0.22;
             break;
    case 30: player.scale = 0.23;
             break;
    case 40: player.scale = 0.24;
             break;         
  }
    
  }
  


  player.collide(ground);

  spawnBanana();

  spawnObstacles();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  
  drawSprites();
}

function spawnObstacles()
  {
  if (frameCount % 130 === 0) {
 obstacle = createSprite(475, 310);
 obstacle.velocityX = -6;
 obstacle.addAnimation("Stone", obstacleImage);
 obstacle.scale = 0.3;
 obstacle.lifetime = 80;
 obstacleGroup.add(obstacle);
  }
}

function spawnBanana()
{
  if (frameCount % 130 === 0) {
 banana = createSprite(460, 200);
 banana.velocityX = -5;
 banana.addAnimation("Banana", bananaImage);
 banana.scale = 0.05;
 banana.lifetime = 80;
 bananaGroup.add(banana);
}
}