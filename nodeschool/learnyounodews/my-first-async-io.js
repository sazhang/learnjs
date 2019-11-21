const fs = require('fs');

const path = process.argv[2];
let numNewLines = null;

function countNewLines(callback) {
  fs.readFile(path, function doneReading(err, fileContents) {
    const str = fileContents.toString();
    const substrs = str.split('\n');
    numNewLines = substrs.length - 1;
    callback();
  });
}

function logResult() {
  console.log(numNewLines);
}

countNewLines(logResult);