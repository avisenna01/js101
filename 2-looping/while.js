let test = 1;
while (test < 5) {
  console.log("while loop ke-", test);
  test++;
}

let password = "12345";
while (password.length < 8) {
  console.log("pass tidak valid");
  password++;
}

let n = 20;
let i = 2;

while (i <= n) {
  let isPrime = true;
  let j = 2;
  while (j < i) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
    j++;
  }
  if (isPrime) {
    console.log("prime number: ", i);
  }
  i++;
}
