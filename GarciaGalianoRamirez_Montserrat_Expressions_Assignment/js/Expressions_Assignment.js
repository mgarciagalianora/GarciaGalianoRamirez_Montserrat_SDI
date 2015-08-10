/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/09/15
 */


/* Tip Calculator
We are considering a 3 course dinner for two, including a soup, an entree, dessert and a soda. This will give
us the total amount (tip included) for the check to be payed in one or separate checks*/

var names= [prompt("What's the first person's name?"), prompt("What's the second person's name?")];
var prices=[prompt("How much was " + names[0] + "'s soup?"), prompt("How much was " + names[1] + "'s soup?"),
    prompt("How much was " + names[0] + "'s entree?"), prompt("How much was " + names[1] + "'s entree?"),
    prompt("How much was " + names[0] + "'s dessert?"), prompt("How much was " + names[1] + "'s dessert?"),
    prompt("How much was " + names[0] + "'s soda?"), prompt("How much was " + names[1] + "'s soda?")];
var check= Number(prices[0])+ Number(prices[1])+ Number(prices[2])+ Number(prices[3])+ Number(prices[4])+
    Number(prices[5])+ Number(prices[6])+ Number(prices[7]);
var tip=prompt("How much do you want to tip?");
var tipAmount= tip*check;
tipAmount/=100;
var total= Number(check)+Number(tipAmount);

alert("The total amount to pay, without tip is $" + check + ", with tip, it will be $" + total);
console.log("The total amount to pay, without tip is $" + check + ", with tip, it will be $" + total);

total/= 2;

alert("If you decide to split the check, it will be $" + total + " each");
console.log("If you decide to split the check, it will be $" + total + " each");

var pricePersonOne= Number(prices[0])+ Number(prices[2])+ Number(prices[4])+ Number(prices[6]);
var pricePersonTwo= Number(prices[1])+ Number(prices[3])+ Number(prices[5])+ Number(prices[7]);
var individualTipOne=pricePersonOne*tip/100;
var individualTipTwo=pricePersonTwo*tip/100;
pricePersonOne += individualTipOne;
pricePersonTwo += individualTipTwo;

alert("In case you want to get separate checks " + names[0] + " will have to pay $" + pricePersonOne +
    " and " + names[1] + " $" + pricePersonTwo);
console.log("In case you want to get separate checks " + names[0] + " will have to pay $" + pricePersonOne +
" and " + names[1] + " $" + pricePersonTwo);
