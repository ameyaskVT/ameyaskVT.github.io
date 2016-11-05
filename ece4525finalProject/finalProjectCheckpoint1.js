var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(60);

//Beginning of processing sketch

var start = 0;

var toPI = PI/180;

var ballImages = [];
var pointSet = [];

var spritemap = [];

var initspritemap = function(){
    for(var i = 0 ; i < 16 ; i++){
        spritemap[i] = [];
    }
    
    for(var i = 0 ; i < 16 ; i++){
        for(var j = 0 ; j < 16 ; j++){
            spritemap[i][j] = color(255,255,255);
        }
    }
};

var drawspritemap = function(){
    noStroke();
    for(var i = 0 ; i < 16 ; i++){
        for(var j = 0 ; j < 16 ; j++){
            if(spritemap[i][j] !== color(255,255,255)){
                fill(spritemap[i][j]);
                rect(20*i,20*j,20,20);
            }
        }
    }
};

var images = [];

var customCharMade = 0;

var customChar = function()
{
customCharMade = 1;
//images 0
initspritemap();
    
background(0,0,0,0);
//paste sprite values here :-
{
    spritemap[2][8] = -15345972;
spritemap[3][5] = -1241556;
spritemap[3][6] = -1241556;
spritemap[3][7] = -15345972;
spritemap[3][8] = -15345972;
spritemap[4][4] = -1241556;
spritemap[4][5] = -1241556;
spritemap[4][6] = -1241556;
spritemap[4][7] = -15345972;
spritemap[4][14] = -16777216;
spritemap[5][4] = -1241556;
spritemap[5][10] = -2722025;
spritemap[5][11] = -1317155;
spritemap[5][12] = -1317155;
spritemap[5][13] = -16777216;
spritemap[5][14] = -16777216;
spritemap[6][3] = -1241556;
spritemap[6][4] = -1241556;
spritemap[6][5] = -1241556;
spritemap[6][6] = -1241556;
spritemap[6][8] = -2722025;
spritemap[6][9] = -2722025;
spritemap[6][10] = -2722025;
spritemap[6][11] = -1317155;
spritemap[6][12] = -1317155;
spritemap[6][13] = -16777216;
spritemap[6][14] = -16777216;
spritemap[7][1] = -16777216;
spritemap[7][2] = -1663991;
spritemap[7][3] = -1241556;
spritemap[7][4] = -1241556;
spritemap[7][5] = -1241556;
spritemap[7][6] = -1241556;
spritemap[7][7] = -16777216;
spritemap[7][8] = -16777216;
spritemap[7][9] = -2722025;
spritemap[8][1] = -16777216;
spritemap[8][2] = -1663991;
spritemap[8][3] = -1241556;
spritemap[8][4] = -1241556;
spritemap[8][5] = -1241556;
spritemap[8][6] = -1241556;
spritemap[8][7] = -16777216;
spritemap[8][8] = -16777216;
spritemap[9][1] = -16777216;
spritemap[9][2] = -1663991;
spritemap[9][3] = -1241556;
spritemap[9][4] = -1241556;
spritemap[9][5] = -1241556;
spritemap[9][6] = -1241556;
spritemap[9][7] = -16777216;
spritemap[9][8] = -16777216;
spritemap[9][9] = -2722025;
spritemap[10][3] = -1241556;
spritemap[10][4] = -1241556;
spritemap[10][5] = -1241556;
spritemap[10][6] = -1241556;
spritemap[10][8] = -2722025;
spritemap[10][9] = -2722025;
spritemap[10][10] = -2722025;
spritemap[10][11] = -1317155;
spritemap[10][12] = -1317155;
spritemap[10][13] = -16777216;
spritemap[10][14] = -16777216;
spritemap[11][4] = -1241556;
spritemap[11][10] = -2722025;
spritemap[11][11] = -1317155;
spritemap[11][12] = -1317155;
spritemap[11][13] = -16777216;
spritemap[11][14] = -16777216;
spritemap[12][4] = -1241556;
spritemap[12][5] = -1241556;
spritemap[12][6] = -1241556;
spritemap[12][7] = -15345972;
spritemap[12][14] = -16777216;
spritemap[13][5] = -1241556;
spritemap[13][6] = -1241556;
spritemap[13][7] = -15345972;
spritemap[13][8] = -15345972;
spritemap[14][8] = -15345972;

}
drawspritemap();
images.push(get(0,0,320,320));  // image 0 - goalie position 0.




    
//image 0 for soccer_animation_0    
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);
pointSet.push(new PVector(143, 210));
pointSet.push(new PVector(165, 192));
pointSet.push(new PVector(202, 214));
pointSet.push(new PVector(193, 247));
pointSet.push(new PVector(154, 243));

    fill(0, 0, 0);

    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();   
    
