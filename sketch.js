 var s1, s1s, s1r, s1l, s1f;
 var s1b, s1sb, s1lb, s1rb;

 var s2, s2s, s2r, s2l;
 var s2b, s2sb, s2lb, s2rb;

 var water;
 var ob1, ob2, ob3, ob4, ob5, ob6;
 var obstaclesGroup

  gameState = 0;

function preload() {
  //Surfer Images
  s1s = loadImage("images/Surfer1/s1s.png");
  s1r = loadImage("images/Surfer1/s1r.png");
  s1l = loadImage("images/Surfer1/s1l.png");
  s1f = loadImage("images/Surfer1/s1f.png")
   
  s2s = loadImage("images/Surfer2/s2s.png");
  s2r = loadImage("images/Surfer2/s2r.png");
  s2l = loadImage("images/Surfer2/s2l.png");
  
  //Surfboard Images
  s1sb = loadImage("images/Surfer1/sb.png");
  s1lb = loadImage("images/Surfer1/lb.png");
  s1rb = loadImage("images/Surfer1/rb.png");

  s2sb = loadImage("images/Surfer2/sb.png");
  s2lb = loadImage("images/Surfer2/lb.png");
  s2rb = loadImage("images/Surfer2/rb.png");

  water = loadImage("images/water3.jpg");

  ob1 = loadImage("images/obstacles/ob1.png")
  ob2 = loadImage("images/obstacles/ob2.png")
  ob3 = loadImage("images/obstacles/ob3.png")
  ob4 = loadImage("images/obstacles/ob4.png")
  ob5 = loadImage("images/obstacles/ob5.png")
  ob6 = loadImage("images/obstacles/ob6.png")

}

function setup() {
  createCanvas(displayWidth, displayHeight);


  s1b = createSprite(191,220,20,40);
  s1b.addImage(s1sb);
  s1b.scale = 0.5 
  //s1b.debug = true;  
  s1b.setCollider("rectangle",0,0,20,20);
  
  s1 = createSprite(200,200,20,40);
  s1.addImage(s1s);
  s1.scale = 0.5;
  //s1.debug = true;
  s1.setCollider("rectangle",0,0,150,150);

  s2b = createSprite(896,220,20,40);
  s2b.addImage(s2sb);
  s2b.scale = 0.5;
  s2b.setCollider("rectangle",0,0,20,20);

  s2 = createSprite(900,200,20,40);
  s2.addImage(s2s);
  s2.scale = 0.5;
  //s2.debug = true;
  s2.setCollider("rectangle",0,0,150,150);
  
  obstaclesGroup = createGroup()

}

function draw(){
  background(277);

  image(water,0,0,displayWidth);

  s1.collide(s1b);
  s2.collide(s2b);

  camera.y = s1.y;

  if(gameState === 0){
  fill("black");
  textSize(24);
  text("Press space to start Surfing!",500,50);
  }

  if(keyDown("space")){
    gameState = 1;
  }

  if(gameState === 1){

    spawnObstacles();
 
  if(keyDown(LEFT_ARROW)){
    s1.addImage(s1l);
    s1b.addImage(s1lb);
    s1.velocityX = -2;
    s1b.velocityX = -2;
  }

  if (keyDown(RIGHT_ARROW)){
    s1.addImage(s1r);
    s1b.addImage(s1rb);
    s1.velocityX = 4;
    s1b.velocityX = 4;
    
  }

  if(keyDown(DOWN_ARROW)){
    s1.addImage(s1s);
    s1b.addImage(s1sb);
    s1.velocityY = 5;
    s1b.velocityY = 5;
  }
  
}

  if(s1.isTouching(obstaclesGroup)){
    s1.addImage(s1f);
    s1b.visible = false;
    fill("black");
    textSize(24);
    text("Game Over!!",s1.x,s1.y-100);
    gameState = 2;
    s1.setVelocity(0,0);
  }

  drawSprites();
}

function spawnObstacles(){
  if(frameCount % 20 === 0){
    var x = Math.round(random(100,displayWidth-100));
    var y = Math.round(random(100,displayHeight-100));
    var obstacle = createSprite(x,y);

    obstacle.scale = 0.5

    obstaclesGroup.add(obstacle)

    obstacle.addImage(ob1);

    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(ob1);
              break;
      case 2: obstacle.addImage(ob2);
              break;
      case 3: obstacle.addImage(ob3);
              break;
      case 4: obstacle.addImage(ob4);
              break;
      case 5: obstacle.addImage(ob5);
              break;
      case 6: obstacle.addImage(ob6);
              break;
      default: break;
    }
  }
}
