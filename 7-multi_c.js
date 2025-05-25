const x = parseInt(process.argv[2]);

console.log(Number.isNaN(x) || x < 1 ? "Missing number of occurrences" : Array(x).fill("C is fun").join("\n"));
