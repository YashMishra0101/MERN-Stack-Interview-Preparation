console.log("working");

// let a=5;
// let b="10";

// let c=b-a; //5 number
// let c=b*a;//50 number
// let c=b/a;//2 number
// let c=b+a//105 string

// console.log(c);
// console.log(typeof(c));

// let a = 9;
// let b = 9;
// let c = "5";
// let d = "3";
// let e = undefined;
// let f = null;
// let g = true;
// let h = false;

// console.log("a+b", a + b, typeof (a + b)); //18 , number
// console.log("c+d", c + d, typeof (c + d)); //53 , string
// console.log("a+c", a + c, typeof (a + c)); //95 , string
// console.log("e+a", e + a, typeof (e + a)); // NaN, number
// console.log("e+d", e + d, typeof (e + d)); //undefined3, string
// console.log("a+f", a + f, typeof (a + f)); //9, number
// console.log("d+f", d + f, typeof (d + f)); //3null , string
// console.log("d-f", d - f, typeof (d - f)); //3, number
// console.log("a+g", a + g, typeof (a + g)); //10,number
// console.log("a-g", a - g, typeof (a - g)); //8,number
// console.log("b-h", b - h, typeof (b - h)); //9,number
// console.log("b+h", b + h, typeof (b + h)); //9, number

// console.log("Sum of a + b = " + a + b, typeof ("Sum of a + b = " + a + b)); //Sum of a + b =99 , string
// console.log(
//   a + b + " is a sum of a + b",
//   typeof (a + b + " is a sum of a + b"),
// ); //18 is a sum of a + b , string

//  Implement callback function in JavaScript by passing one function into another , then print it's value?

// function a(parameter) {
//   console.log(parameter());
// }
// function b() {
//   return 3 + 2;
// }

// a(b);

// #3) Tells the output without running the code.
// function firstFunction() {
//   console.log("First Function Start");
//   secondFunction();
//   console.log("First Function End");
// }

// function secondFunction() {
//   console.log("Second Function Start");
//   thirdFunction();
//   console.log("Second Function End");
// }

// function thirdFunction() {
//   console.log("Third Function");
// }

// firstFunction();

// First Function Start
// Second Function Start
// Third Function
// Second Function End
// First Function End

// // #4)Tells the output without running the code in the proper sequence.

// console.log("line number 1", varName);
// var varName = 10;

// function b() {
//   console.log("line number 2", varName);
// }

// console.log("line number 3", varName);

// function fn() {
//   console.log("line number 4", varName);
//   var varName = 20;
//   b();
//   console.log("line number 5", varName);
// }

// console.log("line number 6", varName);

// fn();

// line number 1, undefined
// line number 3, 10
// line number 6, 10
// line number 4, undefined
// line number 2, 10
// line number 5, 20

// #5)Tells the output without running the code in the proper sequence.

// var a = 10;
// console.log("line number 1", varName);
// var varName = 10;

// function b() {
//   console.log("line number 2", varName);
// }

// console.log("line number 3", varName);

// function fn() {
//   console.log("line number 4", varName);
//   var varName = 20;
//   b();
//   console.log("line number 5", varName);
// }

// console.log("line number 6", varName);

// fn();

// line number 1: 10
// line number 6: 10
// line number 2: undefined
// line number 3: 29
// line number 4: 31
// line number 5: 31

// #6) Tells The output

// let letFruit = "orange";
// var varFruit = "orange";
// console.log("letFruit", letFruit, "varFruit", varFruit);
// {
//   let letFruit = "apple";
//   varFruit = "apple";
//   console.log("letFruit", letFruit, "varFruit", varFruit);
// }
// console.log("letFruit", letFruit, "varFruit", varFruit);

//letFruit, orange, varFruit, orange
//letFruit, apple, varFruit, apple);
//letFruit, orange, varFruit, apple)

// let person = {
//   firstName: "Yash",
//   lastName: "Mishra",
//   age: 22,
//   fullName: function () {
//     let greeting = "Hello, my name is ";
//     return `${greeting} ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
// };

// console.log(person.fullName());

// Hello, my name is Yash Mishra. I am 22 years old

// let a=[1,2,3,4,5];

// for(let i of a){
//     console.log(i);
// }

