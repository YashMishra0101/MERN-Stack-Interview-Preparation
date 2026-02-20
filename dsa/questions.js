/*
# 📊 DSA Questions — Arrays, Strings, Sorting, Searching & Recursion

# Note (Very Important) 🤚
> This section covers DSA (Data Structures & Algorithms) problems commonly asked in coding rounds and interviews.
> Questions include Arrays, Strings, Sorting Algorithms, Searching, Recursion, and more.
> For each problem, try to solve it yourself first before checking the answers file.

--Total: 24 Questions

#1) Given an array of integers, calculate the total of all its values.

let arr=[10,20,30,40,50];

#2) Find the largest value in an array.

let arr=[10,20,78,30,85,40,50,];

#3) Find the lowest value in the array.

let arr=[10,20,78,4,30,85,40,50,];

#4) Find the first and second maximum values from the array. Create a solution that can find the first and second maximum values from the arrays given below:
let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr2 = [50, 50, 50, 50];
let arr3 = [99, 99, 99, 89, 87];

#5) Reverse the array.

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let arr2=[0,45,98,1,33,1,-7,55];

#6) Put 0s on the left and 1s on the right side.

let arr=[0,0,1,0,1,0,1,1,0,1,0]

#7) Print each character on a new line.

let s="ramratan";

#8) Print each character in reverse order, on a new line.

let s="ramratan";

#9) Check whether the string is a palindrome or not.

let a="abcdef";

#10) Find two numbers in a sorted array whose sum equals the "target" using two pointers. Your target is 13 and the array is sorted.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

#11) Write a JavaScript function to toggle the case of each character in a given string without using built-in methods like toUpperCase() or toLowerCase().
let str="YAsh";

#12) Count how many times each character repeats in a string. (This is a Frequency Counter pattern.)

let str = "zZabcdedcjbAeeee";

#13) Solve the following:
1) Use console.log() to display the current year.
2) Create a for loop that calculates the factorial of 5.

#14) In JavaScript, what happens if you declare a variable without using let, const, or var?

#15) Fibonacci Series — 4 Variations

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

#16) What is Memoization?

#17) Why does the first code throw a "Maximum call stack size exceeded" error while the second code runs infinitely without crashing, even though both are designed to run continuously?

---Context:

>>Recursion
Recursion is a programming technique in which a function calls itself to solve a problem by breaking it down into smaller subproblems, continuing until a base case is reached.

>>Backtracking
Backtracking is a method where we try all the possible options. If one option doesn't lead to a valid solution, we go back and try another option.
We keep doing this until we find the correct solution.
--or--
Backtracking is an algorithmic technique built on top of recursion. It's used to search for all possible solutions by exploring paths,
and if one path fails, we backtrack and try another.

let test = (n) => {
if (n===0) return;
console.log("hello ji");
test(n--)
};

test(5);


let testTwo = (n) => {
for(let a=n; a>-1; a++){
    console.log("Hello ji");
}
};

testTwo(5);

#18) Sort the array using Bubble Sort, Selection Sort, Insertion Sort, or Merge Sort.
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];

#19) Merge two sorted arrays.
let arrayOne = [3, 5, 8, 9, 89, 92];
let arrayTwo = [1, 6, 34, 67, 90, 95, 102, 999];

#20) You are given a sorted array of distinct integers in ascending order and a target value. Implement the binary search algorithm to return the index of the target if it is present in the array. If it is not present, return -1.
let target = 25;
let arr = [2, 5, 14, 25, 67, 89, 103, 117, 150];

#21) Write a function to print numbers from n to 1 and from 1 to n without using a loop.
Example 1 (n to 1):
Input: n = 5
Output: 5 4 3 2 1

Example 2 (1 to n):
Input: n = 5
Output: 1 2 3 4 5

#22) Write a function to calculate the sum of the first n natural numbers without using a loop.
Example:
Input: n = 10
Output: 55
Explanation: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

#23) Write a function to print Fibonacci numbers up to n without using a loop.
Example:
Input: n = 10
Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
Explanation: Each number is the sum of the previous two numbers.

#24) In JavaScript, the main thread is single-threaded.
Can you write a function that blocks the JavaScript thread for a given number of seconds before continuing execution?

For example, calling `blockThread(3)` should pause execution for 3 seconds before printing `"Done"`.

Bonus: Can you implement this without using `setTimeout`, `setInterval`, or `Promise`? (Hint: use a busy-wait loop with `Date.now()`)
*/
