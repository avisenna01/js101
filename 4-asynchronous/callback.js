// Define a function that takes a callback function as an argument
function greet(name, callback) {
  console.log("Hello, " + name + "!");
  callback();
}

// Define a callback function
function sayGoodbye() {
  console.log("Goodbye!");
}

// Call the greet function, passing the callback function as an argument
greet("John", sayGoodbye);

/** CALLBACK
 * fungsi yang di kirim sebagai argumen/parameter ke fungsi yang lain
 */

function printResult(data) {
  console.log("callback: ", data);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

printResult(myCalculator(5, 5));
