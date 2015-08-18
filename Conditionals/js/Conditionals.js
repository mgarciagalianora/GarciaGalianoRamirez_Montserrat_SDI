/**Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Conditionals
 8/12/15
 */


/*
//if(){}
var temp= Number(prompt("What's the temperature outside?"));
var warmWater=true;

if(temp>70){alert("Go to the beach!"); if(warmWater){alert("Wear new swimsuit!")}}
    else{alert("Go to the movies!");};
 */

//Relational Expressions

var kidHeight= Number(prompt("How tall is your kid in inches?"));
var minHeight= 48;
var adultHeight=45;
var shoes= Number(prompt("How high are your shoes?"));

if(kidHeight>minHeight){console.log("You can ride the coaster!")}
    else{console.log("Try another coaster!")};


//Conditional Logic- With an Expression

if(kidHeight+shoes>minHeight){console.log("You can ride the coaster!")}
    else{console.log("Try another coaster!")};


if(kidHeight>minHeight){console.log("You can ride the coaster!")}
    else if(kidHeight>adultHeight){console.log ("You can ride with an adult")}
    else{console.log("Try another coaster!")};


//Logical Operators

var budget= 100;
var iPhonePrice= 199.99;
var paycheck= 200;
var wonLottery= confirm("Did you win the lottery? (Ok for Yes, Cancel for No");

//||
if(iPhonePrice<budget || wonLottery){console.log("You can buy the phone!")}
    else{console.log("No phone for you!")};
//&&
if(iPhonePrice<budget && paycheck>300){console.log("You can buy the phone!")}
else{console.log("No phone for you!")};



//Ternaries

if(condition){do if true;}else{do if false;}
(condition)? do if true: do if false;

var gpa= 48;

if (gpa>2.0){console.log("You can graduate");}
    else {console.log("GPA too low");}

(gpa>2.0)?console.log("You can graduate"):console.log("GPA too low");


var age= 5;
var book;

if(age<10){book="Green Eggs and Ham";}
    else{book="The Time Machine";}

book=(age<10)?"Green Eggs and Ham":"The Time Machine";

console.log(book);