// let b={
//     name:"Yash",
//     age:"24"
// }

// for(let a in b){
//     console.log(b[a]);
// }

// console.log(b[2]);

// let userInfo = {
//     name: "Yash",
//     age: 23
// }

// for (let b in userInfo) {
//     console.log(userInfo[b]); // ✅ now it will gives values
// }

// const user = { name: "Yashu" };

// function show() {
//   console.log(this.name);
// }

// show.call(user);

// // output:Yash

// const obj = { x: 50 };

// function print() {
//   console.log(this.x);
// }

// print();
// print.call(obj);

// // output:
// // undefined
// // 50

// let userInfo = {
//   name: "Yash",
//   age: "23",
// };

// function a(post) {
//   console.log(`${this.name},${this.age},${post}`);
// }

// a.call(userInfo,"Full Stack Developer")

// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add.apply(null, [2, 4, 6]));

// const person = { age: 25 };

// function getAge() {
//   console.log(this.age);
// }

// const bound = getAge.bind(person);
// // bound();

// let userInfo = {
//   name: "Yash",
//   age: 23,
// };

// const person = { age: 25 };

// function getAge() {
//   console.log(this.age);
// }

// const bound = getAge.bind(person);
// bound.call({ age: 40 });

// const car1 = {
//   brand: "BMW",
//   getBrand() {
//     console.log(this.brand);
//   }
// };

// const car2 = { brand: "Audi" };

// car1.getBrand.call(car2);

// let person = {
//   firstName: "Yash",
//   lastName: "Mishra",
//   age: 22,
//   regularFunction: function () {
//     return `Regular: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
//   arrowFunction: () => {
//     return `Arrow: My name is ${this.firstName} ${this.lastName}. I am ${this.age} years old.`;
//   },
//   arrowFunctionTwo: () => {
//     return this;
//   },
// };

// console.log(person.regularFunction());

// console.log(person.arrowFunction());

// console.log(person.arrowFunctionTwo());

// let person = {
//   firstName: "Yash",
//   lastName: "Mishra",
//   seeOne: function () {
//     return `My name is ${this.firstName} ${this.lastName}.`;
//   },
//   seeTwo: function () {
//     return this;
//   },
//   seeThree: function () {
//     let arrowFunction = () => {
//       return `My name is ${this.firstName} ${this.lastName}.`;
//     };
//     arrowFunction();
//   },
//   seeFour: function () {
//     let arrowFunction = () => {
//       return `My name is ${this.firstName} ${this.lastName}.`;
//     };
//     return arrowFunction();
//   },
//   seeFive: function () {
//     let arrowFunction = () => {
//       return this;
//     };
//     return arrowFunction();
//   },
// };

// console.log(person.seeOne());//My name is Yash Mishra.
// console.log(person.seeTwo());//object it's self
// console.log(person.seeThree());//undefined
// console.log(person.seeFour());//My name is Yash Mishra.
// console.log(person.seeFive());//object it's self

// console.log(this);//in global space->window object

// function abc() {
//   console.log(this);
// }

// abc();//window object

// async function f1() {
//   console.log(1);
// }

// async function f2() {
//   console.log(2);
// }

// console.log(3);

// f1();
// f2()

// console.log(4);

// f3();

// async function f3() {
//   console.log("Go!");
// }

// 3
// 1
// 2
// 4
// "GO!"

// async function main() {
//   async function f1() {
//     console.log(1);
//   }

//   async function f2() {
//     console.log(2);
//   }

//   console.log(3);

//   await f1();
//   await f2();

//   console.log(4);

//   await f3();

//   async function f3(){
//     console.log("Go!");
//   }
// }

// main()

//3
//1
//2
//4
//GO!

// // a)
// for (let a = 1; a <= 5; a++) {
//     setTimeout(() => {
//       console.log(a);
//     }, 1000);
// }
// 1
// 2
// 3
// 4
// 5

// //b)

// 6

// a)
// for (let a = 1; a <= 5; a++) {
//   setTimeout(() => {
//     console.log(a);
//   });
// }

// // b)
// for (var a = 1; a <= 5; a++) {
//   setTimeout(()=>{
//     console.log(a);
//   })
// }

// c)
// let a = 1;
// for (a; a <= 5; a++) {
//   setTimeout(() => {
//     console.log(a);
//   });
// }

