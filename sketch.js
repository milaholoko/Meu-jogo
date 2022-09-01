var bg,bgImg;
var player, shooterImg, alienImg;


function preload(){
  
  shooterImg = loadAnimation("assets/Shooter/l0_sprite_01.png","assets/Shooter/l0_sprite_22.png")
  alienImg = loadAnimation("assets/Alien/AlienAnimation(1).png","assets/Alien/AlienAnimation(15).png")


  bgImg = loadImage("assets/BackGround.jpg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 //adicionando a imagem de fundo
bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 2.9
  

//criando o sprite do jogador
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addAnimation('player',shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 




  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}

drawSprites();

}
