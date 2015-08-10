/* Montserrat Garcia Galiano Ramirez
 0004657654
 SDI
 Expression Assignment
 8/09/15
 */


/* Tip Calculator
We are considering a 3 course dinner for two, including an soup, an entree, dessert and a soda. This will give
us the total amount (tip included) for the check to be payed in one or separate checks*/

var names= [prompt("What's the first person's name?", prompt("What's the second person's name?")];
var prices=[prompt("How much was" + names[0] + "'s soup?"), prompt("How much was" + names[1] + "'s soup?"),
    prompt("How much was" + names[0] + "'s entree?"), prompt("How much was" + names[1] + "'s entree?"),
    prompt("How much was" + names[0] + "'s dessert"), prompt("How much was" + names[1] + "'s dessert?"),
    prompt("How much was" + names[0] + "'s soda?"), prompt("How much was" + names[1] + "'s soda?")];


var tip=prompt("How much do you want to tip?");
var tipAmount= tip*check/100;
var total= Number(check)+Number(tipAmount);
console.log (total);