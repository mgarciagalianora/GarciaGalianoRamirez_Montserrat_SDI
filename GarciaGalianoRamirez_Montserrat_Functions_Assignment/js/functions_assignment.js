/*
 Montserrat Garcia Galiano Ramirez
 Functions Assignment
 8/27/15
 SDI 1500
 */

/*Keep in mind that the regular Florida lottery has six random numbers between 1 and 53;
 the Powerball lottery has five random numbers between 1 and 59 and a Powerball
 between 1 and 35.
 */

//my variables
var whichNumbers=confirm("Do you want Florida's Lottery or Powerball's numbers? \n\n (Ok for Florida's Lottery, Cancel for Powerball");
var lottery;
var power;


//my functions
function floridaLottery(max,min,num){
    var lotteryNumbers=[];
    for (var i=0; i<num; i++){
        lotteryNumbers[i]=Math.random()*(max-min)+min;
        lotteryNumbers[i]=Math.floor(lotteryNumbers[i]);
        for (var ii=0;ii<num; ii++){
            if(lotteryNumbers[i]===lotteryNumbers[i]){
                lotteryNumbers[i]=Math.random()*(max-min)+min;
                lotteryNumbers[i]=Math.floor(lotteryNumbers[i]);
            }
        }
    }
    return lotteryNumbers;

}
function powerBall(){

}

//invoking functions
lottery=floridaLottery(53,1,6);
console.log("The lottery numbers are: "+lottery);