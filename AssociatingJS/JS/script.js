/**
 * Created by Montse on 8/6/15.
 */


/*var muppetNames= ["Kermit", "Miss Piggy", "Gonzo", "Rizzo"]; //0,1,2,3

muppetNames[4]="Beto";
muppetNames[1]="Elmo";

var num=2

console.log(muppetNames[num]);*/

//Expressions

var a=2; //sets up our variables a and defines it with 2
a=a+3;
console.log(a);

var yearBorn=1992;
var currentYear= 2015;
var age=currentYear-yearBorn;

console.log(age);

//Expressions-Arithmetic Operators

//area of triangle= (w*h)/2

var width=4;
var height=5;
var area= width*height/2;

console.log(area);

//Expressions-Modulo Operator

var remainder= 32%2;
console.log(remainder);


var remainderUneven= 32%5;
console.log(remainderUneven);

//Expressions-PEMDAS-Order of Operations

var quiz1=87;
var quiz2=100;
var quiz3=60;
var quiz4=80;

var average=(quiz1+quiz2+quiz3+quiz4)/4;
console.log(average);

//Expressions-Arrays

var orangeBins=[234,567,883];
var total=orangeBins[0]+orangeBins[1]+orangeBins[2];

console.log(total);

//Expressions-Concatenating Strings

var firstName="Montserrat";
var lastName="Garcia Galiano Ramirez";
var fullName= firstName+" "+lastName;

console.log(fullName);

//Casting

var stringVar= "6";
var result= 7+Number(stringVar);

console.log(result);

var areaCode=786;
var firstPart=443;
var secPart=7701;
var phoneNo= "("+ String(areaCode)+ ")"+ String(firstPart)+ "-"+ String(secPart);

console.log(phoneNo);

//Expression- Assignment Operators (=, +=, -=, *=, /=, ++, --)

var a=3;
a +=4; // a=a+4

var b=3;
b--; // b=b-1 b-= 1

console.log(a);
console.log(b);

