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

//Functions- Basic Structure/Function Execution
/*
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
*/

//Arguments and Parameters
    //funcName(argument1,argument2);
    //function funcName(parameter1,parameter2);
calcArea(30,20);
function calcArea(width,height){ //width=30, height=20
    var area=width*height;
    console.log (area);
}

function dogYears(age){ //parameters
    var dogYears= age*7;
    console.log("Sparky is "+dogYears+" years old.");
}
var age1=4;
dogYears(age1);//arguments
dogYears(5);
dogYears(prompt("How old is Sparky?"));

