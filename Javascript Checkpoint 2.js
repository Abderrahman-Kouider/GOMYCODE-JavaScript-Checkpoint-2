//Reverse a String: Write a function that reverses a given string.

function reversal(str){
    return str.split("").reverse().join("");
}

//console.log(reversal("Hello"))

----------------------------------------------------------------------

//Count Characters: Create a function that counts the number of characters in a string.

function countLetters(str){
    return str.length;
  }

//console.log(count-letters("What's up"))

----------------------------------------------------------------------

//Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1)
}

//console.log(capitalize("hat's up"))

----------------------------------------------------------------------

//Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.

function findMinMax(arr) {
    if (arr.length === 0) {
      throw new Error("The array is empty.");
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (const number of arr) {
      min = Math.min(min, number);
      max = Math.max(max, number);
    }
  
    return { min, max };
  }
  
//  const ourArray = [12, 2, 13, 22, 40];
//  const result = findMinMax(ourArray);
  
//  console.log(result)

----------------------------------------------------------------------

//Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArr(arr) {
  let total = 0;
  for (const num of arr) {
    total += num;
  }
  return total;
}

// const numbers = [1, 2, 3, 4, 5];
// const sumOfNumbers = sumArr(numbers);

// console.log(sumOfNumbers);

----------------------------------------------------------------------

//Filter Array: Implement a function that filters out elements from an array based on a given condition.

function filterArr(arr){
    return arr.filter(number => number < 20);
}

//let myArray = [2, 3, 5, 6, 22, 329, 322, 24]
//console.log(filterArr(myArray))

----------------------------------------------------------------------

//Factorial: Write a function to calculate the factorial of a given number.

function factorialize(num) {
    var result = num;
    if (num === 0 || num === 1) 
      return 1; 
    while (num > 1) { 
      num--;
      result *= num;
    }
    return result;
  }
  
//console.log(factorialize(5))

----------------------------------------------------------------------

//Prime Number Check: Create a function to check if a number is prime or not.

function prime(num) {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
          if(num % i === 0) return false;
      }
      return num > 1;
  }

//  console.log(prime(25))

----------------------------------------------------------------------

//Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function fibonacci(n) {
    if (n <= 1) return n;
  
    let prev = 0;
    let curr = 1;
    let next;
  
   
    for (let i = 2; i <= n; i++) {
      next = prev + curr;
      prev = curr; 
      curr = next; 
    }
  
    return curr;
  }
  
//const terms = 8;
//const fibonacciSequence = [];
  
//for (let i = 0; i < terms; i++) {
    //fibonacciSequence.push(fibonacci(i));
//    }
  
//console.log(fibonacciSequence);