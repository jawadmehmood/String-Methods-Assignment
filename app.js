// Question#1

// let firstName = prompt('Enter your first name');
// let lastName = prompt('Enter your last name');
// let fullName = `${firstName} ${lastName}`;
// let greetUser = alert(`Hello ${fullName}`);

// Question#2

// let favoriteModel = prompt('Enter your favorite mobile phone model');

// console.log(`My favorite phone is: ${favoriteModel}`);
// console.log(`Length of string: ${favoriteModel.length}`);

// Question#3

let country = 'Pakistani';

console.log(`String: ${country}`);
console.log(`Index of 'n': ${country.indexOf('n')}`);

// Question#4

let hello = 'Hello World';

console.log(`String: ${hello}`);
console.log(`Last index of 'l': ${hello.lastIndexOf('l')}`);

// Question#5

console.log(`String: ${country}`);
console.log(`Character at index 3: ${country.charAt(3)}`);

// Question#6

// let nameFirst = prompt('Enter your first name');
// let nameLast = prompt('Enter your last name');
// let nameFull = nameFirst.concat(' ' , nameLast);

// alert(`Hello ${nameFull}`);

// Question#7

let city = 'Hyderabad';
console.log(`City: ${city}`);

let replacement = city.replace('Hyder' , 'Islam');
console.log(`After replacement: ${replacement}`);

// Question#8

var message = 'Ali and Sami are best friends. They play cricket and football together.'
console.log(`Message: ${message}`);

let afterReplacement = message.replaceAll('and' , '&');
console.log(`After replacement: ${afterReplacement}`);

// Question#9

let string = '472';
console.log(`Value: ${string}`);
console.log(`Type: ${typeof(string)}`);

let convertedString = Number(string);
console.log(`Value: ${convertedString}`);
console.log(`Type: ${typeof(convertedString)}`);

// Question#10

// let url = prompt('Enter any valid URL');
// console.log(`URL: ${url}`);

// let domain = url.slice(4);
// console.log(`Domain: ${domain}`);

// Question#11

// let input = prompt('Write anything').toUpperCase();
// console.log(input);

// Question#12

// let zong = prompt('Write anything').toLowerCase();
// console.log(zong);

// Question#14

let num = 35.36;
console.log(`Number: ${num}`);

let convertedNum = num.toString()
let removedDot = convertedNum.replace('.' , '');
console.log(`Result: ${removedDot}`);

// Question#15

let a = '3';
let b = '3';
let x = a + b;

console.log(`a is ${a}`);
console.log(`b is ${b}`);
console.log(`a + b is ${x}`);

// Question#16

let c = '3';
let d = '3';
let y = c - d;

console.log(`c is ${c}`);
console.log(`d is ${d}`);
console.log(`c - d is ${y}`);
