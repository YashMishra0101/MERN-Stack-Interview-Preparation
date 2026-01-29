/*
#Quick Points

- TypeScript cannot run directly on a browser because browsers only understand JavaScript. TypeScript needs
 to be transpiled (or compiled) into JavaScript before it can be executed in the browser.
- npm install -g typescript  —>> tsc --version —>> tsc app.ts —> node app.js
- tsc —init (if there is any error use this : npx tsc —init )
- tsc —watch
- tsc --init ( create ts config file)
- clt + `  (For open current terminal)
- clt + s 

#1)Tuples in TypeScript:


In TypeScript, a Tuple is a special type of array where the **number of elements and their types are 
fixed. This means each element in the tuple can have a different type, and their order is important. 
It allows you to store multiple values of different types in a single variable.

Additional Tips:  

In interviews, you can mention that tuples help in scenarios where the number of elements and their types 
are well-defined, such as returning multiple values from a function.


//---Code

let myTuple: [string, number];
myTuple = ["Yashu", 22]; // Correct
// myTuple = [22, "Yashu"]; // Error, wrong order
// myTuple =["Yashu", 22, 33] // it won't work because the tuple is restricted to two elements—a string and a number.

let bFour: [number, string] = [5, "naam"];

#2)Enums

Enums in TypeScript are a way to group together related values that are constants, making your code easier to read
and maintain. Instead of using individual variables for each constant, you use an enum to give them meaningful
names. (Bascially Enums in TypeScript group values together so we don’t have to write them separately or 
manage them as different variables. )

Always use enums** when you need to represent fixed categories (like roles or statuses), and you want 
to avoid confusion between numbers or strings. This makes your code cleaner and helps reduce errors. 

🤚Important Note:In enums, we use `=` to assign values, unlike in objects where we use `:`.

😏 This is not an object, my child!** This is an enum. In objects, we use `:`, but in enums, we use `=` 
for assigning the value.

enum Status {
  Success = 1,
  Failure = -1,
  Pending = 0
}

let currentStatus: Status = Status.Success;
console.log(currentStatus); // Output: 1


#3)Any , Unknow , Void ,Null , Undefine , Never

1. Any
The `any` type means that a variable can hold any type of value—numbers, strings, objects, anything.
It bypasses TypeScript’s type-checking, which is useful when you don't know the variable’s type in advance.


let a; // This is `any` by default because no type is specified
a = 10;         // You can assign a number
a = "Yashu";    // Now, you can assign a string

a.toUpperCase(); // This works because TypeScript doesn't check the type for `any`.

- Use Case: When you're not sure about the type of a variable, or you want to disable type-checking 
temporarily.


2. Unknown

`unknown` is a safer version of `any`. You can assign any type to it, but before you use it, you need to 
check the type. It forces you to be careful.


let b: unknown; 
b = 10;
b = "Yashu";

// b.toUpperCase() // This would cause an error because TypeScript doesn't know if `b` is a string

if (typeof b === "string") {
  b.toUpperCase(); // Now this works because we checked the type first
}


- Use Case: When you want flexibility like `any`, but with more control and type safety.

3.Void

`void` is used for functions that don't return anything. If a function is only supposed to 
perform an action and not return a value, you use `void`.


let abc = (): void => {
  console.log("This function doesn't return anything");
}

let abcTwo = (): string => {
  return "Yashu"; // This function returns a string
}


- Use Case: When writing functions that just do something (like logging) and don’t need to return a value.


4. Null and Undefined

`null` and `undefined` are their own types in TypeScript. They represent no value or **an uninitialized 
variable.


let c: null = null; // This variable has no value
let d: undefined = undefined; // This variable is declared but not initialized


- Use Case: When you explicitly want to indicate that a variable holds no value.


5. Never

`never` represents **a type that never happens. It’s used for functions that throw errors or
 never finish (like infinite loops). It tells TypeScript that a function never returns a value at all.

So, to clarify:
never means the function won't return a value (either because it runs forever or crashes).
It doesn't stop the function itself from running or printing logs within it.

In short:
Without never: Code runs as normal with an infinite loop, but TypeScript thinks it might return something.
With never: TypeScript understands the function never returns, but the behavior (infinite loop) remains the same.

*/

