let calculatorBoxes;
let calculatorResultsBar;
let calculatorCurrentValBar;
let prevPosX;
let prevPosY;
let numberPressed;
let currValue="";
let totalValue="";
let currOperator;
let operatorButtons;
let boolClicked = false;


function setup()
{
    //this function runs once at the start of your program
    
    //this command creates a drawing area in the browser - it should only be called once
    createCanvas(900,600);
    
    calculatorResultsBar={posX: 100, posY: 50, w: 400, h: 50};
    calculatorCurrentValBar={posX: 100, posY: 0, w: 400, h: 50};
    
    operatorButtons = [{posX: 400, posY: 100, w: 100, h: 100, value: "+"},
                      {posX: 400, posY: 200, w: 100, h: 100, value: "-"},
                      {posX: 400, posY: 300, w: 100, h: 100, value: "/"},
                      {posX: 300, posY: 400, w: 100, h: 100, value: "*"}]
    
    calculatorBoxes = [{posX: 100, posY: 100, w: 100, h: 100, value: 1},
                        {posX: 200, posY: 100, w: 100, h: 100, value: 2},
                      {posX: 300, posY: 100, w: 100, h: 100, value: 3},
                      {posX: 100, posY: 200, w: 100, h: 100, value: 4},
                      {posX: 200, posY: 200, w: 100, h: 100, value: 5},
                      {posX: 300, posY: 200, w: 100, h: 100, value: 6},
                      {posX: 100, posY: 300, w: 100, h: 100, value: 7},
                      {posX: 200, posY: 300, w: 100, h: 100, value: 8},
                      {posX: 300, posY: 300, w: 100, h: 100, value: 9},
                      {posX: 200, posY: 400, w: 100, h: 100, value: 0}]
    
    
}


function draw()
{
    
    //this command clears the background to black (try changing the numbers)
    
    background(255,255,255);
    
    
    strokeWeight(1);
    //gridLines();
    
    //change the fill color
    
    //Draw the Results Bar
   fill(100,100,100); rect(calculatorResultsBar.posX,calculatorResultsBar.posY,calculatorResultsBar.w,calculatorResultsBar.h);
    rect(calculatorCurrentValBar.posX,calculatorCurrentValBar.posY,calculatorCurrentValBar.w,calculatorCurrentValBar.h);
    
    //Draw the Numbers
    fill(255,0,0);
    for(let i = 0; i < calculatorBoxes.length; i ++){
       fill(255,0,0); rect(calculatorBoxes[i].posX,calculatorBoxes[i].posY,calculatorBoxes[i].w,calculatorBoxes[i].h);
        fill(255,255,255);
        textAlign(CENTER);
        text(calculatorBoxes[i].value,calculatorBoxes[i].posX+calculatorBoxes[i].w/2,calculatorBoxes[i].posY+calculatorBoxes[i].h/2);
    }
    
    //Draw the Operators
    fill(255,0,0);
    for(let i = 0; i < operatorButtons.length; i ++){
       fill(255,0,0); rect(operatorButtons[i].posX,operatorButtons[i].posY,operatorButtons[i].w,operatorButtons[i].h);
        fill(255,255,255);
        textAlign(CENTER);
        text(operatorButtons[i].value,operatorButtons[i].posX+operatorButtons[i].w/2,operatorButtons[i].posY+operatorButtons[i].h/2);
    }
    
    //Check for Collision on Numbers
    for(let i = 0; i < calculatorBoxes.length; i ++){
        collisionDetector(calculatorBoxes[i]);
        //console.log(calculatorBoxes[i].posX);
        
    }
    
    if(mouseIsPressed==true){
     //console.log(mouseX);   
    }
    
    fill(255,255,255); text(currValue,calculatorCurrentValBar.posX+calculatorCurrentValBar.w/2,calculatorCurrentValBar.posY + calculatorCurrentValBar.h/2);
    
}

function mouseClicked(){
    //if(mouseButton === LEFT){
    currValue = currValue.toString() + numberPressed.toString();
    console.log(currValue);   
    //}
 
}