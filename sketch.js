var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg)
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost.scale = 0.3;
  climbersGroup = createGroup();
}

function draw() {
  background(200);
  if (keyDown("space")){
    ghost.velocityY = -5
  }
  ghost.velocityY = ghost.velocityY + 0.5;
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyIsDown(UP_ARROW)){
      ghost.y = ghost.y -2
    }
    if(keyIsDown(LEFT_ARROW)){
      ghost.x = ghost.x -2
    }
    if(keyIsDown(DOWN_ARROW)){
      ghost.y = ghost.y +2
    }
    if(keyIsDown(RIGHT_ARROW)){
      ghost.x = ghost.x +2
    }
    ghost.collide(climbersGroup);
    doorspwn();
    climberspwn();
drawSprites();
  }
  function doorspwn(){
    if(frameCount%240==0){
    door = createSprite(200,-50);
    door.velocityY = +3;
    //random e numero aleatorio
    //math.round transforma numeros decimais em numeros inteiros
    door.x = Math.round(random(120,400));
    door.addImage(doorImg);
   //depth e profundidade
    ghost.depth = door.depth;
    ghost.depth = ghost.depth + 1;
    console.log(ghost.depth);
    console.log(door.depth);
    
    }
  }
  function climberspwn(){
    if(frameCount%240==0){
      climber = createSprite(200,10);
      climber.velocityY = 3;
    //random e numero aleatorio
    //math.round transforma numeros decimais em numeros inteiros
    climber.x = door.x;
    climber.addImage(climberImg);
    climbersGroup.add(climber);
    }
  }