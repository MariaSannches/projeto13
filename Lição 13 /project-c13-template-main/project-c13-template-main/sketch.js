var garden,rabbit;
var gardenImg,rabbitImg;
var apple, ornge;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function createApples() {
  apple = createSprite(random(50,350),0,10,10);
  apple.addImage(appleImg);
  apple.scale=0.05;
  apple.velocityY = 3;
  apple.lifetime=150;
    }

function createOrange() {
  orange = createSprite(random(50,350),0,10,10);
  orange.addImage(orangeImg);
  orange.scale=0.07;
  orange.velocityY=3;
  orange.lifetime=150;
        }

function setup(){
  
  createCanvas(400,400);

garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  var select_sprites = Math.round(random(1,2));
  if(frameCount %80 == 0){
    if (select_sprites == 1){
      createApples();
    } else if (select_sprites == 2){ 
      createOrange();
    }
  } 
  rabbit.x = World.mouseX;
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}
