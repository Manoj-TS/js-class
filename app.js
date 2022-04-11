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

//   if(fruitPieces){
//     console.log(`Juice with ${fruitPieces} ${fruit} pieces is ready`);
//   }else{
//       console.log("Could not prepare juice, check for fruit count");
//   }

// };

// juiceMaker("Apple", 50);

// let numVal = 123
// let strVal = "123"
// let strVal1 = "abc123"
// let boolVal = true
// let boolVal1 = false

// // Explicit type conversion
// // String conversion
// const strNumVal = String(numVal)
// console.log(typeof strNumVal);
// console.log(typeof numVal);
// console.log(typeof String(true));
// console.log(typeof String(undefined));
// console.log(String(undefined));
// console.log(String(null));

// // Number conversion
// console.log(Number(strVal));
// console.log(typeof Number(strVal1));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number(""));

// // Boolean conversion
// console.log(Boolean(123)); //true
// console.log(Boolean(-123)); //true
// console.log(Boolean(-1.23)); //true
// console.log(Boolean(0)); // false
// console.log(Boolean("abc")); //true
// console.log(Boolean("abc123")); //true
// console.log(Boolean("")); //false
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// Truthy values and Falsy values
// falsy values - 0, "", undefined, null, NaN

// Truthy values -  except falsy values all the rest are truthy values

// Implicit type conversion (Coercion)

// // String coercion
// console.log("abc" + 123);
// console.log("abc" + true);
// console.log("abc" + undefined);
// console.log("abc" + null);
// console.log("abc" + NaN);

// Number coercion
// console.log("123"*10); // 1230
// console.log("123"-10); // 113
// console.log("123"/10); // 12.3
// console.log("123"%10); // 3
// console.log("123"**10); // 3
// console.log(true * 10);
// console.log(true - 10);
// console.log("abc123"*10); // NaN
// console.log(undefined*10); // NaN
// console.log(null*10); // 0
// console.log(""*10); // 0
// console.log(NaN*10); // NaN
// console.log("123" < 20);
// console.log("123" > 20);
// console.log("123" != 20);
// console.log(NaN < 10); // false
// console.log(NaN > 10); // false
// console.log(undefined > 20); // false

// Boolean coercion
// if(AudioParam.data){
//   console.log("True");
// }else{
//   console.log("False");
// }

// Functions calling function

// const fruitSlicer = (fruitCount) => {
//   if (fruitCount >= 10) {
//     console.log("Fruit count too large");
//     return
//   }
//   return fruitCount * 10
//   console.log("Hello");
// };

// const juiceMaker = (fruit, fruitCount) => {
//   const fruitPieces = fruitSlicer(fruitCount);

//   if(fruitPieces){
//     console.log(`Juice with ${fruitPieces} ${fruit} pieces is ready`);
//   }else{
//       console.log("Could not prepare juice, check for fruit count");
//   }

// };

// juiceMaker('Apple', 12)

// for (let i = 15; i <= 50; i++) {
//   if (i % 3 == 0) {
//     if (i >= 30 && i <= 40) continue;
//     else {
//       if (i == 45) break;
//       else console.log(i);
//     }
//   }
// }

// Destructuring

// const a = arr[0]
// const b = arr[1]
// const c = arr[2]
// const d = arr[3]

// Basic destructuring
// const [a,b,c] = arr
// console.log(a,b,c);

// Leaving a hole
// const [a, , , b, c] = arr;
// console.log(a, b, c);

// let a = 5;
// let b = 6;

// swapping
// let temp = a
// a = b
// b= a

// [b,a]=[a,b]
// console.log(a,b);

// function return2Values(){
//   return [20,50]
// }

// const [val1, val2] = return2Values();

// console.log(val1,val2);

// Destructuring nested array
// const arr = [1, 2, 6, [10, 20, 30, [10, 50]],100,200];

// const [, , , [, , , [a, b]]] = arr;
// console.log(a, b);

// Setting default values
// const [a,b,c,d,e=10,f=30] = arr

// console.log(a,b,c,d,e,f);

// Object destructuring

// const obj = {
//   name: "Manoj",
//   age:26,
//   address:"Mysore",
//   qualification:"PU",
//   favs:{
//     // movie:"HP",
//     song:"ijhakd",
//   },
//   printInfo:function({val2, val1}){
//     console.log(val2, val1);
//   }
// }

// obj.printInfo({
//   val1:"Hello",
//   val2:"Hello2"
// })

// Basic destructuring
// const {age, name, address} = obj
// console.log(name,age,address);

// Aliasing & defalut values
// const {age:myAge, name:firstName, address:myAddress, qualification="Degree"}= obj

// console.log(myAge, myAddress, firstName, qualification);

// const {favs:{movie:myFavMovie="HP"}} = obj
// console.log(myFavMovie);

// For of loop

// for arrays
// const arr = ["a", "b", 3, 4, 6];

// for (const [i, el] of arr.entries()) {
//   console.log(el, i);
// }

// Objects

