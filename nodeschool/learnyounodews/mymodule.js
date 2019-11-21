const fs = require('fs');

module.exports = function (path, ext, callback) {
  fs.readdir(path, function filterFiles(err, list) {
    if (err) { 
      return callback(err);
    }
    let filteredFiles = list.filter(function(file) {
      const idx = file.indexOf('.');
      if (idx >= 0) {
        return file.substring(idx + 1) === ext;
      }
    });
    callback(null, filteredFiles);
  });
} 