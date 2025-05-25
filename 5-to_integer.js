const arg = process.argv[2];

const num = parseInt(arg);

console.log(Number.isNaN(num) ? "Not a number" : `My number: ${num}`);
