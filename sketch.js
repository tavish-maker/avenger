var bg;
var canvas;
var thor,ironman,spiderman,captainamerica;
var spidey,irony,captainy,thory;
var flash,batman;
var flash,baty;
var fakeSprite;
var fakeSprite2,fakeSprite3,fakeSprite4;
var groung ;
var movingcaptain;
//var moving2;
//var moving3;
var movingc;
var moving5;
var moving6;
var movingirony;
var joker_ing,supery_ing;


function preload(){
  bg=loadImage("avengers.jpg");
  spiderman=loadImage("yoh.png");
  ironman=loadImage("fhg.png");
  captainamerica=loadImage("hg.dms");
  thor=loadImage("huj.png");
  movingcaptain=loadImage("c1.png")
  movingiron=loadImage("img1.png")
  moving1=loadAnimation("c1.png","c2.png","c3.png","c4.png","c5.png","c6.png","c7.png","c8.png","c9.png","c10.png","c11.png","c12.png","c13.png","c14.png","c15.png","c16.png")
  moving5=loadAnimation("ibg1.png","ibg2.png","ibg3.png","ibg4.png","ibg5.png","ibg6.png","ibg7.png","ibg8.png","ibg9.png","ibg11.png")
  moving3=loadAnimation("img1.png","img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png","img10.png","img11.png","img12.png","img13.png","img14.png","img15.png","img16.png",
  "img18.png","img19.png")
  moving6=loadAnimation("jk1.png","jk2.png","jk3.png","jk4.png","jk5.png","jk6.png","jk9.png","jk10.png","jk11.png");
  baty_ing=loadImage("batya.png");
  joker_ing=loadImage("jokery.png");
  supery_ing=loadImage("supermany.png");
  
}
function setup() {
  canvas=createCanvas(displayWidth-100,displayHeight-200);
  ground = createSprite(displayWidth/2,height,displayWidth,50)
  spidey=createSprite(displayWidth/2-500,displayHeight/2-100);
  spidey.addImage("ghs",spiderman);
  //spidey.addAnimation("fgd",moving2)
  spidey.scale=0.2;
  irony=createSprite(displayWidth/2-500,displayHeight/2-310);
  irony.addImage("ghq",ironman);
  irony.addAnimation("ghf",moving3)
  irony.scale=0.09;
  captainy=createSprite(displayWidth/2-320,displayHeight/2-100,400,400);
  captainy.addImage("ghw",captainamerica);
  captainy.addImage("c",movingcaptain);
  captainy.scale=0.3;
  thory=createSprite(displayWidth/2-320,displayHeight/2-310);
  thory.addImage("ghe",thor);
  thory.scale=0.2;
  fakeSprite=createSprite(displayWidth/2-500,displayHeight/2-100);
  fakeSprite2=createSprite(displayWidth/2-500,displayHeight/2-310);
  fakeSprite3=createSprite(displayWidth/2-320,displayHeight/2-100,400,400)
movingc=createSprite(displayWidth/2-200,height-100,50,50)
movingc.scale=5;
movingc.addAnimation("h",moving1)
movingc.visible=false;

  
  
  
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
    movingc.visible=true
    captainy.visible=false;
  }
  fakeSprite3.visible=false;
  
  

  if(keyDown("space")){
    captainy.changeImage("c",movingcaptain);
  }
 
  if(keyDown("space")){
    irony.changeImage("c",movingirony)
  }
 

 if(keyDown("UP_ARROW")){
   captainy.velocityY=-5;
 }

 if(keyDown("UP_ARROW")){
  irony.velocityY=-5;
}


 captainy.velocityY=captainy.velocityY+0.5;
 captainy.collide(ground)

 irony.velocityY=captainy.velocityY+0.5;
 irony.collide(ground)

 if(keyDown("RIGHT_ARROW")){
   captainy.velocityX=5;
 }
 
 if(keyDown("RIGHT_ARROW")){
  irony.velocityX=5;
}

 /*if(spidey.visible===true){
  spidey.changeAnimation("fgd",moving2)

   }*/

   spawnEnemy1();
   spawnEnemy2a();
   spawnEnemy3();
   

  drawSprites();
  }

  function spawnEnemy1(){
    if(World.frameCount%100===0){
      var rand=Math.round(random(100,displayHeight-300))
    var enemy1=createSprite(displayWidth,rand,20,20)
    enemy1.velocityX=-5
    
    enemy1.scale=0.5;
   
    enemy1.addAnimation("fgr",moving5,)


    }
    
  function spawnEnemy2a(){
    if(World.frameCount%100===0){
      var rand=Math.round(random(displayWidth+100,0))
      var enemy2=createSprite(rand,0,20,20)
      enemy2.velocityY=2;
      enemy2.addAnimation("fzr",baty_ing)
      enemy2.addAnimation("zsx",joker_ing)
      enemy2.addAnimation("bcd",supery_ing)
  }
  }
}
function spawnEnemy3(){
  if(World.frameCount%100===0){
    var rand=Math.round(random(100,displayHeight-300))
  var enemy1=createSprite(displayWidth,rand,20,20)
  enemy1.velocityX=-5
  
  enemy1.scale=0.5;
 
  enemy1.addAnimation("fxr",moving6)


  }
}
