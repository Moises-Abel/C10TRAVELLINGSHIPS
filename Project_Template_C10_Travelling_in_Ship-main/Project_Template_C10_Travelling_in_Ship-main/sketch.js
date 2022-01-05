var theocean, theoceanflowing
var boat, rockingboat

function preload(){
theoceanflowing = loadImage("sea.png");
rockingboat = loadAnimation ("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,600);
  
  theocean = createSprite(200,200,600,20);
  theocean.addImage("sea",theoceanflowing);
  theocean.scale =.5;
  theocean.x = theocean.width /2;
  theocean.velocityX = -4;

  boat = createSprite(300,160,20,50);
  boat.addAnimation("sailing",rockingboat);
  boat.scale =.5;
}

function draw() {

  background("white");
  drawSprites();

}