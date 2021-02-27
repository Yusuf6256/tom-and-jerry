var garden,gardenImg;
var tom,catImg1,catImg2;
var jerry,mouseImg1,mouseImg2;

function preload() {
    //load the images here
    gardenImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat3.png","images/cat2.png");
    catImg2 = loadImage("images/cat4.png");
    mouseImg1 = loadImage("images/mouse1.png");
    mouseImg2 = loadImage("images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);

    //create tom and jerry sprites here
    garden = createSprite(500,400,100,100)
    garden.addImage(gardenImg)

    garden.scale=1.3

    tom = createSprite(700,700,20,20);
    tom.scale = 0.1

    jerry = createSprite(200,700,20,20);
    jerry.addAnimation("jerryrunning",mouseImg1);
    jerry.scale = 0.1


}

function draw() 
{

    background(0);
    //Write condition here to evalute if tom and jerry collide
    if(tom.isTouching(jerry))
    {
        tom.addAnimation("tomHappy",catImg2);
        tom.changeAnimation("tomHappy")
        tom.velocityX = 0
        jerry.addAnimation("jerryHappy",mouseImg2);
        jerry.changeAnimation("jerryHappy");
        jerry.velocityX=0
    }
    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if(keyDown(LEFT_ARROW)){
    tom.velocityX = -4;
    tom.addAnimation("tomchasing",catImg1)
  }
}
