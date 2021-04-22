function preload(){
dum = loadImage("dummy-removebg-preview.png")
}



function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
 dum1= createSprite(100, 80, 50, 50);
 dum1.addImage(dum)
 dum1.scale=0.3
 dum2= createSprite(100, 290, 50, 50);
 dum2.addImage(dum)
 dum2.scale=0.3  
 dum3= createSprite(100, 520, 50, 50);
 dum3.addImage(dum)
 dum3.scale=0.3    
}

function draw() {
  background(0);  
  drawSprites();
}