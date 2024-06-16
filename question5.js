function factorial(n) {
    // Base case: factorial of 0 is 1
    if (n === 0) {
        return 1;
    }
    // Recursive case: n * factorial of (n - 1)
    return n * factorial(n - 1);
}

// Test the function with different inputs
console.log(factorial(0)); // Expected output: 1
console.log(factorial(1)); // Expected output: 1
console.log(factorial(2)); // Expected output: 2
console.log(factorial(3)); // Expected output: 6
console.log(factorial(4)); // Expected output: 24
console.log(factorial(5)); // Expected output: 120
console.log(factorial(6)); // Expected output: 720
