/** Luas lingkaran menggunakan math */
let r = 7;
let areaOfCircle = Math.PI * r * r;
console.log("Area of circle : ", areaOfCircle);
/** cari nilai tertinggi dari 5 siswa menggunakan math */
let scores = [1, 2, 3, 4, 5];
let maxScore = Math.max(...scores);
console.log("Max score : ", maxScore);
/** buat perhitungan harga barang yang di diskon dan bulatkan kebawah hasilnya! */
let hargaBarang = 98000;
let persentaseDiskon = 30;
let discountedPrice = (hargaBarang * (100 - persentaseDiskon)) / 100;
console.log("Harga barang setelah diskon : ", Math.floor(discountedPrice));
/** cari selisih gaji karyawan tertinggi dan gaji terendah pake Math */
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
    jobDesk: [{ title: "frontend", salary: 2000000 }],
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

const salaries = employees.map((employee) => employee.jobDesk[0].salary);

const highestSalary = Math.max(...salaries);
const lowestSalary = Math.min(...salaries);

const salaryDifference = highestSalary - lowestSalary;

console.log("Selisih max dan min salary : ", salaryDifference);