pointSet = [];
pushMatrix();
translate(-1,-1);
pointSet.push(new PVector(154, 145));
pointSet.push(new PVector(165, 137));
pointSet.push(new PVector(178, 131));
pointSet.push(new PVector(191, 128));
pointSet.push(new PVector(206, 127));
pointSet.push(new PVector(207, 137));
pointSet.push(new PVector(170, 156));
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();  
popMatrix();

pointSet = [];
pointSet.push(new PVector(264, 163));
pointSet.push(new PVector(246, 158));
pointSet.push(new PVector(242, 192));
pointSet.push(new PVector(263, 213));
pointSet.push(new PVector(273, 194));
pointSet.push(new PVector(270, 177));




    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();  

pointSet = [];
pointSet.push(new PVector(247,259));
pointSet.push(new PVector(254, 245));
pointSet.push(new PVector(217, 260));
pointSet.push(new PVector(214, 270));
pointSet.push(new PVector(228, 269));
pointSet.push(new PVector(237,264));
pointSet.push(new PVector(238, 262));

    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();  
    
stroke(0,0,0);
strokeWeight(2);
line(168,156,166,194);    
line(203,215,242,191); 
line(206,136,246,157);    
line(194,248,216,262);    
line(253,246,263,213);  
line(154,243,147,254);
line(143,212,127,205);

ballImages.push(get(125,125,150,150));  //image 0 for soccer_animation_0

//image 1 for soccer_animation_1:-
pointSet = [];
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);

pointSet.push(new PVector(167, 213));
pointSet.push(new PVector(202, 194));
pointSet.push(new PVector(235, 216));
pointSet.push(new PVector(221, 247));
pointSet.push(new PVector(180, 249));

    fill(0, 0, 0);

    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();   
    
pointSet = [];

pointSet.push(new PVector(178, 134));
pointSet.push(new PVector(171, 143));
pointSet.push(new PVector(199, 158));
pointSet.push(new PVector(229, 144));
pointSet.push(new PVector(220, 132));
pointSet.push(new PVector(200, 131));

    pushMatrix();
    translate(-1,-5);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();  
    popMatrix();
    
pointSet = [];    
pointSet.push(new PVector(129, 212));
pointSet.push(new PVector(139, 195));
pointSet.push(new PVector(141, 164));
pointSet.push(new PVector(132, 176));
pointSet.push(new PVector(129, 194));
    pushMatrix();
    translate(-3,0);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();
    
pointSet = [];    
pointSet.push(new PVector(264, 194));
pointSet.push(new PVector(260, 164));
pointSet.push(new PVector(267, 178));
pointSet.push(new PVector(271, 209));
    pushMatrix();
    translate(3,1);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();
stroke(0,0,0);
strokeWeight(2);
line(171,139,137,167);    
line(168,213,136,196); 
line(203,196,197,152);    
line(180,250,163,265);    
line(221,247,238,263);  
line(234,217,267,195);
line(227,139,265,168);


ballImages.push(get(125,125,150,150)); //image 1 for soccer_animation_1


//image 2 for soccer_animation_2 :-
pointSet = [];
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);

pointSet.push(new PVector(203, 215));
pointSet.push(new PVector(240, 195));
pointSet.push(new PVector(262, 212));
pointSet.push(new PVector(249, 246));
pointSet.push(new PVector(212, 250));
    fill(0, 0, 0);

    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();   

