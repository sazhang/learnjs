const mymodule = require('./mymodule');

const path = process.argv[2];
const ext = process.argv[3];

function logResult(err, filteredFiles) {
  if (err) { 
    return callback(err);
  }
  for (let f = 0; f < filteredFiles.length; f++) {
    console.log(filteredFiles[f]);
  }
}

mymodule(path, ext, logResult);