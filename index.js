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

// const myButton = document.getElementById("myButton");
//const myLabel = document.getElementById("myLabel");
//const min = 1;
//const max = 6;
//let randomNum;

//myButton.onclick = function (){
    //randomNum = Math.floor(Math.random()* max) + min;
    //myLabel.textContent = randomNum;
//}






 //IF STATEMENTS = IF A CONDITION IS TRUE, EXECUTE SOME CODE IF NOT, DO SOMETHING ELSE

//let age = 25;

//const mytext = document.getElementById("mytext");
//const mysubmit = document.getElementById("mysubmit");
//const resultelement = document.getElementById("resultelement");
//let age;

//mysubmit.onclick = function(){

    //age = mytext.value;
    //age = Number(age);

 //if(age >= 100){
    //resultelement.textContent = `you are too old to enter this site`;
 //}
 //else if(age == 0){
 //resultelement.textContent = `you cant enter, you were just born`;
//}
//else if(age >= 18){
//resultelement.textContent = `you are old enough to enter this site`;
//}
//else if(age < 0){
//resultelement.textContent = `your age cant be below 0`;
//}
 //else{
    //resultelement.textContent = `you must be 18+ to enter this site`;
 //}
//}





 //.CHECKED = PROPERTY THAT DETERMINES THE CHECKED STATE OF AN 
// HTML CHECKBOX OR RADIO BUTTON ELEMENT

//const myCheckbox = document.getElementById("myCheckBox");
//const visaBtn = document.getElementById("visaBtn");
//const masterCardBtn = document.getElementById("masterCardBtn");
//const payPalBtn = document.getElementById("payPalBtn");
//const mySubmitBtn = document.getElementById("mySubmitBtn");
//const subResult = document.getElementById("subResult");
//const paymentResult = document.getElementById("paymentResult");

//mySubmitBtn.onclick = function(){

//    if(myCheckbox.checked){
  //      subResult.textContent = `you are subscribed`;
    //}
    //else{
      //  subResult.textContent = `you are not subscribed`;
    //}
    //if(visaBtn.checked){
      //  paymentResult.textContent = `you are paying with a visa`;
    //}
    //else if(masterCardBtn.checked){
      //  paymentResult.textContent = `you are paying with Mastercard`;
    //}
    //else if(payPalBtn.checked){
      //  paymentResult.textContent = `you are paying with payPal`;
    //}
    //else{
      //  paymentResult.textContent = `you must select payment method`;
    //}
//}





//TERNARY OPERATOR = A SHORTCUT TO IF {} AND ELSE {} STATEMENTS
//HELPS TO ASSIGN A VARIABLE BASED ON A CONDITION
//CONDITION ? codeifTrue :codeifFalse;

//let time = 16;
//let greeting = time < 12 ? "good morning!" : "good afternoon!";
//console.log(greeting);

//let isstudent = false;
//let message = isstudent ? "you are a student" : "you are not a student";
//console.log(message);

//let purchaseamount = 190;
//let discount = purchaseamount >= 100 ? 10 : 0;
//console.log(`your total is $${purchaseamount - purchaseamount * (discount)}`);




//SWITCH = CAN BE AN EFFICIENT REPLACEMENT TO MANY ELSE IF STATEMENTS

//let day = 1;

//switch(day){
    //case 1:
     //     console.log("it is monday");
       //   break;
    //case 2:
       // console.log("it is tuesday");
        //break;
    //case 3:
      //  console.log("it is wednesday");
       // break;
    //case 4:
      //  console.log("it is thursday");
        //break;
    //case 5:
      //  console.log("it is friday");
        //break;
    //case 6:
      //  console.log("it is saturday");
        //break;
    //case 7:
      //  console.log("it is sunday");
        //break;
//}

//let testscore = 21;
//let lettergrade;

//switch(true){
  //  case testscore >=90:
    //    lettergrade = "A";
      //  break;
    //case testscore >=80:
      //  lettergrade = "B";
        //break;
    //case testscore >=60:
      //  lettergrade = "C";
        //break;
    //case testscore >=40:
      //  lettergrade = "D";
        //break;
    //case testscore >=20:
      //  lettergrade = "E";
        //break;
    //default:
      //  lettergrade = "F";
        //break;
//}

//console.log(lettergrade);








//STRING METHODS = ALLOW YOU TO MANIPULATE AND WORK WITH TEXT (STRINGS)

