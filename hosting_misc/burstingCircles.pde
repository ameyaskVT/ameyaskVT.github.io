var fps = 24;
void setup(){
  size( 400, 400 );
  strokeWeight( 10 );
  frameRate( fps );
}

noStroke();

function explodingCircle(x,y){

  this.rad = 5 ; 
  this.x = x;
  this.y = y;

  this.cRp = [];
  this.cGp = [];
  this.cBp = [];

  for(var i = 0; i < 12 ; i++){
      this.cRp.push(round(random(1,255)));
      this.cGp.push(round(random(1,255)));
      this.cBp.push(round(random(1,255)));
    }

};

explodingCircle.prototype.draw = function(){
    for(var i = 0 ; i < 12 ; i++){
        strokeWeight(3);
        fill(this.cRp[i], this.cGp[i],this.cBp[i]);
        noStroke();
        ellipse(this.x + this.rad*cos(i*30 + 15),this.y + this.rad*sin(i*30 + 15),5,5);
    }
    this.rad += 5;
    if(this.rad > 75){
        return true;
    }
    return false;
};

var circles = [];

void mouseClicked(){
    circles.push(new explodingCircle(mouseX,mouseY));
};


void draw() {
    background(255, 255, 255);
    for(var i = 0 ; i < circles.length ; i++){
        if(circles[i].draw()){
            circles.splice(i,1);
        }
    }
};
