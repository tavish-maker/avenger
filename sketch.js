var bg;
var canvas;
var thor,ironman,spiderman,captainamerica;
var spidey,irony,captainy,thory;
var superman,flash,batman;
var supery,flash,baty;


function preload(){
  bg=loadImage("avengers.jpg");
  spiderman=loadImage("yoh.png");
  ironman=loadImage("fhg.png");
  captainamerica=loadImage("hg.dms");
  thor=loadImage("huj.png");
  thor=loadImage("gh.png");
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
  captainy.scale=0.05;
  captainy=createSprite(displayWidth/2-320,displayHeight/2-310);
  captainy.addImage("ghe",thor);
  captainy.scale=0.2;
  supery=createSprite(displayWidth/2-320,displayHeight/2-310);
  supery.addImage("ghr",superman);
  supery.scale=0.1;
}

function draw() {
  background(bg); 

  if(mousePressedOver(spidey)){
    irony.visible=false;
    captainy.visible=false;
    thory.visible=false;
  }
  if(mousePressedOver(irony)){
    spidey.visible=false;
    thory.visible=false;
    captainy.visible=false;
  }
       
  if(mousePressedOver(captainy)){
    irony.visible=false;
    spidey.visible=false;
    thory.visible=false;
  }

  if(mousePressedOver(thory)){
    irony.visible=false;
    spidey.visible=false;
    captainy.visible=false;
  }


  if(mousePressedOver(thory)){
    irony.visible=false;
    spidey.visible=false;
    captainy.visible=false;
  }

  if(mousePressedOver(thory)){
    irony.visible=false;
    spidey.visible=false;
    captainy.visible=false;
  }

  if(mousePressedOver(supery)){
    
    flasy.visible=false;
    baty.visible=false;
  }


  drawSprites();
}