//let userName = "Polluste";

//userName.charAt(0)
//console.log(userName.charAt(2)); //VÕTAB TÄHE NIMEST, TÄHT = ARV NTX:2

//let str= "hello world";
//console.log(str.length); //Tagastab stringi pikkuse (tähemärkide arvu)

//let str = "hello world";
//console.log(str.toUpperCase()); //toUpperCase(): Muudab kõik tähemärgid suurteks tähtedeks.
//console.log(str.toLowerCase()); //toLowerCase(): Muudab kõik tähemärgid väikesteks tähtedeks.

//let text = "hellow world";
//console.log(text.indexOf("o")); //indexOf() otsib esimese esinemise indeksit antud sõne stringis.
//console.log(text.lastIndexOf("o")); //lastIndexOf() otsib viimase esinemise indeksit.
//let str = "hello world";
//console.log(str.indexOf("world"));
//console.log(str.indexOf("javascript"));

//let text = "hello world"; //includes(substring) - Kontrollib, kas string sisaldab kindlat alamstringi. Tagastab true või false.
//console.log(text.includes("world"));
//console.log(text.includes("javascript"));

//let text = "hellow world";  //Võtab välja osa stringist antud algus- ja lõppuindeksi vahel. Lõppuindeksit ei kaasata.
//console.log(text.slice(0, 5));
//console.log(text.slice(7));

//const email = "polluste888@gmail.com";
//let username =email.slice(0, email.indexOf("@"));
//let extension = email.slice(email.indexOf("@"));

//console.log(username)
//onsole.log(extension)


//let text = "hello world";   //replace() - Asendab stringis esimese leitud väärtuse teisega.
//let newtext = text.replace("world", "javascript");
//console.log(newtext);

//let text = "hello world";   //split() - Jagab stringi tükkideks vastavalt antud märgile ja tagastab massiivi.
//let words = text.split(",");
//console.log(words);

//let text = "hello, world!  ";  //trim() - Eemaldab tühikud stringi algusest ja lõpust.
//console.log(text.trim());






//METHOD CHAINING = CALLING ONE METHOD AFTER ANOTHER IN ONE CONTINOUS LIVE OF CODE.

//--NO METHOD CHAINING --//

//let username = window.prompt("Enter your username: ");

//username = username.trim();
//let letter = username.charAt(0);
//letter = letter.toUpperCase();

//let extraChars = username.slice(1);
//extraChars = extraChars.toLowerCase();
//username = letter + extraChars;

//console.log(username);






//--METHOD CHAINING ----

//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

//console.log(username);



//LOGICAL OPERATORS = USED TO COMBINE OR MANIPULATE BOOLEAN VALUES (true & false)

//AND = &&
//OR I I
//NOT = !

//const temp = 30;

//if(temp > 0 && temp <= 30){
  //  console.log("the weather is good");
//}
//else{
  //  console.log("the weather is bad");
//}

//const isSunny = true;

//if(!isSunny){
  //  console.log("it is cloudy");
//}
//else{
  //  console.log("it is Sunny");
//}

// =ASSIGNMENT OPERATOR
// ==COMPARISON OPERATOR (COMPARE IF VALUES ARE EQUAL)
// === STRICK EQUALITY OPERATOR (COMPARE IF VALUES & DATATYPE ARE EQAUL)
// != INEQUALITY OPERATOR
// !== STRICT INEQUALITY OPERATOR

//const PI = 3.14;

//if(PI !== "3.14"){
  //  console.log("that is Pi");
//}
//else{
  //  console.log("that is not Pi");
//}




// function controlage() {
//   let age = prompt("Sisesta oma vanus:");

//   if (age === "" || isNaN(age)) {
//     alert("Sisend ei ole korrektne. Palun sisesta vanus arvuliselt.");
//   } else {
//     age = Number(age); 

//     if (age >= 1 && age <=6){
//       alert("oled liiga noor et süüa saada,aeg arvuti kinni panna.");
//     }
//       else if (age >= 7 && age <= 16){
//       alert("Oled põhikooli õpilane. Söömine toimub kell 10.");
//     } else if (age >= 17 && age <= 20){
//       alert("Oled gümnaasiumi õpilane. Söömine toimub kell 11.");
//     } else if (age >=20 && age <=30){
//       alert("Oled täiskasvanu. Söömine toimub kell 12.");
//     } else{
//       alert("Sinu vanusele pole määratud söömisaega.");
//     }
//   }
// }
// controlage();




