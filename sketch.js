var friend ;

var Grounnd;
var playAnimation  
var play

var gameState = "START";
var X
var bow , arrow,   redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
 var maze
 var cardboard1,cardboard2,cardboard3,cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22;
var house,houseAnimation , giftSHOP, giftSHOPAnimation
var daru,daruImage


function preload(){
  Grounnd = loadImage("846-8460559_road-highway-urban-construction-material-game-road-background.png")
  playAnimation  = loadImage("play.png") 
  animation = loadImage("360_F_274983170_VBZS85oSqlZCGPH1eEo1LTmKvsK9AVgW-removebg-preview.png") 
  friendStatic = loadAnimation("boy.png")
  friendAnimation = loadAnimation("boy.png", "boy1.png", "boy2.png","boy3.png")
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  houseAnimation = loadImage("house.png")
  giftSHOPAnimation = loadImage("gift.png")
  daruImage = loadImage("daruu.png")

}
  
function setup() {
      createCanvas( displayWidth, displayHeight);

     

       X =createInput("ENTER YOUR NAME")
      X.position(700,300)
  
      play  = createSprite(800,500)
      play.addImage(playAnimation)

      house  = createSprite(1100,550)
     house.addImage(houseAnimation)
     house.scale = 0.09
     house.visible = false

    
   
  

     friend = createSprite(200,500)
     friend.addAnimation("static",friendStatic)
     friend.addAnimation("walk",friendAnimation)
    
     bow = createSprite(1000,220,20,50);
     bow.addImage(bowImage); 
     bow.scale = 1;
     bow.visible = false   ;


     

     giftSHOP = createSprite(900,800)
     giftSHOP.addImage(giftSHOPAnimation)
     giftSHOP.scale = 0.4
     giftSHOP.visible = false

     score = 0 ;
     fill("red");
     textSize(20);


     redB=createGroup();
 pinkB=createGroup();
 greenB=createGroup();
 blueB=createGroup();
 arrowGroup=createGroup();

 maze = new cardboard

  
}


function draw() {
  background(Grounnd);

 
 
  if(keyIsDown(RIGHT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
    friend.x =friend.x+10;
   
  }else if(keyIsDown(LEFT_ARROW)){
    friend.changeAnimation("walk",friendAnimation);
   friend.x = friend.x-10;
 }else if(keyIsDown(UP_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
   friend.y = friend.y-10;
 }else if(keyIsDown(DOWN_ARROW)){
  friend.changeAnimation("walk",friendAnimation);
  friend.y = friend.y+10;
  }
  else{
    friend.changeAnimation("static",friendStatic)
  }

  if(gameState === "START"){
    fill("pink")  
    textSize(50)
    text("ITS DARU'S BIRTHDAY !!!!",500,200) 

    if(mousePressedOver(play) ){
      gameState = "STORY"
      X.hide()
      play.visible = false
    }

}


    if (gameState === "STORY"){
      fill("green")
      textSize(30)
     text("You are trying to buy a gift fpr darunesh but you dont have enough money",500,300)
     text("you suddenly see a ad of getting money from winning a baloon game ",500,350);
     text("you sign up for it .",500,400)
     fill("red")
     text("now you are going to start playing and win the money",500,450)
     fill("red")
     text("press on you to start the game",500,500)
     if( mousePressedOver(friend)){
      gameState = "LEVEL1"
      friend.visible = false
       bow.visible = true
  }

}

if(gameState === "LEVEL1"){
  bow.y = mouseY
  text("Score: "+ score, 100,50);

  if (keyDown("space")) {
    createArrow();
    
  }

  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  }


  if(blueB.isTouching(arrowGroup)){
    arrowGroup.destroyEach();
    blueB.destroyEach();
    score=score-2; 
    text("cool",300,200);
  
   
  }
  
  if(redB.isTouching(arrowGroup)){
  arrowGroup.destroyEach();
  redB.destroyEach();
  score=score -2;
  }
  
  if(greenB.isTouching(arrowGroup)){
  arrowGroup.destroyEach();
  greenB.destroyEach();
  score=score+2;
  }
  
  if(pinkB.isTouching(arrowGroup)){
  arrowGroup.destroyEach();
  pinkB.destroyEach();
  score=score+2;
  }
  
  text("SHOOT ON ONLY PINK AND GREEN BALOONS OTHERS MAY REDUCE YOUR POINTS!!",500,50)
  text("take 20 points to coplete the game  press space to shoot",500,100)
  fill("red")
  textSize(24)

  
if (score === 20){
  text("you win!!!  press space",500,500)
  textSize(30)
  fill ("red")
  gameState = "LEVEL2"
  bow.visible = false
  friend.visible = true
  friend.scale = 0.5
}
}


if(gameState === "LEVEL2"){
  giftSHOP.visible = true
  textSize(24)
  fill("violet")
  var player = X.value()
text("  you did it " + player+" you now have enough money to buy him a gift now get striaght to the gift shop  and then to daru's home", 50,100)


maze.display()
maze.bounce(friend)



if(friend.isTouching(giftSHOP)){
 
  text("get to the house!!",800,130)
  fill("red")
  house.visible =true

}


if(friend.isTouching(house)){
  maze.destroy()
  gameState = "daru"
  giftSHOP.destroy()
  house.scale = 1.5
  friend.x = 100


}

}


if(gameState === "daru"){
    daru = createSprite(1000,750)
     daru.addImage(daruImage)
     daru.scale = 0.7

     text("!!give your present to daru!!!!! ",100,50)
     fill("red")
     textSize(50)


     if(friend.isTouching(daru)){
            gameState = "the end"
            daru.visible = false
             
     }
}


if(gameState === "the end"){
  background(0)
  house.destroy()
 
  textSize(50)
  fill("cyan")
  var input = X.value()
  text("thank you for playing "+input, 400,400)
  text("HAPPY BIRTHDAY DA DARU!!!!!!" , 400 , 450)
  

}



     

    drawSprites()
}
 
function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 5;
  red.lifetime = 150;
  red.scale = 0.1;
  redB.add(red);
  return red
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 5;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueB.add(blue);
  return blue;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 5;
  green.lifetime = 150;
  green.scale = 0.1;
  greenB.add(green);
  return green;   
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 5;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkB.add(pink);
  return pink;
}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
  return arrow;
   
}

   
