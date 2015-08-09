/* Montserrat Garcia Galiano Ramirez
0004657654
SDI
Expression Worksheet
8/08/15
 */

/* Dog Years
Dogs age 7 times faster than humans, so a dog that is 1 year old in human years is 7 years old in "dog years."
Calculate how old Sparky the pit bull is in dog years based on his actual age.
*/


var sparkysAge= prompt("How old is Sparky?");  //This will allow the user to insert Sparky's age in human years.
var humanAge= 7; // This is a constant, meaning for every human year, Sparky grows 7 years.
var dogYears= sparkysAge*humanAge; //The expression multiplying Sparky's age by the human years constant.
var result= "Sparky is " + sparkysAge + " human year(s) old, which is " + dogYears + " in dog years"; //The expressions result output

console.log(dogYears); //This will register how old Sparky is in dog years.
alert (result); //A pop up showing the relationship between human and dog years.


/* Slice of Pie part 1
A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza
each partygoer will get at the party.
*/

var pizzasOrdered= prompt("How many pizzas are you ordering?"); //Variable to know how many pizzas are they ordering.
var slicesPerPizza= prompt("How many slices does each pizza have?"); //Variable to know how many slices each pizza has.
var partygoers= prompt("How many students attended the party?"); //Variable to know how many students will have to share the pizza.
var totalSlices= pizzasOrdered*slicesPerPizza; //Total amount of slices depending on the pizzas ordered.
var slicesPerPerson= totalSlices/partygoers; //How much every attendee ate.

console.log(slicesPerPerson); //Register the amount of slices per person.
alert ("Each person ate " + slicesPerPerson + " slices of pizza at the party"); //Alert to show the slices per person.


/* Slice of Pie part 2
At the pizza party Sparky, the host's dog is excited, because he gets the leftover pizza after the slices have been
divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?
*/

var sparkysDinner= totalSlices%partygoers; /*Using the variables from last problem, considering everyone ate whole slices
we calculate how much Sparky got for dinner. */

console.log(sparkysDinner); //Register how much Sparky ate.
alert ("Sparky got " + sparkysDinner + " slices of pizza"); //Alert to show how much Sparky ate.



/*Average Shopping Bill
You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past
five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in
the array to calculate the average amount spent on groceries.
*/

var groceriesMoney= [prompt("How much did you spend on week 1?"), prompt("How much did you spend on week 2?"), //Asking for user input.
    prompt("How much did you spend on week 3?"), prompt("How much did you spend on week 4?"), //Asking for user input.
    prompt("How much did you spend on week 5?")]; //Asking for user input of money spent each week on groceries.
var totalMoney= Number(groceriesMoney[0])+Number(groceriesMoney[1])+Number(groceriesMoney[2])+ //Addition of money spent each week.
    Number(groceriesMoney[3])+ Number(groceriesMoney[4]); // Total money spent on groceries in 5 weeks.
var averageMoney= totalMoney/5; //Dividing the total money spent by the amount of weeks to get the average.

alert("You have spent a total of $" + totalMoney + " on groceries over 5 weeks. That is an average of $" + averageMoney +
" per week"); //Letting the user know how much money he/she spent and what's the average.
console.log(totalMoney); //Logging of all the money spent.
console.log(averageMoney); //Logging of the average spent each week.


/*Discounts
Calculate the discounted price for an item. Create an expression that will calculate the discounted price with
and without sales tax.
 */

var item= prompt("What are you buying?"); //Name of the item bought.
var originalPrice= prompt("What was the original price of the item?"); //Original cost of the item.
var discount= prompt ("What's the discount?"); //Discount given.
var tax= prompt ("How much will the tax be?"); //Tax charged.
var discountAmount= discount*originalPrice/100; //How much money will be discounted.
var afterDiscountNoTax= originalPrice-discountAmount; //New price, discount applied, without tax.
var totalTax= tax*afterDiscountNoTax/100; //Total tax that will be charged.
var totalWithTax=afterDiscountNoTax+totalTax; //New price, discount applied, with tax included.

alert("Your " + item + " was originally $" + originalPrice + ", but after a " + discount + "% discount, it is now $" +
    afterDiscountNoTax + " without tax, and $" + totalWithTax + " with tax."); //Output for the user to understand what
                                                                                // the new prices will be.
console.log(afterDiscountNoTax); //Logging of the new price without tax.
console.log(totalWithTax); //Logging of the new price with tax.


