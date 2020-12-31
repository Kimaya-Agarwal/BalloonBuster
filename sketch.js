var bow;
var arrow, arrowGroup;
var arrow1;
var bowImage;
var background1;
var background20;
var background2;
var redImage;
var blueImage;
var pinkImage;
var green;
var score,  redBalloonGroup , greenBalloonGroup ,pinkBalloonGroup, blueBalloonGroup ;

function preload()
{
 //load your images here 
  background20 = loadImage("background0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
  redBalloon1 = loadImage("red_balloon0.png");
  blueBalloon1 = loadImage("blue_balloon0.png")
  pinkBalloon1 = loadImage("pink_balloon0.png")
  greenBalloon1 = loadImage("green_balloon0.png")
}

function setup() 
{
  createCanvas(600, 600);
  //add code here
  background0 = createSprite(0,0,600,600);
  background0.addImage("background0",background20 );
  
  bow = createSprite(480,220,20,50);
  bow.addImage("bow0", bowImage);
  
  background0.scale = 2.7;
  
  var rand = Math.round(random(10,100));
  redBalloonGroup = new Group();
  pinkBalloonGroup = new Group();
  blueBalloonGroup = new Group();
  greenBalloonGroup = new Group();
  arrowGroup = new Group();
  
  score = 0;
  
}

function draw() 
{
  //add code here
  background0.velocityX = -3;
  
  if (background0.x < 0)
   {
      background0.x = background0.width/2;
    }

  
  if(keyDown("space"))
  {
    arrowFun();
  }
  
  bow.y = World.mouseY;
  
  var rand = Math.round(random(1,4));
 if(frameCount%80 === 0)
   {
     if(rand === 1)
       {
         redBalloon();
       }
     else if(rand === 2)
       {
         pinkBalloon();
       }
     else if(rand === 3)
       {
         greenBalloon();
       }
     else
       {
         blueBalloon();
       }
   }
  if(arrowGroup.isTouching(redBalloonGroup))
    {
      redBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score + 1;
    }
  if(arrowGroup.isTouching(blueBalloonGroup))
    {
      blueBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score + 3;
    }
  if(arrowGroup.isTouching(pinkBalloonGroup))
    {
      pinkBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score + 5;
    }
  if(arrowGroup.isTouching(greenBalloonGroup))
    {
      greenBalloonGroup.destroyEach();
      arrowGroup.destroyEach();
      score = score + 7;
    }
  drawSprites();
  textSize(20);
  text("Score: "+score,500,50);
}
 function arrowFun()
{
   arrow1 = createSprite(550,250,20,50);
    arrow1.addImage("arrow0.png",arrowImage);
    arrow1.y = bow.y;
    arrow1.scale = 0.3;
    arrow1.velocityX = -5 ;
    arrow1.lifetime = 150;
    arrowGroup.add(arrow1);
}

 function greenBalloon()
{
green1 =createSprite(0,Math.round(random(20,370)),10,10);
      green1.addImage("green_balloon0",greenBalloon1);
      green1.velocityX = 3
      green1.scale = 0.1;
      green1.lifetime = 150;
      greenBalloonGroup.add(green1);
}

 function redBalloon()
{
 red1 =createSprite(0,Math.round(random(20,370)),10,10);
      red1.addImage("red_balloon0",redBalloon1);
      red1.velocityX = 3
      red1.scale = 0.1;
      red1.lifetime = 150;
      redBalloonGroup.add(red1);
}

 function pinkBalloon()
{
pink1 =createSprite(0,Math.round(random(20,370)),10,10);
      pink1.addImage("pink_balloon0",pinkBalloon1);
      pink1.velocityX = 3
      pink1.scale = 1.3;
      pink1.lifetime = 150;
      pinkBalloonGroup.add(pink1);
}

 function blueBalloon()
{
blue1 =createSprite(0,Math.round(random(20,370)),10,10);
      blue1.addImage("blue_balloon0",blueBalloon1);
      blue1.velocityX = 3;
      blue1.scale = 0.1;
      blue1.lifetime = 150;
      blueBalloonGroup.add(blue1);
}