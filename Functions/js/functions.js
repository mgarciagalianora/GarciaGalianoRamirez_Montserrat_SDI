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
function outputMsg(){console.log("Hello World!")}

function calcArea(){
    var width=20;
    var height=30;
    var area=width*height;
    console.log (area);
}

calcArea();
outputMsg();


