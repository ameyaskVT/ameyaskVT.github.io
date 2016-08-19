
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
    
    this.cR = (this.bwFlag === 1 ? 171 : 210);
    this.cG = (this.bwFlag === 1 ? 171 : 210);
    this.cB = (this.bwFlag === 1 ? 171 : 210);
    
    this.pieceFlag = false;
    
};

square.prototype.hasPiece = function(){
    return this.pieceFlag;
};
square.prototype.putPiece = function(){
  this.pieceFlag = true;  
};
square.prototype.removePiece = function(){
    this.pieceFlag = false;
};
square.prototype.draw = function() {
    
    fill(this.cR, this.cG, this.cB);
    rect(this.rowNum*50, this.colNum*50, 50,50);
    
};

function knight(x,y){
    this.rowNum = x;
    this.colNum = y;
    
    this.xPos = x*50 - 5;
    this.yPos = (y+1)*50;
};

knight.prototype.draw = function() {
    textFont(createFont("serif"));
    textSize(65);
    fill(255, 255, 255);
    text("♞",this.xPos,this.yPos);
};

knight.prototype.move = function(x1,y1){
  this.xPos = x1;
  this.yPos = y1;
};

knight.prototype.setPos = function(){
    this.rowNum = floor(mouseX/50);
    this.colNum = floor(mouseY/50);
    
    this.xPos = this.rowNum*50 - 5;
    this.yPos = (this.colNum+1)*50;
};

knight.prototype.isLegalMove = function(){
   var newRow = floor(mouseX/50);
   var newCol = floor(mouseY/50);
   return (abs(newRow - this.rowNum) === 2 && abs(newCol - this.colNum) === 1) || 
          (abs(newRow - this.rowNum) === 1 && abs(newCol - this.colNum) === 2);
};

var squares = [];

for(var i = 0 ; i < 8 ; i++)
{
    squares[i] = [];
    for(var j = 0 ; j < 8 ; j++){
      squares[i].push(new square(i,j));
    }
}


var knightW = new knight(3,4);
squares[3][4].putPiece();


var pieceSelected = false;

void mouseClicked(){
  if(pieceSelected === false){
        if(squares[floor(mouseX/50)][floor(mouseY/50)].hasPiece() === true){
            pieceSelected = true;
            squares[floor(mouseX/50)][floor(mouseY/50)].removePiece();
            
        } 
    }
    else{
        if(knightW.isLegalMove()){
            pieceSelected = false;
            squares[floor(mouseX/50)][floor(mouseY/50)].putPiece();
            knightW.setPos();
        }
    }
};
   
    
void draw() {

    background(255,255,255);
    //Draw the empty chess Board.
    for (var i = 0; i < squares.length; i++) {
        for(var j = 0; j < squares[i].length; j++){
            squares[i][j].draw();
        }
    }

    knightW.draw();
    if(pieceSelected === true){
        knightW.move(mouseX,mouseY);
    }

        
};
