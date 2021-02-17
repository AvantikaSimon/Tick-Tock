var hr;
var mn;
var sc;
var angle;
var hrAngle;
var mnAngle;
var scAngle;
var hrHand;
var mnHand;
var scHand;
var hrArc;
var mnArc;
var scArc;
var scX, scY
var hrX, hrY
var mnX, mnY
var framesPerSecond, currentFrames
var hrArcStop, mnArcStop, scArcStop

function setup() {
  createCanvas(800,400);
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

  hrAngle = map(hr, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 59, 0, 360);
  scAngle = map(sc, 0, 59, 0, 360);

}

function draw() {
  background(0, 0, 0);  

  //console.log(sc);
  
  //hour hand
  //push();
  //rotate(hrAngle);
  //stroke(0, 64, 229);
  //strokeWeight(8);
  //hrHand = line(380, 180, 380, 80);
  //pop();

  stroke(0, 64, 229);
  strokeWeight(8);
  hr = hour();
  hrX = 400;
  hrY = 115;
  hrHand = line(hrX, hrY, 400, 200);
  hrUpdate();

  //minute hand
  //push();
  //rotate(minAngle % 12);
  //stroke(100, 209, 60);
  //strokeWeight(8);
  //minHand = line(380, 180, 380, 60);
  //pop();

  stroke(100, 209, 60);
  strokeWeight(8);
  mn = minute();
  mnX = 400;
  mnY = 135;
  mnHand = line(mnX, mnY, 400, 200);
  mnUpdate();

  //second hand
  //push();
  //rotate(scAngle);
  //scHand = line(400, 80, 400, 200);
  //scHand = line(500, 400, 200);
  //translate(400, 80);
  //pop();

  //for(var i = scAngle; i <= 360; i += 10){
    //sc = second();
    //stroke(0, 64, 229);
    //circle = ellipse(400, scY, 80, 20);
 //}
 
  stroke(231, 55, 49);
  strokeWeight(8);
  sc = second();
  scX = 400;
  scY = 80;
  scHand = line(scX, scY, 400, 200);
  scUpdate();

  //console.log(getFrameRate());
  framesPerSecond = getFrameRate();
  currentFrames = frameCount - framesPerSecond;
 
  if(currentFrames => 32){
    currentFrames = frameCount;
    update();
  }
  
  //console.log(scAngle);

  //hour arc
  //push();
  //stroke(0, 64, 229);
  //strokeWeight(10);
  //noFill();
  //hrArc = arc(500, 100, 50, 20, 0, 0); 
  //testCircle = ellipse(400, 200, 300, 300);
  //pop();
  
  //ellipse(400, 80, 20);
  //ellipse(550, 200, 20);
  //ellipse(400, 320, 20);
  //ellipse(250, 200, 20);

  //ellipse(400, 115, 20);
  //ellipse(500, 200, 20);
  //ellipse(400, 285, 20);
  //ellipse(300, 200, 20);

  //ellipse(400, 135, 20);
  //ellipse(485, 200, 20);
  //ellipse(400, 265, 20);
  //ellipse(315, 200, 20);

  noFill();
  //hrArcStop = PI + HALF_PI;
  hrArcStop = 70;
  hrArc = arc(570, 200, 20, 20, PI + HALF_PI, hrArcStop);

  if(hrArc.stop === 69){
    hrArc.erase();
    noErase();
    hrArcStop = 70;
    hrArc = arc(570, 200, 20, 20, PI + HALF_PI, hrArcStop);
  } 

  mnArcStop = 50;
  mnArc = arc(590, 200, 20, 20, PI + HALF_PI, mnArcStop);

  if(mnArc.stop === 49){
    mnArc.erase();
    noErase();
    mnArcStop = 50;
    mnArc = arc(590, 200, 20, 20, PI + HALF_PI, mnArcStop);
  }

  scArcStop = 30;
  scArc = arc(610, 200, 20, 20, PI + HALF_PI, scArcStop);

  if(scArc.stop === 29){
    scArc.erase();
    noErase();
    scArcStop = 30;
    scArc = arc(610, 200, 20, 20, PI + HALF_PI, scArcStop);
  }

//console.log(scX);
//console.log(scY);

  drawSprites();
}

function scUpdate1(){
  if(scX === 400 && scY === 80){
    sc = second();
    scX += 10;
    scY += 8;
    scArcStop += 8;
  }
}

function scUpdate2(){
  if(scX === 550 && scY === 200){
    sc = second();
    scX -= 10;
    scY += 8;
    scArcStop += 8;
  }
}

function scUpdate3(){
  if(scX === 400 && scY === 320){
    sc = second();
    scX -= 10;
    scY -= 8;
    scArcStop -= 8;
  }
}

function scUpdate4(){
  if(scX === 250 && scY === 200){
    sc = second();
    scX += 10;
    scY -= 8;
    scArcStop -= 8;
  }
}

function scUpdate(){
sc = second();
scUpdate1();
scUpdate2();
scUpdate3();
scUpdate4();
}

function hrUpdate1(){
  if(hrX === 400 && hrY === 115){
    hr = hour();
    hrX += 6.06;
    hrY += 5.06;
    hrArcStop += 5.06;
  }
}

function hrUpdate2(){
  if(hrX === 500 && hrY === 200){
    hr = hour();
    hrX -= 6.06;
    hrY += 5.06;
    hrArcStop += 5.06;
  }
}

function hrUpdate3(){
  if(hrX === 400 && hrY === 285){
    hr = hour();
    hrX -= 6.06;
    hrY -= 5.06;
    hrArcStop -= 5.06;
  }
}

function hrUpdate4(){
  if(hrX === 300 && hrY === 200){
    hr = hour();
    hrX += 6.06;
    hrY -= 5.06;
    hrArcStop -= 5.06;
  }
}

function hrUpdate(){
hr = hour();
hrUpdate1();
hrUpdate2();
hrUpdate3();
hrUpdate4();
}

function mnUpdate1(){
  if(mnX === 400 && mnY === 135){
    mn = minute();
    mnX += 5.6;
    mnY += 4.33;
    mnArcStop += 4.33;
  }
}

function mnUpdate2(){
  if(mnX === 485 && mnY === 200){
    mn = minute();
    mnX -= 5.6;
    mnY += 4.33;
    mnArcStop += 4.33;
  }
}

function mnUpdate3(){
  if(mnX === 400 && mnY === 265){
    mn = minute();
    mnX -= 5.6;
    mnY -= 4.33;
    mnArcStop -= 4.33;
  }
}

function mnUpdate4(){
  if(mnX === 315 && mnY === 200){
    mn = minute();
    mnX += 5.6;
    mnY -= 4.33;
    mnArcStop -= 4.33;
  }
}

function mnUpdate(){
  mn = minute();
  mnUpdate1();
  mnUpdate2();
  mnUpdate3();
  mnUpdate4();
}

function update(){
sc = second();
hr = hour();
mn = minute();
scUpdate();
hrUpdate();
mnUpdate();
}

//calculate x and y distance between 0 and 15
//sc hand y distance 120 for corners and x distance 150 
// x is 10 and y is 8
