const http = require('http');

function collectThenPrint(path, callback) {
  let completeString = '';
  http.get(path, function(response) {
    response.setEncoding('utf8');
    response.on('data', function(data) {
      completeString += data;
    });
    response.on('end', function() {
      try {
        callback(completeString);
      } catch (err) {
        console.log(err);
      }
    })
    response.on('error', console.error);
  }).on('error', console.error);
}

function logResult(completeString) {
  console.log(completeString);
}

for (let i = 0; i < 3; i++) {
  const path = process.argv[i + 2];
  collectThenPrint(path, logResult);
}