// d)
// for ( var a = 1; a <= 5; a++) {
//   var b=a;
//   setTimeout(() => {
//     console.log(b);
//   });
// }

// e)
// for (var a = 1; a <= 5; a++) {
//   a;
//   (function () {
//     setTimeout(() => {
//       console.log(a);
//     });
//   })();
// }

// f)
// for (var a = 1; a <= 5; a++) {
//   var b = a;
//   (function () {
//     setTimeout(() => {
//       console.log(b);
//     });
//   })();
// }

// g)
// for (var a = 1; a <= 5; a++) {
//   (function () {
//     var b = a;
//     setTimeout(() => {
//       console.log(b);
//     });
//   })();
// }

// h)
// for (var a = 1; a <= 5; a++) {
//   (function () {
//     setTimeout(() => {
//       var b = a;
//       console.log(b);
//     });
//   })();
// }

// k)
// a = 1;
// for (a; a <= 5; a++) {
//     setTimeout(() => {
//         console.log(a)
//     }, 1000)
// }

// L)
// 1
// 2
// 3
// 4
// 5

/*
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

*/

// a)
// const a = 1;

// for (a; a <= 5; a++) {
//     setTimeout(() => {
//         console.log(a)
//     }, 1000)
// }

// b)
// const a = 1;

// for (a; a <= 5; a++) {
//   console.log(a);
// }

//a)
// error
// 1

//b)
// 1
// error

// let count = 0;
// (function immediate() {
//   if (count === 0) {
//     let count = 2;
//     count++;
//     console.log(count); // What is logged here? //3
//   }
//   console.log(count); // What is logged here? //0
// })();

// let countTwo = 0;
// function immediate() {
//   if (countTwo === 0) {
//     let countTwo = 2;
//     countTwo++;
//     console.log(countTwo); // What is logged here? //3
//   }
//   console.log(countTwo); // What is logged here? //0
// }

// immediate();

// let countTwo = 0;
// function immediate() {
//   if (countTwo === 0) {
//     countTwo = 2;
//     countTwo++;
//     console.log(countTwo); // What is logged here? //3
//   }
//   console.log(countTwo); // What is logged here? //3
// }

// immediate();

// let outerFun = (() => {

//     let count = 10;

//     function see() {
//         count++;
//         console.log("See count", count) //11
//     }

//     let ref = count;
//     console.log("Center ref", ref) //10

//     function seeTwo() {
//         console.log("SeeTwo count", count)
//         console.log("SeeTwo ref", ref)

//     }
//     return [see, seeTwo];

// })

// let [see, seeTwo] = outerFun()
// see();
// see();
// seeTwo();

// //10
// //11
// //12
// //12
// //10

// let see=1;
// let seeTwo=see;

// see++;

// console.log("see:",see); //2
// console.log("seeTwo:",seeTwo); //1

// let see=[1];
// let seeTwo=see;

// see[0]++;

// console.log("see:",see); //2
// console.log("seeTwo:",seeTwo); //2

// let see={
//     check:1
// };
// let seeTwo=see;

// see.check++;

// console.log("see:",see);
// console.log("seeTwo:",seeTwo);

// const user = {
//   name: 'John Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     country: 'USA'
//   },
//   hobbies: ['reading', 'swimming', 'coding']
// };

// let {name,address:{city},hobbies:[firstOne]}=user;

// console.log(name);
// console.log(city);
// console.log(firstOne);

// a)
// const colors = ['red', 'green',"white"];

// b)
// const colorsTwo = ['red', 'green'];

// let [one,two,three=["see"]]=colorsTwo;

// console.log(one);
// console.log(two);
// console.log(three);

// function formatUser(name,age,role="NA") {
//   return (`${name},${age},${role}`)
// }

// console.log(formatUser("yash",23,"Fullstack"));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// let combine=[...arr1,...arr2,...arr3];
// combine.push(0);
// combine.unshift(10)
// console.log(combine);

// const defaultSettings = {
//   theme: 'light',
//   language: 'en',
//   notifications: true,
//   autoSave: false
// };

// const userSettings = {
//   theme: 'dark',
//   notifications: false
// };

// let see={...defaultSettings,...userSettings};

// console.log(see);

// const numbers = [10, 20, 30, 40, 50];

