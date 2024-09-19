// 1. Cari dan tampilkan data mobil dengan harga tertinggi dan terendah
// import module
const fs = require("fs");
// data1 => raw data; mydata1 => json data; l1 => array of objects length
let data1, mydata1, l1;

// get data from json file
try {
  data1 = fs.readFileSync("./carProducts.json", "utf8");
  mydata1 = JSON.parse(data1);
  l1 = mydata1.length;
} catch (error) {
  console.log(error);
}

let carPrice = mydata1.map((car) => car.price); // get the car price
carPrice = carPrice.filter((n) => n); // menghilangkan null dan undefined

// find the car highest and lowest car price
const highestCarPrice = Math.max(...carPrice);
const lowestCarPrice = Math.min(...carPrice);
const expensiveCar = mydata1.find((car) => car.price == highestCarPrice);
const cheapCar = mydata1.find((car) => car.price == lowestCarPrice);
console.log("highest car price: ", highestCarPrice);
console.log("lowest car price: ", lowestCarPrice);
console.log("highest car price detail: ", expensiveCar);
console.log("lowest car price detail: ", cheapCar);

// 2. Cari dan tampilkan data mobil dengan tag "Promo"
let promoCar = mydata1.filter((car) => {
  return car.tag.some((tag) => tag == "Promo");
});
console.log("Promo car: ", promoCar);

// 3. Urutkan dan tampilkan mobil dari harga tertinggi ke rendah, jika ada harga yang null, tampilkan diurutan terakhir
mydata1.sort((a, b) => b.price - a.price); // b - a for reverse sort
// console.log("sorted based on car price: ", mydata1);
let carNamePrice = mydata1.map(
  (car) => `Car name: ${car.nama} - Price: ${car.price}`
);
console.log(carNamePrice);

// 4. Kelompokkan mobil-mobil berdasarkan tipe (engine, hybrid, electric) dan tampilkan data mobil berdasarkan kelompoknya
const engine = mydata1.filter((car) =>
  car.variant.some((v) => v.type == "hybrid")
);
console.log("Type engine cars: ", engine);
const hybrid = mydata1.filter((car) =>
  car.variant.some((v) => v.type == "engine")
);
console.log("Type hybrid cars: ", hybrid);
const electric = mydata1.filter((car) =>
  car.variant.some((v) => v.type == "electric")
);
console.log("Type electric cars: ", electric);

// 5. buat fungsi yang membaca data dari file JSON carProducts.json secara ASYNCHRONOUS, lalu urutkan mobil berdasarkan harga dari tinggi ke rendah, tampilin hasilnya ke file JSON yang sama

// CARA PERTAMA
// // read the file
// fs.readFile("./carProducts.json", "utf8", (error, data) => {
//   if (error) {
//     console.log("error explanation: ", error);
//     return;
//   }
//   const data2 = JSON.parse(data); // parse to json
//   data2.sort((a, b) => b.price - a.price); // b - a for reverse sort

//   // print to terminal sorted data
//   console.log(data2);

//   // write to file
//   fs.writeFile(
//     // "./carProductsUpdated.json",
//     "./carProducts.json",
//     JSON.stringify(data2),
//     "utf8",
//     (error) => {
//       if (error) {
//         console.log(error);
//         return;
//       }
//       console.log("File berhasil disimpan");
//     }
//   );
// });

// -------------------------------------------------------------- //

// CARA KEDUA
const fsp = require("fs").promises; // Using fs.promises for async/await

async function updateCarProducts() {
  try {
    // Read the file
    const data = await fsp.readFile("./carProducts.json", "utf8");

    // Parse the JSON data
    const data2 = JSON.parse(data);

    // Sort the data based on price in descending order
    data2.sort((a, b) => b.price - a.price);

    // Print sorted data to terminal
    console.log(data2);

    // Write the updated data back to the file
    await fsp.writeFile("./carProducts.json", JSON.stringify(data2), "utf8");

    console.log("File berhasil disimpan");
  } catch (error) {
    console.log("Error explanation: ", error);
  }
}

// Call the async function
updateCarProducts();

// 6. Buat fungsi untuk menambahkan mobil baru dari carProducts.json kedalam file "addNewCarProducts.json"
// still can use mydata1 as the clean data (format in json). So I dont need to build a function to read json file
let addNewCar = (listOfCars, car, filePath) => {
  listOfCars.push(car);
  fs.writeFile(filePath, JSON.stringify(listOfCars), "utf8", (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("Car berhasil ditambahkan");
  });
};
let filePathDestination = "addNewCarProducts.json";
let addedCar = {
  id: 7,
  name: "Tesla Super Car",
  price: 9999999999,
  tag: ["Futuristic car"],
  variant: [
    {
      color: "violet",
      transmission: "automatic",
      type: "electric",
    },
  ],
  isPreorder: true,
};

addNewCar(mydata1, addedCar, filePathDestination);

// 7. buat fungsi ASYNCHRONOUS yang mengambil produk mobil dengan harga tertinggi dan terendah, lalu hitung selisih harganya.
function getHighestPrice(mydata1) {
  return new Promise((resolve, reject) => {
    resolve(Math.max(...carPrice));
  });
}
function getLowestPrice(mydata1) {
  return new Promise((resolve, reject) => {
    resolve(Math.min(...carPrice));
  });
}

const getDataInParalel = () => {
  return Promise.all([getHighestPrice(), getLowestPrice()]);
};

async function selisihHarga() {
  try {
    const res = await getDataInParalel();
    console.log("Selisih harga: ", res[0] - res[1]);
  } catch (error) {
    console.log("error: ", error);
  }
}

selisihHarga();

// 8. buat fungsi yang mencari mobil dengan varian warna terbanyak.
// kalau pakai reduce hanya keluar 1 result saja
const totalVariant = mydata1.reduce((highest, current) => {
  return current.variant.length > highest.variant.length ? current : highest;
});

let max = totalVariant.variant.length;
console.log("max variant: ", totalVariant.variant.length);

const totalVariant2 = mydata1.filter((car) => {
  return car.variant.length == max;
});

console.log("total variant: ", totalVariant2);

// 9. buat fungsi untuk mencari mobil yang tidak preorder
const notPreorderCar = mydata1.filter((car) => {
  return car.isPreorder == false;
});
console.log("Total for not preorder cars: ", notPreorderCar.length);
console.log("Not preorder cars: ", notPreorderCar);

// 10. buat looping untuk menampilkan SEGITIGA SAMA KAKI
// const triangle = (n) => {
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       process.stdout.write("*");
//     }
//     console.log();
//   }
// };

const isoscelesTriangle = (height) => {
  for (let i = 1; i <= height; i++) {
    // Print spasi di sebelah kiri bintang
    let spasi = " ".repeat(height - i);

    // Print bintang
    let bintang = "*".repeat(2 * i - 1);

    // Gabungkan spasi dan bintang, lalu cetak hasilnya
    console.log(spasi + bintang);
  }
};

isoscelesTriangle(5);
