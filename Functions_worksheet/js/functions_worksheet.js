/*Montserrat Garcia Galiano Ramirez
8/25/15
Functions Worksheet
 */
/*
var total= calcArea(30,20);
function calcArea(width,height){  //This is a function (returns values)
    var area=width*height;
    return area;
}
console.log (total);

var calcArea=function(width,height);{
    var area= width*height;
    return area;
}
var a=calcArea(20,30);
console.log(a);
*/

// Circumference. Calculate the circumference of the circle. C=2πr

var radius= Number(prompt("What's the circle's radius in feet?")); //User input for the circle's radius
var π= 3.14159; //Value of the variable π
var totalCircumference=calcCircumference(radius,π); //Assigning the values which will be used in the function and invoking the function
function calcCircumference(radius,π){ //Body of the function
    var circumference=2*radius*π; //Body of the function
    return circumference; //The value which will be returned by the function
}
console.log("The circumference of the circle is "+totalCircumference+" ft"); //Output for the user to know the circumference of the circle



//Stung! It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function.

var weight=Number(prompt("What's the victim's weight in pounds?")); //User input of the animal's weight
var beeStings= 8.666666667; //Constant of the bee stings per pound needed to kill the victim
var totalStingsNeeded= stingsToKill(weight,beeStings); //Invoking the function

function stingsToKill(weight,beeStings){ //Body of the function
    var stingsPerPound= weight*beeStings; //Body of the function
    return stingsPerPound; //Returned value of the function

}
console.log("You need "+totalStingsNeeded+" bee stings to kill a "+weight+" pound animal"); //Output for the user