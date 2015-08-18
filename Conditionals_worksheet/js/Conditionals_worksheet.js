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

(gasRemaining>=gasNeeded)?console.log("Yes, you can make it without stopping for gas!"):       //If the remaining gas is more than the gas needed,
    // you can make it without stopping
    console.log("You only have "+gasRemaining+ " gallons of gas in your tank, and you need \n "+gasNeeded+ //If it's less, you should stop for gas.
    " gallons. Better get gas now while you can!");


/* Check the Login
Make sure the user has the correct username and password. If the username doesn't match then a specific message for that should be printed
to the console. If the password doesn't match, a message should appear for that, etc. Only one error message should appear.
 */


//Variables

var username= prompt("What's the username?"); //User input for "username"
var password= prompt("What's the password?"); //User input for "password"
var correctUsername= "SDI"; //The correct username
var correctPassword= "1508"; //The correct password

if(username===correctUsername && password===correctPassword){console.log("Welcome, "+correctUsername+"!");} //If the username and password are the
    //same as the correct username and password, the user can log in.
    else if (username!=correctUsername){console.log("User not found. Try again.");} //If the username doesn't match, the user should try again.
    else{console.log("Password does not match our records.");} // If the password doesn't match, the user can't access.


/* Tire Pressure I
To meet to maintenance standards a car's front two tires should have the same pressure and the back two tires should have the same pressure. But
the front tires and the rear tires can have different pressure than each other, so it is not necessary for all four tires' pressure to be the
same. Create a single conditional that would determine if the tires of a given car are up to spec.
 */


//Variables
var tirePressure= [prompt("What's the front left tire's pressure in psi?"), prompt("What's the front right " +  //Pressure of the front and rear tires.
    "tire's pressure in psi?"), prompt("What's the rear left tire's pressure in psi?"), prompt("What's the rear right " + // Pressure of the front
        //and rear tires.
    "tire's pressure in psi?")]; //Pressure of the front and rear tires.


(tirePressure[0]===tirePressure[1] && tirePressure[2]===tirePressure[3])?console.log("The tires pass spec!"): //If the front tires' pressure is the same
    //between them, and the rear tires' as well, the car will have passed the test.
    console.log("Get your tires checked out!"); //If they aren't the same, they need to be checked out.

