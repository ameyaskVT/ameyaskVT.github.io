
// Setup the Processing Canvas

var fps = 6;


void setup(){
  size( 500, 400 );
  strokeWeight( 10 );
  frameRate( fps );
 
}

noStroke();

var x = new Array(2000);
var y = new Array(2000);

var curSize = 10;
var highScore = 0 ;

//init values for snake :- 
for(var i = 0 ; i < curSize ; i++){
    
    x[i] = 200;
    y[i] = 110 + 10*i;
}


//var x = [200,200,200,200,200,200,200,200,200,200];
//var y = [110,120,130,140,150,160,170,180,190,200];

var state = 0;
var count = 0;
var reset = 0;
var resetPause = 0 ;

var newX ;
var newY ;

var setUpCount = 0; 
var genNewPointFlag = 0;

var tilemap = new Array(40);
for(var i = 0 ; i < 40 ; i++){
    tilemap[i] = new Array(40);
    for(var j = 0 ; j < 40 ; j++){
        tilemap[i][j] = 0;
    }
}


for(var i = 1 ; i < curSize ; i++){
    tilemap[x[i]/10][y[i]/10] = 1;
}


void keyPressed() {

    if(state % 2 === 0  && keyCode === RIGHT){
        state = 1 ; 
    } 
    if(state % 2 === 0  && keyCode === LEFT){
        state = 3 ; 
    } 
    if(state % 2 === 1  && keyCode === UP){
        state = 2 ; 
    } 
    if(state % 2 === 1  && keyCode === DOWN){
        state = 0 ; 
    } 
    
    if(keyCode === ALT && fps < 48){
        fps *= 1.5;
        frameRate(fps);
    }
    if(keyCode === CONTROL && fps > 6){
        fps /= 1.5;
        frameRate(fps);
    }
    
    
};



void draw() {
    
     // the beautiful blue sky
    background(82, 222, 240);
    setUpCount++;
    
    //debug("setUpCount is "+ setUpCount);

    //reset snake :-
    
    if(reset === 1){
        
        
        if(resetPause < 2*fps){
            resetPause++ ;
            if(resetPause % 2 === 1){
                for(var i = 0 ; i < curSize ; i++){
                    fill(255, 170, 0);
                    rect(x[i],y[i],10,10);
                }
            }
            
            
            //display score and Game Over
            fill(255, 255, 255);
            rect(400,0,100,400);
            fill(0, 0, 0);
            text("GAME",420,50);
            text("OVER!!",420,70);
            text("Score :- ",420,90);
            text(curSize - 10,430,110);
            if(curSize - 10 === highScore){
                text("High Score ",420,190);
                text("Reached!!!",420,210);
            }
            text("High Score :-",420,130);
            text(highScore,430,150);
            
            
            return;
        }
        curSize = 10;
        state = 0 ;
        
        //reset = 0 ; 
        for(var i = 0 ; i < curSize ; i++){
            x[i] = 200;
            y[i] = 110 + 10*i;
        }


        
        
        for(var i = 0 ; i < 40 ; i++){
            tilemap[i] = new Array(40);
            for(var j = 0 ; j < 40 ; j++){
                tilemap[i][j] = 0;
            }
        }
        
        for(var i = 1 ; i < curSize ; i++){
            tilemap[x[i]/10][y[i]/10] = 1;
        }
        
        

        setUpCount = 0;
        reset = 0 ;
    }
    
    
    //draw snake

    for(var i = 0 ; i < curSize ; i++){
        fill(255, 170, 0);
        rect(x[i],y[i],10,10);
    }
    
    
    //debug(x[0],"," ,y[0]);

    //reset tilemap
    
    for(var i = 1 ; i < curSize ; i++){
        tilemap[x[i]/10][y[i]/10] = 0;
    }

    //update position
    
    //debug("updating position");
    
    for(var j = curSize - 1 ; j > 0 ; j--){
        
        
        x[j] = x[j - 1];
        y[j] = y[j - 1];
        
       tilemap[x[j]/10][y[j]/10] = 1;
    
    } 

    //update head

    if(state === 0){
        y[0] = y[0] + 10;
    }
    else if(state === 1){
        x[0] = x[0] + 10;
    }
    else if(state === 2){
        y[0] = y[0] - 10;
    }
    else if(state === 3){
        x[0] = x[0] - 10;
    }
    
    //take care of boundaries
    if(x[0] > 390){
        x[0] = 0;
    }
    if(y[0] > 390){
        y[0] = 0;
    }
    
    if(x[0] < 0){
        x[0] = 390;
    }
    if(y[0] < 0){
        y[0] = 390;
    }
    
    
    //check for collision
    if(tilemap[x[0]/10][y[0]/10] === 1){
        count++;
        //debug("collided body" + count);
        
        if(count > 4){
            reset = 1;
            resetPause = 0;
            count = 0;
            
        }
    }
    
    if(setUpCount > 5){
        if(genNewPointFlag === 0){
            
            
            
           while(1){
                newX = 10*floor(random(1,39));
                newY = 10*floor(random(1,39));
         
                if(tilemap[newX/10][newY/10] === 0 && !(newX === x[0] && newY === y[0])){
                     break;
                } 
               
                //debug("newX is " + newX + "newY is " + newY);
               
            }
            genNewPointFlag = 1; 
            
           
        }
    
         rect(newX,newY,10,10);
    }
    
    if(x[0] === newX && y[0] === newY){
        curSize++;
        genNewPointFlag = 0;
        x[curSize - 1] = x[curSize - 2];
        y[curSize - 1] = y[curSize - 2];
        //debug("absorbed");
        //debug(x[0]+","+y[0]);
    }
    
        if(highScore < curSize - 10){
        highScore = curSize - 10;
    }
    
    fill(255, 255, 255);
    rect(400,0,100,400);
    fill(0, 0, 0);
    text("Speed :- ",420,50);
    text(fps/6,430,70);
    text("Score :- ",420,90);
    text(curSize - 10,430,110);
    text("High Score :-",420,130);
    text(highScore,430,150);
};




