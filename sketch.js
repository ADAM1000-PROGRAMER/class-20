var ball,bat;
function setup(){
    createCanvas(1280,720);
    ball=createSprite(200,200,60,60);
    bat=createSprite(160,160,140,140);
    ball.shapeColor="red";
    bat.shapeColor="pink";
    
}    
function draw(){
    background("white");
    ball.x=World.mouseX;
    ball.y=World.mouseY;

    if(bat.x-ball.x < ball.width/2 + bat.width/2   && ball.x - bat.x  < ball.width/2 + bat.width/2 &&
    bat.y - ball.y < ball.height/2 + bat.height/2 && ball.x- bat.x < ball.height /2 + bat.height/2)
    {ball.shapeColor="blue";
    bat.shapeColor="green";
    }
    else{
    ball.shapeColor="red";
    bat.shapeColor="pink";
        
    }
    drawSprites();
    
}
