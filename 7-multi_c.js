const x = process.argv[2];
const count = parseInt(x);

if (isNaN(count) || count <= 0) {
    console.log("Missing number of occurrences");
} else {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += 'C is fun\n';
    }
    console.log(output.trim());
}
