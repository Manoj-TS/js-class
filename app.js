// Predefined functions
// alert("Hello from JS")
// prompt("Enter your names")
// console.log("Hello from JS")

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

// console.log(2=="2");
// console.log(2==="2");
// console.log(2!="2");
// console.log(2!=="2");

// Assignment operators (Abbrevation operators)
//  +=, -=, *=, /=, %=, **=, ++,--

// let num = 50

// console.log(num+=50); // num = num + 50
// console.log(num-=20); // num = num - 50
// console.log(num*=20); // num = num * 50
// console.log(num++); // num = num + 1
// console.log(num); // 

// difference btw a variable and a string
const firstName = "Manoj"
const age = 26

// console.log(firstName); //Manoj
// console.log("firstName"); //firstName

// console.log(age+10);
// console.log("age"+10);


// String concatination
// console.log("My name is "+firstName+" and my age is "+age);

// Template literals (ES6)
// console.log(`My name is ${firstName} and my age is ${age}`);
// console.log(`${90+100/20}`);