pointSet = [];
pointSet.push(new PVector(141, 215));
pointSet.push(new PVector(167, 194));
pointSet.push(new PVector(161, 159));
pointSet.push(new PVector(140, 163));
pointSet.push(new PVector(133, 174));
pointSet.push(new PVector(130, 185));
pointSet.push(new PVector(130, 197));
    fill(0, 0, 0);
    
    pushMatrix();
    translate(-3,0);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape(); 
    popMatrix();
pointSet = [];
pointSet.push(new PVector(196, 130));
pointSet.push(new PVector(211, 129));
pointSet.push(new PVector(228, 133));
pointSet.push(new PVector(247, 147));
pointSet.push(new PVector(233, 157));
pointSet.push(new PVector(196, 143));
    fill(0, 0, 0);
    
    pushMatrix();
    translate(1,-2);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape(); 
    popMatrix();

pointSet = [];
pointSet.push(new PVector(147, 248));
pointSet.push(new PVector(180, 263));
pointSet.push(new PVector(189, 271));
pointSet.push(new PVector(168, 265));
    fill(0, 0, 0);
    
    pushMatrix();
    translate(-3,1);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape(); 
    popMatrix();


stroke(0,0,0);
strokeWeight(2);
line(157,160,197,141);    
line(164,195,203,215); 
line(240,198,234,155);    
line(261,213,274,198);    
line(249,245,253,254);  
line(146,250,138,213);
line(177,265,213,249);


ballImages.push(get(125,125,150,150)); //image 2 for soccer_animation_2


//image 3 for soccer_animation_3 :-
pointSet = [];
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);
pointSet.push(new PVector(142, 193));
pointSet.push(new PVector(154, 161));
pointSet.push(new PVector(189, 157));
pointSet.push(new PVector(202, 192));
pointSet.push(new PVector(166, 216));
    fill(0, 0, 0);

    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
pointSet = [];
pointSet.push(new PVector(270, 207));
pointSet.push(new PVector(265, 225));
pointSet.push(new PVector(257, 240));
pointSet.push(new PVector(240, 245));
pointSet.push(new PVector(237, 213));
pointSet.push(new PVector(259, 194));
    fill(0, 0, 0);
    pushMatrix();
    translate(4,2);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();

pointSet = [];
pointSet.push(new PVector(252, 163));
pointSet.push(new PVector(253, 153));
pointSet.push(new PVector(234, 139));
pointSet.push(new PVector(211, 130));
pointSet.push(new PVector(217, 141));
    fill(0, 0, 0);
    pushMatrix();
    translate(2,-4);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();
    
pointSet = [];
pointSet.push(new PVector(204, 270));
pointSet.push(new PVector(205, 260));
pointSet.push(new PVector(172, 248));
pointSet.push(new PVector(154, 256));
pointSet.push(new PVector(167, 262));

pointSet.push(new PVector(179, 267));
    fill(0, 0, 0);
    pushMatrix();
    translate(0,5);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();


stroke(0,0,0);
strokeWeight(2);
line(188,158,219,136);    
line(200,191,241,216); 
line(264,198,253,159);    
line(143,195,126,204);    
line(156,164,147,150);  
line(167,215,172,253);
line(205,267,245,246);


ballImages.push(get(125,125,150,150)); //image 3 for soccer_animation_3

//image 4 for soccer_animation_4
pointSet = [];
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);
pointSet.push(new PVector(179, 158));
pointSet.push(new PVector(224, 159));
pointSet.push(new PVector(237, 193));
pointSet.push(new PVector(202, 217));
pointSet.push(new PVector(165, 194));
    fill(0, 0, 0);
    pushMatrix();
    translate(0,0);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();

pointSet = [];
pointSet.push(new PVector(179, 264));
pointSet.push(new PVector(171, 258));
pointSet.push(new PVector(203, 251));
pointSet.push(new PVector(228, 258));
pointSet.push(new PVector(221, 268));
pointSet.push(new PVector(207, 269));
pointSet.push(new PVector(191, 270));
    fill(0, 0, 0);
    pushMatrix();
    translate(0,5);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();

