function curry(func) {
    // Get the number of arguments the original function expects
    const arity = func.length;

    // Return a curried version of the original function
    return function curried(...args) {
        // If the number of provided arguments is less than the arity
        if (args.length < arity) {
            // Return a function that takes the rest of the arguments
            return function(...moreArgs) {
                // Combine the current arguments with the new arguments
                return curried(...args.concat(moreArgs));
            };
        } else {
            // If all arguments are provided, execute the original function
            return func(...args);
        }
    };
}

// Test the curry function with a function that adds two numbers
function add(a, b) {
    return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Expected output: 5
console.log(curriedAdd(5)(10)); // Expected output: 15
console.log(curriedAdd(0)(10)); // Expected output: 10
console.log(curriedAdd(-3)(7)); // Expected output: 4
