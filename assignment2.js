// Prime Number Check: Create a function to check if a number is prime or not.
function isPrime(number) {
    // Prime numbers are positive integers greater than 1
    if (number <= 1) return false;
  
    // Check for divisibility by 2 and 3 as a basic optimization
    if (number % 2 === 0 || number % 3 === 0) return number === 2 || number === 3;
  
    // Loop through potential divisors up to the square root of the number
    for (let i = 5; i * i <= number; i += 6) {
      if (number % i === 0 || number % (i + 2) === 0) return false;
    }
  // If no divisors found, the number is prime
  return true;
}
  
const num = 4;
const isPrimeResult = isPrime(num);

console.log(num,isPrimeResult ? "is a prime number" : "is not a prime number");



// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.
function fibonacci(n) {
  // Base cases:
  if (n <= 1) {
    return n;
  }

  // Recursive case: nth term is the sum of (n-1)th and (n-2)th terms
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const numTerms = 10;
const fibonacciSequence = [];

for (let i = 0; i < numTerms; i++) {
  fibonacciSequence.push(fibonacci(i));
}

console.log(fibonacciSequence);