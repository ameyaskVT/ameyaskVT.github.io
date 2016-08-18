
// Setup the Processing Canvas
var fps = 6;
void setup(){
  size( 400, 400 );
  strokeWeight( 10 );
  frameRate( fps );
}

noStroke();


function square(x,y){

    this.rowNum = x;
    this.colNum = y;
    this.bwFlag = (x+y)%2 ; 
    
    this.cR = (this.bwFlag === 1 ? 242 : 118);
    this.cG = (this.bwFlag === 1 ? 236 : 151);
    this.cB = (this.bwFlag === 1 ? 212 : 82);
    
};


square.prototype.draw = function() {
    
    fill(this.cR, this.cG, this.cB);
    rect(this.rowNum*50, this.colNum*50, 50,50);
    
};

var squares = [];

for(var i = 0 ; i < 8 ; i++)
{
    for(var j = 0 ; j < 8 ; j++){
      squares.push(new square(i,j));
    }
}



  //  var b;

   // b = loadImage("http://www.picgifs.com/clip-art/cartoons/pokemon/clip-art-pokemon-508076.jpg");
    
void draw() {
    
    background(255,255,255);
    
    //Draw the empty chess Board.
    for (var i = 0, len = squares.length; i < len; i++) {
        squares[i].draw();
    }
        
};
