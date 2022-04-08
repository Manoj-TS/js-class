// Predefined functions
// alert("Hello from JS")
// prompt("Enter your names")
// console.log("Hello from JS")
// typeof value

// Values
// 235 - Number
// 12.5 - NUmber
// true - Boolean
// false - Boolean
// "Manoj" - String

// 5 Primitive data types
// Numbers - can be integrs, floats, doubles
// Strings - Sequence of characters --"String", 'String', `Strings`
// Boolean - true or false
// undefined - variables without initialisation will have undefined value

// ----------- object used as primitive
// Null - Empty data

// Variables - its container to store value under a name given to the memory where data has been stored
// Variables declaration and Initialisation
// Variable declaration we use let, const, var(ES5)

// let age; // only a declaration
// let firstName = "Manoj" // declaration and initialisation
// let lastName = "TS"

// Dynamically typed language & Interpreted language - JS, Python
// re-assignment is possible
// firstName = "Saju"
// firstName = 124
// firstName = true

// For const re-assignment not possible
// const address= "8713, Mysore"
// address = "skjsdkj"

// Typeof predefined function
// let age;
// const firstName = "Manoj";
// // var firstName = "Manoj";
// // firstName = "Sanju";
// const hasLiscence = true;
// const isMarried = false
// const havePassed = false
// // const liscence = true;
// const grade = 23.67;
// const empty = null;

// console.log(typeof age);
// console.log(typeof firstName);
// console.log(typeof hasLiscence);
// console.log(typeof grade);
// console.log(typeof empty);

// Rules and conventions to create variables
// Rules
// 1. Can only start with letters and "_"
// 2. Preceding characters can be alphanumeric characters and "$, _"
// 3. Whitesapce not allowed
// 4. case sensitive -- abc != ABC != aBc
// 5. Special characters are not allowed

// Conventions
// 1. Use camel case notation for multiple words in single variable --hasLiscence, firstName
// 2. Variable names should be descriptive
// 3. Varibles names should always start with small letter except for class names

// const name = "Manoj"
// // const name = "Manoj"
// const NamE = "Sanju"

// Operators
// 1. Arithmetic operators (+,-,*,/, %, **)

// console.log(5+3); // 8
// console.log(5-3); // 2
// console.log(5/3);// 1.666
// console.log(5%3); // 2
// console.log(3%5); // 3
// console.log(5*3); // 15
// console.log(5**3); // 5*5*5 = 75

// Operator precedence (),**, /*%, +-
// console.log(50/10-40+20*(30/2)%3);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// result = 50/10-40+20*(30/2)%3

// Comparision operators
// <, >, <=, >=, ==(loose equality operator), ===(Strict equality operator),  !=(loose), !==(Strict)

// console.log(2=="2"); //true
// console.log(2==="2"); //false
// console.log(2!="2"); //false
// console.log(2!=="2"); //true

// Assignment operators (Abbrevation operators)
//  +=, -=, *=, /=, %=, **=, ++,--

// let num = 50

// console.log(num+=50); // num = num + 50
// console.log(num-=20); // num = num - 50
// console.log(num*=20); // num = num * 50
// console.log(num++); // num = num + 1
// console.log(num); //

// difference btw a variable and a string
// const firstName = "Manoj";
// const age = 26;

// console.log(firstName); //Manoj
// console.log("firstName"); //firstName

// console.log(age+10);
// console.log("age"+10);

// String concatination
// console.log("My name is "+firstName+" and my age is "+age);

// Template literals (ES6)
// console.log(`My name is ${firstName} and my age is ${age}`);
// console.log(`${90+100/20}`);

// Statemnts and Expressions
// Statement - does a particular task
// Expression - Evaluates to single value

// type conversion and coersion

// let num = "";
// let num1 = 0;

// let stringNum = String(num)
// console.log(typeof stringNum);
// console.log(stringNum);

// console.log(Number(num) + 50);

// ""--> false & everything else returns true
// 0 ---> false & everything else returns true
// console.log(Boolean(num1));

