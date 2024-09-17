for (let i = 0; i < 5; i++) {
  console.log("loop-", i);
}

let array = [1, 2, 3, 4, 5];
let res = 2;
let res2 = 3;
for (let i = 0; i < array.length; i++) {
  res += array[i];
  res2 *= array[i];
}
console.log(res);
console.log(res2);
