
// Setup the Processing Canvas
void setup(){
  size( 400, 400 );
  strokeWeight( 10 );
  frameRate( 6 );
 
}

noStroke();

var x = [200,200,200,200,200,200,200,200,200,200];
var y = [110,120,130,140,150,160,170,180,190,200];

var tilemap = new Array(40);
for(var i = 0 ; i < 40 ; i++){
    tilemap[i] = new Array(40);
    for(var j = 0 ; j < 40 ; j++){
        tilemap[i][j] = 0;
    }
}

var state = 0;

var count = 0;

for(var i = 1 ; i < 10 ; i++){
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
    
};


var reset = 0;
var resetPause = 0 ;

void draw() {
    
     
    // the beautiful blue sky
    background(82, 222, 240);

    //reset snake :-
    
    if(reset === 1){
        
        
        if(resetPause < 12){
            resetPause++ ;
            if(resetPause % 2 === 1){
                for(var i = 0 ; i < 10 ; i++){
                    fill(255, 170, 0);
                    rect(x[i],y[i],10,10);
                }
            }
            return;
        }
        
        state = 0 ;
        //reset = 0 ; 
        x = [200,200,200,200,200,200,200,200,200,200];
        y = [110,120,130,140,150,160,170,180,190,200];
        
        
        for(var i = 0 ; i < 40 ; i++){
            tilemap[i] = new Array(40);
            for(var j = 0 ; j < 40 ; j++){
                tilemap[i][j] = 0;
            }
        }
        
        for(var i = 1 ; i < 10 ; i++){
            tilemap[x[i]/10][y[i]/10] = 1;
        }
        
        

        
        reset = 0 ;
    }
    
  
  //snake movement

    for(var i = 0 ; i < 10 ; i++){
        fill(255, 170, 0);
        rect(x[i],y[i],10,10);
    }
    
    
    debug(x[0],"," ,y[0]);

    
    for(var i = 1 ; i < 10 ; i++){
        tilemap[x[i]/10][y[i]/10] = 0;
    }

    
    for(var j = 9 ; j > 0 ; j--){
        
        
        x[j] = x[j - 1];
        y[j] = y[j - 1];
        
       tilemap[x[j]/10][y[j]/10] = 1;
    
    } 


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
    
    if(tilemap[x[0]/10][y[0]/10] === 1){
        count++;
        debug("collided body" + count);
        
        if(count > 4){
            reset = 1;
            resetPause = 0;
            count = 0;
        }
    }
    


};