// Coercion

// String coercion
// console.log("235"+10); //23510
// console.log("235"+true);//235true
// console.log("abc"+undefined);//abcundefined

// // Number coercion
// console.log("230"-10); // 220
// console.log("230"*10); // 2300
// console.log("230"/10); //23
// console.log("230"**10); //4.1426511213648997e+23
// console.log("230"%10); //0
// console.log(true + 20); // 21
// console.log(false + 20); // 20
// console.log(undefined + 20); // NaN - Not A Number
// console.log("23abc"*10);//NaN
// console.log("23" < 10); //false
// console.log("23" > 10); //true
// console.log(true > 10); //false
// console.log(true < 10); //false

// Falsy values - "",undefined,0, NaN, null
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// Truthy values
// Except for falsy values the rest are called as truthy values

// ---------Revision----------
// let number = 123;

// console.log(typeof number);

// let strNum = String(number);
// console.log(typeof strNum);

// let str = "abc123"

// let numStr = Number(str)
// console.log(numStr, typeof numStr);

// let number = 123
// let hasLiscence = true
// let randomVar;
// let nullValue = null

// // String coercion
// console.log("abc" + number); // abc123
// console.log("abc" + hasLiscence); //abctrue
// console.log("abc" + randomVar); //abcundefined
// console.log("abc" + nullValue); //abcnull

// // Number coersion

// Day 4
// Statements
// if statement, if else statement,

// let hasLiscence = false
// let age = 18;

// if(hasLiscence){
//     console.log("Eligible to work in our company");
// }

// Boolean logic -- &&(and), ||(or), !(not)
// && - returns true only if all the conditions are true else returns false
// || -  returns false if all the conditions are false else returns true
// ! - returns true for false and false for true
// if(hasLiscence || age > 20){
//     console.log("Eligible to work in our company");
// }else{
//     console.log("Not eligible to work");
// }

// if(!hasLiscence){
//     console.log("Can't work");
// }

// let marks = 75

// if(marks >= 80){
//     console.log("Grade A");
// }else if(marks >= 70){
//     console.log("Grade B");
// }else if(marks >= 60){
//     console.log("Grade C");
// }else{
//     console.log("Fail");
// }

// hasLiscence = true
// if(!hasLiscence) console.log("Can't work");
// else console.log("Can work");

// let day = "Wednesday";

// switch (day) {
//   case "Monday":
//     console.log("Go college");
//     break;
//   case "Tuesday":
//     console.log("Go watch movie");
//     break;
//   case "Wednesday":
//   case "Thursday":
//   case "Friday":
//     console.log("Go play football");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Take rest");
//     break;
//   default:
//     console.log("Not a proper day");
// }

// Looping statements for, while, do while
// continue, break keywords
// for (let i = 0; i < 10; i++) {
//   if (i == 3) continue;
//   else if (i == 6) break;
//   console.log("Value of i is " + i);
// }

// while loop
// let i = -10;

// while(i >= 0){
//     console.log("Value of i is "+ i);
//     i--
// }

// do while

// do {
//   console.log("Value of i is " + i);
//   i--;
// } while (i >= 0);

// Functions -- collection of related statements
// 1.Function definition
// function juiceMaker(fruit1, fruit2, fruit3){ //fruit1, fruit2 fruit3 are the parameters to the juiceMaker function
//     console.log(`Juice with ${fruit1} ${fruit2} ${fruit3} is ready`);
// }
// // Calling a function or Invoking a function
// juiceMaker("apple","orange","grapes") // apple, orange, grapes --> arguments
// juiceMaker("Mango","Banana","Pineapple")

// 2.Function expression
// const juiceMaker = function(fruit1,fruit2,fruit3){
//     console.log(`Juice with ${fruit1} ${fruit2} ${fruit3} is ready`);
// }
// juiceMaker("apple","orange","grapes") // apple, orange, grapes --> arguments
// juiceMaker("Mango","Banana","Pineapple")

