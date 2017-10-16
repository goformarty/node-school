const fs = require('fs');

const bufferToString = fs.readFileSync(process.argv[2]).toString();
const linesArray = bufferToString.split('\n');

let result = linesArray.length - 1;
console.log(result);
