/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/09/15
 */

/*
This will be a crosswind and headwind calculator. It is very important for pilots to know this conditions, for airplanes
can only withstand a maximum amount of wind when coming to landing.
The formula for the crosswind speed is:
crosswind=wind speed * sin(Ω) where Ω is the angle between your heading, and the direction of the wind.
headwind=wind speed * cos(Ω)
 */

//Variables
var calmWind; 
var headingFlying;
var windDirection;
var windSpeed;
var angle;
var crosswind;
var headwind;
var flyingToday;

flyingToday=confirm("Are you flying today? (Ok for Yes, Cancel for No)");
(flyingToday===false)?alert("Click Ok in the next window to exit. Have a great day!"):
    alert("Please give us some details about the conditions");

calmWind=confirm("Is the wind calm? (Ok for Yes, Cancel for No)");

if (calmWind===true){console.log("Enjoy!");}

else {headingFlying= prompt("What heading are you flying? (000˚-359˚)");
    windDirection= prompt("Where's the wind coming from? (000˚-359˚)");
    windSpeed= Number(prompt("What's the wind speed in knots?"));

    if (headingFlying==="" || windDirection==="" || windSpeed===0) {headingFlying=prompt("We need your heading, wind direction and wind speed.\n" +
        "PLEASE enter your heading (000˚-359˚)");
        windDirection=prompt("PLEASE enter the wind direction(000˚-359˚)");
        windSpeed=Number(prompt("PLEASE enter the wind speed in knots"));

        angle=Number(windDirection)-Number(headingFlying);
        crosswind=Math.round(windSpeed*Math.sin(angle));
        headwind=Math.round(windSpeed*Math.cos(angle));
        if (crosswind<-1&&headwind<-1){
            crosswind*=-1;
            headwind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (headwind<-1){headwind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (crosswind<-1){crosswind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!")}

        else {console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

    }

    else{angle=Number(windDirection)-Number(headingFlying);
        crosswind=Math.round(windSpeed*Math.sin(angle));
        headwind=Math.round(windSpeed*Math.cos(angle));
        if (crosswind<-1&&headwind<-1){
            crosswind*=-1;
            headwind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (headwind<-1){headwind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}

        else if (crosswind<-1){crosswind*=-1;
            console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!")}

        else {console.log("You will be facing "+crosswind+" kts of crosswind and "+headwind+" kts of headwind. Safe flight!");}
    }

}


