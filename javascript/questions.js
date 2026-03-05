/*
# JavaScript Interview Questions

# Note
> This section covers JavaScript interview questions including output-based, conceptual, and coding problems commonly asked in interviews and coding rounds.

--Total: 50 Questions

#1) Type Coercion — Tell the Output

--a)
let a=5;
let b="10";

let c=b-a;
// let c=b*a;
// let c=b/a;
// let c=b+a

console.log(c);
console.log(typeof(c));

--b)
let a=9;
let b=9;
let c="5";
let d="3";
let e=undefined;
let f=null;
let g=true;
let h=false;
let i="9"

console.log("a+b", a + b, typeof (a + b)); 
console.log("c+d", c + d, typeof (c + d)); 
console.log("a+c", a + c, typeof (a + c)); 
console.log("e+a", e + a, typeof (e + a)); 
console.log("e+i", e + i, typeof (e + i));
console.log("e+d", e + d, typeof (e + d)); 
console.log("a+f", a + f, typeof (a + f)); 
console.log("d+f", d + f, typeof (d + f)); 
console.log("d-f", d - f, typeof (d - f)); 
console.log("a+g", a + g, typeof (a + g)); 
console.log("a-g", a - g, typeof (a - g)); 
console.log("b-h", b - h, typeof (b - h)); 
console.log("b+h", b + h, typeof (b + h)); 

console.log("Sum of a + b = " + a + b, typeof ("Sum of a + b = " + a + b)); 
console.log( a + b + " is a sum of a + b", typeof (a + b + " is a sum of a + b"),); 


#2) Implement a callback function in JavaScript by passing one function into another, then print its value.

#3) Tell the output without running the code.

function firstFunction() {
  console.log("First Function Start");
  secondFunction();
  console.log("First Function End");
}

function secondFunction() {
  console.log("Second Function Start");
  thirdFunction();
  console.log("Second Function End");
}

function thirdFunction() {
  console.log("Third Function");
}

firstFunction();

#4) Tell the output without running the code, in the proper sequence.

console.log("line number 1", varValue);
var varValue = 10;

function b() {
  console.log("line number 2", varValue);
}

console.log("line number 3", varValue);

function fn() {
  console.log("line number 4", varValue);
  var varValue = 20;
  b();
  console.log("line number 5", varValue);
}

console.log("line number 6", varValue);

fn();


#5) Tell the output without running the code, in the proper sequence.

var a = 10;
console.log("line number 1", a);
function fn() {
  console.log("line number 2", a);
  var a = 28;
  a++;
  console.log("line number 3", a);
  if (a) {
    var a = 30;
    a++;
    console.log("line number 4", a);
  }
  console.log("line number 5", a);
}
console.log("line number 6", a);

fn();

#6) Tell the output.

let letFruit = "orange";
var varFruit = "orange";
console.log("letFruit : ", letFruit, "varFruit : ", varFruit);
{
  let letFruit = "apple";
  varFruit = "apple";
  console.log("letFruit : ", letFruit, "varFruit : ", varFruit);
}
console.log("letFruit : ", letFruit, "varFruit : ", varFruit);

#7) What will be the output of `console.log(person.fullName())`?

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  fullName: function () {
    let greeting = "Hello, my name is ";
    return `${greeting} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
};

console.log(person.fullName());

#8) What is lexical scope / lexical scoping?
    
#9) Can we use the for...of loop for objects?

#10) Explain the use of call(), apply(), and bind() in JavaScript, and then solve this question.

--1)Output-based (call)

const user = { name: "Yash" };

function show() {
  console.log(this.name);
}

show.call(user);


--2)call vs default this

const obj = { x: 50 };

function print() {
  console.log(this.x);
}

print();
print.call(obj);

--3)apply with arguments

function add(a, b, c) {
  return a + b + c;
}

console.log(add.apply(null, [2, 4, 6]));

--4)bind (this cannot be changed)

const person = { age: 25 };

function getAge() {
  console.log(this.age);
}

const bound = getAge.bind(person);
bound.call({ age: 40 });

//Once a function is bound using bind, its this cannot be changed by call or apply.

--5)method borrowing

const car1 = {
  brand: "BMW",
  getBrand() {
    console.log(this.brand);
  }
};

const car2 = { brand: "Audi" };

car1.getBrand.call(car2);

//Method borrowing allows one object to use another object’s method by changing the value of this using call or apply.

#11) What is the "this" keyword in JavaScript?

#12) Predict the output of the three `console.log` statements below and explain why `this` behaves differently in `regularFunction`, `arrowFunction`, and `arrowFunctionTwo`.

let person = {
  firstName: "Yash",
  lastName: "Mishra",
  age: 22,
  regularFunction: function () {
    return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  arrowFunction: () => {
    return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
  },
  arrowFunctionTwo: () => {
    return this;
  },
};

console.log(person.regularFunction());

console.log(person.arrowFunction());

console.log(person.arrowFunctionTwo());

#13) Tell the output according to the browser (not Node.js) without running the code.
--1)
let person = {
  firstName: "Yash",
  lastName: "Mishra",
  seeOne: function () {
    return `My name is ${this.firstName} ${this.lastName}.`;
  },
  seeTwo: function () {
    return this;
  },
  seeThree: function () {
    let arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    arrowFunction();
  },
  seeFour: function () {
    let arrowFunction = () => {
      return `My name is ${this.firstName} ${this.lastName}.`;
    };
    return arrowFunction();
  },
  seeFive: function () {
    let arrowFunction = () => {
      return this;
    };
    return arrowFunction();
  },
};

console.log(person.seeOne());
console.log(person.seeTwo());
console.log(person.seeThree());
console.log(person.seeFour());
console.log(person.seeFive());

console.log(this);

--2)
function abc() {
  console.log(this);
}

abc();
 
#14) What will be the output of the following code, in the proper sequence?

---1) Code Without `await`:

async function f1() {
  console.log(1);
}

async function f2() {
  console.log(2);
}

console.log(3);

f1();
f2()

console.log(4);

f3();

async function f3() {
  console.log("Go!");
}

---2) Code With `await`

async function main() {
  async function f1() {
    console.log(1);
  }

  async function f2() {
    console.log(2);
  }

  console.log(3);

  await f1();
  await f2();

  console.log(4);

  await f3();

  async function f3(){
    console.log("Go!");
  }
}

main()


#15) Find the output of these code snippets.

>a)
for (let a = 1; a <= 5; a++) {
    setTimeout(() => {
      console.log(a);
    }, 1000);
}

>b)
for (var a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a);
  }, 1000);
}


#16) Find the output of each code snippet below.

a)
for (let a = 1; a <= 5; a++) {
  setTimeout(() => {
    console.log(a);
  });
}

b)
for (var a = 1; a <= 5; a++) {
  setTimeout(()=>{
    console.log(a);
  })
}

c)
let a = 1;
for (a; a <= 5; a++) {
  setTimeout(() => {
    console.log(a);
  });
}

d)
for ( var a = 1; a <= 5; a++) {
  var b=a;
  setTimeout(() => {
    console.log(b);
  });
}

e)
for (var a = 1; a <= 5; a++) {
  a;
  (function () {
    setTimeout(() => {
      console.log(a);
    });
  })();
}

f)
for (var a = 1; a <= 5; a++) {
  var b = a;
  (function () {
    setTimeout(() => {
      console.log(b);
    });
  })();
}

g)
for (var a = 1; a <= 5; a++) {
  (function () {
    var b = a;
    setTimeout(() => {
      console.log(b);
    });
  })();
}

h)
for (var a = 1; a <= 5; a++) {
  (function () {
    setTimeout(() => {
      var b = a;
      console.log(b);
    });
  })();
}

k)
a = 1;
for (a; a <= 5; a++) {
    setTimeout(() => {
        console.log(a)
    }, 1000)
}

L)
for(var a=1; a<=5; a++){
    console.log(a);
}

m)
for (var a = 1; a <= 5; a++) {
  (function () {
    a;
    setTimeout(() => {
      console.log(a);
    });
  })();
}
    
#17) Tell me the correct output.

a)
const a = 1;

for (a; a <= 5; a++) {
    setTimeout(() => {
        console.log(a)
    }, 1000)
}

b)
const a = 1;

for (a; a <= 5; a++) {
  console.log(a);
}

# 18) Tell the output of the following code snippets.

>a)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 2;
    count++;
    console.log(count); 
  }
  console.log(count); 
})();

>b)
let countTwo = 0;
function immediate() {
  if (countTwo === 0) {
    let countTwo = 2;
    countTwo++;
    console.log(countTwo); 
  }
  console.log(countTwo); 
}

immediate();

>c)
let countTwo = 0;
function immediate() {
  if (countTwo === 0) {
    countTwo = 2;
    countTwo++;
    console.log(countTwo);
  }
  console.log(countTwo);
}
console.log(countTwo);

immediate();

console.log(countTwo);


# 19) Tell me the output of this code, in proper sequence.

let outerFun = (() => {
    
    let count = 10;
    
    function see() {
        count++;
        console.log("See count", count)
    }
    
    let ref = count;
    console.log("Center ref", ref)

    function seeTwo() {
        console.log("SeeTwo count", count)
        console.log("SeeTwo ref", ref)

    }
    return [see, seeTwo];

})

let [see, seeTwo] = outerFun()
see();
see();
seeTwo();


# 20) What is `Destructuring`, `Spread Operator`, and `Rest Operator`? Solve these problems.

--Destructuring: Extracts values (from arrays, objects).
--Spread : Copying & Merging, expands values.
--Rest : Collects values.

>Destructuring

---1) Problem 1: Object Property Extraction

Task: Extract name, city, and the first hobby using destructuring
Expected output: John Doe, New York, reading

const user = {
  name: 'John Doe',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'swimming', 'coding']
};

---2) Problem 2: Array with Default Values

Task: Destructure the array to get first, second, and third colors
If third color doesn't exist, default it to 'yellow'
Expected output: first = 'red', second = 'green', third = 'white' (if third is not present answer must be yellow)

a)
const colors = ['red', 'green',"white"];

b)
const colorsTwo = ['red', 'green'];


---3) Problem 3: Function Parameter Destructuring
You are given an object userInfo with the properties name and age:

const userInfo = {
  name: "Alice",
  age: 25
};

Your task is to write a function named formatUser that accepts a user object (userInfo) as its parameter. Inside the function definition, use parameter destructuring to directly extract name, age, and email from the object. If the email property is not provided in the object, it should default to "N/A". The function should return a formatted string in the exact format "name, age, email". For example, calling formatUser(userInfo) should return "Alice,25,N/A".

>Spread operator

---1) Problem 4: Array Manipulation
Task: Create a new array that contains all elements from arr1, arr2, and arr3
Then add the number 0 at the beginning and 10 at the end
Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

---2) Problem 5: Object Merging with Override
Task: Create a final settings object that merges defaultSettings with userSettings
userSettings should override defaultSettings where properties match.
Expected: { theme: 'dark', language: 'en', notifications: false, autoSave: false }

const defaultSettings = {
  theme: 'light',
  language: 'en',
  notifications: true,
  autoSave: false
};

const userSettings = {
  theme: 'dark',
  notifications: false
};

---3) Problem 6: Function Arguments Spreading
Task: Calculate the sum of all array values by calling `calculateSum` using the spread operator (Don't use reduce operator).
Expected output: 150

const numbers = [10, 20, 30, 40, 50];

function calculateSum(a, b, c, d, e) {
  return a + b + c + d + e;
}


>Rest Operator Problems

---1) Problem 7: Function with Variable Arguments

Task: Write a function called `multiply` that takes the first number as a multiplier and multiplies it with all remaining numbers, then returns the sum of the results.
Example: `multiply(2, 3, 4, 5)` should return `2×3 + 2×4 + 2×5 = 24`

function multiply( your parameters here ) {
  your code here
}

---Hint: Use `reduce()`.
`reduce()` is an array method that reduces an array to a single value by applying a callback function on each element and accumulating the result.

---2) Problem 8: Array Destructuring with Rest

Given an array of scores, use array destructuring to extract the first score and second score into separate variables, and collect all the remaining scores into another array using the rest operator. After destructuring, calculate the average of only the remaining scores (do not include the first and second scores in this calculation).

const scores = [95, 87, 92, 78, 85, 90, 88];
first → 95
second → 87
avgOfRest → average of [92, 78, 85, 90, 88] → 86.6

---Hint: Use `reduce()`.

---3) Problem 9: Object Destructuring with Rest
Task: Destructure to get id and name, then collect all other properties in a 'details' object
Expected: id = 1, name = 'Sarah', details = {email: '...', grade: 'A', ...}

const student = {
  id: 1,
  name: 'Sarah',
  email: 'sarah@email.com',
  grade: 'A',
  subjects: ['Math', 'Science'],
  attendance: 95,
  behavior: 'excellent'
};

# 21) Explain the Event Loop.

# 22) Explain the Global Execution Context.

# 23) What is a Callback, Callback Hell, and Promise?

# 24) Write a program with proper error handling to fetch a user's data from this API:
👉 API: `https://jsonplaceholder.typicode.com/users/1`
👨‍💻 Note: Check if the API is responding before using it. Sometimes it may be temporarily unavailable.

Q) Print the user's name in the console.
Do this using both:

1)Use .then()

2)Use async/await with try and catch


# 25) Write a JavaScript program that demonstrates the use of classes and object creation.

# 26) Demonstrate Encapsulation using a Class.
Task:
Create a class `BankAccount` that demonstrates the concept of Encapsulation in JavaScript.

>Requirements:

  Use a private field `#balance` (initial value should be ₹100).

  Implement the following public methods:

  1. `deposit(amount)`

       Adds the amount to the balance only if it’s greater than 0.
       Logs the updated balance.

  2. `withdraw(amount)`

       Deducts the amount from balance only if sufficient balance is available.
       Otherwise, logs an "insufficient balance" message.

  3. `checkBalance()`

       Logs the current balance.

  Finally, create an object of the class and demonstrate all three methods.

# 27) Demonstrate inheritance in JavaScript using class, extends, and super with a real-world example.

# 28) Demonstrate Polymorphism in JavaScript by creating a base class with a method, and override that method in two child classes. Show how each object calls its own version of the method.

# 29) What is Abstraction in JavaScript?

# 30) What is Prototype, Prototype Inheritance, and How Can We Set One Object to Another Object's Properties ?

# 31) What is Type Coercion vs Type Casting, and Concatenation vs String Concatenation?

# 32) Shallow copy and deep copy questions.

>A)
Create a shallow copy of the `profileOne` object using any method you prefer. After copying, change the `name` property in the copied object and verify that the original object is not affected.

const profileOne = {
  name: "Yashu",
};

>B)
Create a deep copy of the `profile` object using any method you prefer.
Since the object contains a nested object (`social`), a shallow copy will not be sufficient. Ensure that modifying the `social` property in the copied object does not affect the original.

const profile = {
  name: "Yashu",
  social: {
    twitter: "@yashdev"   // A shallow copy is not sufficient here
  }
};

>C)
Create a deep copy of the `user` object given below.
This object contains nested objects, arrays, and a `Date` property. Ensure that all levels are copied independently so that changes in the copied object do not affect the original.

const user = {
  name: "Yashu",
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    pin: 110001
  },
  createdAt: new Date()
};

>D)
Create a deep copy of the `user` object given below.
This object contains nested objects, arrays, a `Date` property, and a method (`info`). Make sure the deep copy handles all these correctly without affecting the original object.

const user = {
  name: "Yashu",
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    pin: 110001
  },
  createdAt: new Date(),
  info(){
    return(`My name is ${this.name}, my skills are ${this.skills[0]} and ${this.skills[1]}, and I live in ${this.address.city} - ${this.address.pin}`);
  }
};

# 33) Based on `slice` and `splice`.

let names = ["Yashu", "Vani", "Code", "Fun", "🔥"];

Question 1:
How would you extract only `"Vani"` and `"Code"` into a new array without modifying the original?

Question 2:
How would you remove `"Code"` and `"Fun"` from the array and add `"Success"` in their place?

# 34) How to generate a random number between two numbers?

# 35) Tell me the output of both of these lines and explain why:

console.log([] == false);  
console.log([] === false);


# 36) Which of the following is NOT an immutable operation?
a) `map()`
b) `filter()`
c) `splice()`
d) `concat()`

# 37) What is the output of this code?

>a)
async function name(){
    return "Yash"
}
console.log(name());

>b)
async function age(){
    return await "23"
}
console.log(age());

# 38) What is Babel, SWC, and Bundlers (Webpack, Parcel, Vite, esbuild, Rollup)?

# 39) Why is Node.js necessary on the frontend? (For Knowledge)

# For Knowledge: Which version-check command is correct — `--version`, `-v`, `--v`, or `-version`?

All four commands (`--version`, `-v`, `--v`, `-version`) can be used to check the version of installed tools, but not all tools support all of them.

`--version` and `-v` are the most commonly used and universally supported. `--v` and `-version` may work in some tools (like TypeScript) but fail in others (like Node.js).

>>Therefore, always use `--version` or `-v` for consistency and reliability.


# For Knowledge: What does `-g` mean in npm?

`-g` stands for Global Installation. When you use `npm install -g <package-name>`, the package is installed system-wide and can be used in any project without installing it separately each time.

>>Global Installation (`-g`):
Installs the package in a global location — accessible from anywhere on your system.

>>Local Installation (without `-g`):
Installs the package only in the current project's `node_modules` folder — available only within that specific project.

# 40) What is JSX?

# 41) Swap two variables using three different methods.

let a=30;
let b=600;

#42)
Can you write the same array destructuring swap logic for three variables?
Like: x = 1, y = 2, z = 3 → swap so that x → y, y → z, and z → x.

#43) Tell me the output of this code.
let a=8;
let b=2;

console.log(8%2)
console.log(2%8)

#44) Solve this:
let a=5859;

1)Write a program to remove the last digit from the number and print the remaining digits. (Expected output: 585)
2)Print only the last digit of the number. (Expected output: 9)


#45) Evaluate the following JavaScript expressions and state whether they return true or false:

console.log(10>5 && -55<56 && 67<88)
console.log(10>5  -55<56 && 67>88)
console.log(100=="100" || 2>-9 || 88<102)
console.log(100==="100" || 2>-9 || 88<102)
console.log(100==="100" || 2>-9 || 88>102)
console.log(100==="100" || 2<-9 || 88>102)

#46) This task involves unary operators (++, --) in both pre-increment (++x) and post-increment (x++) forms. Analyze each code snippet and determine the output.

1)
let a=10;
let ansPost=a++;
console.log(ansPost)

2)
let b=10;
let ansPre=++b;
console.log(ansPre)

3)
let x=10;
let ansPost=x++;
let ansPre=++x;
console.log(ansPost);
console.log(ansPre);

4)
let i=11; 
let answer=i++ + ++i;
console.log(answer);

5)
let p=11; 
let value=p++ + p;
console.log(value);

6)
let a = 3, b = 1;

let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);

7)
a)
let a=true;
a++;
console.log(a);

b)
let see=false;
see++;
console.log(see);

c)
let x=10;
console.log(x++)

d)
let y=15++;
console.log(y);

e)
let p=10;
let ans=(p++);
console.log(p);

f)
let p=10;
let ans=++(p++);
console.log(p);

#47) Solve these questions.

>A) Generate OTPs

1. Generate a 6-digit OTP.
2. Generate 4, 6, and 8-digit OTPs using a single reusable function.
3. Generate a 6-digit OTP using a cryptographically secure method (do not use `Math.random()`).


>B) Circumference of a Circle

Using:
let radius = 5;

1. Find the circumference of a circle using the formula:
  👉 `2 × π × r`
  (The result must be a number, not a string, and must be limited to 2 decimal places.)

#48) Solve the following:
1) Use console.log() to display the current year.
2) Create a for loop that calculates the factorial of 5.

#49) In JavaScript, what happens if you declare a variable without using let, const, or var?

#50) In JavaScript, the main thread is single-threaded.Can you write a function that blocks the JavaScript thread for a given number of seconds before continuing execution?

For example, calling `blockThread(3)` should pause execution for 3 seconds before printing `"Done"`.

Bonus: Can you implement this without using `setTimeout`, `setInterval`, or `Promise`? (Hint: use a busy-wait loop with `Date.now()`)

// ─────────────────────────────────────────────────────────────────
// 📊 DSA Questions 
// ➡ See: dsa/questions.js and dsa/answers.js
// ─────────────────────────────────────────────────────────────────
*/
