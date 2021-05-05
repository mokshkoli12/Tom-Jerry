var bgImg,cat1Img,cat2Img,cat3Img,mouse1Img,mouse2Img,mouse3Img;
var cat,mouse;
var canvas;

function preload() {
    bgImg = loadImage("images/garden.png");
    cat1Img= loadAnimation("images/cat1.png");
    cat2Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat3Img= loadAnimation("images/cat4.png");
    mouse1Img=loadAnimation("images/mouse1.png");
    mouse2Img= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Img=loadAnimation("images/mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 700);
    cat.addAnimation("catSleeping", cat1Img);
    cat.scale = 0.1;

    mouse = createSprite(200, 700);
    mouse.addAnimation("mouseStanding", mouse1Img);
    mouse.scale = 0.1;

}

function draw() {

    background(bgImg);
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("catLastImage", cat3Img);
        cat.x =300;
        cat.scale=0.1;
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage", mouse3Img);
        mouse.scale=0.1;
        mouse.changeAnimation("mouseLastImage");
    }  
    

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("catRunning", cat2Img);
        cat.changeAnimation("catRunning");
      
        
        mouse.addAnimation("mouseTeasing", mouse2Img);
        mouse.frameDelay = 25;
        mouse.changeAnimation("mouseTeasing");
    }
}