var tom,tomImage1,tomImage2,tomImage3;
var jerry,jerryImage1,jerryImage2,jerryImage3;
var bg,bgImage;

function preload() {
    //load the images here
    tomImage1=loadAnimation("images/tomOne.png");
    tomImage2=loadAnimation("images/tomThree.png","images/tomTwo.png");
    tomImage3=loadAnimation("images/tomFour.png");

    bgImage=loadImage("images/garden.png");

    jerryImage1=loadAnimation("images/jerryOne.png");
    jerryImage2=loadAnimation("images/jerryThree.png","images/jerryTwo.png");
    jerryImage3=loadAnimation("images/jerryFour.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    bg=createSprite(500,400,1000,800);
    bg.addImage(bgImage);
    bg.scale=1.2

    tom=createSprite(700,600,40,40);
    tom.addAnimation("tomsleeping",tomImage1);
    tom.scale=0.2;

    jerry=createSprite(100,600,40,40);
    jerry.addAnimation("jerrystanding",jerryImage1);
    jerry.scale=0.15;



}

function draw() {

    background(0);
    console.log(tom.x-jerry.x);
    //Write condition here to evalute if tom and jerry collide
   if(tom.x-jerry.x < 0 ) {

        tom.addAnimation("tomtouching",tomImage3);
        tom.changeAnimation("tomtouching",tomImage3);
        tom.scale=0.2;

        jerry.addAnimation("jerrytouching",jerryImage3);
        jerry.changeAnimation("jerrytouching",jerryImage3);
        jerry.scale=0.15;

        tom.velocityX=0;
        tom.x=200;

    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      tom.velocityX=-5;
      tom.addAnimation("tomrunning",tomImage2);
      tom.changeAnimation("tomrunning",tomImage2);

      jerry.addAnimation("jerryteasing",jerryImage2);
      jerry.changeAnimation("jerryteasing",jerryImage2);

  }


}
