function calculateTax() {
    // Define the tax rates based on income ranges
    const taxBrackets = [
        { threshold: 50000, rate: 0.1 },
        { threshold: 100000, rate: 0.2 },
        { threshold: Infinity, rate: 0.3 }
    ];

    // Return a function that calculates the tax based on income
    return function(income) {
        let tax = 0;
        for (let i = 0; i < taxBrackets.length; i++) {
            if (income > taxBrackets[i].threshold) {
                tax += taxBrackets[i].threshold * taxBrackets[i].rate;
            } else {
                tax += income * taxBrackets[i].rate;
                break;
            }
        }
        return tax;
    }
}

// Create the calculateTax function
const calculate = calculateTax();

// Test the function with various incomes
console.log(calculate(30000)); // Expected output: 3000 (10% of 30000)
console.log(calculate(60000)); // Expected output: 11000 (10% of 50000 + 20% of 10000)
console.log(calculate(150000)); // Expected output: 29000 (10% of 50000 + 20% of 50000 + 30% of 50000)