pointSet = [];
pointSet.push(new PVector(142, 240));
pointSet.push(new PVector(135, 226));
pointSet.push(new PVector(129, 204));
pointSet.push(new PVector(129, 194));
pointSet.push(new PVector(139, 211));
    fill(0, 0, 0);
    pushMatrix();
    translate(-4,1);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();

pointSet = [];
pointSet.push(new PVector(256, 242));
pointSet.push(new PVector(265, 225));
pointSet.push(new PVector(270, 198));
pointSet.push(new PVector(262, 211));
    fill(0, 0, 0);
    pushMatrix();
    translate(6,-2);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();


stroke(0,0,0);
strokeWeight(5);


noFill();
arc(200,200,148,148,toPI*215,toPI*240);
arc(200,200,148,148,toPI*305,toPI*330);

stroke(0,0,0);
strokeWeight(2);
line(179,160,152,144);    
line(225,161,252,150); 
line(135,213,167,193);    
line(236,194,269,210);    
line(202,217,203,258); 

line(172,264,138,239);
line(227,264,263,238);


ballImages.push(get(125,125,150,150)); //image 4 for soccer_animation_4*/

//image 5 for soccer_animation_5
pointSet = [];
background(0,0,0,0);
fill(255,255,255);
noStroke();
ellipse(200,200,150,150);
pointSet.push(new PVector(213, 159));
pointSet.push(new PVector(249, 161));
pointSet.push(new PVector(262, 195));
pointSet.push(new PVector(239, 216));
pointSet.push(new PVector(203, 192));
fill(0, 0, 0);
    pushMatrix();
    translate(0,0);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();

pointSet = [];

pointSet.push(new PVector(194, 271));
pointSet.push(new PVector(195, 261));
pointSet.push(new PVector(234, 249));
pointSet.push(new PVector(245, 253));
pointSet.push(new PVector(234, 263));
pointSet.push(new PVector(218, 268));
fill(0, 0, 0);
    pushMatrix();
    translate(-1,4);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();
pointSet = [];

pointSet.push(new PVector(141, 240));
pointSet.push(new PVector(161, 245));
pointSet.push(new PVector(164, 213));
pointSet.push(new PVector(138, 192));
pointSet.push(new PVector(129, 214));
pointSet.push(new PVector(131, 219));
pointSet.push(new PVector(134, 229));
fill(0, 0, 0);
    pushMatrix();
    translate(-1,4);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();
pointSet = [];
pointSet.push(new PVector(145, 155));
pointSet.push(new PVector(154, 144));
pointSet.push(new PVector(168, 136));
pointSet.push(new PVector(190, 129));
pointSet.push(new PVector(183, 140));
pointSet.push(new PVector(167, 146));
fill(0, 0, 0);
    pushMatrix();
    translate(0,-3);
    beginShape();
    for (var i = 0; i < pointSet.length; i++) {
        vertex(pointSet[i].x, pointSet[i].y);   
    }    
    vertex(pointSet[0].x, pointSet[0].y);
    endShape();
    popMatrix();




stroke(0,0,0);
strokeWeight(2);
line(138,198,146,151);    
line(162,218,206,193); 
line(214,163,182,138);    
line(248,162,253,148);    
line(261,194,276,201); 
line(233,254,241,216);
line(197,267,159,249);


ballImages.push(get(125,125,150,150)); //image 5 for soccer_animation_5*/

};

// 3-d Projection functions :- 
//Data Structure for points in 3-d Space

var pt3d = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
};
pt3d.prototype.add = function(node3){
    this.x += node3.x;
    this.y += node3.y;
    this.z += node3.z;
};
pt3d.prototype.set = function(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;
};
//add check for divide by zero later.
pt3d.prototype.div = function(k){
    this.x /= k ;
    this.y /= k ;
    this.z /= k ;
};
pt3d.prototype.mag = function(){
    return sqrt(sq(this.x)+sq(this.y)+sq(this.z));
};

