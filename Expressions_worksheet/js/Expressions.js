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


