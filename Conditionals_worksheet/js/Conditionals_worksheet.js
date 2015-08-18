/* Montserrat Garcia Galiano Ramirez
8/17/15
Conditionals Worksheet
 */

/*Last Chance for Gas!
A driver has to determine if they can make it across the desert with their current fuel. They are about to pass the last
gas station for the next 200 miles, and they need to determine whether they should stop now for gas or not
 */

//Variables
var gasEfficiency= Number(prompt("What is your car's gas efficiency in miles per gallon?")); //How many gallons will the car burn
var gaugeReading= Number(prompt("What's the gauge reading of the gas tank in percentage?")); //How much gas they have remaining
var gasTankCapacity= Number(prompt("What's your car's gas tank capacity in gallons?")); //How big is the car's tank
var milesToGo=200; //Miles to next gas station
var gasRemaining= gaugeReading*gasTankCapacity/100; //Remaining gas in gallons
var gasNeeded= milesToGo/gasEfficiency; //How much gas they need to get to the next station

if(gasRemaining>gasNeeded){console.log("Yes, you can make it without stopping for gas!");}
    else{console.log("You only have "+gasRemaining+ " gallons of gas in your tank, and you need \n "+gasNeeded+
    " gallons. Better get gas now while you can!");}








