/** DATA TYPE (Tipe Data)
 * tipe data adalah jenis nilai yang di simpan dalam variable
 * tipe data terbagi jadi dua, tipe data primitif dan non-primitif
 * -tipe primitif: tipe data simple/sederhana yang cuma punya 1 nilai
 * -non-primitif: tipe data kompleks yang mempunyai lebih dari 1 nilai. exp: array
 */

// Tipe data String (data yang ada kutipnya)
let mobil = "wuling";

// Integer: tipe data khusus angka
let nomor = 123;

// Boolean: buat nentuin nilai benar(true) atau salah(false)
const ifFlying = false;

// array: buat nyimpen lebih dari 1 data(banyak)
const buah = ["duren", "apel", "mangga"];

// Object: template data
const employee = {
  nama: "danu",
  umur: 90,
  jobDesk: "palugada",
  salary: 4500000,
};

console.log("karyawan : ", employee);

// null: buat nandain kalo data ini kosong
let duit = null;

// undefined: buat nandain kalo data ini belum dikasih nilai/isi
let job;

let nomorString = "123";
console.log(parseInt(nomorString)); // buat ngubah string ke integer
console.log(nomor.toString()); // buat ngubah integer ke string
console.log(JSON.stringify(employee)); // buat ngubah objek biasa ke format JSON
console.log(JSON.parse(JSON.stringify(employee))); // ini buat ngubah data JSON jadi objek biasa

// function: untuk membuat fungsi atau tugas tertentu
function printAnything() {
  console.log("mulyono");
}
printAnything();

const whoIam = (name) => {
  return name;
};
console.log(whoIam("aku mulyono"));
