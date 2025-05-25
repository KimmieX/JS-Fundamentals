function factorial(n) {
    if (n < 0) return Infinity; // Factorial is not defined for negative numbers
    if (n === 0 || isNaN(n)) return 1; // Base case: factorial of 0 is 1
    return n * factorial(n - 1); // Recursive case
}

const input = parseInt(process.argv[2]);
console.log(factorial(input));
