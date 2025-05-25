// Get the first argument and convert it to an integer
const x = parseInt(process.argv[2]);

// Check if x is a valid number and print the appropriate message
console.log(Number.isNaN(x) || x < 1 ? "Missing number of occurrences" : [...Array(x)].map(() => "C is fun").join("\n"));
