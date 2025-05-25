// Get the first argument and convert it to an integer
const x = parseInt(process.argv[2]);

// Check if x is a valid number
if (Number.isNaN(x) || x < 1) {
    console.log("Missing number of occurrences");
} else {
    // Loop to print "C is fun" x times
    for (let i = 0; i < x; i++) {
        console.log("C is fun");
    }
}
