
// Setup the Processing Canvas
var fps = 6;
void setup(){
  size( 500, 400 );
  strokeWeight( 10 );
  frameRate( fps );
}

noStroke();

var curSize = 10;
var highScore = 0 ;
var paused = 0;

var state = 0;
var count = 0;
var reset = 0;
var resetPause = 0 ;

var campaignModeFlag = 0 ;
var selectMenuFlag = 0 ; 
var selectionAnimCount = 0 ; 

var newX ;
var newY ;

var setUpCount = 0; 
var genNewPointFlag = 0;

var x = new Array(2000);
var y = new Array(2000);
var tilemap = new Array(40);

//init values for snake :- 
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

void selectMenu(){  //try to compress logic later.
    
    fill(168, 34, 201);
    rect(110,115,300,150,15);
    fill(255,255,255);
    
    textFont(createFont("monospace"),20);
    text("press SHIFT to select",145,245);
    
    if(selectMenuFlag === 0){
        if(campaignModeFlag === 0){
            triangle(160,150,169,158,160,169);
        }
        else{
            triangle(160,190,169,198,160,209);
        }
        text("classic mode",185,165);
        text("campaign mode",185,205);
    }
    
    else{ //selection animation
        if(selectionAnimCount % 6 < 3){
            if(campaignModeFlag === 0){
                triangle(160,150,169,158,160,169);
                text("classic mode",185,165);
            }
            else{
                triangle(160,190,169,198,160,209);
                text("campaign mode",185,205);
            }
        }
        if(campaignModeFlag === 1){  //non-animated text
            text("classic mode",185,165);
            }
        else{
            text("campaign mode",185,205);
        }
        selectionAnimCount++;
        if(selectionAnimCount === 18){
            selectionAnimCount = 0;
            selectMenuFlag = 2;
        }
    }
};

void scoreDisplay(flag){
    textFont(createFont("monospace"),12);
    fill(255, 255, 255);
    rect(400,0,100,400);
    fill(0, 0, 0);
    text("Snake 1.0",420,30);
    text("High Score :-",420,130);
    text(highScore,430,150);
    text("Score :- ",420,90);
    text(curSize - 10,430,110);
    if(flag === 1){
        if(highScore < curSize - 10){
            highScore = curSize - 10;
        }
        text("Speed :- ",420,50);
        text(fps/6,430,70);
    }
    else{            
        text("GAME",420,50);
        text("OVER!!",420,70);
        if(curSize - 10 === highScore){
            text("High Score ",420,190);
            text("Reached!!!",420,210);
        }
    }
};

void createBlockade(){

    for(var i = 0 ; i < 400 ; i = i + 10){
        tilemap[i/10][0] = 1;
        tilemap[i/10][39] = 1;
        tilemap[0][i/10] = 1;
        tilemap[39][i/10] = 1;
        
        fill(20, 222, 44);
        rect(i,0,10,10);
        rect(i,390,10,10);
        rect(0,i,10,10);
        rect(390,i,10,10);
    }

};

void updatePosition(){
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
};

void collisionCheck(){
    if(tilemap[x[0]/10][y[0]/10] === 1){
        count++;
        if(count > 4){
            reset = 1;
            resetPause = 0;
            count = 0;
        }
    }  
};

int resetSnake(){
     if(reset === 1){
        if(resetPause < fps){
            resetPause++ ;
            if(resetPause % 2 === 1){
                for(var i = 0 ; i < curSize ; i++){
                    fill(255, 170, 0);
                    rect(x[i],y[i],10,10);
                }
            }
            scoreDisplay(0);
            return 0;
        }
        curSize = 10;
        state = 0 ;
        for(var i = 0 ; i < curSize ; i++){
            x[i] = 200;
            y[i] = 110 + 10*i;
        }
        for(var i = 0 ; i < 40 ; i++){
            
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
    return 1;
};

void newMealGen(){  // also checks if eaten meal
    if(setUpCount > 5){
        if(genNewPointFlag === 0){
           while(1){
                newX = 10*floor(random(1,39));
                newY = 10*floor(random(1,39));
                if(tilemap[newX/10][newY/10] === 0 && !(newX === x[0] && newY === y[0])){
                     break;
                } 
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
    }
};

void keyPressed()  {
    if(selectMenuFlag === 0 && ( keyCode === UP || keyCode === DOWN )){
        campaignModeFlag = (campaignModeFlag + 1)%2;
        return;
    }
    if(selectMenuFlag === 0 && keyCode === SHIFT){
        selectMenuFlag = 1;
        return;
    }
    
    if(keyCode === SHIFT){
        paused = (paused + 1) % 2;
    }

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
    if(keyCode === ALT && fps < 60){
        fps += 6;
        frameRate(fps);
    }
    if(keyCode === CONTROL && fps > 6){
        fps -= 6;
        frameRate(fps);
    }
};

void draw(){
    // the beautiful blue sky
    background(82, 222, 240);
    if(selectMenuFlag < 2){
        selectMenu();
        return;
    }
    if(campaignModeFlag ===1){
        createBlockade();
    }
    
    setUpCount++;
    if(resetSnake() === 0){
        return;
    }
    //draw snake
    for(var i = 0 ; i < curSize ; i++){
        fill(255, 170, 0);
        rect(x[i],y[i],10,10);
    }
    //reset tilemap - will be updated in updatePosition()
    for(var i = 1 ; i < curSize ; i++){
        tilemap[x[i]/10][y[i]/10] = 0;
    }
  //Game Pause
    if(paused === 1){
        fill(255, 255, 255);
        rect(400,0,100,400);
        fill(0, 0, 0);
        text("Game Paused",410,50);
        return;
    }
    updatePosition();
    collisionCheck();
    newMealGen();
    scoreDisplay(1);
};