let see = (): never => {
  while (true) {
    console.log("Hi I am Yash");
  }
};

see();

console.log("Hi");

let errorFunction = (): never => {
  throw new Error("This function never returns");
};

//- Use Case**: When a function throws an error or has an infinite loop, so it never successfully returns a value.

/*

#4)Void vs Never in TypeScript

1. `void`:
- Use: For functions that complete normally but do not return a value**.
  
- Purpose: Function runs and finishes without returning anything.

2.`never`:
- Use: For functions that never finish or terminate unexpectedly.

-Purpose: Used for functions that throw errors or run infinitely.

Key Difference:

- `void`: Function completes but returns nothing.
- `never`: Function never completes normally (throws an error or loops forever).

*/

//>Example :

function greet(): void {
  console.log("Hello, Yashu!"); //example of void
}

function throwError(message: string): never {
  throw new Error(message); //example of never
}

/*


Summary of Usage:

- `any`: Allows any type (use sparingly).
- `unknown`: Safer than `any`, requires type-checking before use.
- `void`: For functions that don't return anything.
- `null` and `undefined`: Represent absence of value.
- `never`: For functions that don't return, like those that throw errors.

--------------------

#5)What is type Inference in TypeScript ?

Automatic identify kr naaa

Type inference in TypeScript is the ability of the compiler to automatically determine the type of a 
variable or expression based on its value or context, without needing explicit type annotations. 
This feature helps keep the code clean and reduces redundancy while still providing type safety.
For example, if you write `let num = 5;`, TypeScript infers that `num` is of type `number`. 

Even with type inference, we mention types explicitly for clarity, better error checking, improved IDE 
support, and to maintain code readability, especially in larger projects and for the developers.

Example : let num = 5; // TypeScript infers that 'num' is of type 'number'

#6)What is a Union ?

A union in TypeScript allows you to define a variable that can hold multiple types of values. 
This means you can combine different types into a single type, providing flexibility while 
ensuring type safety. You use the pipe (`|`) symbol to create a union type.


let value: string | number; // 'value' can be either a string or a number

value = "Hello"; // valid
value = 42; // valid
// value = true; // invalid, TypeScript will show an error

-In this example, the variable `value` can be either a `string` or a `number`.
Using union types helps create more dynamic and flexible code while still benefiting 
from TypeScript’s type-checking features


#7)Intersection : 

=>Intersection types in TypeScript allow you to combine multiple types into a single type that includes 
all properties from the combined types. An intersection type is created using the & operator, which 
requires that a value must satisfy all specified types, meaning it must have all the properties and 
methods defined in those types.


// let value:number & string ; This is not possible

type user = {
  name: string;
  role: string;
};

type info = {
location: string;
experience: string;
};

type userInfo = user & info;

let combine: userInfo = {
  name: "Yash",
  role: "Full Stack",
  location: "Bangalore",
  experience:"1year"
};

console.log(combine)

#8)Type alias

A Type alias allows you to define a common type once and reuse it in different places, instead of 
rewriting the same type multiple times. It makes your code cleaner and easier to manage.
A type alias in TypeScript is a way to create a new name for an existing type, enhancing code 
readability and maintainability. It can represent primitive types, union types, or complex object types.

//-- Example 1

type Age=number|boolean;

let yashu:Age=22;

//-- Example 2

//-- Defining a type alias for an object

type Person = {
  name: string;
  age: number;
  isEmployed: boolean;
};

// Now, we can use 'Person' instead of rewriting the object structure

let user: Person = {
  name: "Yash",
  age: 22,
  isEmployed: true
};

console.log(user);


#9)What is type inference in TypeScript ?

Type inference in TypeScript is the ability of the compiler to automatically determine the type of a 
variable or expression based on its value or context, without needing explicit type annotations. 
This feature helps keep the code clean and reduces redundancy while still providing type safety. For example, if you write `let num = 5;`, TypeScript infers that `num` is of type `number`. 📊✨

Even with type inference, we mention types explicitly for clarity, better error checking, improved IDE 
support, and to maintain code readability, especially in larger projects and for the developers.

Example : let num = 5; // TypeScript infers that 'num' is of type 'number'

*/
