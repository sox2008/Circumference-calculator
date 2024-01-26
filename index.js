
/*
let fullName= `Justin Williams`;
let age = 50;
let isStudent = false;


document.getElementById(`p1`).textContent = `Your name is: ${fullName}`;
document.getElementById(`p2`).textContent = `Your age is: ${age}` ;
document.getElementById(`p3`).textContent = `You are enrolled: ${isStudent}`;

*/



//let students = 30;
/*
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
students = students ** 2;
let extraStudents = students % 3
*/

//students += 1;
//students -= 1;
//students *= 2;
//students /= 2;
//students **= 2;
//students %= 2;
//students ++;
//students --;


//console.log(students);


//let result = 12 % 5 + 8 / 2;

//console.log(result);



//How to declare user input
//1. Easy way -- window prompt
//2. Proffessional way--html text box


//let userName;

//userName = window.prompt(`Whats your username?`);

//console.log(userName);



//username submit button

/*let userName;

document.getElementById(`mySubmit`).onclick=function(){
    userName=document.getElementById(`myText`).value;
    document.getElementById(`myH1`).textContent=`Hello ${userName}`;

}*/




//Type conversion = Change the data type to another.
//                     (strings, numbers, booleans)

 

/*let age = window.prompt ("How old are you?");
age = Number(age);
age +=1;
console.log(age,typeof age);
*/


/*
let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
*/

/*
let x = "";
let y = "";
let z = "";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x,typeof x);
console.log(y,typeof y);
console.log(z,typeof z);
*/



//const = a variable that cant be changed



const PI = 3.14159;
let radius;
let circumference;


document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2* PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";


}

























