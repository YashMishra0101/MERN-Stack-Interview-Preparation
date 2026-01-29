/*
#1)Sorting in Javascript .

1. Sorting helps in arranging elements in ascending or descending order, finding smallest and greatest elements  
  => Sorting is used to organize data systematically.

2. By default, `sort()` converts array elements to strings and sorts them alphabetically.  
  =>  The default behavior of `sort()` is string-based sorting.

3. If we need to sort numbers, we must use a comparison function because, by default, `sort()` treats numbers as strings.  
  => Without a comparison function, numbers like `[100, 2, 50]` converted into string for that we need to use comparison 
  operator.

4. Sorting modifies the original array.  
  => The `sort()` method mutates the original array. If you want to keep the original array unchanged, 
  use `.slice()` to create a copy before sorting.

5. By default, uppercase letters are sorted before lowercase letters.  
  => This is due to the Unicode values of characters (uppercase letters have lower values than lowercase ones).


>>About Unique Code Value

Every character (like A, B, C, D), every emoji, and every currency symbol has a unique Unicode value that helps the computer understand 
them. When we put any number inside double quotes or single quotes, it becomes a string. At this point, the number is no longer 
treated as a number but as a string with its own Unicode value.  

When we use the `.sort()` method directly on strings, they are arranged based on their Unicode values, not as numbers.  

Even if we use pure numbers inside an array and then apply `.sort()`, the numbers are temporarily converted into strings during 
sorting. This is why they are arranged according to their Unicode values instead of numerically.  

To avoid this and ensure proper numerical sorting, we need to use a comparator function in `.sort()`, so the values are treated 
as numbers instead of strings.  

>> Comparator Functions in Sorting

When working with sorting in JavaScript, comparator functions use comparison logic to determine order. These can be 
customized based on your requirements.

- Numerical Sorting:

  let numbers = [18, 6, 4, 1, 0];
  
  numbers.sort((a, b) => a - b); // Ascending order

  numbers.sort((a, b) => b - a); // Descending Order:

- Custom Sorting (e.g., by string length):

  let words = ["apple", "bat", "banana"];
  words.sort((a, b) => a.length - b.length); // Shortest to longest

*/