// function calculate() {
//   let x = prompt("x:");
//   let y = prompt("y:");

//   if (isNaN(x) || isNaN(y) || x === "" || y === "") {
//     alert("The input is not correct. Please enter two numbers.");
//     calculate();
//     return;
//   }
//   x = Number(x);
//   y = Number(y);

//   let operation = prompt("Operation:");

//   let symbol;
//   let result;

//   switch (operation) {
//     case "a":
//      symbol = "+";
//       result = x + y;
//       break;
//     case "s":
//      symbol = "-";
//       result = x - y;
//       break;
//     case "m":
//      symbol = "*";
//       result = x * y;
//       break;
//     case "d":
//       symbol = "/";
//       result = x / y;
//       break;
//     case "e":
//       symbol = "**";
//       result = x ** y;
//       break;
//     case "r":
//       symbol = "%";
//       result = x % y;
//       break;
//     default:
//       alert("Unknown operation");
//       return;
//   }

//   alert(`${x} ${symbol} ${y} = ${result}`);
// }
// calculate();






// WHILE LOOP = REPEAT SOME CODE WHILE SOME CONDITION IS TRUE

// let username = "Bert";

// while(username === "" || username === null){
//     //console.log(`you didnt enter your name`);
//     username = window.prompt(`enter your name`);
// }
// console.log(`Hello ${username}`);

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt(`enter your username`);
//     password = window.prompt(`enter your password`);

//     if(username === "myUsername" && password === "myPassword"){
//         loggedIn = true;
//         console.log("you are logged in!");
//         break;
//     }
//     else{
//         console.log("invalid credentials! please try again");
//         break;
//     }
// }







//  FOR LOOP = REPEAT SOME CODE A LIMITED AMOUNT OF TIMES

// for(let i = 20; i >0; i--){
//     console.log(i);
// }

// console.log("happy new year");

// for(let i = 1; i <= 20; i++){
//     if(i == 19){
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }




//NUMBER GUESSING GAME

// const minNum = 50;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while(running){
//     guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
// guess = Number(guess);

// if(isNaN(guess)){
//     window.alert("please enter a valid number");
// }
// else if(guess < minNum || guess > maxNum){
//     window.alert("please enter a valid number");
// }

//     running = false;
// }





// FUNCTION = A SECTION OF REUSABLE CODE.
// DECLARE CODE ONCE, USE IT WHENEVER YOU WANT.
// CALL THE FUNCTION TO EXECUTE THAT CODE.

// function happyBirthday(username, age){
//     console.log("Happy birthday to you");
//     console.log("Happy birthday to you");
//     console.log(`Happy birthday dear ${username}!`);
//     console.log("Happy birthday to you");
//     console.log(`you are ${age} years old`);
// }

// happyBirthday("Rasmus", 30);
// happyBirthday("oskar", 16);
// happyBirthday("lauri", 65);

// function add(x , y){
//     let result = x + y;
//     return result;
// }

// let answer = add(2, 3);
// console.log(answer);





//VARIALE SCOPE = WHERE A VARIABLE IS RECONIZED AND ACCESSIBLE (LOCAL AND GLOBAL)


// let x = 3;


// function1();

//     function function1(){
//         console.log(x);
//     }

//     function function2(){
//         console.log(x);
//}



//ARRAY = A VARIABLE LIKE STRUCTURE THAT CAN HOLD MORE THAN 1 VALUE



// let fruits = ["apple", "orange", "cherry", "coconut"];

//Fruits.push("coconut");
//fruits.pop();
//fruits.unshift("mango"); -LISAB ALGUSESSE YHE
//fruits.shift(); -KUSTUTAB ALGUSEST YHE ÄRA

// console.log(fruits [0]);
// console.log(fruits [1]);
// console.log(fruits [2]);
// console.log(fruits [3]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");

// console.log(numOfFruits);


// for(let i = 0; i < fruits.length; i--){
//     console.log(fruits[i]);
//}

// fruits.sort().reverse();

// for(let fruit of fruits){
//     console.log(fruit);
// }




// SPREAD OPERATOR == ... ALLOWS AN ITERABLE SUCH AS AN ARRAY OR STRING TO BE EXPANDED INTO SEPERATE ELEMENTS (UNPACK THE ELEMENTS)

