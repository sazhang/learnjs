const fs = require('fs');

module.exports = function(dirName, ext, callback) {
    fs.readdir(dirName, function doneReading(err, files) {
      if (err) {
        return callback(err);
      }
      ext = "." + ext;
      const filteredFiles = files.filter(function(fileName) {
        return fileName.substring(fileName.length - ext.length) === ext;
      });
      return callback(null, filteredFiles);
    });
};