//converts point in 3-d to equivalent point in 2-d space.
//for optimization purpose - we will avoid creation of new PVector in each call.

var projectionObj = function(){
    
    this.f = 200;
    this.camPos = new pt3d(80,50,-30);
    this.pt2d = new PVector(0,0);

};
//this sets the pt2d object to the required value.
//also for processingJS offline version make sure to use set function with (x,y,0) to avoid errors.
projectionObj.prototype.compute = function(node3){
    this.pt2d.set(round(this.f*((node3.x-this.camPos.x)/(node3.z - this.camPos.z)))+this.camPos.x,round(this.f*((node3.y-this.camPos.y)/(node3.z-this.camPos.z)))+this.camPos.y,0);
    
};

projectionObj.prototype.getX = function(){
    return this.pt2d.x;
};

projectionObj.prototype.getY = function(){
    return this.pt2d.y;
};

var projection = new projectionObj();

var backgroundObj = function(){

// Marking 1 :- 
this.node3 = new pt3d(0,30,200);
projection.compute(this.node3);
this.line1pt1 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(400,30,200);
projection.compute(this.node3);
this.line1pt2 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(0,180,200);
projection.compute(this.node3);
this.line2pt1 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(400,180,200);
projection.compute(this.node3);
this.line2pt2 = new PVector(projection.pt2d.x,projection.pt2d.y);


this.node3.set(150,50,50);
projection.compute(this.node3);
this.line3pt1 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(150,50,200);
projection.compute(this.node3);
this.line3pt2 = new PVector(projection.pt2d.x,projection.pt2d.y);


this.node3.set(150,180,50);
projection.compute(this.node3);
this.line4pt1 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(150,180,200);
projection.compute(this.node3);
this.line4pt2 = new PVector(projection.pt2d.x,projection.pt2d.y);



};

var startScreenObj = function(){
    this.timer = 0;
    this.yPos = -200;
    this.display = 0;
};
var startScreen = new startScreenObj();

backgroundObj.prototype.draw = function() {

    noStroke();
    fill(48, 217, 70);
    rect(0,140,400,260);
 
    stroke(0,0,0);
    fill(60, 80, 110);
    rect(0,100,400,40);
    
    fill(107, 79, 107);
    rect(0,0,400,100);
    
    //the goal and above lines were drawn using normal co-ordinates. can be changed later.
    
    // Fix the markings first :- 
/*    fill(189, 30, 30);
    line(this.line1pt1.x,this.line1pt1.y,this.line1pt2.x,this.line1pt2.y);

    line(this.line2pt1.x,this.line2pt1.y,this.line2pt2.x,this.line2pt2.y);
    
    line(this.line3pt1.x,this.line3pt1.y,this.line3pt2.x,this.line3pt2.y);
    line(this.line4pt1.x,this.line4pt1.y,this.line4pt2.x,this.line4pt2.y);
*/

};

var goalPostObj = function(x,y,z){
    this.pos3d = new pt3d(x,y,z);
    projection.compute(this.pos3d);
    this.position = new PVector(projection.pt2d.x,projection.pt2d.y);
};

var ballObj = function(x, y, z) {
    this.init = new pt3d(x,y,z);
    this.pos3d = new pt3d(x,y,z);
    this.shadowPos3d = new pt3d(x,180,z);
    
    projection.compute(this.pos3d);
    
    this.position = new PVector(projection.pt2d.x,projection.pt2d.y);
    this.initPos = new PVector(this.position.x,this.position.y);
    
    //assume ball is initially on ground :- 
    projection.compute(this.shadowPos3d);
    this.shadowPos = new PVector(projection.pt2d.x,projection.pt2d.y); 

    
    this.thrown = 0;
    this.velocity = new pt3d(0,-2,2); // init velocity - later change using mouse click
    this.acceleration = new pt3d(0, 0.01,0);
    this.aVelocity = 0;
    this.angle = 0;
    this.bounceCoeff = -0.5;
    this.boardCoeff = -0.001;
    this.size = 25;
    this.fallenFloor = 0;
    this.hitBoard = 0;
    this.bounce = 0;

    
    
    this.prevPosition = new PVector(this.position.x,this.position.y);
    this.changePos = new PVector(this.position.x,this.position.y);

//    this.drag = new PVector(0, 0);
  //  this.aAcc = 0;
//    this.aVelocity = 0;
    this.angle = 0;
    this.idx = 0;
    this.moveCount = 0;
};

