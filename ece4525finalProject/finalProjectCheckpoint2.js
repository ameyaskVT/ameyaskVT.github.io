var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400); 
frameRate(60);

//Beginning of processing sketch

/*

Author : Ameya Khandekar
ECE 4525 - Video Game Design and Engineering
Final Project Checkpoint 2

Creative aspect :-


*/
var start = 0;
var toPI = PI/180;

var keyArray = [];

var ballImages = [];
var pointSet = [];
var p2 = [];
var bgImages = [];
var translateState = 0;
var translateDist = 0;



var iterations = 0;

var splitPoints = function() {
    p2.splice(0, p2.length);
    for (var i = 0; i < pointSet.length - 1; i++) {
        p2.push(new PVector(pointSet[i].x, pointSet[i].y));
        p2.push(new PVector((pointSet[i].x + pointSet[i+1].x)/2, (pointSet[i].y +
pointSet[i+1].y)/2));
    }  
    p2.push(new PVector(pointSet[i].x, pointSet[i].y));
    p2.push(new PVector((pointSet[0].x + pointSet[i].x)/2, (pointSet[0].y +
pointSet[i].y)/2));
};  

var average = function() {
    for (var i = 0; i < p2.length - 1; i++) {
        var x = (p2[i].x + p2[i+1].x)/2;
        var y = (p2[i].y + p2[i+1].y)/2;
        p2[i].set(x, y);
    } 
    var x = (p2[i].x + pointSet[0].x)/2;
    var y = (p2[i].y + pointSet[0].y)/2;
    pointSet.splice(0, pointSet.length);
    for (i = 0; i < p2.length; i++) {
        pointSet.push(new PVector(p2[i].x, p2[i].y));   
    }    
};    

var subdivide = function() {
    splitPoints();
    average();
};    


var images = [];

var customCharMade = 0;

