var bg;
var canvas;
var thor,ironman,spiderman,captainamerica;
var spidey,irony,captainy,thory;
var flash,batman;
var flash,baty;
var fakeSprite;
var fakeSprite2,fakeSprite3,fakeSprite4;
var moving1;
var moving2;
var moving3;


function preload(){
  bg=loadImage("avengers.jpg");
  spiderman=loadImage("yoh.png");
  ironman=loadImage("fhg.png");
  captainamerica=loadImage("hg.dms");
  thor=loadImage("huj.png");
  moving1=loadAnimation("ing/ing1.png","ing/ing2.png","ing/ing3.png")
  moving2=loadAnimation("icg/icg1.png"," icg/icg2.png","icg/icg3.png")
  moving3=loadAnimation("img/img1.png","img/img2.png","img/img3.png") }

function setup() {
  canvas=createCanvas(displayWidth-100,displayHeight-200);
  spidey=createSprite(displayWidth/2-500,displayHeight/2-100);
  spidey.addImage("ghs",spiderman);
  spidey.addAnimation("fgd",moving2)
  spidey.scale=0.2;
  irony=createSprite(displayWidth/2-500,displayHeight/2-310);
  irony.addImage("ghq",ironman);
  irony.addAnimation("ghf",moving3)
  irony.scale=0.09;
  captainy=createSprite(displayWidth/2-320,displayHeight/2-100);
  captainy.addImage("ghw",captainamerica);
  captainy.addAnimation("hst",moving1);
  captainy.scale=0.05;
  thory=createSprite(displayWidth/2-320,displayHeight/2-310);
  thory.addImage("ghe",thor);
  thory.scale=0.2;
  fakeSprite=createSprite(displayWidth/2-500,displayHeight/2-100);
  fakeSprite2=createSprite(displayWidth/2-500,displayHeight/2-310);

  
  
  
  spidey.setCollider("circle",0,0,10)
  thory.setCollider("circle",0,0,10)
  captainy.setCollider("circle",0,0,10)
  irony.setCollider("circle",0,0,10)
}

function draw() {
  background(bg); 

  if(mousePressedOver(fakeSprite)){
    console.log("working")
    irony.visible=false;
    captainy.visible=false;
    thory.visible=false;
  }
  
  fakeSprite.visible=false;
 
  if(mousePressedOver(fakeSprite2)){
    console.log("working")
    spidey.visible=false;
    captainy.visible=false;
    thory.visible=false;
  }
  fakeSprite2.visible=false;

  if(mousePressedOver(fakeSprite3)){
    console.log("working")
    irony.visible=false;
    spidey.visible=false;
    thory.visible=false;
  }
  fakeSprite3.visible=false;

 if(captainy.visible===true){
captainy.changeAnimation("hst",moving1)

 }

 if(keyDown("UP_ARROW")){
   captainy.velocityY=-5;
 }

 captainy.velocityY=captainy.velocityY+0.5;

 if(keyDown("RIGHT_ARROW")){
   captainy.velocityX=5;
 }

 if(spidey.visible===true){
  spidey.changeAnimation("fgd",moving2)

   }
  drawSprites();
}