/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/20/15
 */

/*
This will be a crosswind and headwind calculator. It is very important for pilots to know this conditions, for airplanes
can only withstand a maximum amount of wind when coming to landing.
The formula for the crosswind speed is:
crosswind=wind speed * sin(Ω) where Ω is the angle between your heading, and the direction of the wind.
headwind=wind speed * cos(Ω)
 */

//Variables
var calmWind; //If there's no wind, there's no calculation
var headingFlying; //Heading being flown, or that will be flown
var windDirection; //Where the wind is coming from
var windSpeed; //How fast the wind is blowing
var angle; //Difference between where the wind's coming and the heading you're flying
var crosswind; //The strength of the wind "hitting" you from the side
var headwind; //Strength of wind coming towards you
var flyingToday; //If you are not flying, no need to calculate

flyingToday=confirm("Are you flying today? (Ok for Yes, Cancel for No)"); //Confirmation to know if you are flying
(flyingToday===false)?alert("Click Ok in the next window to exit. Have a great day!"): //If not, you get an alert saying how to
    alert("Please give us some details about the conditions"); //leave the program, or continue in case you are flying

calmWind=confirm("Is the wind calm? (Ok for Yes, Cancel for No)"); //Confirmation to know if there's any wind

if (calmWind===true){console.log("Enjoy!");} //If the wind is calm, there's nothing else to do; if it isn't

else {headingFlying= prompt("What heading are you flying? (000˚-359˚)"); //Input of heading flown
    windDirection= prompt("Where's the wind coming from? (000˚-359˚)"); //Input of the wind's direction
    windSpeed= Number(prompt("What's the wind speed in knots?")); //Input of the wind's speed

    if (headingFlying==="" || windDirection==="" || windSpeed===0) {headingFlying=prompt("We need your heading, wind direction and wind speed.\n" +
        "PLEASE enter your heading (000˚-359˚)"); //If any of the variables is missing, the program will request the user to give a value
        windDirection=prompt("PLEASE enter the wind direction(000˚-359˚)"); //Input in case variable was missing
        windSpeed=Number(prompt("PLEASE enter the wind speed in knots")); //Input in case variable was missing

        angle=Number(windDirection)-Number(headingFlying); //Subtraction to get the difference between heading and wind's direction
        crosswind=Math.round(windSpeed*Math.sin(angle)); //Crosswind calculation using multiplication and sin()
        headwind=Math.round(windSpeed*Math.cos(angle)); //Headwind calculation using multiplication and cos()
        if (crosswind<-1&&headwind<-1){ //If both values come in negative numbers
            crosswind*=-1; //Value multiplied by -1 to get a positive number
            headwind*=-1; //Value multiplied by -1 to get a positive number
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (headwind<-1){headwind*=-1; //If just the headwind was negative, it will be multiplied by -1 to make it positive
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (crosswind<-1){crosswind*=-1; //If just the headwind was negative, it will be multiplied by -1 to make it positive
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!")}

        //If both results are positive, there will be an output showing the user the positive results in knots
        else {console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

    }

    //If all variables were given, there's no need to request their value again
    else{angle=Number(windDirection)-Number(headingFlying);//Subtraction to get the difference between heading and wind's direction
        crosswind=Math.round(windSpeed*Math.sin(angle)); //Crosswind calculation using multiplication and sin()
        headwind=Math.round(windSpeed*Math.cos(angle)); //Headwind calculation using multiplication and cos()
        if (crosswind<-1&&headwind<-1) { //If both values come in negative numbers
            crosswind*=-1; //Value multiplied by -1 to get positive number
            headwind*=-1; //Value multiplied by -1 to get a positive number
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (headwind<-1){headwind*=-1;//If just the headwind was negative, it will be multiplied by -1 to make it positive
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (crosswind<-1){crosswind*=-1; //If just the headwind was negative, it will be multiplied by -1 to make it positive
            //Output showing the user the positive results in knots
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!")}
        //If both results are positive, there will be an output showing the user the positive results in knots
        else {console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}
    }

}


