/** if else : logic untuk memilih salah satu atau beberapa kondisi sekaligus */

// if
let nilaiSiswa = 100;
if (nilaiSiswa == 1000) {
  console.log("Selamat anda mendapatkan nilai sempurna!");
}

// if else
const bootcampStatus = "active";
if (bootcampStatus === "active") {
  console.log("Bootcamp masuk");
} else {
  console.log("Bootcamp libur");
}

// if else if
const classStatus = "close";
const minuteRemaining = 5;
if (classStatus === "open") {
  console.log("Kelas bootcamp sedang berjalan");
} else if (minuteRemaining <= 5) {
  console.log("Kelas bootamp tersisa 5 menit lagi");
} else {
  console.log("Kelas bootcamp telah berakhir");
}

// nested if
let nilai = 92;
if (nilai >= 70) {
  if (nilai >= 90) {
    console.log("Nilai A");
  } else {
    console.log("Nilai B");
  }
} else {
  console.log("Nilai C");
}

// Ternary operator
let hasil = nilai >= 70 ? "Lulus" : "Tidak lulus";
console.log("hasil :", hasil);

nilai = 60;
let res = nilai >= 70 ? (nilai >= 90 ? "A" : "B") : "C";
console.log("res: ", res);

nilai = 185;
let res2 = nilai >= 90 ? "A" : nilai >= 80 ? "B" : nilai >= 70 ? "C" : "D";
console.log("res2: ", res2);

nilai = 50;
const statusSiswa = "siswa";
let res3 =
  nilai >= 70 && statusSiswa === "siswa" ? "lulus" : "anda bukan siswa";
console.log("res3 : ", res3);
