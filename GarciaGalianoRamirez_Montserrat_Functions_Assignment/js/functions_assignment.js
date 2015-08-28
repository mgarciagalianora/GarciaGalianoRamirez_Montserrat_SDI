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
    return lotteryType;
}

function floridaLottery(max,min,num){
    var lotteryNumbers=[];
    for (var i=0; i<num; i++){
        lotteryNumbers[i]=Math.random()*(max-min)+min;
        lotteryNumbers[i]=Math.floor(lotteryNumbers[i]);
        for (var ii=0;ii<num; ii++){
            if(lotteryNumbers[i]===lotteryNumbers[i]){
                lotteryNumbers[i]=lotteryNumbers[i]+1;
                if (lotteryNumbers[i]>max){
                    lotteryNumbers[i]=lotteryNumbers[i]-num;
                }
            }
        }
    }
    return lotteryNumbers;

}

function powerBall(max,min,num){
    var powerBallNumbers=[];
    for (var j=0; j<num; j++){
        powerBallNumbers[j]=Math.random()*(max-min)+min;
        powerBallNumbers[j]=Math.floor(powerBallNumbers[j]);
        for (var jj=0;jj<num;jj++){
            if(powerBallNumbers[j]===powerBallNumbers[j]){
                powerBallNumbers[j]=powerBallNumbers[j]+1;
                if (powerBallNumbers[j]>max){
                    powerBallNumbers[j]=powerBallNumbers[j]-num
                }
            }
        }
    }

    return powerBallNumbers;

}

//invoking functions
whichNumbers=typeOfLotteryValidation(whichNumbers);
if (whichNumbers==="Florida Lottery"){
    lottery=floridaLottery(53,1,6);
    console.log("The Florida lottery numbers are: "+lottery);
}else if(whichNumbers==="Powerball"){
    powerNumbers=powerBall(59,1,5);
    ballNumber=powerBall(35,1,1);
    console.log("The Powerball lottery numbers are: "+powerNumbers+" and the Powerball is: "+ballNumber);
}else{console.log("Please try again.")}
