/*
# JavaScript Interview Answers

# Note
> This file contains answers and explanations for all JavaScript interview questions.

--Total: 50 Questions

#Ans 1)

In JavaScript, when the `+` operator is used between a string and a number, JavaScript performs type coercion by converting the number into a string and then concatenating them. As a result, you get a combined string. In contrast, other arithmetic operators (`-`, `*`, `/`, `%`) convert strings into numbers to perform mathematical operations. This difference is why `+` concatenates while other operators do normal math.

"Concatenation" simply means joining things together. "String concatenation" specifically means joining strings. In JavaScript, the `+` operator is used for string concatenation.

>Note:
Apart from `+`, for `-`, `/`, `*`, and `%`, JavaScript performs normal math and does not care if the value is a string.

---a)
let a=5;
let b="10";

let a=5;
let b="10";

let c=b-a; //5 number
let c=b*a; //50 number
let c=b/a; //2 number
let c=b+a //105 string

---b)

let a=9;
let b=9;
let c="5";
let d="3";
let e=undefined;
let f=null;
let g=true;
let h=false;
let i="9"

console.log("a+b", a + b, typeof (a + b)); //18 , number
console.log("c+d", c + d, typeof (c + d)); //53 , string
console.log("a+c", a + c, typeof (a + c)); //95 , string
console.log("e+a", e + a, typeof (e + a)); // NaN, number
console.log("e+i", e + i, typeof (e + i)); // undefined9 string
console.log("e+d", e + d, typeof (e + d)); //undefined3, string
console.log("a+f", a + f, typeof (a + f)); //9, number
console.log("d+f", d + f, typeof (d + f)); //3null , string
console.log("d-f", d - f, typeof (d - f)); //3, number
console.log("a+g", a + g, typeof (a + g)); //10,number
console.log("a-g", a - g, typeof (a - g)); //8,number
console.log("b-h", b - h, typeof (b - h)); //9,number
console.log("b+h", b + h, typeof (b + h)); //9, number

console.log("Sum of a + b = " + a + b, typeof ("Sum of a + b = " + a + b)); //Sum of a + b =99 , string
console.log(a + b + " is a sum of a + b", typeof (a + b + " is a sum of a + b"),); //18 is a sum of a + b , string


#Ans 2)

function a(callback){
    return callback()
}

function b(){
    return "Hey, I am a function b";
}

console.log(a(b));

#Ans 3)

  // First Function Start
  // Second Function Start
  // Third Function
  // Second Function End
  // First Function End

#Ans 4)

// line number 1, undefined
// line number 3, 10
// line number 6, 10
// line number 4, undefined
// line number 2, 10
// line number 5, 20

#Ans 5)

// line number 1: 10
// line number 6: 10
// line number 2: undefined
// line number 3: 29
// line number 4: 31
// line number 5: 31

#Ans 6)

// letFruit: orange varFruit: orange
// letFruit : apple  varFruit : apple
// letFruit : orange  varFruit : apple

#Ans 7)
1)
Hello, my name is  Yash Mishra. I am 22 years old.

2)
undefined
 
#Ans 8)
Lexical scope means that the scope of a variable is determined by where it is written in the code, not where it is called from and Inner Functions can access their parent or outer scope — this is called lexical scoping.

In simple language : The scope of a variable is decided by the place where the function is defined, not where it is called and child function can access it's parent function value.

✅ Scope determined by: Where the function is defined/written
❌ NOT determined by: Where the function is called/executed


--Example 1:

let name = "Yashu";

function outer() {
  let hobby = "Coding";

  function inner() {
    console.log(name);  // ✅ Accesses global `name`
    console.log(hobby); // ✅ Accesses parent scope `hobby`
  }

  inner();
}

outer();

--Example 2:

function outer() {
  let secret = "hidden";

  function inner() {
    console.log(secret);
  }

  return inner;
}

let func = outer();
func(); // ✅ Still prints "hidden" because of lexical scope


#Ans 9)

✅ for...of loop is used for arrays — it provides the values directly.
✅ for...in loop is used to iterate over object keys.
✅ for...in loop can be used on arrays — it provides the indexes instead of values.
❌ for...of cannot be used directly on objects — because plain objects are not iterable.


let arr = [2, 4, 5, 6, 7, 8];

for (let a of arr) {
    console.log(a); // ✅ for...of → provides values of array
}

for (let a in arr) {
    console.log(a); // ✅ for...in → provides indexes of array
}

let userInfo = {
    name: "Yash",
    age: 23
}

for (let b in userInfo) {
    console.log(b); // ✅ for...in → provides keys of object
}

for (let b in userInfo) {
    console.log(userInfo[b]); // ✅ provides values of the object
}

❌ for...of can't be used on plain objects (not iterable)
 for (let x of userInfo) {
  console.log(x); // ❌ TypeError
}

#Ans 10)
Call, apply, and bind are built-in JavaScript methods that control what "this" refers to inside a function. Call and apply invoke the function immediately. Bind, on the other hand, does not call the function right away; instead, it returns a new function with the specified "this" value, and then we have to call it separately. In call and bind, we can pass arguments individually, whereas in apply, arguments must be passed as an array.

--1. `call()` Method

>Definition: `call()` is a method that allows you to invoke a function with a specified `this` value and arguments provided individually.

- Example:
 
let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(post,age){
  return (`${this.firstName} ${this.lastName} ${post} ${age}`)
}

console.log(userInfo.call(userOne,"Full Stack Developer",23))
console.log(userInfo.call(userTwo,"frontEnd-Developer",24))


-- 2. `apply()` Method

>Definition: `apply()` is similar to `call()`, but it takes the arguments as an array rather than individually.

- Example:

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(age,post){
  return (`My name is ${this.firstName} ${this.lastName} ${age} ${post}`)
}

console.log(userInfo.apply(userOne,["Full-Stack-Developer","23"])) //--Pass Info In the form of array
console.log(userInfo.apply(userTwo,["FrontEnd-Developer","24"])) //--Pass Info In the form of array
  

-- 3. `bind()` Method

> Definition: `bind()` creates a new function with a specified `this` value but does not invoke it immediately. Arguments are provided individually, just like `call()`.

- Example:

let userOne={
  firstName:"Yash",
  lastName:"Mishra" 
}

let userTwo={
  firstName:"Ram",
  lastName:"Turkar"
}

let userInfo=function(age,post){
  return (`${this.firstName} ${this.lastName} ${age} ${post} `)
}

let userDataOne=userInfo.bind(userOne,"frontEnd-Developer","23"); //--assign to the variable and then call it
console.log(userDataOne())
let userDataTwo=userInfo.bind(userOne,"frontEnd-Developer","24"); //--assign to the variable and then call it
console.log(userDataTwo())

> Summary:
- `call()`: Calls a function with a specific `this` value and individual arguments.
- `apply()`: Like `call()`, but arguments are passed as an array.
- `bind()`: Creates a new function with a specific `this` value but does not call it immediately. Arguments are passed individually, not as an array.

--Answer:
1)
// output:Yash
2)
// output:
// undefined
// 50
3)
output:12
4)
output:25
5)
output:Audi


#Ans 11)

`this` is a keyword in JavaScript, and its value depends on the environment (browser or Node.js) and on how the function is called.

--1. Global Scope (same for strict and non-strict mode)

In browsers, `this` in the global scope refers to the `window` object.
In Node.js (CommonJS modules), top-level `this` refers to an empty object `{}`.


--2. Inside a Function:

>Normal Function

a) Non-strict mode

In browsers, `this` inside a regular function refers to the global object (`window`).
In Node.js, `this` inside a regular function refers to the global object (`global`).

b) Strict mode ("use strict")

In both browsers and Node.js, `this` becomes `undefined` inside a regular function call.

> Arrow Function (var,let,const)

Arrow functions do not have their own this. They use lexical this (from the outer scope). Therefore strict mode and non-strict mode do not affect this in arrow functions. In the browser it usually refers to the window object and in Node.js it usually refers to the empty object/module scope ({}) (Depending on the outer context)

--3. Inside an Object Method:

a) Regular Function as Object Method

If you use a regular function as a method, this refers to the object itself, which means you can access the object's properties using this. This behavior is the same in both the browser and Node.js. Strict mode does not change this behavior, so in both strict and non-strict mode,this has the same value in the browser and Node.js.

b) Arrow Function as Object Method

If you use an arrow function, it does not have its own this. Instead, it uses lexical this, which means it takes this from the surrounding scope where the function is defined,they inherit this from the outer scope. Because of this In the browser, this usually refers to the window object .In Node.js (CommonJS), it refers to {} (the module scope object).This behavior is the same in both strict and non-strict mode.

>Imp Note

When we use arrow functions, even if they are written inside an object as a method or used normally as an arrow function, they have the same this value. In the browser, this refers to the window object, and in Node.js it refers to {} (module scope). This behavior is the same in both strict and non-strict mode.

>Extra Info

--`this` substitution:

In non-strict mode, JavaScript has automatic `this` substitution. When `this` would normally be `null` or `undefined`, JavaScript substitutes it with the global object (`window` in browsers).

#Ans 12)
console.log(person.regularFunction());
// Output: "Regular: My name is Yash Mishra. I am 22 years old."

console.log(person.arrowFunction());
// Output: "Arrow: My name is undefined undefined. I am undefined years old."

console.log(person.arrowFunctionTwo());
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

--Reason : 
Arrow functions do not have their own this. Instead, they inherit this from the outer lexical scope where they are defined—usually the global scope.
Or, if the arrow function is wrapped inside another function, it inherits this from that outer function.

(In the global space, this refers to the window object (Browser). That is why, when we use an arrow function and try to print this, it gives us the window object)


#Ans 13)

---output 1)
// console.log(person.seeOne());//My name is Yash Mishra.
// console.log(person.seeTwo());//object it's self
// console.log(person.seeThree());//undefined
// console.log(person.seeFour());//My name is Yash Mishra.
// console.log(person.seeFive());//object it's self
// console.log(this);//in global space->window object

---output 2)
// function abc() {
//   console.log(this);
// }

// abc();//window object

#Ans 14)

>Both 1 and 2 code have same output

3
1
2
4
"GO!"


#Ans 15)

>a)
1
2
3
4
5

>b)
6
6
6
6
6
(6 repeated 5 times)


#Ans 16)

a)
1
2
3
4
5

b)
6 repeated 5 times

c)
6 repeated 5 times

Reason : The reason is that the variable was declared outside the loop, so it did not create a new block-scoped variable for each iteration. Instead, the same variable was shared across all iterations. By the time the delayed function ran, the loop had already completed, and the variable had the final value, which was 6.

d)
5 repeated 5 times

e)
6 repeated 5 times

f)
5 repeated 5 times

g)
1
2
3
4
5

h)
6 repeated 5 times

k)
6 repeated 5 times 

L)
1
2
3
4
5

m)
6 repeated 5 times



#Ans 17)
a)
Uncaught TypeError: Assignment to constant variable.
1

b)
1 
Uncaught TypeError: Assignment to constant variable.

Core concept : The code prints 1 because in a for loop, JavaScript executes the loop body first, then the increment. Here, 
setTimeout is scheduled during the first iteration before a++ is attempted. Since a is a const, the increment throws a TypeError, 
stopping the loop. However, the already-scheduled setTimeout still runs, printing 1. So, the output is 1 followed by an error about assigning to a constant.

#Ans 18)
>a)
3
0

>b)
3
0

>c)
0
3
3
3

#Ans 19)
Center ref 10
See count 11
See count 12
SeeTwo count 12
SeeTwo ref 10

Reason:
Primitive data types (number, string, boolean, null, undefined, symbol) are copied by value.
When the original value changes, the copied value does not change.

Non-primitive data types (objects, arrays, functions) are assigned by reference.
When the original value is modified, all references to it reflect the change.


#Ans 20)
---All the concepts of `Destructuring`, `Spread operator`, and `Rest operator` are available in the "Concepts" section. 
Ctrl + F ➤ Just search in concepts section :  #17)
>Destructuring

--1)Problem 1 Ans: 
const {name,address: {city},hobbies: [firstHobbyRenamed]} = user;
console.log(name); // John Doe
console.log(city); // New York
console.log(firstHobbyRenamed); // reading

--2)Problem 2 Ans:

a)
const [one, two, three] = colors;
console.log(one);
console.log(two);
console.log(three);

b)
const [one,two,three="yellow"]=colorsTwo;
console.log(one);
console.log(two);
console.log(three);

--3)Problem 3 Ans:
const userInfo = {
  name: "Alice",
  age: 25,
};

function formatUser({name, age, email = "N/A"}) {
return `${name},${age},${email}`; 
}

console.log(formatUser(userInfo));

>Spread operator

--1)Problem 4 Ans:
//First approach
const combineArray=[0,...arr1,...arr2,...arr3,10];
console.log(combineArray);

//Second approach
const combineArray=[...arr1,...arr2,...arr3];
combineArray.unshift(0)
combineArray.push(10)
console.log(combineArray);

--2)Problem 5 Ans:
const combine={...defaultSettings,...userSettings};

console.log(combine);

--3)Problem 6 Ans:
const numbers = [10, 20, 30, 40, 50];

function calculateSum(a, b, c, d, e) {
  return a + b + c + d + e;
}

console.log(calculateSum(...numbers)); //150, spread operator basically we are expanding the value

>Rest Operator Solutions

---1)Problem 7 Ans:

function multiply(multiplier, ...numbers) {
return  numbers.reduce((accumulator, currentValue) => {
    return accumulator+(multiplier*currentValue)
  }, 0);
}

console.log(multiply(2, 3, 4, 5));

---2)Problem 8 Ans:

const scores = [95, 87, 92, 78, 85, 90, 88];

let [firstOne, secondOne, ...remaining] = scores; // Destructuring (Extract) + Rest operator (Collect)

function average(remaining) {
  let total = remaining.reduce((accumulator, nextValue) => {
    return accumulator + nextValue;
  });
  return total / remaining.length;
}

console.log(average(remaining));
console.log(firstOne);
console.log(secondOne);


--3)Problem 9:

const {id,name,...details}=student  // Destructuring (Extract) + Rest operator (Collect)

console.log(id);
console.log(name);
console.log(details);

#Ans 21)
---Event loop concept is available in "Concepts" section. 
Ctrl + F ➤ Just search in concepts section : #15) 

#Ans 22)
---Global Execution context concept is available in "Concepts" section.
Ctrl + F ➤ Just search in concepts section : #14) 

#Ans 23)
---Callback, Callback hell, Promises->.then and async await concepts are available in "Concepts" section.
Ctrl + F ➤ Just search in concepts section : #4) #5) #6)  #7)  

#Ans 24)
--Abstraction

Abstraction in JavaScript simply means hiding the internal details and showing only the necessary things to the user.

In JS, we don't have keywords like abstract (like in Java), but we can achieve abstraction using classes + methods + private 
fields (or by using functions with closures).

class Login {
  #password;
  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }

  userLogin(inputPassword) {
    if (inputPassword === this.#password) {
      return `${this.name} Login successfully`;
    } else {
      return "Invalid Password";
    }
  }
}

let userOne=new Login("Yash","12345");
console.log(userOne.userLogin("12345")); ✅ 
console.log(userOne.userLogin("123")); ❌

#Ans 25)
---Prototype

Every object in JavaScript has a hidden property called `[[Prototype]]`, which refers to another object called its prototype.
This prototype object contains properties and methods that can be inherited by other objects through the prototype chain.

or 

Every object has a hidden object called a prototype that contains methods and properties. With the help of prototype inheritance, objects can share their properties and methods.

--- Prototype Inheritance

Prototype inheritance means that one object can inherit properties and methods from another object through its prototype, 
forming a chain of inheritance known as the prototype chain.

or

Prototype inheritance in JavaScript allows an object to inherit shared properties and methods from another object through 
the [[Prototype]] link


---Code

const usersName = {
   userOneName: "Yash",
   userTwoName: "Ram"
};

const usersAge = {
  userOneAge: "23",
  userTwoAge: "24"
};

// Set the prototype of usersAge to usersName
Object.setPrototypeOf(usersAge, usersName);

// Get the prototype of usersName
console.log(Object.getPrototypeOf(usersName));

// Accessing userOneName from usersAge
console.log(usersAge.userOneName); 
console.log(usersAge.userTwoName); 


#Ans 26)
---Type Coercion vs Type Casting and Concatenation concepts are available in the "Concepts" section.
Ctrl + F ➤ Just search in concepts section : #20)  

#Ans 27)
>Babel
Babel is a JavaScript compiler/transpiler that allows developers to use the latest JavaScript features without worrying about browser compatibility. It transpiles modern JavaScript code (like ES6+) into versions that older browsers can understand, ensuring wider support and It also converts React's JSX syntax and TypeScript into regular JavaScript.

->In simple language: Babel converts modern JavaScript code into an older form so that older browsers can understand it and it convert jsx and ts code into js.

->Note : Babel is specifically designed for JavaScript. It's not a general-purpose tool for other programming languages.


>SWC
SWC (Speedy Web Compiler) is like Babel's ultra-fast younger sibling ⚡. It does the same job — compiling modern JavaScript (and TypeScript) into older, browser-compatible code — but it's written in Rust, which makes it significantly faster than Babel.

>Bundlers
Bundlers (such as Webpack, Parcel, esbuild, rollup and Vite) are powerful tools for the frontend. They take all files and assets (JavaScript, CSS, images, etc.) and bundle them into optimized files to ensure efficient loading. (use this)

->In simple language: Bundlers take all the files and bundle them into a single or fewer optimized files.

--Note 🖖🖖👇: 
Vite is built using a combination of esbuild and Rollup, so Babel is not required for converting modern JavaScript into older JavaScript or for converting TypeScript/JSX into plain JavaScript. These transformations are handled by esbuild. However, if we choose the SWC option while creating a React project, then SWC performs these transformations instead of esbuild but by default, Vite uses esbuild, not Babel.

#Ans 28)

1. To use npm (Node Package Manager):  
  -Reason: When you install Node.js, it comes with npm (Node Package Manager), which is essential for installing and managing 
  JavaScript packages like TypeScript, React, and other libraries used in development. Without npm, you can't easily install 
  these packages.
  
2. To run JavaScript outside the browser:  
   - Reason: Node.js provides a JavaScript runtime environment, allowing you to run JavaScript
    on the server-side or locally (e.g., running backend services or development tools).

3. For modern development tools:  
   - Reason: Tools like Webpack, Babel, and TypeScript compilers are built on top of Node.js. 
   Node.js is required to run these tools for building and optimizing code.

#Ans 29)
- JSX (JavaScript XML) is a syntax extension for JavaScript used in React. With the help of JSX, we can write HTML-like code 
inside JavaScript

#Ans 30) Variable Declared Without let / const / var

When we declare a variable without using `var`, `let`, or `const`, it becomes a global variable. This means we can access it from
anywhere in the code — even from inside a function or block — but only after declaring it. If we try to access it before
declaring, it gives us an Uncaught ReferenceError.

If you create a global variable by not using let, var, or const, you can re-declare and re-assign it anywhere in your code.
It's essentially like having a variable that's always in the global scope, so you can change its value or even declare it again without
any issues.

This behavior is specific to JavaScript because of how it handles variable declarations and the global scope. Other languages,
like Python, Java, or C++, have their own rules and scoping mechanisms.

---Example:

function check() {
  console.log("Just checking");
  {
    umar = 23;
  }
}

check();
console.log(umar); // 23 — accessible globally

#Ans 31)
console.log([] == false);
=>true 
When we use == then JS "changes types" to compare the values so [] becomes an empty string (""), and "" becomes 0 when converted to a
number, and false is converted into 0, that's why answer is true.

console.log([] === false);
=>false
JS does NOT convert values when using === , That's the whole point of strict equality — it compares values as-is, 
without converting them, [] is an object (array is technically an object type), Since they are different types 
(object !== boolean), it is immediately gives false,=== checks type and value strictly, so array (object) and
boolean are not the same type, hence false.

#Ans 32)
 Answer: c) `splice()`

`splice()` modifies the original array → ❌ mutable
`map()`, `filter()`, and `concat()` return a new array without changing the original → ✅ immutable

So, `splice()` is the only mutable one among them 👀


#Ans 33)
>a)
Promise {<fulfilled>: 'Yash'}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "Yash"

>b)
Promise {<pending>}

[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: "23"

#Ans 34)
let a=8;
let b=2;

console.log(8%2)//0
console.log(2%8)//2 (if a%b and a<b, the answer will be a)

#Ans 35) 
console.log(10>5 && -55<56 && 67<88)//true
console.log(10>5  -55<56 && 67>88)//false
console.log(100=="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88<102)//true
console.log(100==="100" || 2>-9 || 88>102)//true
console.log(100==="100" || 2<-9 || 88>102)//false

#Ans 36)
Context 
Unary Operator (++,--)

Pre Increment and Decrement
++x
--x

Post Increment and Decrement

x++
x--


1)
let a=10;
let ansPost=a++;
console.log(ansPost)//10

2)
let b=10;
let ansPre=++b;
console.log(ansPre)//11

3)
let x=10;
let ansPost=x++;
let ansPre=++x;
console.log(ansPost);//10
console.log(ansPre);//12

4)
let i=11; 
let answer=i++ + ++i;
console.log(answer);//24

5)
let p=11; 
let value=p++ + p;
console.log(value);//23

6)
let a = 3, b = 1;

let c = a + b + a++ + b++ + ++a + ++b;
console.log("a=" + a); // a=5
console.log("b=" + b); // b=3
console.log("c=" + c); // c=16

// Step-by-step breakdown:
// a=3, b=1
// a   → 3  (a stays 3)
// b   → 1  (b stays 1)
// a++ → 3  (returns 3, then a becomes 4)
// b++ → 1  (returns 1, then b becomes 2)
// ++a → 5  (a becomes 5, returns 5)
// ++b → 3  (b becomes 3, returns 3)
// c = 3 + 1 + 3 + 1 + 5 + 3 = 16

7)

a)
let a=true;
a++;
console.log(a);//2

b)
let see=false;
see++;
console.log(see);//1

c)
let x=10;
console.log(x++)//10

d)
let y=15++;
console.log(y);

output=Uncaught SyntaxError: Invalid left-hand side expression in postfix operation
In simple language, we cannot apply a unary operator on a constant value; we can apply it on a variable but not on a constant value.

e)
let p=10;
let ans=(p++);
console.log(p);//11

f)
let p=10;
let ans=++(p++);
console.log(p);

output=Uncaught SyntaxError: Invalid left-hand side expression in prefix operation.
Same reason we cannot apply unary operator.

let p=10;
let ans=++(p++)
First bracket solved so:  ++(p++)=++11; (so after bracket solved, ++ is applied on a constant value — that's why it's giving an error)

#Ans 37)

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("Code End");
  });

--Using Async await (try/catch):

let info = async () => {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Code End");
  }
};
info();

#Ans 38)

>🤚 IMP: Summary for Deep vs Shallow Copy:

-- ✅For shallow copy, use the spread operator `{...}` or `Object.assign()` — but remember, it only copies the first layer.

-- ✅ For Deep copy:

=> Use `structuredClone()` It can create deep copy, but it cannot work with functions , modern way (Node 17+, Chrome 98+).
=> Use `_.cloneDeep()` from Lodash for deep copy it work with functions also. (you're working with older browsers or complex structures)


>A)
//shallow copy 

let copy={...profileOne};

copy.name="Ram";

console.log(profileOne);//Yash
console.log(copy);//Ram


>B)
//Deep Copy (In this we can not use shallow copy technique)

Reason :
structuredClone creates a deep copy, so changes in the copied object do not affect the original object. However, if we use the spread operator, it creates a shallow copy and changes to nested properties will also affect the original object.

let copy=structuredClone(profile);

copy.name="Ram";
copy.social.twitter="@ramdev";

console.log(profile);
console.log(copy);

>C)

let copy=structuredClone(user);

copy.name="Ram";
copy.skills[1]="Typescript";
copy.address.pin=99000;

console.log(user);
console.log(copy);


>D)
//Deep copy 

Note: Functions (methods) are not cloned by deep copy methods like structuredClone. After copying the data, any methods must be manually reattached to the copied object to ensure they still work.

const { info, ...userData } = user;

const copy = structuredClone(userData);

copy.info = user.info;

copy.name = "Ram";
copy.skills[1]="Typescript"
copy.address.city = "Indore";
copy.address.pin = 99998;

console.log(user.info()); // original unchanged
console.log(copy.info()); // updated values

#Ans 39)
let names = ["Yashu", "Vani", "Code", "Fun", "🔥"];

let ansOne=names.slice(1,3);
console.log(ansOne);

let ansTwo=names.splice(2,2,"Success");
console.log(names);

#Ans 40)
let randomNumber = (numOne, numTwo) => {
  return Math.floor(Math.random() * (numTwo - numOne + 1) + numOne);
};
console.log(randomNumber(2, 10));
console.log(randomNumber(2, 10));
console.log(randomNumber(2, 10));

#Ans 41)

1)First Way : Using a temporary variable

 let c;

 c=a;
 a=b;
 b=c;

 console.log(a);
 console.log(b);

2)Second Way: Using arithmetic operations

 a=a+b;//630
 b=a-b;//630-600=30
 a=a-b;//630-30=600

 console.log(a,b);

3)Third Way : Using Array destructuring (ES6)

[a,b]=[b,a]
console.log("a=",a);
console.log("b=",b);


#Ans 42)

let x = 1;
let y = 2;
let z = 3;

[x,y,z]=[y,z,x]
console.log(x,y,z);

#Ans 43) 
let a=5859;

console.log(Math.floor(a / 10)); // 585
console.log(a % 10); // 9


#Ans 44)
>A)
1)
const sixDigitOTP = () => {
  return Math.floor(Math.random() * (999999 - 100000 + 1) + 100000).toString();//Most companies keep OTPs as strings when sending to users, because users see it as text.
};

console.log(sixDigitOTP());

2)
const generateOTP = (length) => {
  if (length <= 0) return;
  let min = 10 ** (length - 1);
  let max = 10 ** length - 1;
  return Math.floor(Math.random() * (max - min + 1) + min).toString();
};

console.log(generateOTP(4));
console.log(generateOTP(6));
console.log(generateOTP(8));

3)Industry Standard)

const crypto = require("crypto");

const generateOTP = (length) => {
  if (length <= 0) return;
  let min = 10 ** (length - 1);
  let max = 10 ** length ;
  return crypto.randomInt(min,max).toString();
};

console.log(generateOTP(6));


---Explanation:

Math.random() is fine for simple randomness in games or UI, but it's not secure since it's a pseudo-random generator, 
meaning the numbers are generated by a predictable algorithm and are not truly random.

For OTPs, tokens, and authentication, we use cryptographically secure random number generators like crypto.randomInt(). 
These rely on system-level entropy sources such as CPU timing differences, disk activity, mouse movement, keyboard input, 
network events, and even small temperature variations — making the output truly unpredictable and safe for security-critical 
applications.

(In computer security, entropy means randomness or unpredictability)

>B)
// Formula: 2 × π × r
let radius = 5;
let ans = Number((2 * Math.PI * radius).toFixed(2));
console.log(typeof(ans));
console.log(ans);

#Ans 45) Current Year & Factorial

--1) Display the current year:
let getCurrentYear = new Date();
console.log(getCurrentYear.getFullYear());

--2) Calculate the factorial of 5:
let factorial = 1;
for (let a = 5; a > 0; a--) {
  factorial *= a;
}
console.log(factorial);

#Ans 46) Block Thread

---Proper synchronous busy-wait approach (truly blocks the thread)

const blockThread = (seconds) => {
  const end = Date.now() + seconds * 1000;
  while (Date.now() < end) {
    // busy-wait: keeps looping until the time has elapsed
  }
  console.log("Done");
};

console.log("Start");
blockThread(3);
// After 3 real seconds, "Done" is printed synchronously

- Time Complexity: O(t) — where t is the number of milliseconds waited
- Space Complexity: O(1)

---Alternative async approach (does not truly block the thread)

> Note: The approach below uses async/await with setTimeout, so it does NOT truly block.
> It only pauses execution within the async function. Use it when you want a non-blocking delay.

console.log("Start");

let loopDuration = async (para) => {
  for (let a = 1; a <= para; a++) {
    await new Promise((res) => {
      setTimeout(() => {
        res();
        console.log(`Loop Duration is ${a}`);
      }, 1000);
    });
  }
};

loopDuration(6).then(() => {
  console.log("End");
});

#Ans 47)
>Constructor

When we create a new object using the new keyword, the constructor inside the class is automatically called. 
The constructor is mainly used to create and initialize the properties of the object inside the class.


class UserInfo {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  showInfo() {
    console.log(`User name is ${this.name} and User is a ${this.role}`);
  }
}

const userOne = new UserInfo("Yash", "Software Developer");
console.log(userOne);
userOne.showInfo();

const userTwo = new UserInfo("Vani", "Backend Developer");
console.log(userTwo);
userTwo.showInfo();

const userThree = new UserInfo("Gaurav", "Frontend Developer");
console.log(userThree);
userThree.showInfo();

#Ans 48)
>Encapsulation 
Encapsulation means restricting direct access to the internal data of a class and only allowing access through controlled 
public methods. In JavaScript, we use # to declare private fields inside a class. This ensures data protection and prevents 
unauthorized modifications.

--In simple language 

Encapsulation means hiding internal details and only exposing necessary things. In JavaScript, we use # for private 
properties (ES2022+).

--❓ Why didn't we use a constructor in this code?

We didn't use a constructor in this code because the private field #balance is already initialized with a default value (100). 
If we wanted to make the starting balance dynamic, then we would need a constructor."



class BankAccount {
  #balance = 100;

  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be greater than 0.");
      return;
    }

    this.#balance += amount;
    console.log(
      `₹${amount} deposited successfully. Your current balance is ₹${this.#balance}.`
    );
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      console.log("Insufficient balance.");
      return;
    }

    this.#balance -= amount;
    console.log(
      `₹${amount} withdrawn successfully. Your current balance is ₹${this.#balance}.`
    );
  }

  checkBalance() {
    console.log(`Your current balance is ₹${this.#balance}.`);
  }
}

const userOne = new BankAccount();
userOne.checkBalance();
userOne.deposit(1500);
userOne.withdraw(500);


#Ans 49)
>Inheritance

Inheritance is a concept where one class (called the child or subclass) can inherit properties and methods from 
another class (called the parent or superclass) using the extends keyword in JavaScript.

>super keyword

The super keyword is used to call the constructor and methods of the parent class from within the child class.

class TeamInfo {
  constructor(teamName, teamRole, teamSize) {
    this.teamName = teamName;
    this.teamRole = teamRole;
    this.teamSize = teamSize;
  }

  getTeamInfo() {
    return `Team name: ${this.teamName} | Team role: ${this.teamRole} | Team size: ${this.teamSize} members`;
  }
}

class TeamCurrentTask extends TeamInfo {
  constructor(teamName, teamRole, teamSize, currentTask) {
    super(teamName, teamRole, teamSize);
    this.currentTask = currentTask;
  }
  getTeamInfoWithTask(){
  return `${super.getTeamInfo()}. Currently, the team is working on ${this.currentTask}.`;
  }
}


let teamCurrentTask=new TeamCurrentTask("Frontend Warriors","Handling Frontend Task",12,"Food Website");
console.log(teamCurrentTask.getTeamInfoWithTask());

#Ans 50)
--- Polymorphism
Polymorphism is a concept where multiple classes can have methods with the same name, but each class provides its own different 
use case or behavior.

In JavaScript, this is usually achieved through "method overriding", where a child class overrides a method inherited from its 
parent class to provide a different functionality.

>Difference (one-liner trick)

--Overriding → Same method name, same parameters, but redefined in child class (runtime).
--Overloading → Same method name, different parameters (compile-time → but JS doesn't true method overloading like C++ and Java).

class SMSNotification {
  send() {
    console.log("Sending a generic notification");
  }
}

class EmailNotification extends SMSNotification {
  send() {
    console.log("Sending Email Notification");
  }
}

class PushNotification extends EmailNotification {
  send() {
    console.log("Sending Push Notification");
  }
}

const sendNotification = [
  new SMSNotification(),
  new EmailNotification(),
  new PushNotification(),
];

sendNotification.forEach((n) => {
  n.send();
});

// ─────────────────────────────────────────────────────────────────
// 📊 DSA Answers (Arrays, Strings, Sorting, Searching, Recursion)
//    have been moved to the dsa/ folder.
//    ➡ See: dsa/questions.js and dsa/answers.js
// ─────────────────────────────────────────────────────────────────
*/
