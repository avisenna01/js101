// const readline = require("readline");

// // Create an interface to read from the terminal
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// // Prompt the user for input
// rl.question("Enter your name: ", (answer) => {
//   console.log(`Hello, ${answer}!`);

//   // Close the interface after receiving input
//   rl.close();
// });

// 1. Switch case

let opt = 9;
// opt = prompt("input number: ");
switch (opt) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
    break;
  case 4:
    console.log("Thursday");
  default:
    console.log("Invalid input");
    break;
}

// 2. if else
let nilai = 80;
if (nilai >= 80) {
  console.log("Lulus dengan sangat baik");
} else if (nilai < 80 && nilai >= 70) {
  console.log("lulus dengan baik");
} else if (nilai >= 60 && nilai < 70) {
  console.log("lulus tapi b aja");
} else {
  console.log("tidak lulus LOL");
}

// 3. nested if
let mtk = 70,
  fisika = 60,
  kimia = 100;

if (
  !(
    mtk >= 0 &&
    mtk <= 100 &&
    fisika >= 0 &&
    fisika <= 100 &&
    kimia >= 0 &&
    kimia <= 100
  )
) {
  console.log("Nilai tidak valid");
} else {
  let avg = (mtk + fisika + kimia) / 3;
  console.log(avg);
  if (avg >= 80) {
    console.log("Anda lulus dengan baik");
  } else if (avg < 80 && avg >= 60) {
    console.log("Anda lulus");
  } else {
    console.log("Fail");
  }
}

// 4. nested if
let totalPembelian = 1000001;
if (totalPembelian == 0) {
  console.log("tidak valid");
} else {
  let discount, dv;
  if (totalPembelian > 1000000) {
    console.log("diskon 10%");
    dv = 10;
    discount = true;
  } else if (totalPembelian > 500000) {
    console.log("diskon 5%");
    dv = 5;
    discount = true;
  } else {
    console.log("no discount");
    discount = false;
  }
  if (discount) {
    console.log("Congrats! you got ", dv, "% discount!");
    let finalPrice = (totalPembelian * (100 - dv)) / 100;
    console.log("Normal price: ", totalPembelian);
    console.log("Final price after discount: ", finalPrice);
  } else {
    console.log("you dont get discount. Total price: ", totalPembelian);
  }
}
