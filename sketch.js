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


function preload(){
  bg=loadImage("avengers.jpg");
  spiderman=loadImage("yoh.png");
  ironman=loadImage("fhg.png");
  captainamerica=loadImage("hg.dms");
  thor=loadImage("huj.png");
  moving1=loadAnimation("ing/ing 1.png","ing/ing 2.png","ing/ing 3.png","ing/ing 4.png","ing/ing 5.png","ing/ing 6.png","ing/ing 7.png","ing/ing 8.png","ing/ing 9.png","ing/ing 10.png"
  ,"ing/ing 11.png","ing/ing 12.png","ing/ing 13.png","ing/ing 14.png","ing/ing 15.png","ing/ing 16.png")
  moving2-loadAnimation("ibg/ibg 1.png","ibg/ibg 2.png")
}

function setup() {
  canvas=createCanvas(displayWidth-100,displayHeight-200);
  spidey=createSprite(displayWidth/2-500,displayHeight/2-100);
  spidey.addImage("ghs",spiderman);
  spidey.scale=0.2;
  irony=createSprite(displayWidth/2-500,displayHeight/2-310);
  irony.addImage("ghq",ironman);
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
  drawSprites();
}