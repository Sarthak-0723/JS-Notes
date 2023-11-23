// This is single line comment

/*
This is 
multi line 
comment
*/

// 1. Ways to print in JavaScript
// console.log("me");
// alert("Hellow JavaScript!");
// document.write("Raut")



// 2. JavaScript console API
// console.log("Hellow World");
// console.warn("It's warning");
// console.error("It's error");



// 3. Variables in JavaScript
// Variables are the conteiner which store values
var number1 = 16;
var number2 = 4;
// console.log(number1 + number2);



// 4. Data type in JavaScript
// Numbers
var num1 = 15;
var num2 = 27;

// String
var str = "This is string";
var str2 = 'This is also string';

// Object
var marks = {
    Physics: 78,
    Chemistry: 70,
    Maths: 80,
    Biology: 85
}
// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a ,b);

// undefined in JavaScript
var und = undefined;
// If variable not fill with any value it also undefined
var und2;
// console.log(und2);

// Null in JavaScript
var n = null;
// console.log(n);

/*
At a very high level their are two data types in JavaScript 
Primitive type : number, string, undefined, null, boolens, symbols
Refrence type : Arrys and Objects\
*/

// Arrays
// var arr = [1, 2, "Ganu", 4, 5]
// console.log(arr);


// Oprators in JavaScript
// Arithmetic oprators
var a = 65;
var b = 35;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// Assingment oprators
var c = b;
// c += 2;
// c -= 6;
// c *= 2;
// c /= 5;
// console.log(c);

// Comparison oprators
x = 36;
y = 54;
// console.log(x == y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);

// Logical Oprators

// I. Logical and
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// II. Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// III. Logical not
// console.log(!true);
// console.log(!false);



// 5. Fuctions in JavaScript
function avg(a, b) {
    return (a + b) / 2;
}
// DRY = Do not repet yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1, c2);

/*
// Condisionals in JavaScrip
age = 554;

// Single if statement
// if (age > 18) {
//     console.log('You are yong');
// }

// if - else statement
// if (age > 18) {
//     console.log('You can drink rasana water');
// }
// else{
//     console.log('You cannot drink rasana water');
// }

// if - else statement
if(age > 100) {
    console.log('You are not a simple human');
}
else if(age > 50) {
    console.log('You are old');
}
else if(age > 18) {
    console.log('You are yong');
}
else if(age > 13) {
    console.log('You are teen');
}
else{
    console.log('You are a kid');
}
console.log('End of ladder');
*/



// 6. Loops in JavaScript

var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// for(var i = 0; i< arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(element){
//     console.log(element);
// })

// let and const is alternative for var let is very best to use in one function only and const is use for constant value
// const ac = 15;
// now ac = 15 is contant we cannot change the value of ac
// let z = 7;

// let j = 0;
// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }

// In do while function is absulitly run 1 time becouse first do run and then while chack the statement
// do{
//     console.log(arr[j]);
//     j++;
// }while (j < arr.length);


/*
// Break And continue in JavaScript
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        // break;
        continue;
    }
    console.log(arr[i]);
}
*/