/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/09/15
 */


/* Tip Calculator
We are considering a 3 course dinner for two, including a soup, an entree, dessert and a soda. This will give
us the total amount (tip included) for the check to be payed in one or separate checks*/

var names= [prompt("What's the first person's name?"), prompt("What's the second person's name?")]; //Asking for the costumers' names.
var prices=[prompt("How much was " + names[0] + "'s soup?"), prompt("How much was " + names[1] + "'s soup?"), //How much was spent in the soup
    prompt("How much was " + names[0] + "'s entree?"), prompt("How much was " + names[1] + "'s entree?"), //How much was spent in the entree
    prompt("How much was " + names[0] + "'s dessert?"), prompt("How much was " + names[1] + "'s dessert?"), //How much was spent in the dessert
    prompt("How much was " + names[0] + "'s soda?"), prompt("How much was " + names[1] + "'s soda?")]; //How much was spent in drinks
var check= Number(prices[0])+ Number(prices[1])+ Number(prices[2])+ Number(prices[3])+ Number(prices[4])+ //Addition of all the costs
    Number(prices[5])+ Number(prices[6])+ Number(prices[7]); //Addition of all the costs from the meal
var tip=prompt("How much do you want to tip?"); //User input defining the tip amount
var tipAmount= tip*check; //Getting the amount of tip
tipAmount/=100; //Division to get the exact tip
var total= Number(check)+Number(tipAmount); //Total for the meals plus the tip

alert("The total amount to pay, without tip is $" + check + ", with tip, it will be $" + total); //Output showing total amount to be payed
console.log("The total amount to pay, without tip is $" + check + ", with tip, it will be $" + total); //Logging the final total payment due

total/= 2; //If the check will be split by the two persons

alert("If you decide to split the check, it will be $" + total + " each"); //Output showing how much they'll have to pay
console.log("If you decide to split the check, it will be $" + total + " each"); //Logging the amount to be payed each

var pricePersonOne= Number(prices[0])+ Number(prices[2])+ Number(prices[4])+ Number(prices[6]); //How much Person One spent
var pricePersonTwo= Number(prices[1])+ Number(prices[3])+ Number(prices[5])+ Number(prices[7]); //How much Person Two spet
var individualTipOne=pricePersonOne*tip/100; //Tip according to how much Person One spent
var individualTipTwo=pricePersonTwo*tip/100; //Tip according to how much Person Two spent
pricePersonOne += individualTipOne; // Total to be payed by Person One if separate checks are requested
pricePersonTwo += individualTipTwo; // Total to be payed by Person Two if separate checks are requested

alert("In case you want to get separate checks " + names[0] + " will have to pay $" + pricePersonOne + //Output for Person
    " and " + names[1] + " $" + pricePersonTwo); //one and Person two to know how much they'll have to pay each
console.log("In case you want to get separate checks " + names[0] + " will have to pay $" + pricePersonOne + //Logging of
    " and " + names[1] + " $" + pricePersonTwo); //the amount to be payed by each with separate checks
