console.log("JS Logical Questions Section Is Working");
/*
#Section One : Logical Building

#This questions are mainly for improving your logic-building skills. They aren't directly tied to JavaScript concepts or interview preparation, but they are super helpful for developing strong logical thinking.

---1) Write a JavaScript program to check whether a number is even, odd, or prime, and then print all even, odd, and prime numbers within a given range. You can choose any two numbers as the range limits: start and end.

  - Even Numbers  
  - Odd Numbers  
  - Prime Numbers

---2) Write a JavaScript function `printPrimeNumber(n)` that returns all prime numbers from 2 to `n` (inclusive) as a string, separated by spaces.

A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.

Your function should:

  Accept a positive integer `n`.
  Check each number from 2 up to `n`.
  Collect all prime numbers in a string, separated by a single space.
  Return the final string.

Example:
console.log(printPrimeNumber(25));

Output:
"2 3 5 7 11 13 17 19 23"

---3) Print the following Star Patterns (Total 23 Questions): 

1)Pattern One
n=5;

*****
*****
*****
*****
*****

2)Pattern Two
n=5;

  **
***
****
*****

3)Pattern Three
n=5;

1
12
123
1234
12345

4)Pattern Four
n=5;

1
22
333
4444
55555

5)Pattern Five (Decending Order)
n=5;

*****
****
***
**
  6)Pattern Six
n=5;

12345
1234
123
12
1

7)Pattern Seven
n=5;

1
3
5
7       
9

        ***
    *****
   *******
  *********

8)Pattern Eight (Reverse of Pattern Seven)
n=5;

9
7
5
3
1


*********
 *******
  *****
   ***
      9)Pattern Nine 
n=5;

      ***
  *****
 *******
*********
*********
 *******
  *****
   ***
      10)Pattern Ten
n=5;

  **
***
****
*****
****
***
**
  11)Pattern Eleven
n=5;

1
0 1
1 0 1
0 1 0 1
1 0 1 0 1

12)Pattern Twelve
n=5;

1      1
12    21
123  321
12344321

13)Pattern Thirteen
n=5;


1
2 3
4 5 6
7 8 9 10
11 13 14 15

14)Pattern Fourteen
n=5;

A
A B
A B C
A B C D
A B C D E

15)Pattern Fifteen
n=5;

A B C D E
A B C D
A B C
A B
A

16)Pattern Sixteen
n=5;

A
B B
C C C
D D D D
E E E E E

17)Pattern Seventeen
n=5;


    A
   ABA
  ABCBA
 ABCDCBA
ABCDEDCBA

18)Pattern Eighteen
n=5;


E 
D E 
C D E 
B C D E 
A B C D E 

19)Pattern Nineteen
n=5;

**********
**** ****
***   ***
     
  *
  *
     
***   ***
**** ****
**********

20)Pattern Twenty
n=5;


  *
       
***     ***
****   ****
***** *****
****   ****
***     ***
       
  *

21)Pattern Twentyone
n=5;


*****
  *
  *
  *
*****

22)Pattern Twentytwo
n=5;


  *
   * 
      
  *

23)Pattern Twenthree
n=4;
7*7

4 4 4 4 4 4 4 
4 3 3 3 3 3 4 
4 3 2 2 2 3 4 
4 3 2 1 2 3 4 
4 3 2 2 2 3 4 
4 3 3 3 3 3 4 
4 4 4 4 4 4 4 


------------------------------------------------------------------

#Section 2 : For interviews

#In this section, JavaScript-based questions are covered for interview preparation, along with other commonly asked questions which are asked in coding rounds.


#)1

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

console.log("a+b", a + b, typeof (a + b)); 
console.log("c+d", c + d, typeof (c + d)); 
console.log("a+c", a + c, typeof (a + c)); 
console.log("e+a", e + a, typeof (e + a)); 
console.log("e+d", e + d, typeof (e + d)); 
console.log("a+f", a + f, typeof (a + f)); 
console.log("d+f", d + f, typeof (d + f)); 
console.log("d-f", d - f, typeof (d - f)); 
console.log("a+g", a + g, typeof (a + g)); 
console.log("a-g", a - g, typeof (a - g)); 
console.log("b-h", b - h, typeof (b - h)); 
console.log("b+h", b + h, typeof (b + h)); 

console.log("Sum of a + b = " + a + b, typeof ("Sum of a + b = " + a + b)); 
console.log(
  a + b + " is a sum of a + b",
  typeof (a + b + " is a sum of a + b"),
); 


#2) Implement callback function in JavaScript by passing one function into another , then print it's value?

#3) Tells the output without running the code.

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

#4)Tells the output without running the code in the proper sequence.

console.log("line number 1", varName);
var varName = 10;

function b() {
  console.log("line number 2", varName);
}

console.log("line number 3", varName);

function fn() {
  console.log("line number 4", varName);
  var varName = 20;
  b();
  console.log("line number 5", varName);
}

console.log("line number 6", varName);

fn();


#5)Tells the output without running the code in the proper sequence.

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

#6) Tells The output

let letFruit = "orange";
var varFruit = "orange";
console.log("letFruit", letFruit, "varFruit", varFruit);
{
  let letFruit = "apple";
  varFruit = "apple";
  console.log("letFruit", letFruit, "varFruit", varFruit);
}
console.log("letFruit", letFruit, "varFruit", varFruit);

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

#8)What is lexical scop/lexical scoping ?
    
#9)Can we use the for...of loop for objects ?

#10)Explain the use of call(), apply(), and bind() in JavaScript and then solve this question.

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

#11)What "this keyword" is javascript ?

#12) In JavaScript, what is the difference between using an arrow function and a regular function as a method inside an object? How does the value of `this` differ between the two and what happens if you try to access object properties using `this` inside an arrow function?

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

#13)Tell the output without running the code.
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

console.log(this);//in global space
--2)
function abc() {
  console.log(this);
}

abc();
 
#14) What will be the output of the following code in a proper sequence ?

--1) Code Without `await`:

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


#15) Find the output of this codes ?

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


#16)Give me output of these question:

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
    
#17)Tell me correct output .

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

In the first code with setTimeout, a is a const, so a++ throws a TypeError. However, the loop body executes before the increment, 
so the first setTimeout is scheduled and after 1 second prints 1 even though the error stops the loop. In the second code with a 
direct console.log, the first a++ also throws a TypeError, but since there’s no asynchronous scheduling, nothing else runs and only 
the error appears. Key point: asynchronous callbacks scheduled before an error can still execute, while synchronous code stops 
immediately when a const is modified.

#18)Tell me the output of this code.

>a)
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 2;
    count++;
    console.log(count); // What is logged here?
  }
  console.log(count); // What is logged here?
})();

>b)
let countTwo = 0;
function immediate() {
  if (countTwo === 0) {
    let countTwo = 2;
    countTwo++;
    console.log(countTwo); // What is logged here?
  }
  console.log(countTwo); // What is logged here?
}

immediate();

>c)
let countTwo = 0;
function immediate() {
  if (countTwo === 0) {
    countTwo = 2;
    countTwo++;
    console.log(countTwo); // What is logged here?
  }
  console.log(countTwo); // What is logged here?
}

immediate();


#19)Tell me the output of this code in proper sequence manner .

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


#20) What is `Destructuring`, `Spread operator` and `Rest operator`and solve this problem.

--Destructuring: Extracts values.
--Spread : Copying & Merging, (expands values).
--Rest : Collects values.

>Destructuring

---1)Problem 1: Object Property Extraction

Task: Extract name, city, and the first hobby using destructuring
Expected output: name = 'John Doe', city = 'New York', firstHobby = 'reading'

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

---2)Problem 2: Array with Default Values

Task: Destructure the array to get first, second, and third colors
If third color doesn't exist, default it to 'yellow'
Expected output: first = 'red', second = 'green', third = 'white' (if third is not present answer must be yellow)

a)
const colors = ['red', 'green',"white"];

b)
const colorsTwo = ['red', 'green'];


---3)Problem 3: Function Parameter Destructuring
Task:Write a function named formatUser that accepts a user object as its parameter. Use function parameter destructuring to extract the properties name, age, and email directly from the function parameters. If the email property is not provided in the object, assign it a default value of "N/A". 
The function should return a formatted string in the following format: "name, age, email".
For example, calling formatUser({ name: 'Alice', age: 25 }) should return "Alice, (25), N/A".

function formatUser( your destructuring here ) {
   your code here
}

>Spread operator

---1)Problem 4: Array Manipulation
Task: Create a new array that contains all elements from arr1, arr2, and arr3
Then add the number 0 at the beginning and 10 at the end
Expected output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

---2)Problem 5: Object Merging with Override
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

---3)Problem 6: Function Arguments Spreading
Task:Calculate the sum of all the array values, call calculateSum using the spread operator with.
Expected output: 150

const numbers = [10, 20, 30, 40, 50];

function calculateSum(a, b, c, d, e) {
  return a + b + c + d + e;
}


>Rest Operator Problems

---1)Problem 7: Function with Variable Arguments

Task: Write a function called 'multiply' that takes the first number as a multiplier and multiplies it with all remaining numbers, then returns the sum of results.
Example: multiply(2, 3, 4, 5) should return 23 + 24 + 2*5 = 24

function multiply( your parameters here ) {
  your code here
}

---Hint User Reduce
reduce() is an array method that reduces an array to a single value by applying a callback function on each element and accumulating the result. 
(Reduce is a method of Array objects but under the hood reduce is a function.)

--2)Problem 8: Array Destructuring with Rest

Given an array of scores, use array destructuring to extract the first score and second score into separate variables, and collect all the remaining scores into another array using the rest operator. After destructuring, calculate the average of only the remaining scores (do not include the first and second scores in this calculation).

const scores = [95, 87, 92, 78, 85, 90, 88];
first → 95
second → 87
avgOfRest → average of [92, 78, 85, 90, 88] → 86.6

---Hint User Reduce

--3)Problem 9: Object Destructuring with Rest
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

#21)Explain Event loop.

#22)Explain Global Execution context.

#23)What is callback,callback hell, promise.

#24) Write a program with proper error handling to fetch a user's data from this API:
👉👨‍💻 Note:First check if the API URL is working before using it. Sometimes the API may not respond.
👉 API: https://jsonplaceholder.typicode.com/users/1

Q)Print the user's name in the console.
Do this using both:

1).then()

2)async/await


#25)Write a JavaScript program that demonstrates the use of classes and object creation.

#26) Demonstrate Encapsulation using a Class.
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

#27) Demonstrate inheritance in JavaScript using class, extends, and super with a real-world example.

#28) Demonstrate Polymorphism in JavaScript by creating a base class with a method, and override that method in two child classes. Show how each object calls its own version of the method.

#29) What is Abstraction in JavaScript?

#30) What is Prototype, Prototype Inheritance, and How Can We Set One Object to Another Object's Properties ?

#31) What is Type Coercion (koversion) vs Type casting and Concatenation.

#32) Shallow copy and deep copy question.

>A) 
Create a shallow copy of the profileOne object using any method you prefer.
After copying, change the name property in the copied object and make sure the original object does not change.

const profileOne = {
  name: "Yashu",
};

>B)
Create a deep copy of the profile object using any method you prefer.
Since it has a nested object (social), a shallow copy will not be enough. Make sure changes in the copied object 
do not affect the original object.

const profile = {
  name: "Yashu",
  social: {
    twitter: "@yashdev"   --->Shallow copy not possible
  }
};

>C)
Create a deep copy of the user object given below.
This object contains nested objects, arrays, and a Date property. Ensure that all levels are copied independently so
that changes in the copied object do not affect the original.

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
Create a deep copy of the user object given below.
This object contains nested objects, arrays, a Date property, and also a method (info). Make sure the deep copy handles 
all these properties correctly without affecting the original object.

const user = {
  name: "Yashu",
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    pin: 110001
  },
  createdAt: new Date(),
  info(){
    return(`I name is ${this.name} my skill are ${this.skills[0]},${this.skills[1]} and I am living at ${this.address.city} ${this.address.pin}`);
  }
};

#33)Based on slice and splice

let names = ["Yashu", "Vani", "Code", "Fun", "🔥"];

Question 1:
How would you create a new array with only `"Vani"` and `"Code"` without modifying the original?

Question 2:
How would you remove `"Code"` and `"Fun"` from the array and add `"Success"` in their place?

#34)How to generate a random number between two numbers ?

#35)Tell me the output of both of these lines and explain why:

console.log([] == false);  
console.log([] === false);


#36)Which of the following is NOT an immutable operation ?
a) `map()`
b) `filter()`
c) `splice()`
d) `concat()`

#37)What is the output of this code ?

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

#38) What is Bable , SWC and Bundlers (Webpack, Parcel, Vite, esbuild, rollup)? 

#39) Why Node.js is necessary on the frontend? (For Knowledge Purpose)

# For version Checking which command is good: --version, -v, --v, or -version ?

With the help of these commands (--version, -v, --v, and -version), we can check the version of 
installed tools. But, but, but...

For checking versions, --version and -v are the most commonly used and reliable commands.
, --v and -version  may also work, but they are not supported by all tools. 
For example, in TypeScript, all these commands work. However, in Node.js, --v and -version 
do not work. 

>>Therefore, it's better to use --version and -v consistently to avoid issues.


# For Knowledge Purpose: What is -g ?

-g (Global Installation):
When you use the -g flag with npm (e.g., npm install -g <package-name>), it means you are installing the 
package globally on your system. This means the package will be available system and can be used 
in any project without needing to install it separately in each project folder.

>>Global Installation :
(-g) installs the package in a global location on your system, making it accessible anywhere in your system.

>>Local Installation (without -g) :
Installs the package only in the current project’s node_modules folder, and it is available only within that 
specific project.

#40)What is JSX ?

#41) Swap two variables using three different methods.

let a=30;
let b=600;

#42)
Can you write the same array destructuring swap logic for three variables?
Like: x = 1, y = 2, z = 3 → swap so that x → y, y → z, and z → x.

#43) Tell me the output of this code .
let a=8;
let b=2;

console.log(8%2)
console.log(2%8)

#44) Solve this
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

#47) Solve These Questions.

>A) Generate OTPs

1. Generate a 6-digit OTP 
2. Generate 4,6,8 digit OTPs , you have to create same single code logic for that.
3. Generate a 6-digit OTP. Do not use Math.random; use a cryptographically secure method instead.


>B) Circumference of a Circle

Using:
let radius = 5;

1. Find the circumference of a circle using the formula:
  👉 `2  π  r`
  (Result must be a number, not a string and limited to 2 decimal places.)

#48) Given an array of integers, calculate the total of all its values.

let arr=[10,20,30,40,50];

#49) Find the largest value in an array.

let arr=[10,20,78,30,85,40,50,];

#50) Find the lowest value in the array.

let arr=[10,20,78,4,30,85,40,50,];

#51) Find the first and second maximum values from the array, Create a solution that can find the first and second maximum values from the arrays given below:
let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr2 = [50, 50, 50, 50];
let arr3 = [99, 99, 99, 89, 87];

#52)Reverse the array

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let arr2=[0,45,98,1,33,1,-7,55];

#53)Put 0s on left and 1s on right side.

let arr=[0,0,1,0,1,0,1,1,0,1,0]

#54)Print Each Charcter on new line.

let s="ramratan";

#55)Print the each Charcter on a reverse order on new line.

let s="ramratan";

#56)Check the string is Palindrom or not .

let a="abcdef";

#57)Find two numbers in a sorted array whose sum equals the "target" using two pointers, Your target is 13 and the array is sorted.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

#58)Write a JavaScript function to toggle the case of each character in a given string Without using built-in methods like toUpperCase() or toLowerCase().
let str="YAsh";

#59)
Count how many times each character repeats in a string.(This is a : Frequency counter pattern)

let str = "zZabcdedcjbAeeee";

#60)
1)Use console.log() to display the current year.

2)Create a for loop that calculate the factorial of 5.

3)Write a program to print a 6×6 grid star pattern.
---n=6;
******
******
******
******
******
******

4)Write a program to print the Hourglass / Inverted Diamond Pattern.
---n=5;

*********
 *******
  *****
   ***
    * 
   ***
  *****
 *******
*********


5)Write a program to print the Diamond Star Pattern.
n=5;
    *
   ***
  *****
 *******
********* 
 *******
  *****
   ***
    *
6)Write a program to print a 3×3 grid of numbers from 1 to 9.
1 2 3 
4 5 6 
7 8 9 


#61)In JavaScript, what happens if you declare a variable without using let, const, or var?

#62) Fibonacci Series – 4 Variations

>Q1. Write a function to print the first `n` Fibonacci numbers.
Example:
Input: `n = 10`
Output: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`

---

>Q2. Write a function to return the Fibonacci number at the `n`th position.
Example:
Input: `n = 10`
Output: `34`

---

>Q3. Write a function to return the position of a given number in the Fibonacci sequence. If the number is not part of the Fibonacci series, return `"Not a Fibonacci number"`.
Example:
Input: `num = 34`
Output: `10`

>Q4. Write a function to return the sum of first n Fibonacci numbers.
Example:
Input: n = 10
Output: 88
Explanation: 0 + 1 + 1 + 2 + 3 + 5 + 8 + 13 + 21 + 34 = 88

#63)What is Memoization ?

#64)Why does the first code throw a "Maximum call stack size exceeded" error while the second code runs infinitely without crashing, even though both are designed to run continuously?

---Context :

>>Recursion
Recursion is a programming technique in which a function calls itself to solve a problem by breaking it down into smaller subproblems, continuing until a base case is reached.

>>Backtracking
Backtracking is a method where we try all the possible options.If one option doesn’t lead to a valid solution, we go back and try another option.
We keep doing this until we find the correct solution.
--or-- 
Backtracking is an algorithmic technique built on top of recursion. It’s used to search for all possible solutions by exploring paths, 
and if one path fails, we backtrack and try another.

let test = (n) => {
if (n===0) return;
console.log("hello ji");
test(n--)
};

test(5);


let testTwo = (n) => {
for(let a=n; a>-1; a++){
    console.log("Helllo ji");
}
};

testTwo(5);

#65)Reverse the array  using Bubble sort or Selection Sort or Insertion sort and Merge sort.
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];

#66)Merge Two sorted array ?
let arrayOne = [3, 5, 8, 9, 89, 92];
let arrayTwo = [1, 6, 34, 67, 90,95, 102,999];

#67)You are given a sorted array of distinct integers in ascending order and a target value. Your task is to implement the binary search algorithm to return the index of the target if it is present in the array. If it is not present, return -1.
let target = 25;
let arr = [2, 5, 14, 25, 67, 89, 103, 117, 150];

#68)Write a function to print numbers from n to 1 and from 1 to n without using a loop.
Example 1 (n to 1):
Input: n = 5
Output: 5 4 3 2 1

Example 2 (1 to n):
Input: n = 5
Output: 1 2 3 4 5

#69)Write a function to calculate the sum of first n natural numbers without using a loop.
Example:
Input: n = 10
Output: 55
Explanation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

#70)Write a function to print Fibonacci numbers till n without using a loop.
Example:
Input: n = 10
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
Explanation: Each number is the sum of the previous two numbers.

#71)
In JavaScript, the main thread is single-threaded and runs asynchronously.
Can you write a function that blocks the JavaScript thread for a given number of seconds before continuing execution?

For example, if you call blockThread(3), it should pause execution for 3 seconds before printing "Done" — without using setTimeout, setInterval, or Promise.
*/
