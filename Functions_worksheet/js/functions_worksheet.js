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

// Circumference of the circle. C=2πr

var radius= Number(prompt("What's the circle's radius in feet?")); //User input for the circle's radius
var π= 3.14159; //Value of the variable π
var totalCircumference=calcCircumference(radius,π); //Assigning the values which will be used in the function and invoking the function
function calcCircumference(radius,π){ //Body of the function
    var circumference=2*radius*π; //Body of the function
    return circumference; //The value which will be returned by the function
}
console.log("The circumference of the circle is "+totalCircumference+ "ft"); //Output for the user to know the circumference of the circle