var customChar = function()
{
customCharMade = 1;


// 2d game images :- 
    //background();
    background(0,0,0,0);
    noFill();
    stroke(245,245,245,60);
    for(var i = 0 ; i < 16 ; i++){
        rect(floor(i/4)*100,(i%4)*100,100,100);
    }
    stroke(245,245,245);
    rect(10,10,390,380);
    ellipse(400,200,100,100);
    bgImages.push(get(0,0,400,400));
    
    background(0,0,0,0);

    noFill();
    stroke(245,245,245,60);
    for(var i = 0 ; i < 16 ; i++){
        rect(floor(i/4)*100,(i%4)*100,100,100);
    }
    stroke(245,245,245);
    rect(0,10,390,380);
    ellipse(0,200,100,100);
    bgImages.push(get(0,0,400,400));


// 2d game images end here.



{
//images 0
background(0,0,0,0);

//Curve 0 - shirt
pointSet = [];
pointSet[0] = new PVector(154,107);
pointSet[1] = new PVector(138,116);
pointSet[2] = new PVector(123,128);
pointSet[3] = new PVector(116,137);
pointSet[4] = new PVector(104,155);
pointSet[5] = new PVector(94,173);
pointSet[6] = new PVector(85,187);
pointSet[7] = new PVector(105,197);
pointSet[8] = new PVector(116,181);
pointSet[9] = new PVector(129,164);
pointSet[10] = new PVector(140,152);
pointSet[11] = new PVector(152,161);
pointSet[12] = new PVector(151,192);
pointSet[13] = new PVector(150,227);
pointSet[14] = new PVector(149,248);
pointSet[15] = new PVector(188,249);
pointSet[16] = new PVector(208,249);
pointSet[17] = new PVector(224,249);
pointSet[18] = new PVector(225,211);
pointSet[19] = new PVector(226,185);
pointSet[20] = new PVector(226,165);
pointSet[21] = new PVector(240,151);
pointSet[22] = new PVector(258,161);
pointSet[23] = new PVector(267,178);
pointSet[24] = new PVector(272,195);
pointSet[25] = new PVector(292,188);
pointSet[26] = new PVector(286,160);
pointSet[27] = new PVector(275,142);
pointSet[28] = new PVector(258,126);
pointSet[29] = new PVector(241,114);
pointSet[30] = new PVector(216,103);
pointSet[31] = new PVector(201,99);
pointSet[32] = new PVector(184,100);


//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 22, 22);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 1
pointSet = [];
pointSet[0] = new PVector(149,41);
pointSet[1] = new PVector(149,65);
pointSet[2] = new PVector(151,100);
pointSet[3] = new PVector(161,117);
pointSet[4] = new PVector(174,126);
pointSet[5] = new PVector(193,113);
pointSet[6] = new PVector(204,94);
pointSet[7] = new PVector(204,58);
pointSet[8] = new PVector(202,34);
pointSet[9] = new PVector(182,34);
pointSet[10] = new PVector(164,34);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 2
pointSet = [];
pointSet[0] = new PVector(155,247);
pointSet[1] = new PVector(141,261);
pointSet[2] = new PVector(135,277);
pointSet[3] = new PVector(135,291);
pointSet[4] = new PVector(136,305);
pointSet[5] = new PVector(164,309);
pointSet[6] = new PVector(180,310);
pointSet[7] = new PVector(184,279);
pointSet[8] = new PVector(194,276);
pointSet[9] = new PVector(198,309);
pointSet[10] = new PVector(224,310);
pointSet[11] = new PVector(240,309);
pointSet[12] = new PVector(243,281);
pointSet[13] = new PVector(218,247);
pointSet[14] = new PVector(195,249);
pointSet[15] = new PVector(176,249);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(51, 41, 41);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 3
pointSet = [];
pointSet[0] = new PVector(145,304);
pointSet[1] = new PVector(132,320);
pointSet[2] = new PVector(126,334);
pointSet[3] = new PVector(125,345);
pointSet[4] = new PVector(124,368);
pointSet[5] = new PVector(146,370);
pointSet[6] = new PVector(150,347);
pointSet[7] = new PVector(168,309);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 4
pointSet = [];
pointSet[0] = new PVector(214,306);
pointSet[1] = new PVector(203,316);
pointSet[2] = new PVector(196,331);
pointSet[3] = new PVector(192,352);
pointSet[4] = new PVector(193,365);
pointSet[5] = new PVector(216,370);
pointSet[6] = new PVector(220,348);
pointSet[7] = new PVector(226,327);
pointSet[8] = new PVector(231,304);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 5
pointSet = [];
pointSet[0] = new PVector(128,361);
pointSet[1] = new PVector(106,367);
pointSet[2] = new PVector(100,378);
pointSet[3] = new PVector(105,387);
pointSet[4] = new PVector(131,386);
pointSet[5] = new PVector(143,375);

//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(28, 25, 25);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 6
pointSet = [];
pointSet[0] = new PVector(202,360);
pointSet[1] = new PVector(181,367);
pointSet[2] = new PVector(178,379);
pointSet[3] = new PVector(199,387);
pointSet[4] = new PVector(222,376);
pointSet[5] = new PVector(219,359);

//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(28, 25, 25);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();



//Curve 7
pointSet = [];
pointSet[0] = new PVector(89,184);
pointSet[1] = new PVector(78,190);
pointSet[2] = new PVector(73,204);
pointSet[3] = new PVector(83,197);
pointSet[4] = new PVector(75,213);
pointSet[5] = new PVector(88,202);
pointSet[6] = new PVector(80,216);
pointSet[7] = new PVector(102,192);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(192, 202, 214);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 8
pointSet = [];
pointSet[0] = new PVector(274,190);
pointSet[1] = new PVector(272,199);
pointSet[2] = new PVector(274,210);
pointSet[3] = new PVector(282,199);
pointSet[4] = new PVector(284,214);
pointSet[5] = new PVector(288,195);
pointSet[6] = new PVector(293,216);
pointSet[7] = new PVector(290,181);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(192, 202, 214);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();


//Curve 9
pointSet = [];
pointSet[0] = new PVector(159,61);
pointSet[1] = new PVector(173,61);
pointSet[2] = new PVector(172,71);
pointSet[3] = new PVector(162,71);

//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//draw it :-
pushMatrix();
translate(22,0);
fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();

//Curve 10
pointSet = [];
pointSet[0] = new PVector(166,93);
pointSet[1] = new PVector(185,93);
pointSet[2] = new PVector(182,102);
pointSet[3] = new PVector(172,102);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 11
/*pointSet = [];
pointSet[0] = new PVector(189,62);
pointSet[1] = new PVector(181,63);
pointSet[2] = new PVector(180,69);
pointSet[3] = new PVector(191,72);*/

//Curve 12
pointSet = [];
pointSet[0] = new PVector(142,55);
pointSet[1] = new PVector(160,45);
pointSet[2] = new PVector(156,54);
pointSet[3] = new PVector(168,49);
pointSet[4] = new PVector(171,55);
pointSet[5] = new PVector(185,45);
pointSet[6] = new PVector(193,49);
pointSet[7] = new PVector(202,45);
pointSet[8] = new PVector(202,55);
pointSet[9] = new PVector(205,35);
pointSet[10] = new PVector(192,24);
pointSet[11] = new PVector(184,28);
pointSet[12] = new PVector(175,26);
pointSet[13] = new PVector(163,26);
pointSet[14] = new PVector(151,30);
pointSet[15] = new PVector(141,38);
pointSet[16] = new PVector(131,51);
pointSet[17] = new PVector(126,61);
pointSet[18] = new PVector(139,56);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 13
pointSet = [];
pointSet[0] = new PVector(151,70);
pointSet[1] = new PVector(142,71);
pointSet[2] = new PVector(141,78);
pointSet[3] = new PVector(150,96);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 14
pointSet = [];
pointSet[0] = new PVector(203,71);
pointSet[1] = new PVector(209,65);
pointSet[2] = new PVector(212,72);
pointSet[3] = new PVector(208,88);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
images.push(get(0,0,400,400));
// image 0 - goalie position 0.
}
{


background(0,0,0,0);
pushMatrix();
translate(200,200);
scale(0.75);

//Curve 0 :-
pointSet = [];
pointSet[0] = new PVector(-36,7);
pointSet[1] = new PVector(-36,-24);
pointSet[2] = new PVector(-45,-34);
pointSet[3] = new PVector(-70,-97);
pointSet[4] = new PVector(-86,-126);
pointSet[5] = new PVector(-97,-147);
pointSet[6] = new PVector(-71,-157);
pointSet[7] = new PVector(-53,-123);
pointSet[8] = new PVector(-41,-79);
pointSet[9] = new PVector(-31,-64);
pointSet[10] = new PVector(0,-73);
pointSet[11] = new PVector(6,-96);
pointSet[12] = new PVector(1,-132);
pointSet[13] = new PVector(-20,-167);
pointSet[14] = new PVector(7,-174);
pointSet[15] = new PVector(20,-146);
pointSet[16] = new PVector(31,-111);
pointSet[17] = new PVector(32,-82);
pointSet[18] = new PVector(31,-32);
pointSet[19] = new PVector(20,-24);
pointSet[20] = new PVector(19,10);
pointSet[21] = new PVector(15,37);
pointSet[22] = new PVector(-22,36);
pointSet[23] = new PVector(-36,34);
pointSet[24] = new PVector(-36,0);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 22, 22);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
//Curve 1
pointSet = [];
pointSet[0] = new PVector(-51,-159);
pointSet[1] = new PVector(-51,-135);
pointSet[2] = new PVector(-49,-100);
pointSet[3] = new PVector(-39,-83);
pointSet[4] = new PVector(-26,-74);
pointSet[5] = new PVector(-7,-87);
pointSet[6] = new PVector(4,-106);
pointSet[7] = new PVector(4,-142);
pointSet[8] = new PVector(2,-166);
pointSet[9] = new PVector(-18,-166);
pointSet[10] = new PVector(-36,-166);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 2
pointSet = [];

pointSet[0] = new PVector(-45,47);
pointSet[1] = new PVector(-59,61);
pointSet[2] = new PVector(-65,77);
pointSet[3] = new PVector(-65,91);
pointSet[4] = new PVector(-64,105);
pointSet[5] = new PVector(-36,109);
pointSet[6] = new PVector(-20,110);
pointSet[7] = new PVector(-16,79);
pointSet[8] = new PVector(-6,76);
pointSet[9] = new PVector(-2,109);
pointSet[10] = new PVector(24,110);
pointSet[11] = new PVector(40,109);
pointSet[12] = new PVector(43,81);
pointSet[13] = new PVector(18,47);
pointSet[14] = new PVector(-5,49);
pointSet[15] = new PVector(-24,49);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(51, 41, 41);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();




//Curve 5
pointSet = [];
pointSet[0] = new PVector(-41,-139);
pointSet[1] = new PVector(-27,-139);
pointSet[2] = new PVector(-28,-129);
pointSet[3] = new PVector(-38,-129);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//draw it :-
pushMatrix();
translate(22,0);
fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();

//Curve 6
pointSet = [];
pointSet[0] = new PVector(-34,-107);
pointSet[1] = new PVector(-15,-107);
pointSet[2] = new PVector(-18,-98);
pointSet[3] = new PVector(-28,-98);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();


//Curve 7
pointSet = [];
pointSet[0] = new PVector(-58,-145);
pointSet[1] = new PVector(-40,-155);
pointSet[2] = new PVector(-44,-146);
pointSet[3] = new PVector(-32,-151);
pointSet[4] = new PVector(-29,-145);
pointSet[5] = new PVector(-15,-155);
pointSet[6] = new PVector(-7,-151);
pointSet[7] = new PVector(2,-155);
pointSet[8] = new PVector(2,-145);
pointSet[9] = new PVector(5,-165);
pointSet[10] = new PVector(-8,-176);
pointSet[11] = new PVector(-16,-172);
pointSet[12] = new PVector(-25,-174);
pointSet[13] = new PVector(-37,-174);
pointSet[14] = new PVector(-49,-170);
pointSet[15] = new PVector(-59,-162);
pointSet[16] = new PVector(-69,-149);
pointSet[17] = new PVector(-74,-139);
pointSet[18] = new PVector(-61,-144);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(71, 75, 79);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();

//Curve 8
pointSet = [];
pointSet[0] = new PVector(-49,-130);
pointSet[1] = new PVector(-58,-129);
pointSet[2] = new PVector(-59,-122);
pointSet[3] = new PVector(-50,-104);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
//Curve 9
pointSet = [];
pointSet[0] = new PVector(3,-129);
pointSet[1] = new PVector(9,-135);
pointSet[2] = new PVector(12,-128);
pointSet[3] = new PVector(8,-112);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();


//Curve 11
pointSet = [];
pointSet[0] = new PVector(-21,73);
pointSet[1] = new PVector(-33,71);
pointSet[2] = new PVector(-43,71);
pointSet[3] = new PVector(-44,82);
pointSet[4] = new PVector(-42,102);
pointSet[5] = new PVector(-40,128);
pointSet[6] = new PVector(-39,146);
pointSet[7] = new PVector(-37,159);
pointSet[8] = new PVector(-18,163);
pointSet[9] = new PVector(-17,139);
pointSet[10] = new PVector(-18,116);
pointSet[11] = new PVector(-19,95);
pointSet[12] = new PVector(-21,69);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
//Curve 12
pointSet = [];
pointSet[0] = new PVector(6,74);
pointSet[1] = new PVector(27,73);
pointSet[2] = new PVector(30,94);
pointSet[3] = new PVector(33,126);
pointSet[4] = new PVector(33,159);
pointSet[5] = new PVector(18,159);
pointSet[6] = new PVector(10,133);
pointSet[7] = new PVector(8,100);
//draw it :-
iterations = 0;

while (iterations < 5) {
    subdivide();
    iterations++;
} 

fill(224, 160, 81);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
//Curve 13
pointSet = [];
pointSet[0] = new PVector(-35,155);
pointSet[1] = new PVector(-42,162);
pointSet[2] = new PVector(-39,173);
pointSet[3] = new PVector(-29,180);
pointSet[4] = new PVector(-18,185);
pointSet[5] = new PVector(-5,181);
pointSet[6] = new PVector(-21,155);

fill(20, 19, 18);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
//Curve 14
pointSet = [];
pointSet[0] = new PVector(23,153);
pointSet[1] = new PVector(16,160);
pointSet[2] = new PVector(17,173);
pointSet[3] = new PVector(35,185);
pointSet[4] = new PVector(47,170);
pointSet[5] = new PVector(23,150);

fill(20, 19, 18);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();

//Curve 16
pointSet = [];
pointSet[0] = new PVector(-93,-141);
pointSet[1] = new PVector(-104,-157);
pointSet[2] = new PVector(-93,-151);
pointSet[3] = new PVector(-94,-174);
pointSet[4] = new PVector(-87,-154);
pointSet[5] = new PVector(-80,-167);
pointSet[6] = new PVector(-78,-156);
pointSet[7] = new PVector(-79,-145);
fill(192, 202, 214);

noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
//Curve 17
pointSet = [];
pointSet[0] = new PVector(-9,-159);
pointSet[1] = new PVector(-17,-170);
pointSet[2] = new PVector(-17,-184);
pointSet[3] = new PVector(-6,-172);
pointSet[4] = new PVector(-5,-188);
pointSet[5] = new PVector(1,-185);
pointSet[6] = new PVector(1,-172);
pointSet[7] = new PVector(12,-188);
pointSet[8] = new PVector(6,-158);
fill(192, 202, 214);
noStroke();
//noFill();
pushMatrix();
scale(1/0.75);
beginShape();
for(var j = 0 ; j < pointSet.length ; j++){
    vertex(pointSet[j].x,pointSet[j].y);
}
    vertex(pointSet[0].x,pointSet[0].y);
endShape();
popMatrix();
popMatrix();
images.push(get(0,0,400,400));

// image 1 - goalie position 1.
}



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
var startScreenObj = function(){
    this.timer = 0;
    this.yPos = -200;
    this.display = 0;
	this.soccerTimer = 0;
};
var startScreen = new startScreenObj();
var backgroundObj = function(){

// Marking 1 :- 
this.node3 = new pt3d(-20,180,200);
projection.compute(this.node3);
this.line1pt1 = new PVector(projection.pt2d.x,projection.pt2d.y);

this.node3.set(500,180,200);
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
    stroke(255, 255, 255);
    line(this.line1pt1.x,this.line1pt1.y,this.line1pt2.x,this.line1pt2.y);
/*
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


    this.timer = 0 ; 
    
    
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
//    if(start === 0){
        this.velocity.add(this.acceleration);
        this.pos3d.add(this.velocity);
        if(this.timer > 0){
            this.timer++;
        }
        if(this.timer > 60){
            this.timer = 0;
            this.pos3d.z = 50;
            this.pos3d.y = 180;
            this.pos3d.x = 150;
            
            this.velocity.x = random(-1,1);
            this.velocity.y = random(-2,0.5);
            this.velocity.z = 2;
        }
        if(this.pos3d.z > 200){
            
            this.timer++;
            this.velocity.z *= -1;

        }
        if(this.pos3d.y > 180){
            this.velocity.y *= -1;
        }
        
 //   }
    
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
    
    this.initpos3d = new pt3d(x,y,z);
    this.pos3d = new pt3d(x,y,z);
    projection.compute(this.pos3d);
    this.position = new PVector(projection.pt2d.x,projection.pt2d.y);
    
    this.imgIdx = 0;

};

goalieObj.prototype.draw = function() {
    pushMatrix();
    translate(this.position.x,this.position.y);

    if(this.imgIdx === 0){
        image(images[0],-40,-40,80,80);
    }
    else{
        pushMatrix();
        scale(1/0.75);
        image(images[1],-40,-40,80,80);
        popMatrix();
    }
    popMatrix();
};

goalieObj.prototype.update = function(){
    this.pos3d.x  = ball.pos3d.x;
    this.pos3d.y =  this.initpos3d.y - 0.25*abs(180 - ball.pos3d.y);
    if(abs(this.pos3d.y - this.initpos3d.y) > 10){
        this.imgIdx = 1;
    }
    else{
        this.imgIdx = 0;
    }
    projection.compute(this.pos3d);
    this.position = new PVector(projection.pt2d.x,projection.pt2d.y);
};

var goalie = new goalieObj(160,140,170);

// Objects  for Final Project CheckPoint 2 

var trialFieldObj = function(){

};

var trialField = new trialFieldObj();

var trialBallObj = function(x,y){
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,0);
    this.deceleration = new PVector(0,0);
    this.radius = 10;
    
};

var trialBall = new trialBallObj(400,200);

var keyState = function(){

};
var haltState = function(){

};
var chaseState = function(){

};
var controlState = function(){

};

var trialPlayerObj = function(id,teamId){
    
    var x,y ; 
    
    if(id % 2 === 0){
        y = round(random(240,280));
    }
    else{
        y = round(random(140,180));
    }
    x = id*100 + round(random(40,80));
    if(teamId === 1){
        x = 800 - x;
    }
    this.position = new PVector(x,y);
    this.velocity = new PVector(0,0);
    this.team = teamId;
    this.id = id;
    this.angle = toPI*0;
    this.step = new PVector(0,0);
    this.keyPlayer = false;
    this.hasControl = false;
    this.radius = 15;
    this.relBallPos = new PVector(0,0);
    //this.dir = 0;
    
    this.ballDist = sq(1000);
    
    this.states = [new keyState(), new haltState(), new chaseState(), new controlState()];
    this.currState = 1;  
};
trialPlayerObj.prototype.changeState = function(x){
    this.currState = x;
};


var prep2kickOffState = function(){

};

var defendState = function(){

};

var attackState = function(){

};

var teamObj = function(id){
    this.id = id;
    this.score = 0;
    this.states = [new prep2kickOffState(),new defendState(), new attackState()];
    this.currState = 0;
    this.players = [new trialPlayerObj(0,this.id),new trialPlayerObj(1,this.id),new trialPlayerObj(2,this.id),new trialPlayerObj(3,this.id)];
    this.keyPlayerIdx = 3;
    if(id === 0){
        this.players[this.keyPlayerIdx].changeState(0);
    }
};
teamObj.prototype.changeState = function(x){
    this.currState = x;
};

var teams = [new teamObj(0), new teamObj(1)];
var trialPlayer = new trialPlayerObj(3,0);

trialFieldObj.prototype.draw = function() {
    //if(trialPlayer.position.x 
};
trialBallObj.prototype.draw = function() {
    pushMatrix();
        translate(this.position.x,this.position.y);
        fill(233,233,233);
        ellipse(0,0,2*this.radius,2*this.radius);
        stroke(0,0,0);
        line(-9,4,9,4);
        line(-9,-4,9,-4);
    popMatrix();
};
trialPlayerObj.prototype.draw = function() {

    pushMatrix();
        translate(this.position.x,this.position.y);
        if(this.keyPlayer && frameCount % 60 < 30){
            fill(0,0,0,128);
            triangle(-20,-35,0,-35,-10,-20);
        }
        rotate(this.angle + toPI*90);
        
        fill(31, 28, 31);
        quad(-25,-10,25,-10,15,10,-15,10);
        noStroke();
        if(this.team === 0){
            fill(96, 86, 237);
        }
        else{
            fill(212, 30, 30);
        }
        ellipse(0,0,2*this.radius,2*this.radius);
        rotate(-(this.angle + toPI*90));
        fill(13, 13, 12);
        textSize(12);
        text(this.id,-2 ,2 );
    popMatrix();
};
teamObj.prototype.draw = function() {
    for(var i = 0 ; i < this.players.length ; i++){
        this.players[i].draw();
    }
};

keyState.prototype.execute = function(me){
        me.keyPlayer = true;
        if(keyArray[RIGHT] === 1 && (frameCount % 3) === 0){
            me.angle = me.angle + toPI;
            if(me.angle >= PI){
                me.angle = -PI;
            } 
    
        }
        if(keyArray[LEFT] === 1 && (frameCount % 3) === 0){
            me.angle = me.angle - toPI;
            if(me.angle <= -PI){
                me.angle = PI;
            }
        }
        me.step.x = cos(me.angle);
        me.step.y = sin(me.angle);
        me.step.normalize();
        if(keyArray[UP] === 1){
            me.position.add(me.step);
            if(me.hasControl){
                trialBall.position.add(me.step);
            }
        }
        if(keyArray[DOWN] === 1){
            me.position.sub(me.step);
        }
};
haltState.prototype.execute = function(me){
    me.keyPlayer = false;
    me.relBallPos.x = trialBall.position.x - me.position.x;
    me.relBallPos.y = trialBall.position.y - me.position.y;
    me.angle = me.relBallPos.heading();
    if(me.ballDist <= sq(80)){
        me.changeState(2);
    }
};
chaseState.prototype.execute = function(me){
    me.velocity.x = trialBall.position.x - me.position.x;
    me.velocity.y = trialBall.position.y - me.position.y;
    me.velocity.normalize();
    me.velocity.mult(3);
    me.position.add(me.velocity);
    if(me.hasControl){
        me.changeState(3);
    }
};
controlState.prototype.execute = function(me){
    
};

trialPlayerObj.prototype.move = function(){
    this.states[this.currState].execute(this);
    this.ballDist = (this.position.x - trialBall.position.x)*(this.position.x - trialBall.position.x) + (this.position.y - trialBall.position.y)*(this.position.y - trialBall.position.y);
    if(this.ballDist <= sq(this.radius + trialBall.radius) ){
        this.hasControl = true;
    }
    else{
        this.hasControl = false;
    }
};

trialBallObj.prototype.move = function(){
    if(!trialPlayer.hasControl){

        this.deceleration.x = this.velocity.x;
        this.deceleration.y = this.velocity.y;
        this.deceleration.mult(-0.03);
        if(this.velocity.mag() < 0.3){
            this.velocity.mult(0);
        }
        this.position.add(this.velocity);
        if(this.position.x < 0 || this.position.x > 800 || this.position.y < 0 || this.position.y > 400){
            this.velocity.mult(-1);
        }
    }
};

teamObj.prototype.move = function() {
    if(this.id === 0 && (keyArray[CONTROL] === 1) && (frameCount % 10 === 0)){
        this.players[this.keyPlayerIdx].changeState(1); //halt it
        this.keyPlayerIdx = (this.keyPlayerIdx + 1)%4;
        this.players[this.keyPlayerIdx].changeState(0);
    }
    for(var i = 0 ; i < this.players.length ; i++){
        this.players[i].move();
    }
};



//  Final Project CheckPoint 2

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
        text("Soccer (available)",40,30);
        fill(232, 213, 5);
        text("Soccer-in-a-Maze(n/a)",40,60);
        fill(59, 240, 14);
    
        text("Instructions",40,120);
        fill(198, 226, 227);
    
        text("Penalty kick(n/a)",40,90);
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
			this.soccerTimer--;
            text("Soccer",150,200);
			textSize(15);
			text("Game about to start in "+floor(this.soccerTimer/60) ,140,220);
			if(this.soccerTimer <= 0){
				start = 3;
			}
        }
        else if(this.display === 3){
            text("Soccer-in-a-Maze",100,200);
        }
        else if(this.display === 4){
            text("Penalty Shootout",100,200);
        }
        else if(this.display === 5){
            textSize(18);
            text("Instructions :-\nSelect one of the available games - \nSoccer or Soccer-in-a-maze or \njust practice Penalty kicks in 3-d !!\n(Soccer-in-a-maze is a new game which\ncan be said to be a hybrid of Soccer \nand Maze solving games.)\nGames marked n/a are under development \nand not available for playing for checkpoint 2\nUsing simple shapes for Players,\nwill be upgraded soon\n\nUse arrow keys to move \nthe controlling player around.\nUse MOUSECLICK to shoot/kick.\nCHOOSE controlling player using CTRL key,\na triangle flashes on its head ",40,20);
        }
        else if(this.display === 6){
            textSize(20);
            text("Author : Ameya Khandekar\nVirginia Tech\nECE 4525\nVideo Game Design and Engg\nFinal Project ",80,150);
            
        }
        if(this.display !== 2){        
			fill(34, 75, 199);
			rect(150,350,120,30,5);
       		triangle(153,340,153,390,130,365);
        	fill(48, 217, 70);
	
			textSize(20);
        	text("Main Menu",155,370);		}
    }
};

startScreenObj.prototype.processClick = function(){
    if(this.display < 2){
        if(mouseX > 80 && mouseX < 300){
            if(mouseY > 110 && mouseY < 130){
                this.display = 2;
				this.soccerTimer = 300;
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
        	if(this.display !== 2){
				this.display = 0;
			}
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

	if(start !== 0){
		if(trialPlayer.hasControl){
        	trialBall.velocity.x = 2*cos(trialPlayer.angle);
        	trialBall.velocity.y = 2*sin(trialPlayer.angle);
        	trialBall.velocity.normalize();
        	trialBall.velocity.mult(5);
        	trialBall.position.add(trialBall.velocity);
    	}

	}

};

keyPressed = function(){
    keyArray[keyCode] = 1;
};
keyReleased = function(){
    keyArray[keyCode] = 0;
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
            goalie.update();
            ball.draw();
        //update methods :- 
            ball.update();
        }
        startScreen.draw();
        startScreen.update();
    }
    else{
    //Draw methods :-
		/*
            bg.draw();
            goalPost.draw();
            goalie.draw();
            goalie.update();
            ball.draw();

            //update methods :- 
            ball.update();
    	*/
       background(57, 179, 23);
        //image(bgImages[0],-20,0,400,400);
        //image(bgImages[1],380,0,400,400);
         pushMatrix();
         switch(translateState){
            case 0:
                if(trialBall.position.x > 300){
                    translateState = 1; 
                }
                break;
            case 1:
                if(trialBall.position.x > 700){
                    translateState = 2;
                }
                else if(trialBall.position.x < 300){
                    translateState = 0;
                }
                break;
            case 2:
                if(trialBall.position.x < 700){
                    translateState = 1;
                }
                break;
            
        }
        
        switch(translateState){

            case 1:
                translateDist = trialBall.position.x - 300;
                break;
            case 2:
                translateDist = 400;
                break;
            
        }
        translate(-translateDist, 0);

        image(bgImages[0],0,0,400,400);
        image(bgImages[1],400,0,400,400);
        //draw the Objects :- 
      //  trialPlayer.draw();
        trialBall.draw();
        for(var i = 0 ; i < teams.length ; i++){
            teams[i].draw();
        }
        
        popMatrix();
        
//        trialPlayer.move();
        trialBall.move();
        for(var i = 0 ; i < teams.length ; i++){
            teams[i].move();
        }

		
    }
    //fill(0,0,0,120);
    //rect(80,230,220,20);
};




//End of sketch

}};
