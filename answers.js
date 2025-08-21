//Q1

var x = 10;   
let y = 20;   
const z = 30; 

//Q2

let num = 10;
let str = "Hello"; 
let bool = true;
let nothing = null;
let undef;
let big = 1234567890123n;
let sym = Symbol("id");
let obj = {a:1, b:2};

// Q3

var a = 5;
let b = "Ali";
const c = true;


// Q4

let val1;
let val2 = null;

// Q5

let p = 10, q = 5;
console.log(p + q, p - q, p * q, p / q, p % q);
console.log(p == q, p != q, p > q, p < q);
console.log(p > 0 && q > 0);
console.log(p |= q);
console.log(p > q ? "Yes" : "No");
console.log(typeof p);

// Q6

let age = 20;
console.log(age > 18 && age < 30);
console.log(age > 18 || age < 15);
console.log(!(age > 18));

// If – Else If – Else

// 1 
let marks = 82;
if (marks >= 90) console.log("A");
else if (marks >= 75) console.log("B");
else if (marks >= 50) console.log("C");
else console.log("Fail");

// 2
let n1 = 15, n2 = 25, n3 = 20;
if (n1 > n2 && n1 > n3) console.log(n1);
else if (n2 > n3) console.log(n2);
else console.log(n3);

// 3
let temp = 22;
if (temp < 15) console.log("Cold");
else if (temp <= 25) console.log("Pleasant");
else console.log("Hot");

// 4
age = 65;
if (age < 18) console.log("Not eligible");
else if (age <= 60) console.log("Eligible");
else console.log("Senior eligible");

// 5
let numCheck = 15;
if (numCheck % 3 === 0 && numCheck % 5 === 0) console.log("Divisible by both 3 and 5");
else if (numCheck % 3 === 0) console.log("Divisible only by 3");
else if (numCheck % 5 === 0) console.log("Divisible only by 5");
else console.log("Not divisible");

// 6
let day = 3;
switch(day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid");
}

// 7
let signal = "Yellow";
switch(signal) {
  case "Red": console.log("Stop"); break;
  case "Yellow": console.log("Get Ready"); break;
  case "Green": console.log("Go"); break;
  default: console.log("Invalid");
}

// 8
let x1 = 10, x2 = 5, op = "*";
switch(op) {
  case "+": console.log(x1 + x2); break;
  case "-": console.log(x1 - x2); break;
  case "*": console.log(x1 * x2); break;
  case "/": console.log(x1 / x2); break;
  default: console.log("Invalid operator");
}

// Arrays

// 1
let nums = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<nums.length; i++) console.log(nums[i]);
for(let n of nums) console.log(n);
nums.forEach(n => console.log(n));
let fruits = ["apple","banana","mango"];
fruits.forEach(f => console.log(f.toUpperCase()));
let sum = 0;
nums.forEach(n => sum += n);
console.log("Sum:", sum);

// 2
let arr = [2,4,6,8];
let doubled = arr.map(n => n*2);
console.log(doubled);

let names = ["suhail","khan","rahul"];
let capitalized = names.map(n => n[0].toUpperCase() + n.slice(1));
console.log(capitalized);

let squared = arr.map(n => n**2);
console.log(squared);

// 3
console.log([5,12,8,130,44].filter(n => n >= 10));
console.log([12,17,18,24,30].filter(a => a >= 18));
console.log(["pen","notebook","pencil","book"].filter(w => w.length > 4));
console.log([1,2,3,4,5,6,7,8,9,10].filter(n => n%2===0));

// 4
let result = [1,2,3,4,5,6,7,8,9,10]
  .filter(n => n%2===0)
  .map(n => n**2);
console.log(result);

let students = [
  {name:"Suhail", marks:85},
  {name:"Rahul", marks:45},
  {name:"Aman", marks:65}
];

let passed = students.filter(s => s.marks >= 50).map(s => s.name);
console.log("Passed students:", passed);