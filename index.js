//console.log("Hello");
//console.log("i like pizza!");

//window.alert("this is an alert!");
//window.alert("i like pizza!")

//document.getElementById("myH1").textContent = "Hello!";
//document.getElementById("myP").textContent = "I like pizza!";


// this is comment
/*
this
is
a
comment
*/
//variable = a container that stores a value.
//behaves as if it were the values it cont

//let fullName= "Olerexi Kunn";
//let age = 25;
//let student = false;
//document.getElementById("p1").textContent = `Your name is ${fullName}`;
//document.getElementById("p2").textContent = `You are ${age} years old`;
//document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
//1. declaration let x;
//2. assignemt x= 100;
//let x;
//x=100;

//let age = 25;
//let price=10.99;
//let gpa = 3;

//let firstName = "Broski"
//let favoriteFood = "pizza"

//console.log(typeof firstName);
//console.log(`Your name is ${firstName}`);


//console.log(age);
//console.log(price);
//console.log(3);

//console.log(`you are ${age} years old`);
//console.log(`the rpice is $${price}`);
//console.log(`your gpa is: ${gpa}`);

//arithmetic operators = operands (values, variables, etc.)
//operators (+ - * / )
//ex. 11 = x + S;

//let students = 30;

//students = students + 1;
//students = students - 1;
//students = students * 2;
//students = students / 2;
//students = students ** 2;
//let extraStudents = Students % 3;

//students += 1;
//students -= 1;
//console.log(students);

//let result = 1 + 2 * 3 + 4 ** 2;

/*
operator precedence
1. parenthesis ()
2. exponents 
3. multiplication & division & modulo
4. addition & subtraction
*/

//let result = 12 % 5 + 8 / 2;
//let result = 6 / 2 ** (2 + 5);
//console.log(result);

//how to accept user input

// 1. easy way = window prompt
// 2. professional way = html textbox

//let username;

//username = window.prompt("whats your username?");

//console.log(username);

//let username;

//document.getElementById("mySubmit").onclick = function(){
    //username = document.getElementById("myText").value;
    //document.getElementById("myH1").textContent = `Hello ${username}`
    //console.log(username);
//}


//type conversion = change the datatype of a value to another
// (strings, numbers, booleans)

//let age = window.prompt("how old are you?");
//age = Number(age);
//age+=1;
//console.log(age, typeof age);

//let x = "0";
//let y = "0";
//let z = "0";

//x = Number(x);
//y = String(y);
//z = Boolean(z);

//console.log(x, typeof x);
//console.log(y, typeof y);
//console.log(z, typeof z);

//const = a variable that cant be changed

//let PI = 3.14159;
//let radius;
//let circumference;


//document.getElementById("mySubmit").onclick = function(){
    //radius = document.getElementById("myText").value;
    //radius = Number(radius);
    //circumference = 2 * PI * radius;
    //document.getElementById("myH3").textContent = circumference;
//}

// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count= 0;
//     countLabel.textContent = count;
// }

//math = built-in object that provides a 
//collection of properties and methods

// let x = 3;
// let y = 2;
// let z = 1;

// //z = Math.round(x); vastab vastavalt matale
// //z = Math.floor(x); alati ümardab alla
// //z = Math.ceil(x); alati ülesse
// //z = Math.trunc(x); võtab koma tagant arvud ära jääb ainult täis arv
// //z = Math.pow(x, y); saad valida mitu kohta peale koma näitab
// //z = Math.sqrt(x); võtab juurtjuure
// //z = Math.log(x); 
// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(z);

//RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomNum;

myButton.onclick = function (){
    randomNum = Math.floor(Math.random()* max) + min;
    myLabel.textContent = randomNum;
}