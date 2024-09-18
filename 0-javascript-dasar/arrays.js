/** Array : tipe data yang bisa menyimpan banyak data sekaligus,
 * baik dengan satu jenis tipe data, atau tipe data campuran
 */
const array = [1, 2, 3, 4, 5]; // array biasa dengan total indeks 4
/** cara mengambil data tertentu dari array dengan cara berikut:
 * array : panggil variabelnya
 * [n] : masukkan nilai indeksnya
 */
array[4] = 10;
console.log(array);
console.log(array[2]);

// METHODS ARRAY

// .Push() : method array untuk nambahin data kedalam baris akhir array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits); // cek array sekarang
fruits.push("Kiwi");
console.log(fruits); // cek array yang udah dipush data

// .Unshift() : method array buat nambahin data di awal baris array
fruits.unshift("Durian", "Jackfruit", 5);
console.log(fruits); // cek array yang udah diunshift

// .shift() : method array buat ngehapus data di awal baris array
console.log("data dishift: ", array.shift());
console.log(array);
console.log("data dishift: ", fruits.shift());
console.log(fruits);

// .pop() : method array buat ngehapus data di akhir array
console.log("data dipop: ", array.pop());
console.log(array);
console.log("data dipop ", fruits.pop());
console.log(fruits);

/** .splice() : method array buat nyisipin data ke dalam array
 * parameter pertama: buat ngambil posisi indeks
 * parameter kedua: buat ngehapus data
 */
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
console.log("fruits2: ", fruits2);
fruits2.splice(1, 0, "Lemon", "Kiwi");
console.log("data displice: ", fruits2);

/** slice: method array buat motong/ngapus array dalam urutan tertentu */
const slicedFruits = fruits2.slice(3);
console.log("data dislice: ", slicedFruits);
/** slice 2 argumen: method array buat motong/ngapus array dalam rentang data tertentu */
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const slicedUpTp = fruits3.slice(1, 4);
console.log("data dislice upto: ", slicedUpTp);

// .sort() : method array buat ngurutin data
const reversedArray = [7, 6, 5, 4, 3, 2, 1];
console.log("sort : ", reversedArray.sort());

// .reverse() : method array buat ngurutin data secara terbalik
console.log("array : ", array);
console.log("reversed array : ", array.reverse());

// .concat() : method array buat nambahin data dari array lain ke array yang udah ada
let newArray = [1, 2, 3];
let otherArray = [12, 13, 14];
console.log("concat : ", newArray.concat(otherArray));

// .forEach(parameter) : method array buat manggil isi dari setiap elemen array
let printFruit = fruits3.forEach(myFruit);
function myFruit(params) {
  console.log("for each fruit : ", params);
}

// .toString() : method array buat ngubah data array jadi string
console.log("array to string : ", newArray.toString());

// .toLocaleString() : method array buat ngubah nilai array jadi format lokal misalkan rupiah
const price = [500, 1000, 2000, 50000, 2000000, 70000];
console.log(
  "Rp. ",
  price.toLocaleString({
    style: "currency",
    currency: "IDR",
  })
);
console.log(
  new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(
    price[3]
  )
);

// .reduce : method array buat mengakumulasi/totalin nilai dalam array ke dalam satu hasil akhir
const totalPrice = price.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 500); // inisiasi awal dari nilai 500
console.log("reduced array(price) : ", totalPrice);

const employee = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: ["Frontend", "Backend"],
    hobby: "writing",
    salary: 2000000,
  },
  {
    id: 1,
    nama: "Dinda",
    age: 26,
    jobDesk: ["Frontend", "Backend"],
    hobby: "sport",
    salary: 2400000,
  },
  {
    id: 1,
    nama: "Fatma",
    age: 27,
    jobDesk: ["Frontend", "Backend", "Quality Assurance"],
    hobby: "singing",
    salary: 4000000,
  },
  {
    id: 1,
    nama: "Akmal",
    age: 28,
    jobDesk: ["Frontend", "Backend"],
    hobby: "writing",
    salary: 5000000,
  },
];

// exercise forEach (menampilkan data karyawan yang umurnya diatas 25)
const oldEmployee = employee.forEach((data) => {
  console.log("keryawan tuwir: ", data.nama, data.age > 25);
});
/** .map() : method array buat mengubah setiap elemen dalam array menjadi nilai baru
 * dalam contoh ini mengubah data array karyawan menjadi data namanya saja
 * sehingga data array of objek karyawan sebelumnya berubah menjadi data array yang hanya berisi nama saja
 */
const mappingEmployee = employee.map((item) => {
  //   return item.jobDesk.map((job) => job);
  //   console.log("keryawan tuwir: ", data.nama, data.age > 25);
  const newObject = {
    nama: item.nama,
    job: item.jobDesk.map((job) => job),
    // job: item.jobDesk.map((job) => job.title),
    // hobby: item.hobby.find((item) => item === "menulis"),
  };
  return newObject;
});
console.log("mapping data karyawan : ", mappingEmployee);

// .find() : method array buat mencari suatu data dalam array
console.log(
  fruits3.find((item) => {
    return item === "Apple";
  })
);

// .findIndex() : method buat nyari index data suatu elemen dalam array
const findName = employee.findIndex((item) => {
  return item.nama === "Akmal";
});
console.log("find index : ", findName);

