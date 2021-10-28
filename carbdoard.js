class cardboard{   
    
    

    constructor(){
        cardboard2=createSprite(width - 350,height- 370,20,200);
        cardboard2.shapeColor=('brown');
      cardboard2.visible = false;
     
     
        cardboard1 = createSprite(width - 1360,height - 150,20,200);
        cardboard1.shapeColor=('brown');
       cardboard1.visible = false;
     
         cardboard3=createSprite(width - 1200,400,20,200);
         cardboard3.shapeColor=('brown');
         cardboard3.visible = false;
     
        cardboard4=createSprite(width - 120,height - 320,20,200);
         cardboard4.shapeColor=('brown');
         cardboard4.visible  = false;
     
     
          cardboard5=createSprite(width - 1000,height - 220,200,20);
            cardboard5.shapeColor=('brown');
           cardboard5.visible = false
     
         cardboard6=createSprite(width - 851,height - 67,200,20);
          cardboard6.shapeColor=('brown');
        cardboard6.visible = false
     
        cardboard7=createSprite(width - 280,height - 130,20,200);
          cardboard7.shapeColor=('brown');
          cardboard7.visible = false


       cardboard8=createSprite(width - 410,803,20,200);
           cardboard8.shapeColor=('brown');
           cardboard8.visible = false
           
         cardboard9=createSprite(width - 514,938,20,300);
            cardboard9.shapeColor=('brown');
            cardboard9.visible = false;
        
        cardboard10=createSprite(width- 500,height - 216,300,20);
            cardboard10.shapeColor=('brown');
         cardboard10.visible = false;
     
      cardboard11=createSprite(width - 650,height - 620,20,200);
            cardboard11.shapeColor=('brown');
          cardboard11.visible = false;
     
        cardboard12=createSprite(width - 550,height - 416,200,20);
            cardboard12.shapeColor=('brown');
            cardboard12.visible = false;
           
         cardboard13 = createSprite(width-750,height - 14,20,200);
           cardboard13.shapeColor = "brown"
           cardboard13.visible = false;
         
        cardboard14=createSprite(width - 850,height - 550,20,200);
            cardboard14.shapeColor = "brown"
          cardboard14.visible = false;
     
         cardboard15=createSprite(width - 950,height - 320,20,200);
            cardboard15.shapeColor=('brown');
           cardboard15.visible = false;
     
         cardboard16=createSprite(width - 1047,height - 604,20,200);
             cardboard16.shapeColor=('brown');
           cardboard16.visible = false;

     
         cardboard17=createSprite(width - 1150,height - 506,200,20);
            cardboard17.shapeColor=('brown');
      cardboard17.visible = false;

         cardboard18=createSprite(width - 1245,height - 624,200,20);
             cardboard18.shapeColor=('brown');
             cardboard18.visible = false;
           
        cardboard19=createSprite(width - 1348,height - 610,20,200);
             cardboard19.shapeColor=('brown');
         cardboard19.visible = false
     
          cardboard20=createSprite(width - 1471,height - 438,20,200);
              cardboard20.shapeColor=('brown');
            cardboard20.visible = false

     
           cardboard21=createSprite(width - 600,height - 220,20,200);
            cardboard21.shapeColor=('brown');
            cardboard21.visible = false;
       
           cardboard22=createSprite(width - 1190,height - 408,200,20);
              cardboard22.shapeColor=('brown');
            cardboard22.visible = false;
    }

    display(){
       cardboard1.visible = true
       cardboard2.visible = true
       cardboard3.visible = true
       cardboard4.visible = true
       cardboard5.visible = true
       cardboard6.visible = true
       cardboard7.visible = true
       cardboard8.visible = true
       cardboard9.visible = true
       cardboard10.visible = true
       cardboard11.visible = true
       cardboard12.visible = true
       cardboard13.visible = true
       cardboard14.visible = true
       cardboard15.visible = true
       cardboard16.visible = true
       cardboard17.visible = true
       cardboard18.visible = true
       cardboard19.visible = true
       cardboard20.visible = true
       cardboard21.visible = true
       cardboard22.visible = true
     
       
   
    }






    bounce(object1){
        
        object1.bounceOff(cardboard1)
    object1.bounceOff(cardboard2)

       object1.bounceOff(cardboard3)

       object1.bounceOff(cardboard4)

        object1.bounceOff(cardboard5)

        object1.bounce(cardboard6)
        object1.bounce(cardboard7)
        object1.bounce(cardboard8)
       object1.bounce(cardboard9)
      object1.bounce(cardboard10)
        object1.bounce(cardboard11)
        object1.bounce(cardboard12)
      object1.bounce(cardboard13)
      object1.bounce(cardboard14)
      object1.bounce(cardboard15)
     object1.bounce(cardboard16)
        object1.bounce(cardboard17)
        object1.bounce(cardboard18)
     object1.bounce(cardboard19)
     object1.bounce(cardboard20)
        object1.bounce(cardboard21)
        object1.bounce(cardboard22)


    }


    destroy(){
        cardboard1.velocityX = -15
        cardboard2.velocityX  =  15;
        cardboard3.velocityY =  15;
        cardboard4.velocityY = - 15;
        cardboard5.velocityX =  15;
        cardboard6.velocityX = - 15;
        cardboard7.velocityY =  15;
        cardboard8.velocityY = - 15;
        cardboard9.velocityX = - 15;
        cardboard10.velocityX =  15;
        cardboard11.velocityY =  15;
        cardboard12.velocityY = - 15;
        cardboard13.velocityX =  15;
        cardboard14.velocityX = - 15;
        cardboard15.velocityY =  15;
        cardboard16.velocityY = - 15;
        cardboard17.velocityX = - 15;
        cardboard18.velocityX = 15;
        cardboard19.velocityY = - 15;
        cardboard20.velocityY =  15;
        cardboard21.velocityX = - 15;
        cardboard22.velocityX  =  15;
    }
}