// function calculateSum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// console.log(calculateSum(...numbers));

let num = [1, 1, 1, 1, 1];

// let total = 0;
// for (let a = 0; a <= num.length - 1; a++) {
//   total = total + num[a];
// }
// console.log(total);

// let reduceTotal = num.reduce((accumulator,nextValue) => {
//   return accumulator + nextValue;
// },0);
// console.log("Reduce Total:",reduceTotal);

// function multiply(multiple, ...numbers) {
//   return numbers.reduce((sum, currentValue) => {
//     return sum + multiple * currentValue;
//   }, 0);
// }

// console.log(multiply(2, 3, 4, 5));

// const scores = [95, 87, 92, 78, 85, 90, 88];

// let [first, second, ...rest] = scores;

// let average = rest.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue / rest.length;
// }, 0);
// console.log(first);
// console.log(second);
// console.log(average);

// const scores = [95, 87, 92, 78, 85, 90, 88];
// let [first,second,...remainingValues]=scores; // Destructuring (Extract) + Rest operator (Collect)

// function average(...values){  // Rest parameter (collects)
//  let total=values.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
//  })
//  return total/values.length;
// }

// console.log(average(...remainingValues));// Spread operator (expands array into arguments)

// const student = {
//   id: 1,
//   name: 'Sarah',
//   email: 'sarah@email.com',
//   grade: 'A',
//   subjects: ['Math', 'Science'],
//   attendance: 95,
//   behavior: 'excellent'
// };

// const {id,name,...details}=student;

// console.log(id);
// console.log(name);
// console.log(details);

// const user = {
//   name: 'John Doe',
//   age: 30,
//   address: {
//     street: '123 Main St',
//     city: 'New York',
//     country: 'USA'
//   },
//   hobbies: ['reading', 'swimming', 'coding']
// };

// const {name,address:{city},hobbies:[firstOne]}=user;

// console.log(name);
// console.log(city);
// console.log(firstOne);

// // a)
// const colors = ['red', 'green',"white"];

// // b)
// const colorsTwo = ['red', 'green'];

// const [first,second,third=["yellow"]]=colorsTwo;

// console.log(first);
// console.log(second);
// console.log(third);

// const userInfo={
//   name:"Alice",
//   age:"25"
// }

// const{name,age}=userInfo;

// function  formatUser(name,age,email="NA"){
//   return `${name},${age},${email}`
// }

// console.log(formatUser(name,age));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];

// const combineArray=[0,...arr1,...arr2,...arr3,10];
// const combineArray=[...arr1,...arr2,...arr3];

// combineArray.unshift(0)
// combineArray.push(10)

// console.log(combineArray);

// const defaultSettings = {
//   theme: 'light',
//   language: 'en',
//   notifications: true,
//   autoSave: false
// };

// const userSettings = {
//   theme: 'dark',
//   notifications: false
// };

// const newOne={...defaultSettings,...userSettings}

// console.log(newOne);

// const numbers = [10, 20, 30, 40, 50];

// function calculateSum(a, b, c, d, e) {
//   return a + b + c + d + e;
// }

// console.log(calculateSum(...numbers)); // spread operator basically we are expanding the value

// function multiply(multiplier, ...values) {
//  return values.reduce((accumulator, currentValue) => {
//    return accumulator + (multiplier * currentValue);
//   }, 0);
// }

// console.log(multiply(2, 3, 4, 5));

// const scores = [95, 87, 92, 78, 85, 90, 88];
// let [firstOne,secondOne,...remainingValues]=scores; // Destructuring (Extract) + Rest operator (Collect)

// function average(...values){  // Rest parameter (collects)
//  let total=values.reduce((accumulator,currentValue)=>{
//     return accumulator+currentValue;
//  })
//  return total/values.length;
// }
// console.log(firstOne);
// console.log(secondOne);
// console.log(average(...remainingValues));// Spread operator (expands array into arguments)


// const student = {
//   id: 1,
//   name: 'Sarah',
//   email: 'sarah@email.com',
//   grade: 'A',
//   subjects: ['Math', 'Science'],
//   attendance: 95,
//   behavior: 'excellent'
// };


// const {id,name,...details}=student;

// console.log(id);
// console.log(name);
// console.log(details);