var ball = new ballObj(150, 180,50);
var target = new PVector(0, 0);

var bg = new backgroundObj();
var goalPost = new goalPostObj(80,180,200);


goalPostObj.prototype.draw = function() {
    pushMatrix();
    translate(this.position.x,this.position.y);
    scale(0.8);
    stroke(255,255,255);
    strokeWeight(2);
    for(var i = 1 ;  i < 11 ; i++){
        line(20*i+5,-150,20*i+5,-10);
        line(10,-15*i,208,-15*i);
    }
    fill(255,255,255);
    noStroke();
    rect(0,-160,10,160);
    rect(200,-160,10,160);
    rect(0,-160,200,10);
    popMatrix();
};

// Ball Obj methods.
ballObj.prototype.update = function() {
    //this.pos3d.z += 1;
    if(start === 0){
        this.velocity.add(this.acceleration);
        this.pos3d.add(this.velocity);
        
        if(this.pos3d.z > 200){
            this.pos3d.z = 50;
            this.pos3d.y = 180;
            this.pos3d.x = 150;
            
            this.velocity.x = random(-1,1);
            this.velocity.y = random(-2,0.5);
            this.velocity.z = 2;
        }
        if(this.pos3d.y > 180){
            this.velocity.y *= -1;
        }
    }
    
    projection.compute(this.pos3d);
    this.position.set(projection.pt2d.x,projection.pt2d.y,0);

    this.shadowPos3d.x = this.pos3d.x;
    this.shadowPos3d.z = this.pos3d.z;

    projection.compute(this.shadowPos3d);
    this.shadowPos.set(projection.pt2d.x,projection.pt2d.y,0); 


    this.aAcc = 1/10;	// modify constant 10
    if (this.velocity.x < 0) {
        this.aAcc = -this.aAcc;
    }
    this.aVelocity += this.aAcc;
    this.aVelocity *= 0.98; // drag
    this.angle += this.aVelocity/2;
    this.idx  = floor((this.moveCount%60)/10);
    this.changePos.set(this.position.x,this.position.y,0);
    this.changePos.sub(this.prevPosition);
    this.moveCount += floor(this.changePos.mag());
    this.prevPosition.set(this.position.x,this.position.y,0);
};

ballObj.prototype.draw = function() {
    pushMatrix();
    translate(this.shadowPos.x, this.shadowPos.y);
    scale(0.75);
    var scl = (this.pos3d.z - 50)/150;
    scale(1 - (0.1)*scl,1-(0.3)*scl);
    //scale(1-(0.3*scl));
    fill(0,0,0,128);
    ellipse(0,0,40,40);
    popMatrix();
    
    fill(255, 255, 255);
    pushMatrix();
    translate(this.position.x, this.position.y);
    rotate(toPI*this.angle);
    scale(0.75);
    scl = (this.pos3d.z - 50)/150;
    //scale(1 - (0.1)*scl,1-(0.3)*scl);
    scale(1-(0.3*scl));
    
    image(ballImages[this.idx],-20,-20,40,40);
    popMatrix();
    
    
};


var goalieObj  = function(x,y,z){
    
    this.pos3d = new pt3d(x,y,z);
    projection.compute(this.pos3d);
    this.position = new PVector(projection.pt2d.x,projection.pt2d.y);

};

goalieObj.prototype.draw = function() {
    pushMatrix();
    translate(this.position.x,this.position.y);
    image(images[0],-40,-40,80,80);
    popMatrix();
};

var goalie = new goalieObj(160,140,170);



