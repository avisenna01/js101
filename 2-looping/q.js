// 1.
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 1) console.log(i);
}

// 2.
const arr = [3, 7, 2, 9, 5, 10];
let l = arr.length;
let max = 0;
for (let i = 0; i < l; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log("max: ", max);

// 3.
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i + 1; j++) {
    // console.log("*");
    process.stdout.write("*");
  }
  console.log();
}

// 4.
const nilai = [3, 7, 2, 9, 5, 10];
l = nilai.length;
let avg = 0;
for (let i = 0; i < l; i++) {
  avg += nilai[i];
}
avg /= l;
console.log("avg: ", avg);