// // 3.Arrow function(ES6) - has no function keyword, and cannot have 'this' keyword
// const juiceMaker = (fruit1,fruit2,fruit3)=>{
//     console.log(`Juice with ${fruit1} ${fruit2} ${fruit3} is ready`);
// }

// juiceMaker("apple","orange","grapes") // apple, orange, grapes --> arguments
// juiceMaker("Mango","Banana","Pineapple")

// Returning values from functions
// const fruitSlicer = (fruitCount,sliceCountPerFruit)=>{
//     // const slices = fruitCount *sliceCountPerFruit
//     // return slices

//     return fruitCount * sliceCountPerFruit
// }

// const fruitSlicer = (fruitCount, sliceCountPerFruit) => fruitCount * sliceCountPerFruit // return keyword is not mandatory if single statement is present
// const fruitSlicer = fruitCount => fruitCount * 10 // Parenthesis for a single parameter is not mandatory but mandatory if more than one parameter is present

// console.log(fruitSlicer(10));

// functions calling other functions
// const fruitSlicer = (fruitCount) => {
//   if (fruitCount >= 10) {
//     console.log("Fruit count too large");
//     return;
//   }

//   return fruitCount * 10;
// };

// const juiceMaker = (fruit, fruitCount) => {
//   const fruitPieces = fruitSlicer(fruitCount);
//   console.log(fruitPieces);
//   if(fruitPieces){
//     console.log(`Juice with ${fruitPieces} ${fruit} pieces is ready`);
//   }else{
//       console.log("Could not prepare juice, check for fruit count");
//   }

// };

// juiceMaker("Apple", 9);

// Arrays
const friends = ["Sanju", "Raghu", "Raam", "Ravi"];
// Accessing values in an array
// friends[0]= "Raaj"

// // console.log(friends[0]+friends[1]);
// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends[3]);

// We can store different data types in an array
// const info = ["Manoj", 60, true, undefined, null, NaN, ["a", "Hello"]]

// accessing nested array elements
// console.log(info[6][1]);

// Array methods

// // To add elements at the end of the array
// friends.push("Savitha")
// friends.push("Kavi")
// console.log(friends.push("Kavi"));
// console.log(friends);

// // To add elements at the beginning of the array
// friends.unshift("Praveen")
// friends.unshift("Chandan")
// console.log(friends);
// console.log(friends.unshift("Chandan"));
// console.log(friends.unshift("Chandan"));

// // Array length
// console.log(friends.length);

// // removing elements at the end
// const poppedEle = friends.pop()
// console.log(friends);
// console.log("Popped element "+poppedEle);

// removing element at the front
// console.log(friends.shift());

// const arr = [1,2,3]

// function greet(array){
//   console.log(array.length);
// }

// greet(arr)

// Ternary operator or Conditional operator

// const hasLiscence = true;
// const hasGoodVision = false;

// if(hasLiscence){
//   console.log("Eligible to drive");
// }else{
//   console.log("Cannot drive");
// }

// hasLiscence
//   ? hasGoodVision
//     ? console.log("Eligible to get drive")
//     : console.log("Cannot drive")
//   : console.log("Cannot drive");

// Selecting html elements
// console.dir(document.querySelector('#main-para'));
// console.log(document.getElementById('main-para'));
// console.log(document.getElementsByClassName('main-heading'));

// console.log(document.querySelectorAll('.para'));

// Manipulating html elements
const h1 = document.querySelector('.main-heading')
const image = document.querySelector('img')

console.log(h1.innerHTML);

h1.textContent = "Manoj"
h1.innerHTML = "<span>Hello</span> <a href=\"#\">Manoj</a>"

image.src = "nature2.jpg"

// Manupulating the styles
// h1.style.color = "white"
// h1.style.backgroundColor = "red"
// h1.style.padding = "20px"

const heading = document.createElement('h1')

heading.textContent = "New Heading"

document.querySelector('body').append(heading)