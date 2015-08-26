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

var radius= Number(prompt("What's the circle's radius in feet?"));
var totalCircumference=calcCircumference(radius,3.14159);
function calcCircumference(radius,π){
    var circumference=2*radius*π;
    return circumference;
}
console.log("The circumference of the circle is "+totalCircumference+ "ft");