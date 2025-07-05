//1. Log your name and favorite hobby to the console.//
console.log("Affan khan" , "I love to build");

//2. Perform and log the result of 45 \* 2 - 10.//
console.log(45*2-10);


//3. Use `console.log()` to display the current year.//
const todaydate = new Date ();
console.log(todaydate.getFullYear());

//4. Create two variables for first and last name. Concatenate and log them.//
var first ="Affan"
var last = "Khan"
console.log(first + " " + last);
console.log(`${first} ${last}`);



//5. Track the value of a variable by logging it before and after updating.//
var a = 40;
console.log(a);
a= 50;
console.log(a);

//6. Use `console.error()` to simulate an error message.//
console.error("something went wrong");



//7. Log the square of the number 12 to the console.//
console.log(12*12);

//8. Print the type of a variable holding the value true.//
var a = true;
var b = 59;
console.log(typeof a);
console.log(typeof b);


// . Create a variable holding your age and log whether it’s greater than 18.//
var age = 32;
if (age >=18) {
    console.log("You are an adult");
} else {
    console.log("You are not an adult");
}


// Log the result of 100 / 0 and observe the output.//

console.log(100/0);







/*var and data types*/

//11. Declare a variable using let and log its value.//
let c = 82;
console.log(c);

//12. Create a constant to store the value of PI and log it.//
const P1 = Math.PI;
console.log(P1);


//13. Reassign a value to a variable declared with let and log the result.//
let x = 16;
x = 46;
console.log(x);



//14. Check the type of null and log it.......jab bhi type of null nikala jaega , null ka type hamesa object aata hai//
console.log(typeof null);



//15. Create a variable with a number as a string (e.g., "25") and log its type.//
var numstr = "98";
console.log(typeof numstr);


//16. Use typeof to check the type of a boolean variable.//
var n = true;
console.log(typeof n);


//17. Create three variables of types string, number, and boolean, and log their values.
var newstr = "HEllo affan sir";
var newnum = 100;
var newbool = false;
console.log(newstr);
console.log(newnum);
console.log(newbool);


//18. Declare a variable without assigning a value. Log its type.
let bb;
console.log(typeof bb); // This will log "undefined" since the variable is declared but not assigned a value.


//19. Create a variable with undefined and log its type.
let j = undefined;
console.log(typeof j); // This will log "undefined" since the variable is explicitly set to undefined.





//20. Use const to create an array. Try to reassign the array and observe the error.
const arr = [1, 2, 3];
arr = [1, 2, 3]; // This will throw an error because you cannot reassign a const variable.









//loops//
//21 write a for loop to print numbers from 1 to 50
let h = 1;
while (h < 51) {
    console.log(h);
    h++;

}