// const restuarant = {
//   name: "Nalpak",
//   openHours: {
//     mon: {
//       open: "10AM",
//       close: "10PM",
//     },
//     wed: {
//       open: "9AM",
//       close: "8PM",
//     },
//     thur: {
//       open: "8AM",
//       close: "10PM",
//     },
//     fri: {
//       open: "10AM",
//       close: "10PM",
//     },
//   },
// };

// const restKeys = Object.keys(restuarant)
// // console.log(keys);
// const restValues = Object.values(restuarant)
// console.log(restValues);

// const objEntries = Object.entries(restuarant)
// console.log(objEntries);

// for(const key of Object.keys(restuarant.openHours)){
//   console.log(key);
// }

// for(const [day, {open, close}] of Object.entries(restuarant.openHours)){
//   console.log(`On ${day} we are open at ${open} and close at ${close}`);
// }

// Enhanced Object literals

// Traditional way
// const rest = new Object({
//   name: "AtoZ",
// });

// const openHours = {
//   mon: {
//     open: "10AM",
//     close: "10PM",
//   },
//   wed: {
//     open: "9AM",
//     close: "8PM",
//   },
//   thur: {
//     open: "8AM",
//     close: "10PM",
//   },
//   fri: {
//     open: "10AM",
//     close: "10PM",
//   },
// };

// ES6 or literal oject
// const rest1 = {
//   name:"Test",
//   // openHours:openHours
//   openHours,
//   // order:function(item){
//   //   console.log('Ordered '+item);
//   // }

//   order(item){
//     console.log('Ordered '+item);
//   },

//   // computed property names
//   [Object.keys(openHours)[1]]:"Hello"
// };

// console.log(rest1.wed);

// Working with strings
// Strings are immutable

// let str = "abc"

// str+="d"
// console.log(str);

// const str = "Hello world how afe you doing"

// console.log(str[0]);
// console.log(str[1]);
// console.log(str.indexOf('r'))
// console.log(str.lastIndexOf('r'))
// console.log(str.indexOf('world'))

// let newStr = str.slice(6)
// newStr = str.slice(6,9)
// console.log(newStr);

// // console.log(str);

// function returnFirstWord(str){
//   console.log(str.slice(0, str.indexOf(" ")));
// }
// function returnLastWord(str){
//   console.log(str.slice(str.lastIndexOf(" ")+1));
// }

// returnFirstWord("Hi How")
// returnFirstWord("Hello How")
// returnFirstWord("Manojkjds How")
// returnFirstWord("Hello How")

// returnLastWord("hi Manoj a bcd hgf")
// returnLastWord("hi ravi welcome")
// returnLastWord("hi ravi")

// const restuarant = {
//     name: "Nalpak",
//     openHours: {
//       mon: {
//         open: "10AM",
//         close: "10PM",
//       },
//       wed: {
//         open: "9AM",
//         close: "8PM",
//       },
//       thur: {
//         open: "8AM",
//         close: "10PM",
//       },
//       fri: {
//         open: "10AM",
//         close: "10PM",
//       },
//     },
//     // order(){
//     //     console.log(`food ordered`);
//     // }
//   };

//   const arr = [1,2,4,{a:12,b:10},[5,6,8]]

//   Optional chaining (?.)

// On objects
//   console.log(restuarant.openHours.sat?.open.close);
// // On array
//   console.log(arr[4][4]?.[0]);

// // On Function
// console.log(restuarant.order?.());

// if(restuarant.order){
//     restuarant.order()
// }else{
//     console.log('not a function');
// }

// String method
// indexing, slicing
// to change cases - upperCase, lowerCase

// const str = "     Hello World    "
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());

// Trim - removes whitespace from both ends
// console.log(str.trim().toUpperCase());

// mANoJ

// const strCapitalize = (strVal)=>{
//     const CaptStrVal = strVal.trim()[0].toUpperCase() + strVal.trim().slice(1).toLowerCase()
//     console.log(CaptStrVal);
// }
// strCapitalize('    mANoJ   ')
// strCapitalize('   gaNESH   ')

// Replacing - replaces the first occurance of the target
// 'use strict'
// const str = '$235.56$'

// console.log(str.replace('$', 'Rs').replace('.', ','));

// console.log(str.replaceAll('$', 'Rs'));

// Regular expression
// const a =
// console.log(str.replaceAll(/$/g, 'Rs'));

// // console.log();
// str[str.length - 1] = "H"
// console.log();

// Array Methods
// Data transformation methods

const arr = [50, 20, 40, -10, -30];

// const resArr = []

// for(const el of arr){
//     resArr.push(el * 10)
// }

// Map method (el, i, arr)

// const resArr = arr.map(el=>el*10)

// console.log(resArr);
// console.log(arr);

// Filter

// const resArr = [];

// for (const el of arr) {
//   if (el > 0) resArr.push(el);
// }

// console.log(resArr);

// const resArr = arr.filter((el) => el > 0);

// console.log(resArr);


// Reduce (accumulator, curEle, Index, arr)

// const sum = arr.reduce((acc, el) => acc+el)
// console.log(sum);

// Find returns the first occurance of the fond element or returns undefined

// const foundEle = arr.find(el=> el > 10)
// console.log(foundEle);
