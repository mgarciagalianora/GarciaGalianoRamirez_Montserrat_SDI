/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/09/15
 */

/*
This will be a crosswind, headwind and tailwind calculator. It is very important for pilots to know this conditions, for airplanes
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

flyingToday=confirm("Are you flying today? (Ok for Yes, Cancel for No");
(flyingToday===false)?console.log("Have a great day then!"):console.log("Let's continue then!");

calmWind=confirm("Is the wind calm? (Ok for Yes, Cancel for No)");

if (calmWind===true){console.log("Enjoy the ride!");}

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


        console.log(crosswind);
        console.log(headwind);}

}



/*if (headingFlying=" "){headingFlying=prompt("We can't do the calculations without your heading. \n What heading are you" +
    " flying)(000˚-359˚)");}
    else if (windDirection=" "){windDirection=prompt("We can't proceed without wind direction. \n Where's the wind coming " +
    "from? (000˚-359˚)");}
    else (headw)

console.log(crosswind);
console.log(headwind);

 var calmWind=confirm("Is the wind calm? (Ok for Yes, Cancel for No)");
 var headingFlying= prompt("What heading are you flying? (000˚-359˚)");
 var windDirection= prompt("Where's the wind coming from? (000˚-359˚)");
 var windSpeed= Number(prompt("What's the wind speed in knots?"));

 var windSpeed= Number(prompt("What's the wind speed in knots?"));
 var angle=windDirection-headingFlying;
 var crosswind= windSpeed*Math.sin(angle);

 if (headingFlying==="" && windDirection==="" && windSpeed===0){headingFlying=prompt("We need your heading, wind direction and wind speed.\n" +
 "PLEASE enter your heading (000˚-359˚)");
 windDirection=prompt("PLEASE enter the wind direction(000˚-359˚)");
 windSpeed=Number(prompt("PLEASE enter the wind speed in knots"));}

 else if (headingFlying==="" || windDirection==="" && windSpeed===0){headingFlying=prompt("We need your both, your heading and wind direction.\n" +
 "PLEASE enter your heading (000˚-359˚)");
 windDirection=prompt("PLEASE enter the wind direction(000˚-359˚)");
 windSpeed=Number(prompt("PLEASE enter the wind speed in knots"));}

 else{angle=Number(windDirection)-Number(headingFlying);
 crosswind=Math.round(windSpeed*Math.sin(angle));
 headwind=Math.round(windSpeed*Math.cos(angle));

 console.log(crosswind);
 console.log(headwind);}

 */

//if(a<-1){a*=-1, console.log(a);}else{console.log(a);}

