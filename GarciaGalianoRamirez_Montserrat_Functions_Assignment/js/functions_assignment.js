/*
 Montserrat Garcia Galiano Ramirez
 Functions Assignment
 8/27/15
 SDI 1500
 */



//my variables
var whichNumbers=prompt("Do you want Florida's Lottery or Powerball's numbers? \n\n (Please write Florida Lottery, or Powerball"); //user input
    //declaring which numbers he/she wants
var lottery; //Variable for Florida Lottery
var powerNumbers; //Variable for Powerball


//my functions

function typeOfLotteryValidation(lotteryType){ //Function to validate the user's input
    var timesClicked=1; //Assigning the amount of clicks until now
    while(lotteryType===""){ //Validating the question was answered
        lotteryType=prompt("Please don't leave this blank \n\nType Florida Lottery or Powerball"); //Output requesting an input
        timesClicked++; //Adding the number of clicks until now
        if (timesClicked===3){ //Assigning a maximum amount of clicks in order not to have an infinite loop
            console.log("No more chances available"); //Output saying there are no more clicks available
            break;//End of the function
        }
    }
    return lotteryType;//Return the value of the lottery numbers the user wants
}

function floridaLottery(max,min,num){ //Function for the Florida Lottery using "max", "min", and "num" values
    var lotteryNumbers=[];//Declaring the variable lotteryNumbers is an array
    for (var i=0; i<num; i++){ //The loop will run "num" amount of times
        lotteryNumbers[i]=Math.random()*(max-min)+min; //Assigning the variable a random number, in between a max and a min value
        lotteryNumbers[i]=Math.floor(lotteryNumbers[i]); //The number will round up to the lowest integer
        for (var ii=0;ii<num; ii++){ //The loop will run "num" amount of times
            if(lotteryNumbers[i]===lotteryNumbers[i]){ //If the numbers in the array repeat themselves
                lotteryNumbers[i]=lotteryNumbers[i]+1; //It will be incremented by 1
                if (lotteryNumbers[i]>max){ //If the new number is greater than the max value
                    lotteryNumbers[i]=lotteryNumbers[i]-num; //"num" will be subtracted
                }
            }
        }
    }
    return lotteryNumbers; //Return the values of lotteryNumbers

}

function powerBall(max,min,num){ //Function for the Powerball using "max", "min", and "num" values
    var powerBallNumbers=[];//Declaring the variable powerBallNumbers is an array
    for (var j=0; j<num; j++){ //The loop will run "num" amount of times
        powerBallNumbers[j]=Math.random()*(max-min)+min; //Assigning the variable a random number, in between a max and a min value
        powerBallNumbers[j]=Math.floor(powerBallNumbers[j]); //The number will round up to the lowest integer
        for (var jj=0;jj<num;jj++){ //The loop will run "num" amount of times
            if(powerBallNumbers[j]===powerBallNumbers[j]){ //If the numbers in the array repeat themselves
                powerBallNumbers[j]=powerBallNumbers[j]+1; //It will be incremented by 1
                if (powerBallNumbers[j]>max){ //If the new number is greater than the max value
                    powerBallNumbers[j]=powerBallNumbers[j]-num //"num" will be subtracted
                }
            }
        }
    }

    return powerBallNumbers; //Return the values for powerBallNumbers

}

//invoking functions
whichNumbers=typeOfLotteryValidation(whichNumbers); //Invoking of the lottery validation function
if (whichNumbers==="Florida Lottery"){ //If Florida Lottery is selected
    lottery=floridaLottery(53,1,6); //The function for the Florida Lottery will run with the (max, min, num) values
    console.log("The Florida lottery numbers are: "+lottery); //Output showing our returned value
}else if(whichNumbers==="Powerball"){ //If Powerball is selected
    powerNumbers=powerBall(59,1,5); //The function for the Powerball will run with the (max, min, num) values
    ballNumber=powerBall(35,1,1); //The function will run with different (max, min, num) values
    console.log("The Powerball lottery numbers are: "+powerNumbers+" and the Powerball is: "+ballNumber); //Output showing the returned values
}else{console.log("Please try again.")} //In case the user did answer the question, but the input is not recognized, he/she will be asked to try again