// let numbers = [1, 2, 3, 4, 5];
// let max = Math.max(...numbers);
// let min = Math.min(...numbers);

// console.log(max);

// let username = "bert põllutse";
// let letters = [...username].join("-");

// console.log(letters);


// let fruits = ["apple", "orange", "cherry"];
// let vegetables = ["carrot", "potato", "tomato"];
// let newfruits = [...fruits,...vegetables, "eggs", "milk"];

// console.log(foods);



//REST PARAMENTS = (...REST) ALLOW A FUNCTION WORK WITH A VARIABLE NUMBER OF ARGUMENTS BY BUNDLING THEM INTO AN ARRAY
// SPREAD = EXPANDS AN ARRAY INTO SEPERATE ELEMENTS
// REST = BUNDLES SEPERATE ELEMENTS INTO AN ARRAY

// function openfridge(...foods){
//     console.log(foods);
// }

// function getfood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "ramen";

// //openfridge(food1, food2, food3, food4, food5);

// const foods= getfood(food1, food2, food3, food4, food5);

// console.log(foods);

// function sum(...numbers){
//     for(let number of numbers){
//         result += numbers;
//     }
//     return result;
// }

// const total = sum(1, 2, 3, 4, 5);

// console.log(`your total is $${total}`);

// function getavarage(...numbers){
//     let result = 0;
//     for(let number of numbers){
//         result += numbers;
//     }
//     return result / numbers.length;
// }

// const total = getavarage(75, 100, 86, 90, 50);

// console.log(total);

// function combinestring(...strings){
//     return strings.join(" ");
// }

// const fullname = combinestring("mr", "kalle", "püks", "III")

// console.log(fullname);




// function rolldice(){

//     const numdice = document.getElementById("numdice").value;
//     const diceresult = document.getElementById("resultdice");
//     const diceimages = document.getElementById("diceimages");
//     const values = [];
//     const images = [];

//     for(let i = 0; i < numdice; i++){
//         const maxNum = 6;
//         const minNum = 1;
//         const value = Math.floor(Math.random()* (maxNum - minNum + 1) + minNum);
//         values.push(value);
//         images.push(`<img src="diceimages/${value}.png">`);
//     }
//     diceresult.textcontent = `ROLLED ${values.join(',')}`;
//     diceimages.innerHTML = images.join('');
// }





// CALLBACK = A FUNCTION THAT IS PASSED AS AN ARGUMENT
// TO ANOTHER FUNCTION.


// hello(leave);


// function hello(callback){
//     console.log("hello");
//     callback();
// }

// function leave(){
//     console.log("leave");
// }

// function wait(){
//     console.log("wait");
// }

// function bye(){
//     console.log("bye");
// }


// sum(displayconsole, 1, 2);

// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }

// function displayconsole(result){
//     console.log(result);
// }

// function displaypage(result){
//     document.getElementById("myH1").textContent = result;
// }



//CAMEL TO title

// function getWords(camelStr) {
  
//   return camelStr.match(/([A-Z]?[a-z]+)/g) || [];
// }

// function camelToTitleCase(camelStr) {
  
//   if (camelStr === "") {
//     return "";
//   }

//   const words = getWords(camelStr);

//   const titleWords = words.map(function (word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });

//   return titleWords.join(" ");
// }

// console.log(camelToTitleCase("SuurPere"));      
// console.log(camelToTitleCase("TereTulemastSiia"));     
// console.log(camelToTitleCase("SuurRohelineAuto"));                
// console.log(camelToTitleCase("IlusKollanePäike"));




//NUMBER GUESSING GAME



// function numberGuessingGame() {
  
//   const secretNumber = Math.floor(Math.random() * 100) + 1;
//   const maxAttempts = 15;
//   let attempts = 0;

//   alert("Tsau! Arva ära number vahemikus 1 kuni 100.");
//   alert(`Sul on ${maxAttempts} katset.`);

//   while (attempts < maxAttempts) {
//     let guess = prompt(`Katse ${attempts + 1}: Tee oma pakkumine`);

    
//     if (guess === null || guess.trim() === "" || isNaN(guess)) {
//       alert("Sisesta korrektne arv.");
//       continue;
//     }

//     guess = Number(guess);
//     attempts++;

