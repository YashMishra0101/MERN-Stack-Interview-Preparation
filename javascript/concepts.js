/*
### What’s This Section About ? 

  This section is mainly for revising JavaScript from the basics, Even though it starts from scratch, BUT you should already know a JavaScript,
  It's not for complete beginners.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#0)Basic Info

JavaScript was developed by Brendan Eich in just 10 days in 1995 while he was working at Netscape Communications Corporation.
Initially named Mocha, it was later called LiveScript before adopting the name JavaScript. It's an interpreted language,
meaning it executes code line by line and is single-threaded.

JavaScript can be run in browsers and Node.js. Browsers use Javascript Enging for running js code like.

JavaScript Engine : A JavaScript engine is responsible for executing JavaScript code in the browser. 
It processes JavaScript, optimizes it, and runs scripts efficiently.

Rendering Engine: A Rendering engine (also called a layout engine) is responsible for converting 
HTML, CSS, and images into what you actually see on the screen. It determines how the webpage 
looks and is displayed.

Chrome use          : V8 engine      (Rendering - Blink),
Microsoft Edge uses : V8 engine      (Rendering - Blink),
Brave also use      : V8 engine      (Rendering - Blink),
Safari uses         : JavaScriptCore (Rendering - Webkit),
Firefox             : SpiderMonkey   (Rendering - Gecko), 

-Node.js, on the other hand, is not a framework or language but a software platform. It uses the V8 engine, the same one used by Google Chrome, to run JavaScript 
code in any terminal or command-line prompt.

JavaScript is fundamentally an interpreted language because it executes source code directly without 
a separate compilation step before runtime. However, modern JavaScript engines like V8 use JIT (just-in-time) compilation 
to optimize performance by compiling JavaScript code into machine code at runtime. So, while JavaScript remains an 
interpreted language, it benefits from JIT compilation in engines like V8, which significantly improves its performance. 

V8 uses just-in-time (JIT) compilation to translate JavaScript into optimized machine code at runtime, which speeds up
execution. So, while JavaScript benefits from improved performance with V8, it remains rooted in its interpreted nature.

-JavaScript is a synchronous single-threaded language means it excute code line by line.

#1)Three way to declared variable in javascript (Var,let,Const)

>In var, we can redeclared and reassing them and Var is function scope.

var a = 10;
var a = 20;
console.log("In Var:", a);
a=30;
console.log("In Var:", a);

>In let, we cannot redeclared the variable but we can reassign them and let is block scoped.

let b = 30;
    b = 32;
console.log("In let:", b);
 
let b = 40; (not valid)
console.log("In let:", b);

>>>In const we cannot redeclared or reassign the variable and const is also a block scoped.

const c = 50;
console.log("In Const:", c);

>>Extra Info

🤚🔥V.Imp👉-When we use var and let, we can assign a variable's value After Declaration, but during
const, it is necessary to define the value during declaration

- var is function scope and let and const are block scoped

-Using let and const is generally better because they avoid problems caused by var's function scope 
and hoisting and let and const are block scope.


--Example:function scope using var

function one() {
    if(true){
        var a=10;
    }
        console.log(a) //output:10
    }
    one()
        
--Example:Block scoped using let
        
    function one() {
    if(true){
    let a=10;
    }
    console.log(a)//refrence error
}

one()

?? Identifiers: Names given to variables, functions, properties, etc, to uniquely identify them.


#2)Functions in Javascript, There are Three way :-

--1)Normal function

function naam() {
  console.log("Hi I am a normal Function");
}

naam();

function naamTwo(num1, num2) {
  console.log(num1 + num2);
}

naamTwo(5, 2);

function naamThree(add) {
  console.log(add);
}

naamThree(3 + 7);

--2)Anonymous Function (If a function doesn’t have a name,So we store it in a variable.)

  const ano = function () {
    console.log("Hello Ji I am a Anonymous Function");
 };

ano()

--3)Arrow Function

const arrow =(print,printTwo)=>{
    console.log(print,printTwo);
}

arrow ("I am a arrow Fucntion", "✋Two");

>If there is a single Parameter in arrow function

const arrowTwo=(value)=>console.log(value);

arrowTwo("I a Value");

--> Reference Assignment (The reference of one variable is given to another variable).

let a = [1, 2, 3, 5];

let b = a;

console.log(b);

>Function Expression (Store function into a variable called Function Expression)

  const fExpress = function ex() {
    console.log("I am a Function Expression");
  };

fExpress();

#3)Parameter and Argument

/*
Parameter and argument are both part of a function. When we call a function and pass a value inside it, we use an argument to send
that value. The parameter, on the other hand, receives the value sent by the argument and handles it within the function. So, when 
we call a function and try to pass a value, that value is called an argument. Then, inside the function, that value is received 
and handled by the parameter.

Example: 

let abc=(name)=>{
    return name;
}

console.log(abc("Yashu"))

-->Yashu ->Argument
-->name  ->Parameter

#4)About Call Back :-

When "A function" is passed as an argument into "Another function", then it is called a callback function.
(It executed either immediately, after the main function completes its task, or at a later time, depending on how the callback is used.

1. Types of Callbacks:
   - Synchronous Callbacks: Executed right after the main function completes its task (typically 
   in simple operations like calculations).
   - Asynchronous Callbacks: Executed after a delay or once a specific task (like an API request or 
   file read) is finished.

2. Common Use Cases:
   - API requests and database queries that are time-dependent.
   - Event handling, such as responding to button clicks.
   - Timers, using `setTimeout` or `setInterval`.

3. Example of Synchronous Callback:

   function calculate(a, b, callback) {
       let sum = a + b;
       callback(sum);  // Executes immediately after sum is calculated
   }
   calculate(3, 5, (result) => {
       console.log('Sum:', result); // Output: 'Sum: 8'
   });


4. Example of Asynchronous Callback:

   function fetchData(callback) {
       setTimeout(() => {
           console.log('Data fetched');
           callback();  // Executes after 2 seconds
       }, 2000);
   }
   fetchData(() => {
       console.log('Processing data after fetching');  // Output after 2 sec
   });
   

5. Importance:
   - Callbacks allow for non-blocking operations, meaning they let code run while waiting for 
   time-consuming tasks (like fetching data).
   - Vital in JavaScript for managing asynchronous tasks, such as API calls, file handling, 
   and user interactions.

6. Drawbacks:
   - Using too many callbacks or nesting them deeply can result in callback hell, making your 
   code hard to read and maintain.
   - You can avoid callback hell by using promises or async/await, which provide a 
   cleaner way to handle asynchronous code.


#5)About Callback Hell :

Callback Hell is a situation in JavaScript where multiple nested callbacks are used to handle asynchronous operations, leading to 
deeply nested and difficult-to-read code. This makes the code hard to maintain, scale, and debug.


>Explanation

1. Concept:
   - Callback Hell happens when callbacks are nested within each other, leading to deeply
    indented code.
   - This nesting can make the code look like a pyramid (often called the "Pyramid of Doom"), 
   making it harder to follow and manage.

2. Why It Happens:
   - Asynchronous operations (like reading files, making network requests, or waiting for timers) 
   often use callbacks to handle their results.
   - When multiple asynchronous operations are chained together, the need for callbacks in each 
   operation can lead to deep nesting.

--- Example:
 
let one = (callMe) => {
  setTimeout(() => {
    console.log("My");
    callMe();
  },1000);
};

let two = (callMe) => {
  setTimeout(() => {
    console.log("name");
    callMe();
  },1000);
};

let three = (callMe) => {
  setTimeout(() => {
    console.log("is");
    callMe();
  },1000);
};

let four = (callMe) => {
  setTimeout(() => {
    console.log("yash");
    callMe();
  },1000);
};

let five = (callMe) => {
  setTimeout(() => {
    console.log("mishra");
  },1000);
};


let start=()=>{
one((()=>{
  two((()=>{
    three(()=>{
      four(()=>{
        five()
      })
    })
  }))
}))
}

start()

-- In the example above, each function relies on the completion of the previous function, resulting in nested callbacks.

 Problems with Callback Hell:

   - Error Handling: Callback functions don't have built-in error handling like Promises or async/await. That's one of their 
    biggest weaknesses.There’s no structured way like .catch() in Promises or try...catch in async/await to handle errors.

   - Readability: Deeply nested callbacks make it hard to read and understand the code.

--Solutions:

  - Promises: Flatten the code structure by chaining `.then()` calls.
  - Async/Await: Write asynchronous code in a more synchronous-looking style, improving readability and maintainability.

>Summary

In summary, callback hell is the challenge of managing deeply nested callbacks in asynchronous code.
it can make the code hard to read and maintain. Modern solutions like Promises and async/await
provide cleaner, more manageable ways to handle asynchronous operations, reducing the problems
associated with callback hell.

#6)Promises

Promises are a better alternative to callbacks for handling code. If our code is successful, it resolves with 
the help of the resolve function. If our code fails, we can handle it with the help of the reject function,
and we can use catch for handling errors in promises.

--A promise can have three states:

.Pending: The work is still happening.
.Resolved (Fulfilled): The work is done successfully.
.Rejected: The work failed, and there’s an error.

--We also have catch and finally  👇👇

.catch(()=>{

})

.finally(()=>{

})

--Why are Promises Used?

.To avoid callback hell: Writing a lot of nested callbacks makes code hard to read. Promises simplify that.
.Better error handling: Promises handle errors in a clear way using .catch().
.Easier chaining: You can run tasks one after another using .then().

>Syntax -

let promise = new Promise (function (resolve, reject) {

// Make an asynchronous call and either resolve or reject

});

>>>Example of Promises 

let one = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("My");
    }, 1000);
  });
};

let two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("name");
    }, 1000);
  });
};

let three = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve("is");
      reject("is");
    }, 1000);
  });
};

let four = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // reject("yash");
      resolve("yash");
    }, 1000);
  });
};

let five = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("mishra");
      // reject("mishra");
    }, 1000);
  });
};

let start = () => {};
one()
  .then((mess) => {
    console.log(mess);
    return two();
  })
  .then((mess) => {
    console.log(mess);
    return three();
  })
  .then((mess) => {
    console.log(mess);
    return four();
  })
  .then((mess) => {
    console.log(mess);
    return five();
  })
  .then((mess) => {
    console.log(mess);
  })
  .catch((error) => {
    console.log("Error : ",error);
  })
  .finally(() => {
    console.log("Code End");
  });
start();



#7)Asyn await

Async/await is a better option compared to simple Promises and callbacks. It works with Promises and provides 
additional functionality. With the help of async, a Promise is created automatically. 

The resolved and rejected 
states are handled using try and catch blocks. When the code is resolved, it is executed inside the try block, 
and if the code is rejected, it is handled with the help of the catch block.

async: It is a keyword that you place in front of a function. It tells JavaScript that this function will 
contain asynchronous code and will return a Promise.

await: It is used inside an async function. It makes JavaScript wait for a Promise to resolve (or reject) 
before moving to the next line of code.

>>Example of async/await


let one = () => {
  return new Promise((resolve, reject) => {
    resolve("My");
  });
};
let two = () => {
  return new Promise((resolve, reject) => {
    resolve("name");
  });
};
let three = () => {
  return new Promise((resolve, reject) => {
    resolve("is");
    // reject("is");
  });
};
let four = () => {
  return new Promise((resolve, reject) => {
    resolve("yash");
  });
};
let five = () => {
  return new Promise((resolve, reject) => {
    resolve("mishra");
  });
};

let start = async () => {
  try {
    let messOne = await one();
    console.log(messOne);
    let messTwo = await two();
    console.log(messTwo);
    let messThree = await three();
    console.log(messThree);
    let messFour = await four();
    console.log(messFour);
    let messFive = await five();
    console.log(messFive);
  } catch (error) {
    console.log(error);
  }
  finally{
    console.log("Code Ends");
  }
};

start();

>API callig with Promises and async await

--Using Promises (then/catch):

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((info) => {
   return info.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("error", error);
  })
  .finally(() => {
    console.log("Api fetching completed");
  });

--Using async await :

async function userInfo() {
  try {
    --await waits for the Promise to resolve
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    --await waits for the response to be converted to JSON
    let data = await response.json();
    console.log(data);
  } 
  catch (error) {
    console.log("Error", error);
  } 
  finally {
    console.log("Api fetching completed");
  }
}

userInfo();


--The async/await version is cleaner and easier to understand, right.


#8)Scope chain, Lexical Scope (Closer)

>Scope Chain

--Simple Explanation:

Scope Chain: When the JavaScript engine needs to find a variable, it starts looking in the current scope. 
If it doesn't find it, it moves to the outer scope, and keeps going up the chain until it reaches the global scope.

--Example:

function outerFunction() {
  var outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Looks in innerFunction's scope first, then outerFunction's scope
  }

  innerFunction();
}

outerFunction()

In this example:
- `innerFunction` looks for `outerVar`.
- It doesn't find `outerVar` in its own scope, so it looks in `outerFunction`'s scope.
- This process of looking up through the scopes is the scope chain.


> Lexical Scope

Definition: Lexical scope means that a inner function can access variables that are defined in its outer scope.

-- Simple Explanation:

Lexical Scope:If you have a function inside another function (nested function), 
the inner function can access variables from the outer function.

--Example:

function outerFunction() {
  var outerVar = "I am outside!";

  function innerFunction() {
    console.log(outerVar); // Can access outerVar because of lexical scope
  }

  innerFunction();
}

outerFunction();

In this example:
- `outerVar` is defined in `outerFunction`.
- `innerFunction` can access `outerVar` because it is within the lexical scope of `outerFunction`.

-- Summary In simple terms:

-The scope chain is the path JavaScript follows to find a variable if it's not in the current box. (Because)
-Lexical scope is like a nested set of boxes. The inner box (function) can look into the outer box (function) to find variables. 


#9)What is closer

A closure in JavaScript means that an inner function has access to the outer function’s variable and even after 
the outer function has completed execution.

let outerFun=()=>{
  let name="My Name is Yash I am a Front End Developer";
  function innerFun (){
   console.log(name)
  }
  return innerFun;
}

let print=outerFun();
print()


#10) Static Languages vs Dynamic Languages

--Static Languages:

Static programming languages, such as Java, C++,Kotlin etc require the developer to explicitly declare the data type of
variables at the time of declaration. For example, in Java, you would write `int number = 10;`, where the type `int` must 
be mentioned. These languages use a compiler to convert the entire source code into machine code before execution. The 
compiler scans the whole codebase during this compilation phase, and this process happens before the program is run.

If there are any syntax errors, type mismatches, or other issues, they are reported during compilation—before the program 
even starts executing. This early error detection makes static languages highly suitable for large-scale applications, as
many problems can be caught early, reducing runtime failures and improving overall code safety and reliability.


--Dynamic Languages:

Dynamic programming languages, such as Python, JavaScript, PHP etc do not require developers to explicitly specify variable 
types during declaration. For instance, you can simply write `number = 10` in Python or JavaScript without mentioning the type. 
These languages use an interpreter, which reads and executes the code line by line during runtime, unlike static languages
where code is compiled beforehand.

In dynamic languages, code is interpreted at runtime, so errors are only detected when the interpreter reaches the specific
line causing the issue. This means the program may execute partially before throwing an error. While dynamic languages offer more
flexibility, quicker prototyping, and faster development cycles, they can also introduce unexpected bugs that are harder to trace,
specially in larger codebases.


#11) Hoisting Explained

Hoisting is a JavaScript mechanism where variable and function declarations are processed during the creation phase 
before code execution, which happens before code execution begins. This means that function declarations are fully hoisted, including 
their function body, allowing them to be invoked even before their actual declaration appears in the code. In the case of variables 
declared with var, only the declaration is hoisted—not the initialization—so they are initialized with the value undefined until the 
line of code where the assignment actually happens. On the other hand, variables declared with let and const are also hoisted, 
but unlike var, they remain uninitialized and enter a state known as the Temporal Dead Zone (TDZ). Accessing them before their 
declaration line results in a ReferenceError. This entire compile-time process of moving declarations to the top is known as
hoisting.


Quick Points:

- During the compile phase : It's important to note that hoisting occurs during the compile phase, not during code execution.
- Variable and function declarations : Both variables and functions are hoisted, means moved to the top of their containing scope.
  But :-
->Function declarations are fully hoisted (name and body).
->Variable declarations are hoisted, but their values are not, only the declarations, not the initializations.

>Hosting with variable (var, let, const) 

1. `var`:

During the compilation phase, variables declared with var are hoisted to the top of their containing scope 
and are automatically initialized to undefined.

- Variables declared with `var` are hoisted to the top of their scope.
- They are initialized with `undefined` during the hoisting phase.  
- Accessing them before declaration does not throw an error but returns `undefined`.

--Example :

console.log(hoistedVar); // Output: undefined (hoisted but not initialized)

var hoistedVar = 5;

console.log(hoistedVar); // Output: 5

2. `let` and `const`:

- Variables declared with `let` and `const` are also hoisted, but they are not initialized during the hoisting phase.  
- They remain in the "temporal dead zone" (TDZ) from the start of their scope until the code execution reaches their declaration.  
- Accessing them before declaration results in a `ReferenceError`.

Example with `let`:

console.log(notHoistedVar); // Throws ReferenceError: Cannot access 'notHoistedVar' before initialization

let notHoistedVar = 10;

Example with `const`:

console.log(notHoistedConst); // Throws ReferenceError: Cannot access 'notHoistedConst' before initialization

const notHoistedConst = 15;

>>Hoisting In Function

--Function Declarations

Function Declarations: Are hoisted completely (both the name and body), so they can be called before they are 
defined in the code.


Example:
hoistedFunction(); // This works because hoistedFunction is hoisted

function hoistedFunction() {
    console.log("This function is hoisted!");
}


--Function Expressions

 Function expressions, where you assign a function to a variable, are not hoisted. Only the variable declaration
 is hoisted, not the function assignment ,so calling the function before assignment results in a TypeError.

 Arrow Functions (or Functions Assigned to Variables):When you assign a function—whether arrow or even a normal function—to a variable (using var, let, or const), only the variable declaration is hoisted—not the function body.

 If you use let or const, the variable is hoisted but remains in a "temporal dead zone" until the line of initialization. Accessing it before initialization throws a ReferenceError.
 If you use var, the variable is hoisted and set to undefined. So if you try to call it before the assignment, you’re calling undefined function that's why we got a TypeError. 

--Example:

a()  //TypeError: a is not a function

var a =function (){
 console.log("Hey I a function")
}


b()  //ReferenceError: Cannot access 'b' before initialization

 let b =function (){
  console.log("Hey I a function")
 


> Key Differences Between `var`, `let`, and `const` in Hoisting:

| Declaration Type | Hoisted       | Initialized           | Access Before Declaration     |
|----------------------|-------------------|---------------------------|-----------------------------------|
| `var`                | Yes               | Initialized to `undefined`| Allowed, returns `undefined`.     |
| `let`                | Yes               | Not initialized (TDZ)     | Throws `ReferenceError`.          |
| `const`              | Yes               | Not initialized (TDZ)     | Throws `ReferenceError`.          |


> Conclusion

- Function Declarations: Hoisted entirely (both name and function body).
- Function Expressions: Only the variable declaration is hoisted, not the function assignment.
- Variable Declarations : `var` variables are hoisted and automatic initialized with `undefined`, while `let` 
and `const` variables are hoisted but not initialized (temporal dead zone) and gives ReferenceError ( ReferenceError: Cannot access 'variable' before initialization )


#12)Tempory Dead Zone (TDZ)

The Temporal Dead Zone (TDZ) refers to the period in which variables declared with let or const are hoisted but 
cannot be accessed until the code execution reaches their declaration. If we try to access them before declaration,
 it results in a ReferenceError. This is known as the Temporal Dead Zone.

--Simple Explaination

Temporal Dead Zone (TDZ) means you cannot access a variable declared with let or const before its declaration. If you try, 
it throws a ReferenceError. (Uncaught ReferenceError: Cannot access 'variableName' before initialization)

(On the other hand, variables declared with var are hoisted and automatically initialized to undefined, 
so you can access var before declaration, but it just return undefined instead of throwing a ReferenceError)

--Why Does This Happen?

-var is hoisted and initialized with undefined, so you can access it before declaration.
-let and const are also hoisted, but they are not initialized immediately, This means they exist in a "Temporal Dead Zone" from the start of the block until the
execution reaches the declaration.
-TDZ only happen with let and const not with var.

--Example

console.log(myVar); // Output: undefined ( it hoisted but initialized with `undefined`)
var myVar = 10;

console.log(myLet); // Uncaught ReferenceError: Cannot access 'myLet' before initialization (it also hoisted but not initialized with `undefined and goes into TDZ))
let myLet = 20;

console.log(myConst); // Uncaught ReferenceError: Cannot access 'myConst' before initialization  (it also hoisted but not initialized with `undefined and goes into TDZ)
const myConst = 30;


#13) undefined vs Not define vs null vs NaN

> undefined: This occurs when a variable or function is declared, but no value is assigned to them. When we try to access that variable, it gives us "undefined."

--->Variable or function is declared, but no value is assigned to them.

Example:

let b ;
console.log(b); -->undefined

console.log(a); -->Logs "undefined" because 'a' is hoisted but not initialized yet.
var a = 10;

function c() {
//nothing
}

console.log(c()); -->'c()' returns undefined because the function has no return statement.

> ReferenceError:Not Define :- This happens when a variable or function is not declared and we are trying to access it. Since the declaration is missing, we can't initialize it either.

var b = 20;

console.log(a); --> Throws " ReferenceError: a is Not defined " because 'a' is never declared.

function x() {
  return "Hi";
}
console.log(value()); --> Throws " ReferenceError: value is Not defined " because 'value' is not declared or defined.

> null: "null" is explicitly assigned to a variable (We need to explicitly assign "null"). It represents the intentional absence of any object value. It’s a bit strange 😂, but it’s true.

let info = {
  name: "Rahul",
  middleName: null, // We explicitly set 'middleName' to null.
  lastName: "Turkar"
};

console.log(info.middleName); // Logs "null" because we explicitly set it to null.

>NaN (Not a Number)

NaN stand for Not a Number, NaN typically occurs when a mathematical operation or a conversion fails, such as 
trying to convert a non-numeric value to a number. For example, using Number('hello') would result in NaN 
because 'hello' cannot be converted into a valid number.

In JavaScript, NaN occurs when you try to convert a value (like a string) into a number, but the conversion fails, resulting in
an invalid number (In simple lang we try to convert value like string into number and it's falied then it's gives NaN)

#14) Global Execution Context and Execution Context/Function Execution Context (In Detail)

> Global Execution Context in JavaScript:

- An Global execution context is the environment where JavaScript code is executed,This is the first execution context 
that is created when JavaScript starts running. It is the default environment where the entire JavaScript code runs.

So, the global execution context is just one type of execution context, and it is the first and main one that 
JavaScript creates before executing any other function.

First Global Execution Context is created then other Execution Context is created inside the Global Execution Context.


>It has two main phases:


--1️⃣ Memory Allocation Phase (Hoisting Phase):  

   - Memory allocation for variables and funtions.
   - Variables declared with `var` are initialized as `undefined`.  
   - Variables declared with `let` and `const` are stored in memory but remain in the "Temporal Dead Zone" until they are assigned a value.
   - Functions are stored with their full body.  

   
Example:Example for Better Understanding :

console.log(myVar); // Output: undefined (hoisted but not initialized)
console.log(myFunction()); // Output: "Hello, Yashu" (function is hoisted with name + body)

// Memory Allocation Phase:
// - myVar: undefined
// - myFunction: function () { return "Hello, Yashu!"; }

var myVar = 10;
function myFunction() {
   return ("Hello, Yashu")
}


---2️⃣ Code Execution Phase:

   - Code executes line by line.  
   - Variables are assigned their actual values.  
   - When a function is called, a new execution context is created and pushed into the call stack(Upon Global Execution Context).  
   - After the function finishes execution, its execution context is popped out of the call stack.  


> Call Stack Behavior:  

  - First, the Global Execution Context (GEC) is pushed into the call stack.  
  - Then, when a function is called, a new execution context is created and pushed into the call stack.  
  - Once the function execution is completed, its execution context is removed (popped out) from the stack.  
  - This process repeats for every function call until all functions are executed, and finally,
   the Global Execution Context is removed once the program finishes.  


> Function Execution Context

- Created whenever a function is called.
- Each function call generates a new execution context.
- Function execution contexts are managed by the call stack:
  - A new execution context is pushed onto the stack when a function is invoked, It is popped outr from the stack once the function completes execution.


Example for better Understand

_-_--------Global Execution Context is created.

console.log("Start");  // Runs inside Global Execution Context

function sayHello() {
    console.log("Hello, Yashu!");  // New Execution Context is created
}

sayHello();  // Function call → New Execution Context created in Call Stack

console.log("End");  // Still inside Global Execution Context

_-_--------Global Execution Context is removed/end.

--Flow of Execution Context:

1️⃣ Global Execution Context is created first.  
2️⃣ `console.log("Start")` runs inside the GEC.  
3️⃣ `sayHello()` is called → A new execution context is created inside the Call Stack.  
4️⃣ `console.log("Hello, Yashu!")` runs inside this new execution context.  
5️⃣ After execution, the function’s execution context is removed from the stack.  
6️⃣ `console.log("End")` runs inside the Global Execution Context.  
7️⃣ Once all code is executed, the Global Execution Context is removed from the call stack. 


>>Key Points (Short & Simple):

- Global Execution Context (GEC) is the first environment where JavaScript code runs.  

- Phases of Execution Context:  
  1️⃣ Memory Allocation Phase:  
    - `var` is hoisted as `undefined`, while `let` and `const` stay in the Temporal Dead Zone (TDZ).  
    - Function declarations are hoisted with their full body.  

  2️⃣ Code Execution Phase: 
    - Code runs line by line.  
    - Variables get actual values.  
    - Function calls create new execution contexts inside the call stack but first global execution context 
      enter in call stack then function execution context.

    -  Call Stack:
      - GEC enters first, functions get pushed in when called and popped out when done.  
     - The process repeats until all code executes and GEC is removed.  

- Function Execution Context:
  - Created whenever a function is called.  
  - Manages function execution using the call stack.  

- Takeaway: 
  - Memory is allocated before execution. 
  - Call stack controls function execution. 

??? 🗂️ Stack vs 🗃️ Heap – Where Does JavaScript Store It ?

Primitive data types (number, string, boolean, null, undefined, symbol) are copied by value.
When the original value changes, the copied value does not change.

- Primitive values are stored directly in the stack

Non-primitive data types (objects, arrays, functions) are assigned by reference.
When the original object is modified, all references to it reflect the change.

- While objects are stored in heap memory and accessed via references stored in the stack.

#15) Event Loop

JavaScript is a single-threaded language, meaning it executes code line by line. When asynchronous operations are 
involved, they are managed by the Event Loop, which ensures non-blocking execution.

⚠️ Note: The Event Loop is not a feature of JavaScript itself but is provided by the browser environment (or Node.js runtime).
JavaScript doesn't have built-in asynchronous capabilities. Instead, Web APIs, the Microtask Queue, and the **Task (Callback )
Queue** are provided by the runtime environment to handle asynchronous operations efficiently.

The browser engine (like V8 in Chrome,Brave,Microsoft Edge , SpiderMonkey in Firefox or Safari in JavaScriptCore/Nitro) works together with JavaScript to manage asynchronous
operations such as `setTimeout`, `fetch`, and Promises, without blocking the main thread.


>>How the Event Loop Works:


--1️⃣ Execution of Synchronous Code

  JavaScript first executes all synchronous code in the Call Stack.
  JavaScript does not process asynchronous tasks until the Call Stack is empty.

--- 2️⃣ Asynchronous Code is Handled by Web APIs

  When the JS engine encounters an asynchronous operation (e.g., `setTimeout`, `fetch`, or event listeners), it offloads
 them to the Web APIs.
  These APIs handle the operations in the background, freeing up the Call Stack.

---3️⃣ Asynchronous Tasks Are Moved to Queues

Once the Web APIs finish their operations, their callbacks are queued in:

  Microtask Queue (🎯 Higher Priority)

    Includes `Promise.then`, `Promise.catch`, `Promise.finally`, and `MutationObserver`.
    Always executed before tasks in the Task Queue.

  Task Queue (Callback Queue) (🔁 Lower Priority)

    Includes `setTimeout`, `setInterval`, `event listeners`, etc.
    Executed only after the Microtask Queue is completely empty.


---4️⃣ Moving Tasks to the Call Stack

  The Event Loop checks:

  1. If the Call Stack is empty.
  2. If there are Microtasks, it pushes them into the Call Stack for execution.
  3. Once all Microtasks are done, it moves tasks from the Task Queue to the Call Stack.
  This cycle repeats continuously, ensuring smooth, non-blocking asynchronous execution.


--- 5️⃣ Role of the Event Loop

The Event Loop is the mechanism that:

  Monitors the Call Stack and the Queues.
  Prioritizes Microtasks over Task Queue items.
  Ensures that the JS engine processes events and tasks in the correct order without blocking the UI or main thread.

👉 This continuous cycle of checking the Call Stack and managing asynchronous queues is what we call the Event Loop.


---Example for Better Understanding

console.log("Start"); 

setTimeout(() => {
    console.log("Inside setTimeout"); 
}, 0);

Promise.resolve().then(() => {
    console.log("Inside Promise");
});

console.log("End");

---Execution Flow

1️⃣ Synchronous Code Execution: `"Start"` is logged first.  
2️⃣ setTimeout(0) goes to Web APIs and waits.  
3️⃣ Promise goes to Microtask Queue.  
4️⃣ Synchronous code completes, logging `"End"`.  
5️⃣ Microtask Queue executes first, logging `"Inside Promise"`.  
6️⃣ Task Queue executes next, logging `"Inside setTimeout"`.  

Final Output:  

Start
End
Inside Promise
Inside setTimeout


>Key Takeaways

- Synchronous code runs first in the Call Stack.  
- Asynchronous tasks go to Web APIs and are queued.  
- Microtask Queue has higher priority than the Task Queue.  
- The Event Loop ensures tasks are executed properly in the right order. 


#16)Primitive Data Types (Store in a Stack ) & Non-Primitive (Store in a Heap)

>Primitive Data Types

Examples: String, Number, Boolean, Null, Undefined;

Immutable: Their original value cannot be changed. Any modification results in the creation of a new value.

Stored in Stack: These values are stored directly in the stack memory.

Copied by Value: When a primitive value is assigned or copied to another variable, a new copy is created.
Changes to the new variable don’t affect the original.

> Non-Primitive (Reference) Data Types

Examples: Object, Array, Function

Non-Primitive(Reference) Data Types are mutable, meaning their values can be changed without creating a new 
object, changing the same memory block.

Non-Primitive Data Types are stored in the Heap. They are accessed via references,so changes to a reference will 
affect the original data.

- Examples :

>Immutable: cannot change

let oldProfile = "Front End Developer";
let newProfile = oldProfile;

newProfile = "Full Stack Developer";

console.log(oldProfile); // Output: Front End Developer
console.log(newProfile); // Output: Full Stack Developer

>Mutable:can change

let userInfo={
    name:'ram',
    age:"21"
}

let newAge=userInfo.age="23"

console.log(userInfo.age);//23
console.log(newAge);//23


let arr=[1,2,3,4,5];
let change=arr;

change[0]=8888;
console.log(change);//8888
console.log(arr);//8888

>Summary :

- Primitive Data Types -> Store in Stack -> Immutable,values cannot be changed -> Any modification results in the 
creation of a new value -> String,numbers etc.

- Non-Primitive Data Types -> Store in Healp -> Mutable,values can be changed -> Values can be changed without creating a new 
object -> Array,objects,function etc.


#17) `Destructuring`, `Spread operator`, and `Rest operator`

>>1️⃣ Destructuring (Extracting Values)

--Destructuring helps you Extract values from arrays or objects easily.  

---👉 Array Destructuring Example:

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(third);  // 3

Instead of writing `numbers[0]`, `numbers[1]`, etc., destructuring makes it shorter and cleaner.  

--👉 Object Destructuring Example:

const person = { name: "Yashu", age: 22 };
const { name, age } = person;

console.log(name); // "Yashu"
console.log(age);  // 22

You can directly extract values from objects without `person.name` or `person.age`.  


>>2️⃣ Spread Operator (`...`) (Expanding)

The spread operator (...) is used to expand the values of an array or object.
It is mainly used for copying, merging, or passing values.

--👉 Copying an Array

const arr1 = [1, 2, 3];
const arr2 = [...arr1];  // Creates a copy

arr2.push(4);
console.log(arr1); // [1, 2, 3]  (Original array remains unchanged)
console.log(arr2); // [1, 2, 3, 4]  

--👉 Copying the object

const user = { name: "Yashu", age: 24 };
const newUser = { ...user };

console.log(newUser);  
// Output: { name: "Yashu", age: 24 }


---👉 Merging Two Arrays

const boys = ["Yash", "Ram"];
const girls = ["Chiku", "Priya"];
const all = [...boys, ...girls];

console.log(all); // ["Yash", "Ram", "Chiku", "Priya"]

---👉 Merging Two objects

const userDetails = {
  name: "Yash",
  age: 23
};

const jobDetails = {
  role: "Full Stack Developer",
  salary: "₹12 LPA"
};


const fullProfile = {
  ...userDetails,
  ...jobDetails
};

console.log(fullProfile);

---👉 Passing values

let nums = [10, 20, 30];

function add(a, b, c) {
  console.log(a + b + c);
}

add(...nums);  // 👈 spreading array as individual args
// Output: 60

---👉 Expanding an Object

const user = { name: "Yash", age: 22 };
const updatedUser = { ...user, city: "Nagpur" };

console.log(updatedUser); // { name: "Yash", age: 22, city: "Nagpur" }


>3️⃣ Rest Operator (`...`) (Collecting)

The Rest Operator is used to collect multiple values into an array.  

---👉 Function with Multiple Arguments (Rest Operator)

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

Here, `...numbers` collects all arguments into an array `[1, 2, 3, 4]`.  

----👉 Destructuring with Rest Operator

const fruits = ["Apple", "Mango", "Banana", "Grapes"];
const [first, second, ...remainingFruits] = fruits;

console.log(first); // "Apple"
console.log(second); // "Mango
console.log(remainingFruits); // ["Banana", "Grapes"]

Here, `...remainingFruits` collects all remaining elements into an array.  

>>> Simple Trick to Remember:

- Destructuring → Extracting values (`{}` or `[]`)  
- Spread (`...`) → Expanding values
- Rest (`...`) → Collecting values

#18)Naming conventions

> 1. Camel Case

- Usage: This convention is commonly used for variable names, function names and method names.
- Camel Case is a naming convention in which the first word starts with a lowercase letter, 
and all subsequent words start with an uppercase letter.
- Example: userName

  let userName = "Yashu";       // Variable
  function calculateTotal() {   // Function
      return total;
  }

> 2. Pascal Case

- Usage: Often used for class names and constructor functions.
- Pascal Case is a naming convention where each word starts with an uppercase letter, including 
the first word.
- Example:UserProfile

  class UserProfile {                 // Class
      constructor(name: string) {
          this.name = name;
      }
  }


> 3. Snake Case

- All letters are lowercase, and words are separated by underscores.
- Usage: This convention is frequently used in variable names in some languages, particularly Python and Ruby.

- Example:user_name

  ```python
  user_name = "Yashu"       # Variable in Python
  total_price = 100         # Another example
  ```

> 4. Kebab Case

- Definition: All letters are lowercase, and words are separated by hyphens.
- Usage: Commonly used in URLs and CSS class names.

- Example:main-header

  ```css
  .main-header {             CSS Class 
      font-size: 24px;
  }
  ```

>5. Uppercase Snake Case

- Usage: Typically used for constants.

- Example:MAX_USERS , API_URL


  const MAX_USERS = 100;     // Constant
  const API_URL = "https://api.example.com"; // Another example API_URL


> Descriptive Names

- Using full words to describe the purpose of a variable or function rather than 
abbreviations or short forms.

- Example:

  function calculateAreaOfCircle(radius) { // Descriptive function name
      return Math.PI  radius  radius;
  }

--In React and TS 

- Kebab Case for Folders: Use `kebab-case` for folder names. It’s simple, readable, and widely 
used in React and TypeScript projects.  
  Example: `user-profile`, `api-services`.

- Pascal Case for Files: Use `PascalCase` for file names, especially for React components. 
  - Example: `UserProfile.tsx`, `Header.tsx`.

#19)Loops

---1)For Loop

The for loop is used to repeat a block of code a specific number of times.

 for(let f=1;f<=10;f++){
   console.log("For Loop",f);
 }

--2)While Loop

 The while loop repeats a block of code as long as a condition is true.

 let w2=1;

 while(w2<=5){
   console.log("While Loop",w2);
   w2++
 }

--3)Do While loop

 The do while loop executes the code block once before checking the condition, then repeats as long as the condition is true.

 let d=1;

 do{
 console.log("Do While Loop",d);
 d++;
 }while(d<=8)

--4)For in loop ( For in loop for object )

 The for...in loop is used to iterate over the properties (keys) of an object.

 const info={
   name:"yash mishra",
   role:"front end developer",
   age:"21"
 }

 for (let key in info){
   console.log(key);
 }

 for (let key in info){
   console.log(info[key]);
 }

 for (let key in info){
   console.log(`${key}:${info[key]}`);
 }

>Inportant Info

??? Can we use a for in loop for an array?

If we use for in with an array, it gives us the index numbers instead of the array values. If we need array values,
we need to use it this way: console.log(arr[a]) instant of console.log(a).

--5)For of loop (use for array)

 let arr = ["Yash", 21, "Developer"];

 for (let a of arr) {
   console.log(a);
 }

??? Can we use for of loop with obejct ?

Ans=>we cannot use a for...of loop directly with objects because for...of is designed to iterate over iterable objects, like 
arrays, strings, maps, and sets. Objects are not inherently iterable.However, you can use for...of with objects indirectly 
by iterating over their properties using methods like Object.keys(), Object.values(), or Object.entries()

example : 

for (let value of Object.values(info)) {
  console.log(value);
}

>Objects: Use for...in to iterate over keys.
>Arrays/Iterables: Use for...of to iterate over values.

--6)ForEach vs forOf loop

forEach(value,index,array)

- `forEach` is specifically for arrays and uses a callback function. With `forEach`, we can access the index number, 
but we cannot use `break` or `continue` statements.

- `for...of`** is for iterables, including arrays, strings, etc. In a `for...of` loop, we can use `continue` and `break
` statements but cannot directly access the index number (unless using `Array.entries()`).

-- `forEach` is only for arrays and has a callback function. With `forEach`, we can access the index number, but we cannot use `break` 
-- or `continue` statements. `for...of` is for iterables, including arrays, strings, etc. In a `for...of` loop, 
-- we can use `continue` and `break` statements but cannot directly access the index number.

--ForEach Example

let arr = ['Yash', 'Ram', 'Hello'];

arr.forEach((value, index) => {
  console.log(`${index}:${value}`);
});

 Output:
 Index: 0, Value: Yash
 Index: 1, Value: Ram
 Index: 2, Value: Hello

 --for of loop

 1)
 let arr=[1,2,"Yash",4,"Bro"];

  for(let a of arr){
   console.log(a)
 }

 Output:
 1
 2
 Yash
 4
 Bro

2)let str = "Yash";

str.forEach((value) => {
  console.log(value);
});

Output
Y
a
s
h


3)
let str = "Yash";

for (let char of str) {
  if (char === 's') {
    console.log('Found "s", terminating the loop.');
    break;  // Exit the loop
  }
  console.log(char);
}

Output:

Y
a
Found "s", terminating the loop.

4)
let str = "Yash";

for (let char of str) {
  if (char === 's') {
    console.log('Skipping "s".');
    continue;  // Skip the rest of the loop for this iteration
  }
  console.log(char);
}

Output:
Y
a
Skipping "s".
h

5)
let arr = ['Yash', 'Ram', 'Hello'];

for (let [index, value] of arr.entries()) {
  console.log(`Index: ${index}, Value: ${value}`);
}

 Output:
 Index: 0, Value: Yash
 Index: 1, Value: Ram
 Index: 2, Value: Hello


#20)Type Coercion (koversion) vs Type casting and Concatenation

>Coerces

--- Type Coercion (koversion) (Automatic conversion)

Type coercion is when JavaScript automatically converts one data type to another behind your back—**without you asking for it.

Example:

"5" * 2  // JS converts "5" (string) to 5 (number) → result is 10
"3" + 1  // JS sees a string, so it makes 1 into "1" → result is "31"

You didn’t tell JS to do this—it did it by itself. That’s type coercion.


---Type Casting (Manual conversion)

Type casting means YOU manually convert one type to another using methods like `Number()`, `String()`, etc.

Example:

Number("5") + 2 // You manually converted "5" to 5 → result is 7
String(10) + "1" // You manually made 10 a string → result is "101"

Here, you are in control. That’s type casting.


?? So Are They the Same? --- No NO


  Type coercion = automatic, JS decides.
  Type casting = manual, you decide.

>Note: 
🤚🙎‍♂️ In JavaScript, type coercion is the automatic or implicit conversion of values "from one data type to 
another" (It converts one data type to another depending on the situation). It doesn't just convert to strings 
depending on the context, it can also convert values to numbers,booleans, or other types during operations.

>Concatenation
Concatenation primarily refers to combining strings together to form a single string. However, it can also be used more broadly to
describe the process of combining or linking together multiple items or entities, not just limited to strings. 

In the context of programming, especially with languages like JavaScript, concatenation commonly refers to combining strings by 
appending one string to the end of another. For example, combining words or phrases to form a sentence, or combining different 
parts of a URL.

While concatenation often involves combining strings, the concept can also be applied to other types of data, such as combining arrays, 
objects, or even numbers. However, in the context of programming languages, the term "concatenation" is most commonly associated 
with string manipulation.

??Summmary: Concatenation
Concatenation in JavaScript means joining two or more strings together to form a single string.
It is usually done using the + operator.

#21)Recursion and Backtracking

>>Recursion
Recursion is a programming technique in which a function calls itself to solve a problem by breaking it down into smaller subproblems,
continuing until a base case is reached.

>>Backtracking
Backtracking is a method where we try all possible options. If one option doesn’t lead to a valid solution, we go back and try a 
different one. We continue this process until we find the correct solution.


>>>Print Hello word till n time

--Using normal loop

let print = (n) => {
  for (let a = 1; a <= n; a++) {
    console.log("Hello");
  }
};

print(5);

--Using Recursion

let print = (n) => {
  if (n === 0) return;
  console.log("Hello");
  print(n - 1);
};

print(5);

>>>n to 1

--Normal using for loop

let printToN = (n) => {
  for (let a = n; a > 0; a--) {
    console.log(a);
  }
};

printToN(5);

--Using Recursion

let see = (num) => {
  if (num===0) return;
  console.log(num);
  see(num-1);
};

see(5);

>>1 to n

--Normal loop

let oneToN = (n) => {
  for (let a = 1; a <= n; a++) {
    console.log(a);
  }
};

oneToN(5);

--Using Recursion

let seeTwo = (num) => {
  if (num===0) return;
  seeTwo(num-1);
  console.log(num);
};

seeTwo(5);

>>sum of number

--Normal Loop

let sum = (n) => {
  let total = 0;
  for (let a = 1; a <= n; a++) {
    total = total + a;
  }
  return total;
};

console.log(sum(5));

--Using Recursion

let sumRecursion = (n) => {
  if (n === 1) return 1;
  return n + sumRecursion(n - 1);
};

console.log(sumRecursion(5));


>>>Fibo number till n

--Using loop

let fiboNumber = (n) => {
  if(typeof n!=="number"){
    return "Please enter a valid number"
  }
  if (n <= 0) return [];
  if (n === 1) return [0];

  let storeFiboNum = [0, 1];

  for (let a = 2; a < n; a++) {
    storeFiboNum.push(storeFiboNum[a-2]+storeFiboNum[a-1]);
  }

  return storeFiboNum;
};

console.log(fiboNumber(10));

TC:O(n)
SC:O(n)

--using recursion

let fibo = (n) => {
  if (typeof n !== "number") {
    return "Please enter a valid number";
  }

  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let printFiboNum = fibo(n - 1);

  printFiboNum.push(
    printFiboNum[printFiboNum.length - 2] +
    printFiboNum[printFiboNum.length - 1]
  );
  return printFiboNum;
};

console.log(fibo(10));

TC:O(n)
SC:O(n)

#22)Function currying.
Function currying is a technique in JavaScript where a function with multiple arguments is transformed into a sequence of nested 
functions, each taking a single argument one at a time.
->>Instead of passing all arguments at once, we pass them one by one through chained function calls.

---Normal way 

let normalFunction = (a, b, c, d) => {
  return a + b + c + d;
};

let normalFunctionResult = normalFunction(1, 2, 3, 4);

console.log(normalFunctionResult); //10

---Using Function Currying

let functionCurrying = (a) => {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
};

let resultFunctionCurrying = functionCurrying(1)(2)(3)(4);
console.log(resultFunctionCurrying); //10


---Infinity Function Currying

let infinityFunctionCurrying = (a) => {
  return function (b) {
    if (b === undefined) {
      return a;
    } else {
      return infinityFunctionCurrying(a + b);
    }
  };
};

let resultInfinityFunctionCurrying = infinityFunctionCurrying(1)(2)(3)(4)();
console.log(resultInfinityFunctionCurrying); //10


#23)Higher Order Function in Javascript
A function is called higher-order if: It takes another function as an argument (callback) OR It returns another function.
Examples: map(), filter(), reduce(), forEach(),sort().

-->for...of is NOT a higher-order function.It’s just a looping construct (syntax provided by JavaScript), not a function that takes another function.

const companies = [
  { name: "Google", category: "Product Based", start: 1981, end: 2004 },
  { name: "Amazon", category: "Product Based", start: 1992, end: 2008 },
  { name: "Paytm", category: "Product Based", start: 1999, end: 2007 },
  { name: "Coforge", category: "Service Based", start: 1989, end: 2010 },
  { name: "Mindtree", category: "Service Based", start: 1989, end: 2010 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

>Normal for loop
for (let a = 0; a < companies.length; a++) {
  if (companies[a].name === "Paytm") {
    break;
  } else {
    console.log(companies[a]);
  }
}

>For...of loop
We can use break and continue in a for...of loop. However, we cannot use "return" directly in a for...of loop 
unless it is inside a function. If the loop is inside a function, then the return statement can be used to return a value.

---Example
for(let company of companies ){
 if(company.name==="Paytm"){
  continue;
 }
 else{
   console.log(company.name);
 }
}

>forEach
We cannot use break or continue with forEach. These keywords only work with traditional loops like for, while,
or do...while. Also, forEach does not return anything. If we want to return a new array or value, we should use 
map, filter, or reduce instead

---Example
array.forEach((element,index,array)=>{
   console.log(array);
})

companies.forEach((company, index, array) => {
  console.log(company);
});

>filter
--The main difference is that filter() returns and creates a new array, but forEach() doesn’t.

---Example
let data=companies.filter((company) => {
  if (company.category === "Service Based") {
    return company.name;
  }
});

console.log(data);

>map

So, with the help of map(), we can modify each element in the array.Even though we might try using filter()
for that there is no issue but it’s not meant for modifying it's meant for selecting.
That’s why JavaScript provides separate higher-order functions for different tasks like map
for transforming, filter for selecting, and forEach for looping.

---Example
let doubledAges=ages.map((age)=>{
  return age*2
})

console.log(doubledAges);

----------------------------------------------------------
>Major difference between filter and map

let arr = [1, 2, 3, 4];

let evens = arr.filter(function(num) {
  if (num % 2 === 0) {
    return true;  // keep it
  } else {
    return false; // remove it
  }
});

console.log(evens); // [2, 4]  <<<--------------


let evensUsingMap = arr.map(function(num) {
  if (num % 2 === 0) {
    return num;     // keep value
  } else {
    return undefined; // try to "remove" it
  }
});

console.log(evensUsingMap); // [undefined, 2, undefined, 4]   <<<<<<<<<<<<<<<--------------- main difference

--Second Example 

let arr = [1, 2, 3, 4, 5];

let filt = arr.filter((value) => {
  if (value !== 2) {
    return value;
  }
});

console.log(filt); //[1, 3, 4, 5] <<<--------------

let usingMap = arr.map((value) => {
  if (value !== 2) {
    return value;
  }
});

console.log(usingMap); //[1, undefined, 3, 4, 5] //<<<<<<<<<<<<<<<--------------- main difference

----------------------------------------------------------

>sort
---With the help of sort we sort the  element Ascending or Descending order

---Syntax
let data=array.sort((a,b)=>{
   return a-b (For Ascending)
   return b-a (For Descending)
})

---Example
let filterAge = ages.sort((a, b) => {
  // return a-b
  return b - a;
});

console.log(filterAge);

let filterCompanies = companies.sort((a, b) => {
  // return a.start-b.start
  return b.start - a.start;
});

console.log(filterCompanies);

>reduce
reduce() is a powerful method used on arrays to reduce the array to a single value — like a total, average, merged object, etc.
It goes element by element and carries forward a result (called accumulator) until it's done with the whole array.

Simple explanation : Reduce the element of an array to a single value

--Syntax
array.reduce((accumulator, currentValue, index, array) => {
  // logic
}, initialValue);


---Only 2 things you REALLY need to care about:

=>accumulator = value carried from the previous step

=>currentValue = the current element of the array

=>initialValue = (optional) starting value of the accumulator

--Example:

let total = ages.reduce((total, currentValue) => {
  return total + currentValue;
}, 0);

console.log(total);

#24)🍰 `slice()` vs 🍕 `splice()` in JavaScript:


--- 1️⃣ `slice()` – Non-destructive, makes a copy


let arr = [1, 2, 3, 4, 5];
let sliced = arr.slice(1, 4);
console.log(sliced); // 👉 [2, 3, 4]
console.log(arr);    // 👉 [1, 2, 3, 4, 5] ✅ Original remains


  ✅ Doesn’t modify original array
  🧠 Syntax: `array.slice(start, end)` (end is exclusive)
  📦 Returns a shallow copy of the portion


--- 2️⃣ `splice()` – Destructive, changes original array


let arr = [1, 2, 3, 4, 5];
let spliced = arr.splice(1, 2);
console.log(spliced); // 👉 [2, 3]
console.log(arr);     // 👉 [1, 4, 5] ❌ Original changed

  ❌ Modifies original array
  🧠 Syntax: `array.splice(startIndex, deleteCount, repalceitems)`
  🧨 Can delete, insert, or replace items


--- 3️⃣ Use `slice()` when:

  You want to extract a piece of the array
  You don't want to touch the original array
  Works great for copying arrays or strings


--- 4️⃣ Use `splice()` when:

  You want to edit the array (insert, remove, replace)
  You’re okay with changing the original array


--- 5️⃣ Visual Difference Table 📊

| Feature        | `slice()`           | `splice()`                     |
| -------------- | ------------------- | ------------------------------ |
| Changes array? | ❌ No               | ✅ Yes                        |
| Return value   | New array           | Removed items (array)          |
| Use case       | Copying, extracting | Inserting, deleting, replacing |
| Syntax         | `slice(start, end)` | `splice(start, count, items)`  |


#25)  Throttling and  Debouncing

>🔁 Throttling:

=> It depends on the event, but limits how frequently the function runs.
=> Even if the event is triggered 100 times, throttling lets the function run
 only once in a specific time (like every 1 second).

👉 Example:
1)
You scroll continuously → the event fires constantly → throttling runs the function every 1s (e.g., update scroll position).

2)
If you're using GPS to track a delivery boy’s location, it doesn't make sense to update the map every millisecond 😤 — it’ll kill battery and waste network calls.
So we throttle the location update API to fire every 5 seconds, even if GPS sends updates more frequently.

>⏳ Debouncing:

=> It depends on the event, but waits for the user to stop triggering it.
=> If the event keeps firing, the function never runs. It runs **only after a pause (when no event triggers for X ms).

👉 Example:
Typing in a search bar → debounce waits till you stop typing → runs the search function after 500ms of silence.


> In simple language :

Throttling means the function can run at most once every specific time, even if the event keeps 
triggering. Debouncing means the function runs only **after the event has stopped for a certain time.

*/
