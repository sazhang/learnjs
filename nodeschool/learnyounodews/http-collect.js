const http = require('http');

const path = process.argv[2];

let totalChars = 0;
let completeString = '';

http.get(path, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    totalChars += data.length;
    completeString += data;
  });
  response.on('end', function() {
    try {
      console.log(totalChars);
      console.log(completeString);
    } catch (err) {
      console.log(err);
    }
  })
  response.on('error', console.error);
}).on('error', console.error);
