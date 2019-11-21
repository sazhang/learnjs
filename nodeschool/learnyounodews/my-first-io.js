const fs = require('fs');

const path = process.argv[2];
const str = fs.readFileSync(path).toString();
const substrs = str.split('\n');
console.log(substrs.length - 1);