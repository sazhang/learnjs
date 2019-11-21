// CHAPTER 1
// looping a triangle
let str = "#";
for (let i = 0; i < 7; i++) {
  console.log(str);
  str = str + "#";
}

// fizzbuzz
for (let i = 1; i < 101; i++) {
  if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  }
}

// chessboard
let size = 8;
let str = "# ";
for (let i = 0; i < size; i++) {
  let row = "";
  if (i % 2 == 0) {
    row = row + " ";
  }
  for (let i = 0; i < size / 2; i++) {
    row = row + str;
  }
  console.log(row + "\n");
}

// CHAPTER 2

