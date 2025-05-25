const x = process.argv[2];
const count = parseInt(x);

if (isNaN(count)) {
    console.log("Missing number of occurrences");
} else if (count > 0) {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += 'C is fun\n';
    }
    console.log(output.trim());
}

