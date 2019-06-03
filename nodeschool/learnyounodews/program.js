// HELLO WORLD
// Write a program that prints the text "HELLO WORLD" to the console (stdout).
// console.log("HELLO WORLD");

// BABY STEPS
// Write a program that accepts one or more numbers as command-line arguments
// and prints the sum of those numbers to the console (stdout).
/*let sum = 0;
for(let i = 2; i < process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);*/

// MY FIRST I/O!
/* Write a program that uses a single synchronous filesystem operation to
  read a file and print the number of newlines (\n) it contains to the
  console (stdout), similar to running cat file | wc -l.

  The full path to the file to read will be provided as the first
  command-line argument (i.e., process.argv[2]). You do not need to make
  your own test file. */

/*var fs = require('fs');
let buf = fs.readFileSync(process.argv[2]);
let str = buf.toString();
console.log(str.split("\n").length - 1);*/

// MY FIRST ASYNC I/O!
// similar instruct as sync but a single asynchronous filesystem
/*var fs = require('fs');
var numLines = undefined;

function countLines(callback) {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    if (err) {
        return console.error(err);
    }
    let str = fileContents.toString();
    numLines = str.split("\n").length - 1;
    callback();
  });
}

function printNum() {
  console.log(numLines);
}

countLines(printNum);*/

// FILTERED LS
/* Create a program that prints a list of files in a given directory,
  filtered by the extension of the files. You will be provided a directory
  name as the first argument to your program (e.g. '/path/to/dir/') and a
  file extension to filter by as the second argument.
*/
/*var fs = require('fs');
var filteredFiles = undefined;
let ext = "." + process.argv[3];

function countFiles(callback) {
  fs.readdir(process.argv[2], function doneReading(err, files) {
    if (err) {
      return console.error(err);
    }
    filteredFiles = files.filter(function(fileName) {
      return fileName.substring(fileName.length - ext.length) === ext;
    });
    callback();
  });
}

function printFileNames() {
  for (let i = 0; i < filteredFiles.length; i++) {
    console.log(filteredFiles[i]);
  }
}

countFiles(printFileNames);*/

// MAKE IT MODULAR
/* 1. Export a single function that takes exactly the arguments described.
   2. Call the callback exactly once with an error or some data as described.
   3. Don't change anything else, like global variables or stdout.
   4. Handle all the errors that may occur and pass them to the callback.
*/
/*var mymodule = require('./mymodule.js');

function printFileNames(err, filteredFiles) {
  if (err) {
    return console.error(err);
  }
  for (let i = 0; i < filteredFiles.length; i++) {
    console.log(filteredFiles[i]);
  }
}

mymodule(process.argv[2], process.argv[3], printFileNames);*/

// HTTP CLIENT
/* Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Write the String contents of each  
  "data" event from the response to a new line on the console (stdout).
*/
/*const http = require("http");

function getContents(callback) {
  http.get(process.argv[2], response => {
    callback(response);
  });
}

function printContents(response) {
  response.setEncoding("utf8");
  response.on("data", data => {
    console.log(data);
  });
}

getContents(printContents);*/

// their solution
/*http
  .get(process.argv[2], function(response) {
    response.setEncoding("utf8");
    response.on("data", console.log);
    response.on("error", console.error);
  })
  .on("error", console.error);*/

// HTTP COLLECT
/*Write a program that performs an HTTP GET request to a URL provided to you
  as the first command-line argument. Collect all data from the server (not
  just the first "data" event) and then write two lines to the console
  (stdout).

  The first line you write should just be an integer representing the number
  of characters received from the server. The second line should contain the
  complete String of characters sent by the server.
*/
/*const http = require("http");
function getContents(callback) {
  http.get(process.argv[2], response => {
    callback(response);
  });
}

let allChars = "";
let totalCharsNum = 0;
function printContents(response) {
  response.setEncoding("utf8");
  response.on("data", data => {
    totalCharsNum += data.length;
    allChars += data;
  });

  response.on("end", () => {
    try {
      console.log(totalCharsNum);
      console.log(allChars);
    } catch (err) {
      console.error(err.message);
    }
  }).on('error', (err) => {
      console.error(`Got error: ${err.message}`);
  });
}

getContents(printContents);*/
// their solution - uses libraries so didn't include here

// JUGGLING ASYNC
/* This problem is the same as the previous problem (HTTP COLLECT) in that
  you need to use http.get(). However, this time you will be provided with
  three URLs as the first three command-line arguments.

  You must collect the complete content provided to you by each of the URLs
  and print it to the console (stdout). You don't need to print out the
  length, just the data as a String; one line per URL. The catch is that you
  must print them out in the same order as the URLs are provided to you as
  command-line arguments.
*/
/*const http = require("http");
function getContents(url) {
  let allChars = "";
  http.get(url, response => {
    response.setEncoding("utf8");
    response.on("data", data => {
        allChars += data;
    });

    response
    .on("end", () => {
      try {
        console.log(allChars);
      } catch (err) {
        console.error(err.message);
      }
    })
    .on("error", err => {
      console.error(`Got error: ${err.message}`);
    });

  });
}

let sentences = [];
function loopThruUrls() {
  for (let i = 2; i < process.argv.length; i++) {
    sentences[i - 2] = getContents(process.argv[i]);
  }
  return sentences;
}

loopThruUrls();*/

// TIME SERVER
/* Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

  "YYYY-MM-DD hh:mm"
*/
/*const net = require('net');
const server = net.createServer((socket) => {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }

  let day = date.getDate();
  if (day < 10) {
    day = "0" + day;
  }

  const hours = date.getHours();
  const mins = date.getMinutes();

  socket.end(`${year}-${month}-${day} ${hours}:${mins}\n`);
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
})
server.listen(process.argv[2]);*/


// HTTP FILE SERVER
/* Write an HTTP server that serves the same text file for each request it
  receives.

  Your server should listen on the port provided by the first argument to
  your program.

  You will be provided with the location of the file to serve as the second
  command-line argument. You must use the fs.createReadStream() method to
  stream the file contents to the response.
*/
/*const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  let readStream = fs.createReadStream(process.argv[3]);
  readStream.on('open', () => {
    readStream.pipe(response);
  })

  readStream.on('error', (err) => {
    response.end(err);
  })
}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
});
server.listen(process.argv[2]);*/

// their solution
/*
var http = require("http");
var fs = require("fs");
var server = http.createServer(function(req, res) {
  res.writeHead(200, { "content-type": "text/plain" });
  fs.createReadStream(process.argv[3]).pipe(res);
});
server.listen(Number(process.argv[2]));
*/


// HTTP UPPERCASERER
/*
  Write an HTTP server that receives only POST requests and converts
  incoming POST body characters to upper-case and returns it to the client.

  Your server should listen on the port provided by the first argument to
  your program.
*/
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {

}).on('error', (err) => {
  console.error(`Got error: ${err.message}`);
});
server.listen(process.argv[2]);