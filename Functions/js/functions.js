/*
Montserrat Garcia Galiano Ramirez
Loops and Functions
SDI 1500
 */

/*Sequential, Conditional, Reusable and Repetitive type of code
Why do we need them?
DRY- Don't Repeat Yourself. They allow us to have code that is written once, but able to be used again and again by the
machine.
Functions store stuff.
    Variables- store values
    Functions- store blocks of code
Types of functions
*Functions-a.k.a. "Normal Function"
* Procedures
* Anonymous Functions

Basic structure
    function functionName (){}
 */
/*
//Functions- Basic Structure/Function Execution

function outputMsg(){console.log("Hello World!")}

function calcArea(){
    var width=20;
    var height=30;
    var area=width*height;
    console.log (area);
}

calcArea();
outputMsg();


//Variable Scope

var width=5; //When not using the function, this value is preferred

function calcArea(){
    var width=20; //When talking about the function, this value is preferred
    var height=30;
    var area=width*height;
    console.log (area);
}

calcArea();
console.log(width);


//Arguments and Parameters
    //funcName(argument1,argument2);
    //function funcName(parameter1,parameter2);
calcArea(30,20);
function calcArea(width,height){ //width=30, height=20
    var area=width*height;
    console.log (area);
}

function dogYears(age){ //parameters        This is a procedure (doesn't return values)
    var dogYears= age*7;
    console.log("Sparky is "+dogYears+" years old.");
}
var age1=4;
dogYears(age1);//arguments
dogYears(5);
dogYears(prompt("How old is Sparky?"));


//Returning Values

var total= calcArea(30,20);
function calcArea(width,height){  //This is a function (returns values)
    var area=width*height;
    return area;
}
console.log (total);


//Anonymous Functions a.k.a. closures
//var functionName=function()


var calcArea=function(width,height);{
    var area= width*height;
    return area;
}
var a=calcArea(20,30);
console.log(a);


//While Loops
/*
var h=10;
while(h>0){
    console.log(h);
    h--;
}
*/
/*

//Do While Loops

var c=10;
do{
    console.log(c);
    c--;
}
while(c>10);

//For Loop
for(var i=10;1>0;1--){
    console.log(i);

}


//Math
var b=5;
while(b>0){
    var a=Math.floor(Math.random()*10)+1;
    console.log(a);
    b--;
}

 */

//variables
var myName=prompt("Please enter your first name: ");
var myRandom;

//my functions
//function to validate name entry
function nameValidation(firstName){
    var timesClicked=1;
    while(firstName===""){
        firstName=prompt("Please don't leave this blank \n\nPlease enter your name:");
        timesClicked++;
        if (timesClicked===3){
            console.log("Enough!!!");
            break;
        }
    }
    return firstName;
}

//function to generate random numbers
function randomNumGen(max,min,num){
    var randomNum= [];
    //Math.random()*(max-min)+min

    for (var i=0;i<num;i++){

        randomNum[i]=Math.random()*(max-min)+min;
        randomNum[i]=Math.round(randomNum[i]);
        for (var ii=0;ii<num;ii++){
            if (randomNum[i]===randomNum[i]){
            randomNum[i]=Math.random()*(max-min)+min;
            randomNum[i]=Math.round(randomNum[i]);
            }
        }

    }
    return randomNum;

}

//main code that call my functions
//TODO: create my function calls
myName= nameValidation(myName);
console.log("Thank you, "+myName+".");

myRandom=randomNumGen(100,0,4);
console.log("The first random numbers are "+ myRandom);
myRandom=randomNumGen(50,0,3);
console.log("The second random numbers are "+ myRandom);