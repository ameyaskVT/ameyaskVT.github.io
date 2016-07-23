
// Setup the Processing Canvas
void setup(){
  size( 400, 400 );
  strokeWeight( 10 );
  frameRate( 6 );
 
}

noStroke();

var x = [200,200,200,200,200,200,200,200];
var y = [130,140,150,160,170,180,190,200];

var state = 0;

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


void draw() {
    
    // the beautiful blue sky
    background(82, 222, 240);

    //snake of size 1
    

    for(var i = 0 ; i < 8 ; i++){
        fill(255, 170, 0);
        rect(x[i],y[i],10,10);
    }
    
    var k = 1;
    
    for(var j = 7 ; j > 0 ; j--){
        
        x[j] = x[j - 1];
        y[j] = y[j - 1];
    
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
    
    
    if(x[0] > 400){
        x[0] = 0;
    }
    if(y[0] > 400){
        y[0] = 0;
    }
    
    if(x[0] < 0){
        x[0] = 400;
    }
    if(y[0] < 0){
        y[0] = 400;
    }
    
    

};




