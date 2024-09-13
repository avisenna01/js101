// VARIABEL DAN TIPE DATA

// VARIABEL : UNTUK MENYIMPAN DATA

/* cara membuat variabel:
1- menggunakan kata kunci let
2- menggunakan kata kunci const */

// let studentName = "Akmal";
// const age = 25;
// var hobby = 13;
// console.log(studentName);
// console.log(age);
// console.log(hobby);

// tidak disarankan make var karena variable bisa terduplikat dan rancu
// var hobby = 'menulis'
// var hobby = 'membaca'

// variabel yang di assign menggunakan let datanya bisa di ubah/overwrite
let studentName = "Akmal";
studentName = "danu";

// variabel yang di assign menggunakan const datanya tidak bisa diubah karena bersifat CONSTANT
const age = 25;
// age = 30; // akan ERROR

console.log("nama murid: ", studentName);
console.log("umur: " + age);
console.log("nama: ", studentName, "umur: ", age);
// console.log(hobby);

// ------------------------------

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