// .filter() : method array buat ngefilter data dalam array
// .some() : buat ngecek apakah ada data array(minimal 1) yang memenuhi kondisi tertentu
const filterFrontendDeveloper = employee.filter((item) => {
  return item.jobDesk.some((job) => job === "Quality Assurance");
});
console.log("filter frontend dev : ", filterFrontendDeveloper);

// .length() : method array buat menghitung panjang/jumlah data dalam array
console.log("jumlah karyawan : ", employee.length);

// .includes() : method array yang ngebalikin true or false jika data yang di cek cocok dengan suatu data dalam array
const fruits4 = [
  "Banana",
  "Orange",
  "Lemon",
  "Apple",
  "Mango",
  "Papaya",
  "Dragonfruit",
];
// basic
console.log(" array isi jeruk:", fruits4.includes("Orange"));

// argumen pertama = data yang cek, argumen kedua = urutan awal mulai pengecekan
console.log(
  "cek array isi pisang dimulai dari urutan ketiga : ",
  fruits4.includes("Banana", 3)
);

// .every() : method array yang ngecek apakah semua elemen dalam array memenuhi kriteria tertentu
const cekUmurKaryawan = employee.every((item) => {
  return item.age <= 26;
});
console.log("karyawan umur 26 kebawah : ", cekUmurKaryawan);

const employees = [
  {
    id: 1,
    nama: "Danu",
    age: 25,
    jobDesk: [{ title: "frontend", salary: 2000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 1,
    nama: "Dinda",
    age: 26,
    jobDesk: [{ title: "frontend", salary: 3000000 }],
    hobby: ["membaca", "menulis"],
  },
  {
    id: 1,
    nama: "Fatma",
    age: 27,
    jobDesk: [{ title: "backend", salary: 3000000 }],
    hobby: ["membaca"],
  },
  {
    id: 1,
    nama: "Akmal",
    age: 28,
    jobDesk: [{ title: "backend", salary: 4000000 }],
    hobby: ["membaca"],
  },
];

// exercise
/** Buatlah logic untuk mencari karyawan yang memiliki hobi "menulis" dan usianya diatas 25 tahun pake .find dan .include */
console.log(
  "question 1:",
  employees.find((item) => {
    return item.hobby.includes("menulis") && item.age > 24;
  })
);
console.log(
  "question 1:",
  employees.filter((item) => {
    return item.hobby.includes("menulis") && item.age > 24;
  })
);

//** Buatlah logic untuk nampilin data karyawan yang bekerja sebagai "backend" dan memiliki gaji lebih dari 3 juat pake .filter & .some */
console.log(
  "question 2:",
  employees.filter((item) => {
    return item.jobDesk.some(
      (job) => job.title === "backend" && job.salary > 3000000
    );
  })
);

//** Buatlah logic buat dapetin karyawan yang cuma punya satu hobby pake .filter, .map, .length */
console.log(
  "question 3:",
  employees.filter((item) => {
    return item.hobby.length == 1;
  })
);

const employeesWithOneHobby = employees
  .filter((item) => item.hobby.length === 1) // Filter karyawan yang hanya punya 1 hobi
  .map((item) => item.nama); // Map untuk mendapatkan nama karyawan

console.log("question 3:", employeesWithOneHobby);

// ** Buatlah logic untuk nyari karyawan yang posisinya frontend dengan gaji tertinggi, lalu return nama karyawannya saja pake .filter, .some, .reduce, .find */
const highestPaidFrontendEmployee1 = employees
  .filter((item) => {
    return item.jobDesk.some((job) => job.title === "frontend"); // Filter karyawan yang bekerja sebagai Frontend
  })
  .reduce((highest, current) => {
    return current.jobDesk[0].salary > highest.jobDesk[0].salary
      ? current
      : highest; // Cari karyawan dengan gaji tertinggi
  });

console.log("question 4 (max salary):", highestPaidFrontendEmployee1.nama); // Return nama karyawan

const highestPaidFrontendEmployee2 = employees
  .filter((item) => item.jobDesk.some((job) => job.title === "frontend")) // Filter karyawan yang bekerja sebagai Frontend
  .find((item, index, filteredEmployees) => {
    // Menggunakan .find() pada hasil filter
    const maxSalary = Math.max(
      ...filteredEmployees.map((emp) => emp.jobDesk[0].salary)
    ); // Cari gaji tertinggi
    return item.jobDesk[0].salary === maxSalary; // Kembalikan karyawan dengan gaji tertinggi
  });

console.log("question 4 (max salary):", highestPaidFrontendEmployee2.nama); // Return nama karyawan

const findHighestFrontend = employees
  .filter((item) => item.jobDesk.some((job) => job.title == "frontend"))
  .reduce((highest, current) => {
    const currentSalary = current.jobDesk.find(
      (job) => job.title == "frontend"
    ).salary;
    const highestSalary = highest.jobDesk.find(
      (job) => job.title == "frontend"
    ).salary;

    console.log(currentSalary);
    console.log(highestSalary);

    if (currentSalary > highestSalary) {
      return current;
    } else {
      return highest;
    }
  });
console.log("Highest salary name: ", findHighestFrontend.nama);
