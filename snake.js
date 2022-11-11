let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let x = 550;
let y=250;
let speed = 10;
let dir=0;
let score=0;
let gameEnd=false;

let fruitx = 1200;
let fruity = Math.random()*(600-100);

let dangerx = 1200;
let dangery = Math.random()*(600-100);
//controls
let right = document.getElementById("right");
let left = document.getElementById("left");
let up = document.getElementById("up");
let down = document.getElementById("down");
//for moving right
right.onmouseover= function(){
    dir = 1;
}
//for moving left
left.onmouseover= function(){
    dir = 2;
}
//for moving up
up.onmouseover= function(){
    dir = 4;
}
//for moving down
down.onmouseover= function(){
    dir = 3;
}
function draw(){
    if(gameEnd==false){
        context.clearRect(0,0,1400,700);
//////////////////////FRUIT COLLECTOR BODY////////////////////////////////////////////////
        context.beginPath();
        context.rect(x,y,70,30);
        context.fillStyle="red";
        context.fill();
/////////////////////////////FRUIT COLLECTOR HEAD//////////////////////////////////////////
        context.beginPath();
        context.rect(x+70,y+5,20,20);
        context.fillStyle="blue";
        context.fill();
////////////////////////////////////FRUIT///////////////////////////////////////////////////
        context.beginPath();
        context.rect(fruitx,fruity,20,20);
        context.fillStyle="blue";
        context.fill();
/////////////////////////////////POISIN////////////////////////////////////////////////////////
        context.beginPath();
        context.rect(dangerx,dangery,40,40);
        context.fillStyle="Red";
        context.fill();
////////////////////////////////////FRUIT AND POISON APPROACH IN FRONT///////////////////////////
        fruitx-=speed;
        if(fruitx==0){
            fruitx=1200;
        }
        dangerx-=speed;
        if(dangerx==0){
            dangerx=1200;
            dangery = Math.random()*(600-100);
        }
///////////////////////////////////////Change directions//////////////////////////////////////////
        if (dir == 1){
            if(x+100<1200){
                x+=speed+3;
            }
        }else if(dir==2){
            if(x>0){
                x-=speed+3;

                context.beginPath();
                context.rect(x-7,y+5,20,20);
                context.fillStyle="blue";
                context.fill();

                context.beginPath();
                context.rect(x+83,y+5,20,20);
                context.fillStyle="chartreuse";
                context.fill();
            }
        }else if(dir == 3){
            if(y+100<600){
                y+=speed+3;
                
            }
        }else if(dir == 4){
            if(y>0){
                y-=speed+3;
            }
        }
/////////////////////////////FRUIT COLLISION////////////////////////////////////////////////////////
        if(fruitx<=x+100 && x<=fruitx+20 && fruity<=y+100 && y<=fruity+20){
            score+=10;
            fruitx=1200;
            fruity= Math.random()*(600-100);
            
        }
        
    }
/////////////////////////////POISIN COLLISION////////////////////////////////////////////////////////
    if(dangerx<=x+100 && x<=dangerx+20 && dangery<=y+100 && y<=dangery+20){
        gameEnd=true;
        context.font = "50px Arial";
        context.fillStyle="red";
        context.fillText("GAME OVER, refresh to restart",200,250);
    }
    context.font = "24px Arial";
    context.fillStyle="black";
    context.fillText("Score: "+score,20,590); 
    
}
setInterval(draw,50);