startScreenObj.prototype.draw = function() {
    if(this.display === 1){
        fill(48, 217, 70);
        rect(0,0,400,400);
    }
    if(this.timer % 4000 < 2000){
        fill(145, 36, 120,125 + (this.timer%2000)/16);
    }
    else{
        fill(145, 36, 120,250 - (this.timer%2000)/16);
    }
    
    if(this.display < 2){

        noStroke();
        pushMatrix();
        translate(50,this.yPos);
        rect(0,0,300,200,20);
        fill(15, 244, 252);
        textSize(25);
        text("Soccer",40,30);
        fill(232, 213, 5);
        text("Soccer-in-a-Maze",40,60);
        fill(59, 240, 14);
    
        text("Instructions",40,120);
        fill(198, 226, 227);
    
        text("Penalty kick",40,90);
        fill(232, 171, 18);
        text("Credits",40,150);
        textSize(15);
        fill(230, 214, 207);
        text("click mouse to select option",20,180);
        popMatrix();

    
    }
    
    else if(this.display > 1){
        fill(48, 217, 70);
        rect(0,0,400,400);
        fill(26, 26, 23);
        textSize(30);
        if(this.display === 2){
            text("Soccer",150,200);
        }
        else if(this.display === 3){
            text("Soccer-in-a-Maze",100,200);
        }
        else if(this.display === 4){
            text("Penalty Shootout",100,200);
        }
        else if(this.display === 5){
            textSize(18);
            text("Instructions :-\nSelect one of the available games - \nSoccer or Soccer-in-a-maze or \njust practice Penalty kicks in 3-d !!\n(Soccer-in-a-maze is a new game which\ncan be said to be a hybrid of Soccer \nand Maze solving games.)\nUse arrow keys to move \nthe controlling player around.\nUse SHIFT key to shoot/kick.",40,100);
        }
        else if(this.display === 6){
            textSize(20);
            text("Author : Ameya Khandekar\nVirginia Tech\nECE 4525\nVideo Game Design and Engg\nFinal Project ",80,150);
            
        }
        fill(34, 75, 199);
        rect(150,350,120,30,5);
        triangle(153,340,153,390,130,365);
        fill(48, 217, 70);
        textSize(20);
        text("Main Menu",155,370);
    }
};

startScreenObj.prototype.processClick = function(){
    if(this.display < 2){
        if(mouseX > 80 && mouseX < 300){
            if(mouseY > 110 && mouseY < 130){
                this.display = 2;
            }
            else if(mouseY > 140 && mouseY < 160){
                this.display = 3;
            }
            else if(mouseY > 170 && mouseY < 190){
                this.display = 4;
            }
            else if(mouseY > 200 && mouseY < 220){
                this.display = 5;
            }
            else if(mouseY > 220 && mouseY < 250){
                this.display = 6;
            }
        }
    }
    else{ //for now enable escape to main menu from all other screens
        //        rect(150,350,120,30,5);
        if(mouseX > 150 && mouseX < 270 && mouseY > 350 && mouseY < 380){
            this.display = 1;
        }
    }
};

startScreenObj.prototype.update = function(){
    if(this.timer > 120 && this.timer < 420){
        this.yPos++;
    }
    this.timer++;
};
// Mouse Keyboard methods :- 
var mouseClicked = function() {
    if(start === 0 && startScreen.timer > 420){
        startScreen.processClick();
    }
};

draw = function() {
    
    background(255,255,255);

    if(start === 0){
        if(customCharMade === 0){
            customChar();
        }
        bg.draw();
        goalPost.draw();
        if(startScreen.display === 0){
            goalie.draw();
            ball.draw();
        //update methods :- 
            ball.update();
        }
        startScreen.draw();
        startScreen.update();
    }
    else{
    //Draw methods :-
            bg.draw();
            goalPost.draw();
            goalie.draw();
            ball.draw();

            //update methods :- 
            ball.update();
    
    }
    //fill(0,0,0,120);
    //rect(80,230,220,20);
};




//End of processing sketch.

}};
