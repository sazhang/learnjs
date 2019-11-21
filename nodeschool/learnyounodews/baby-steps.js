// The first element of the process.argv array  
// is always 'node', and the second element is always the path to your  
// baby-steps.js file, so you need to start at the 3rd element (index 2)
const input = process.argv;
let result = 0;
for (let i = 2; i < input.length; i++) {
  result += Number(input[i]);
}
console.log(result);