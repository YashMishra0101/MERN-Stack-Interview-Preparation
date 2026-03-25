/*
# 📊 DSA Answers — Arrays, Strings, Sorting, Searching & Recursion

# Note 🤚
> This file contains answers and explanations for all DSA questions.
> Each answer includes multiple approaches where applicable, along with Time Complexity (TC) and Space Complexity (SC).

--Total: 18 Questions

#Ans 1) Array Sum
let arr = [10, 20, 30, 40, 50];

---Simple for loop
let arrTotal = 0;
for (let a = 0; a < arr.length; a++) {
  arrTotal += arr[a];
}
console.log(arrTotal);

TC: O(n)
SC: O(1)

---Using for of loop
let sum = 0;
for (let value of arr) {
  sum += value;
}
console.log(sum);

---Using reduce
let sum = arr.reduce((accum, next) => {
  return accum + next;
});
console.log(sum);


#Ans 2) Largest Value in Array
let arr=[10,20,78,30,85,40,50,];

---First Solution:

let biggestValue=arr[0]
for(let i=1; i<arr.length; i++){
    if(biggestValue<arr[i]){
        biggestValue=arr[i]
    }
}

console.log(biggestValue);

TC: O(n)
SC: O(1)

---Second Solution (In Industry)

let arr=[10,20,78,4,30,85,40,50,];

let max=Math.max(...arr)
console.log(max);

TC: O(n)
SC: O(n)

#Ans 3) Lowest Value in Array
let arr=[10,20,78,4,30,85,40,50,];

---First Solution

let smallestValue=arr[0]
for(let i=1; i<arr.length; i++){
    if(arr[i]<smallestValue){
        smallestValue=arr[i]
    }
}

console.log(smallestValue);

TC: O(n)
SC: O(1)

---Second Solution

let arr=[10,20,78,4,30,85,40,50,];

let min=Math.min(...arr)
console.log(min);

TC: O(n)
SC: O(n)

#Ans 4) First and Second Maximum
let arr1 = [10, 20, 78, 4, 30, 85, 40, 50, 80, 86, 99, 87, 89, 9, 98, 99];
let arr2 = [50, 50, 50, 50];
let arr3 = [99, 99, 99, 89, 87];

let firstSecondMaxArray = (arr) => {
  let firstMax = -Infinity;
  let secondMax = -Infinity;
  for (let a = 0; a < arr.length; a++) {
    if (firstMax < arr[a]) {
      secondMax = firstMax;
      firstMax = arr[a];
    } else if (arr[a] > secondMax && arr[a] < firstMax) {
      secondMax = arr[a];
    }
  }
  if (secondMax === -Infinity) {
    secondMax = "No second max";
  }

  return { firstMax, secondMax };
};

console.log(firstSecondMaxArray(arr1));

#Ans 5) Reverse the Array

---First Solution

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

let reverse=arr.reverse();
console.log(reverse);

>>It modifies the original array

So we can use this approach:

let reverse=[...arr];

console.log(reverse.reverse());

---Second Way (Not optimal: We are creating a new array based on the previous array, it takes same space as the previous array.)

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];

let revArray=[];
for(let a=arr.length-1; a>=0; a--){
   revArray.push(arr[a])
}

console.log(revArray);

---Third Solution (Optimal)

let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let arr2=[0,45,98,1,33,1,-7,55];

let a = 0;
let b = arr.length - 1;

while (a < b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  a++;
  b--;
}

console.log(arr);

Method name: Two-pointer swapping technique (in-place reversal)
- Time Complexity: O(n)
- Space Complexity: O(1)

#Ans 6) Put 0s Left, 1s Right

let arr=[0,0,1,0,1,0,1,1,0,1,0]

---First Approach
let a = 0;
let b = arr.length - 1;
while (a < b) {
  if (arr[a] === 1) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    b--;
  }
  if (arr[a] !== 1) {
    a++;
  }
}

console.log(arr);

- Time Complexity: O(n)
- Space Complexity: O(1)

---Second Approach (Better) (Two Pointer - Partition Process used in QuickSort)

let a=0;
let b=0;

while(a<arr.length){
  if(arr[a]===0){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
    b++;
  }
  a++;
}

console.log(arr);

- Time Complexity: O(n)
- Space Complexity: O(1)


#Ans 7) Palindrome Check

---Solution One using built-in methods

let checkPalindrom = (string) => {
  let rev = string.split("").reverse().join("");
  return rev === string ? true : false;
};

---Second Solution

let checkPalindrom = (string) => {
    let rev="";
  for (let i = string.length-1; i >= 0; i--) {
       rev+=string[i]
  }
  return rev ===string ? true : false;
};

console.log(checkPalindrom("abcdef"));

---Third Solution using Two Pointer

const checkPalindrom = (para) => {
  let a = 0;
  let b = para.length - 1;

  while (a < b) {
    if (para[a] !== para[b]) {
      return "Not a palindrome";
    }
    a++;
    b--;
  }

  return "It's a palindrome";
};

console.log(checkPalindrom(a));

#Ans 8) Two Pointer — Two Sum
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 13;

const checkTarget = (target) => {
  let right = 0;
  let left = arr.length - 1;
  while (right < left) {
    let total = arr[right] + arr[left];
    if (total < target) {
      right++;
    } else if (total > target) {
      left--;
    } else {
      console.log(`Found: ${arr[right]} + ${arr[left]} = ${total}`);
      return;
    }
  }
  console.log("No Target Found");
  return;
};

checkTarget(13);

- Time Complexity: O(n)
- Space Complexity: O(1)

#Ans 9) Frequency Counter

let str = "zZabcdedcjbAeeee";

let count = {};

for (let a = 0; a < str.length; a++) {
  let char = str[a].toLocaleLowerCase();

  if (count[char]) {
    count[char]++;
  } else {
    count[char] = 1;
  }
}

console.log(count);

TC = O(n)
SC = O(n)

#Ans 10) Fibonacci Series — 4 Variations

>>1)
const fiboNumber = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fiboNum = [0, 1];
  for (let a = 2; a < n; a++) {
    fiboNum.push(fiboNum[a - 2] + fiboNum[a - 1]);
  }
  return fiboNum;
};

console.log(fiboNumber(10));

--TC: O(n)
--SC: O(n)

>>2)

const getFiboNumber = (n) => {
  if (n < 0) return null;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev = 0;
  let curr = 1;

  for (let a = 3; a <= n; a++) {
    let temp = prev + curr;
    prev = curr;
    curr = temp;
  }
  return curr;
};

console.log(getFiboNumber(n));


--TC: O(n)
--SC: O(1)

>>3)
let n = 34;

const positionOfFiboNum = (n) => {
  if (n < 0) return "Invalid Number";
  if (n === 0) return 1;
  if (n === 1) return 2;
  let prev = 0;
  let curr = 1;
  let position = 2;
  while (curr < n) {
    let temp = prev + curr;
    prev = curr;
    curr = temp;
    position++;
  }

  return curr === n ? position : "Not a Fibonacci Number";
};

console.log(positionOfFiboNum(n));

--TC: O(n)
--SC: O(1)

>>4)
let n = 10;

const sumOfFiboNum = (n) => {
  if (n <= 0) return null;
  if (n === 1) return 0;
  if (n === 2) return 1;

  let prev = 0;
  let curr = 1;
  let sum = prev + curr;

  for (let a = 3; a <= n; a++) {
    let temp = prev+curr;
    prev = curr;
    curr = temp;
    sum += curr;
  }
  return sum;
};

console.log(sumOfFiboNum(n));

#Ans 11) Memoization
Memoization is an optimization technique used to speed up programs by saving time. It works by storing the
results of function calls in a cache. When the function is called again with the same inputs, it gets the
result from the cache instead of running the function again. This helps save time and system resources.

In simple words, memoization means storing the result in a cache so that if the user asks for the same thing
again, the program can return the saved result instead of calculating it again.

#Ans 12) Recursion vs Loop (Call Stack)
The first code uses recursion, and the second uses a loop — and they behave very differently under the hood.

--- Loops vs Recursion in JavaScript

In JavaScript, loops like for, while, or do-while run inside a single function call. No matter how many times the loop executes,
it doesn't add new function calls to the stack. That makes loops memory-efficient, fast, and safe from stack overflow.
They are ideal for simple, repetitive tasks like printing, counting, or iterating over arrays because they maintain a single
stack frame throughout execution.

In contrast, recursion creates a new function call for every step. So if the input size is large (for example, recurse(100000)),
it results in too many function calls, which can exceed the call stack limit and crash the program with a 👉 "Maximum call stack size
exceeded" error.

Most browsers have a call stack size limit ranging from ~10,000 to 100,000 calls, depending on the engine and environment.
Recursion is great for problems like tree traversal, divide-and-conquer algorithms, and deeply nested structures.
However, JavaScript does not support Tail Call Optimization in most engines, so for large input sizes, loops are preferred for
performance, safety, and reliability.

>👇
The JavaScript engine (like V8 in Chrome/Node.js, SpiderMonkey in Firefox, JavaScriptCore in Safari) has a call stack limit
of usually around 10,000 to 20,000 function calls.

#Ans 13) Sorting Algorithms

>>Bubble Sort
---Bubble Sort keeps swapping adjacent numbers (if they are in the wrong order) so that the bigger ones bubble to the end.
function bubbleSort(arr) {
  for (let a = 0; a < arr.length; a++) {
    let isSort=false;
    for (let b = 0; b < arr.length-1-a; b++) {
      if (arr[b] > arr[b + 1]) {
        let temp = arr[b];
        arr[b] = arr[b + 1];
        arr[b + 1] = temp;
        isSort=true;
      }
    }
    if(!isSort){
        break;
    }
  }
  return arr;
}
let arr = [2, 78, 9, 23, 3, -5, 0, 95, 1, 54, 77, -88];
console.log(bubbleSort(arr));

--TC: O(n²)
--SC: O(1)

>>Selection Sort
---Selection Sort repeatedly finds the smallest element from the unsorted part and swaps it into the correct position.
let selectionSort = (arr) => {
  for(let a=0; a<arr.length-1; a++){
    let minValue=a;
    for(let b=a+1; b<arr.length; b++){
      if(arr[b]<arr[minValue]){
        minValue=b;
      }
    }
    if(minValue !== a){
      let temp=arr[minValue];
      arr[minValue]=arr[a];
      arr[a]=temp;
    }
  }
  return arr;
};

console.log(selectionSort(arr));

--TC: O(n²)
--SC: O(1)


>>Insertion Sort
>In insertion sort, we check one element at a time, compare it with the previous elements, and place it in its correct position.
let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let a = i - 1;
    while (a >= 0 && arr[a] > current) {
      arr[a + 1] = arr[a];
      a--;
    }
    arr[a + 1] = current;
  }
  return arr;
};

console.log(insertionSort(arr));

--TC: O(n²)
--SC: O(1)

#Ans 14) Merge Two Sorted Arrays

let arrayOne = [3, 5, 8, 9, 89, 92];
let arrayTwo = [1, 6, 34, 67, 90, 95, 102, 999];

let mergeArray = (arrayOne, arrayTwo) => {
  let a = 0;
  let b = 0;
  let store = [];
  while (a < arrayOne.length && b < arrayTwo.length) {
    if (arrayOne[a] < arrayTwo[b]) {
      store.push(arrayOne[a]);
      a++;
    } else {
      store.push(arrayTwo[b]);
      b++;
    }
  }

  while (a < arrayOne.length) {
    store.push(arrayOne[a]);
    a++;
  }

  while (b < arrayTwo.length) {
    store.push(arrayTwo[b]);
    b++;
  }

  return store;
};

console.log(mergeArray(arrayOne, arrayTwo));

- Time Complexity: O(n + m) — where n and m are the lengths of the two arrays
- Space Complexity: O(n + m)

#Ans 15) Binary Search
let arr = [2, 5, 14, 25, 67, 89, 103, 117, 150];
let target = 25;

let binarySearch = (arr, target) => {
  let first = 0;
  let last = arr.length - 1;

  while (first <= last) {
    let mid = Math.floor(first + (last - first) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arr, target));

- Time Complexity: O(log n)
- Space Complexity: O(1)

#Ans 16) Print N to 1 and 1 to N (Recursion)
>>N to One

let nToOne = (n) => {
  if (n === 0) return;
  console.log(n);
  nToOne(n - 1);
};

nToOne(5);

>>One To N

let OneToN = (n) => {
  if (n === 0) return;
  OneToN(n - 1);
  console.log(n);
};

OneToN(5);

- Time Complexity: O(n)
- Space Complexity: O(n) — due to recursive call stack

#Ans 17) Sum of First N Natural Numbers (Recursion)

let sumNumbers = (n) => {
  if (n === 0) return 0;
  return n + sumNumbers(n - 1);
};

console.log(sumNumbers(10));

- Time Complexity: O(n)
- Space Complexity: O(n) — due to recursive call stack

#Ans 18) Fibonacci Without a Loop (Recursion)
let fiboNumber = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let print = fiboNumber(n - 1);
  print.push(print[print.length - 2] + print[print.length - 1]);
  return print;
};

console.log(fiboNumber(10));

- Time Complexity: O(n)
- Space Complexity: O(n) — due to recursive call stack and returned array

*/