//     if (guess === secretNumber) {
//       alert(`Juhhuu! arvasid numbri ära ${secretNumber} ${attempts} katsega. Palju õnne!`);
//       return;
//     } else if (guess < secretNumber) {
//       alert("Arv on suurem,proovi uuesti!");
//     } else {
//       alert("Arv on madalam,proovi uuesti!");
//     }
//   }

//   alert(`Mäng läbi! Õige number oli ${secretNumber}. Proovi uuesti!`);
// }


// numberGuessingGame();





//Temperature Conversion Program




// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// function fahrenheitToCelsius(fahrenheit) {
//   return ((fahrenheit - 32) * 5) / 9;
// }

// function celsiusToKelvin(celsius) {
//   return celsius + 273.15;
// }

// function kelvinToCelsius(kelvin) {
//   return kelvin - 273.15;
// }

// function temperatureConverter() {
//   const tempInput = prompt("Sisesta endale meeldiv temperatuur:");
//   const scaleInput = prompt("Sisesta endale sobiv temperatuuri ühik:");

//   if (tempInput === null || isNaN(tempInput)) {
//     alert("Palun sisesta arvuline temperatuur.");
//     return;
//   }
  
//   const temperature = Number(tempInput);
//   const scale = scaleInput.trim().toUpperCase();

//   let result = "";

//   if (scale === "C") {
//     result =
//       `${temperature}°C = ${celsiusToFahrenheit(temperature).toFixed(2)}°F\n` +
//       `${temperature}°C = ${celsiusToKelvin(temperature).toFixed(2)}K`;
//   } else if (scale === "F") {
//     const celsius = fahrenheitToCelsius(temperature);
//     result =
//       `${temperature}°F = ${celsius.toFixed(2)}°C\n` +
//       `${temperature}°F = ${celsiusToKelvin(celsius).toFixed(2)}K`;
//   } else if (scale === "K") {
//     const celsius = kelvinToCelsius(temperature);
//     result =
//       `${temperature}K = ${celsius.toFixed(2)}°C\n` +
//       `${temperature}K = ${celsiusToFahrenheit(celsius).toFixed(2)}°F`;
//   } else {
//     alert("Tundmatu skaala. Palun kasuta C, F või K.");
//     return;
//   }

//   alert(result);
// }

// temperatureConverter();






//FOREACH () = METHOD TO ITERATE OVER THE ELEMENTS OF AN ARRAY AND APPLY A SPECIFIED FUNCTION (CALLBACK) TO EACH ELEMENT


// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(triple);
// numbers.forEach(double);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;
// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// function square(elements , index, array){
//     array[index] = Math.pow(element, 2);
// }

// function display(element){
//     console.log(element);
// }

// let fruits = ["apple", "orange", "banana", "coco"];

// fruits.forEach(capitalize);
// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();

// }

// function capitalize(element, index, array){
//     array[index] = element.charAT(0).toUpperCase() + element.slice(1);
// }

// function display(element){
//     console.log(element);
// }


//.MAP() = ACCEPTS A CALLBACK AND APPLIES THAT FUNCTION TO EACH ELEMENT OF AN ARRAY, THEN RETURN A NEW ARRAY

// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// const cube = numbers.map(cube);

// console.log(squares);

// function square(element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(cube, 3)
// }

// const students = ["Jaan", "Mart", "Oskar", "Mihkel"];
// const studentsUpper = students.map(upperCase);
// const studentsLower = students.map(LowerCase);

// console.log(studentsLower);


// function upperCase(element){
// return element.toUpperCase();
// }

// function LowerCase(element){
//     return element.toLowerCase();
// }


// const dates = ["2024-1-10", "2025-2-20", "2020-3-30"];
// const formattedDates = dates.map(formatDates);

// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[2]}.${parts[1]}.${parts[0]}`;
// }

// console.log(formattedDates);

//.FILTER() = CREATES A NEW ARRAY BY FILTERING OUT ELEMENTS

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// let oddNums = numbers.filter(isOdd);

// console.log(oddNums);

// function isEven(element){
//     return element % 2 === 0;
// }

// function isOdd(element){
//     return element % 2 !== 0;
// }

// const ages = [5, 5, 10, 15, 20, 25, 30];



// function isAdult(element){
//     return element >= 18;
// }

// const only18 = ages.filter(isAdult);

// console.log(only18);

// function isMinor(element){
//     return element <=18;
// }

// const words = ["apple", "banana", "orange", "kiwi", "pomegranate", "coco"];

// function getShortWords(element){
//     return element.length >= 6;
// }

