// ©️ 2023 Sarthak Raut

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

var arr = [1, 2, 3, 4, 5, 6, 7];
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




// 7. Array methods in JavaScript
let Arr = ["bot", 34, null, undefined];

// console.log(Arr.length);
// Arr.pop();  //Use to remove last element from Array
// Arr.shift(); //Use to remove first element from Array
// Arr.push("sam"); //Use to add any element last of the Array
// Arr.unshift("sam"); //Use to add any element first of the Array
// const Newlength = Arr.unshift("sam");
// console.log(Newlength)
// console.log(Arr);




// 8. String methods in JavaScript
// let Mystring = "Sam is a good boy, good !";
// console.log(Mystring.length);
// console.log(Mystring.slice(0, 4));
// console.log(Mystring.replace("Sam", "Sarthak"));
// console.log(Mystring.indexOf("good"));
// console.log(Mystring.lastIndexOf("good"));




// 9. Dates in JavaScript
let myDate = new Date();

// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());




// 10. JavaScript DOM manipulation

// DOM = Document Object Model
// For target any elememt by id use :
document.getElementById('click');
// For target any elememt by class name use :
document.getElementsByClassName('container');
// For target any elememt by tag use :
document.getElementsByTagName('h1');
// For click use Click function
document.getElementById('click').click;
// For target any elememt by tag use :
document.querySelector('.container');

let elem = document.getElementById("click");
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);

// elemClass[0].style.background = "red";
// elemClass[0].classList.add("bg-primery");
// elemClass[0].classList.add("text-succes");
// elemClass[0].classList.remove("text-succes");

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);
// tn = document.getElementsByTagName('button')
// console.log(tn)
// tn2 = document.getElementsByTagName('div')
// console.log(tn2)
// createdElement = document.createElement('p')
// createdElement.innerText = "This is created paragraph";
// tn2[0].appendChild(createdElement);
// createdElement2 = document.createElement('b')
// createdElement2.innerText = "This is created bold";
// tn2[0].replaceChild(createdElement2, createdElement);
// sel = document.querySelector('.container');
// console.log(sel);
// sel = document.querySelectorAll('.container');
// console.log(sel);




// 11. Get location, scripts, URL from document.

document.location;
document.scripts;
document.URL;
document.title;
document.links;
document.forms;
document.images;
document.domain;
// console.log(document.location);




// 12. JavaScrip Events

// function clicked(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b> We are clicked sucessfully </b>";
//     console.log('Clicked Sucessfully');
// }

// window.onload = function(){
//     console.log('Page reloaded sucessfully');
// }

// firstcontainer.addEventListener('click', function(){
//     console.log('clicked on container');
// })

// firstcontainer.addEventListener('mouseover', function(){
//     console.log('Mouse Over on container');
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log('Mouse Out of container');
// })

// PreHTML = document.querySelectorAll(".container")[1].innerHTML;
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll(".container")[1].innerHTML = PreHTML;
//     console.log('Mouse up of the container');
// })

// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll(".container")[1].innerHTML = "<b> We are clicked sucessfully </b>";
//     console.log('Mouse down of the container');
// })




// 13. Arrow function in JavaScript

// summ = (a,b) =>{
//     return a+b;
// }

logkaro = () => {
    document.querySelectorAll(".container")[1].innerHTML = "<b> We are timeout </b>";
    console.log('log is start');
}




// 14. timeout in JavaScript

// clr = setInterval(logkaro, 2000);
// clr = setTimeout(logkaro, 5000);

// clearInterval(clr) is use to stop setIntervel or stope to start setInterval




// 15. localStorage in JavaScript

// localStorage.setItem("name", "sarthak");
// localStorage
// localStorage.getItem('name');
// localStorage.removeItem('name');
// localStorage.clear();




// 16. JSON
obj = { name: "sarthak", age: 16 };
// Convert Object into string with JSON
jso = JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
