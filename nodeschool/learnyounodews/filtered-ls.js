const fs = require('fs');

const path = process.argv[2];
const ext = process.argv[3];
let filteredFiles = [];

function filterByExt(callback) {
  fs.readdir(path, function filterFiles(err, list) {
    filteredFiles = list.filter(function(file) {
      const idx = file.indexOf('.');
      if (idx >= 0) {
        return file.substring(idx + 1) === ext;
      }
    });
    callback();
  });
}

function logResult() {
  for(let f = 0; f < filteredFiles.length; f++) {
    console.log(filteredFiles[f]);
  }
}

filterByExt(logResult);