// const only6 = words.filter(getShortWords);

// console.log(getShortWords);






//.REDUCE () = REDUCE THE ELEMENTS OF AN ARRAY TO A SINGLE VALUE



// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

//  function sum(previous, next){
//     return accumulator + element;
//  }


// const grades = [75, 80, 90, 80, 65, 95];

// const maximum = grades.reduce(getMax);
// const minimum = grades.reduce(getMin);

// console.log(maximum);
// console.log(minimum);

// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function getMin(accumulator, element){
//     return Math.min(accumulator, element);
// }





//FUNCTION DECLARATION = DEFINE A REUSABLE BLOCK OF CODE THAT PERFORMS ASPECIFIC TASK


// function hello(){
//     console.log("hello");
// }


//FUNCTION EXPRESSIONS = A WAY TO DEFINE FUNCTION AS VALUES OR VARIABLES


// const hello = function(){
//     console.log("hello");
// }


// setTimeout(function(){
//     console.log("hello");
// }, 3000);





//ARROW FUNCTION = A CONCISE WAY TO WRITE FUNCTION EXPRESSIONS GOOD FOR SIMPLE FUNCTIONS THAT YOU USE ONLY ONCE
// (PARAMETERS) => SOME CODE




// const wassup = (name, age) => {console.log(`wassup ${name}`)
//                                console.log(`you are ${age} years old`)};
// wassup("broski, 67");

// setTimeout(useCallback, 3000);

// function hello(){
//     console.log("hello");
// }





//OBJECT = A COLLECTION OF RELATED AND/OR METHODS
//CAN REPRESENT REAL WORLD OBJECTS (PEOPLE,PRODUCTS,PLACES)
//OBJECT = {KEY:VALUE,FUNCTION()}


// const person = {
//   firstName: "Spongebob",
//   lastName: "Squarepants",
//   age: 30,
//   isEmployed: true,
//   sayHello: function(){console.log("HI! i am Spongebob")},
//   eat: function(){console.log("i am eating a krabby patty")},
// }

// const person2 = {
//   firstName: "Patrick",
//   lastName: "Star",
//   age: 31,
//   isEmployed: false,
//   sayHello: function(){console.log("HI! i am Patrik")},
//   eat: function(){console.log("i am eating crack")},
// }

 // console.log(person.firstName);
 // console.log(person.lastName);
 // console.log(person.age);
 // console.log(person.isEmployed);

 // console.log(person2.firstName);
 // console.log(person2.lastName);
 // console.log(person2.age);
 // console.log(person2.isEmployed);

 // person.sayHello();
 // person2.sayHello();

// person.eat();
// person2.eat();




//THIS = REFERENCE TO THE OBJECT WHERE THIS IS USED 
// (THE OBJECT DEPENDS ON THE IMMEDIATE CONTEXT)
//PERSON.NAME = THIS.NAME

// console.log(this);






//SHOPPING CART ANALÜÜS


// let shoppingCart = [
//   { name: "õun", quantity: 4 },
//   { name: "banaan", quantity: 2 },
//   { name: "apelsiin", quantity: 5 },
//   { name: "piim", quantity: 1 },
//   { name: "sai", quantity: 2 }
// ];

// const totalQuantity = shoppingCart.reduce((Sum, item) => Sum + item.quantity, 0);
// console.log("kogus", totalQuantity);

// shoppingCart.push({ name: "jogurt", quantity: 3});
// console.log("lisatud jogurt", shoppingCart);

// const õunItem = shoppingCart.find(item => item.name === "õun");
// if (õunItem){
//   õunItem.quantity += 3;
//   }
//   else{
//     shoppingCart.push({name: "õun", quantity: 3});
//   }
// console.log("uuentatud õuna kogus:", shoppingCart);

// const hasõun = shoppingCart.some(item => item.name === "õun");
// console.log("kas õun on olemas", hasõun);

// shoppingCart = shoppingCart.filter(item => item.name !== "banaan");
// console.log("eemaldatud banaan", shoppingCart);

// const itemNames = shoppingCart.map(item => item.name);
// console.log("tootenimed", itemNames);

// const hasPiim = shoppingCart.some(item => item.name === "piim");
// console.log("kas piim on olemas", hasPiim);

// shoppingCart.sort((a,b) => a.quantity- b.quantity);
// console.log("tooted koguse järgi", shoppingCart);