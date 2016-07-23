

// Setup the Processing Canvas
void setup(){
  size( 400, 400 );
  strokeWeight( 10 );
  frameRate( 15 );
 
}



noStroke();

var x = 298;
var y = 30;

var state = 0;

keyPressed = function() {
    state = (state + 1) % 2 ;
};

draw = function() {
    
    if(y > 400){
        y = 0;
    }

    if(x > 400){
        x = 0;
    }

    // the beautiful blue sky
    background(82, 222, 240);

    //snake of size 1
    fill(255, 170, 0);
    rect(x,y,10,10);

    if(state === 0){
        y = y + 1;
    }
    else if(state === 1){
        x = x + 1;
    }

};



