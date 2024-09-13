// function penjumlahan(a, b) {
//   return a + b;
// }
// console.log("penjumlahan : ", penjumlahan(10, 5));

// const cekAngkaPositif = (angka) => {
//   if (angka < 0) {
//     return "Angka Negatif";
//   }
//   return "Angka Positif";
// };
// console.log(cekAngkaPositif(-10));
// console.log(cekAngkaPositif(10));

// function cekKaryawanAigen(nama, jobDesk, salary) {
//   if (nama && jobDesk && salary) {
//     return "Anda karyawan terdaftar";
//   }
//   return "Anda tidak terdaftar karyawan";
// }
// console.log(cekKaryawanAigen("danu", "palugada", 100000000));
// console.log(cekKaryawanAigen("danu", "palugada"));

// function cekKaryawan(nama, jobDesk, salary) {
//   if (nama || jobDesk || salary) {
//     return "Anda karyawan terdaftar";
//   }
//   return "Anda tidak terdaftar karyawan";
// }
// console.log(cekKaryawan("danu", "palugada"));
// console.log(cekKaryawan());
// console.log(cekKaryawan(null, null, null));

// function checkSyaratKaryawanBPJS(nama, waktuKerja, BPJS, gaji) {
//   if (nama && waktuKerja > 1 && BPJS && gaji < 2500000) {
//     return "memenuhi syarat";
//   } else {
//     return "belum memenuhi syarat";
//   }
// }
// console.log(checkSyaratKaryawanBPJS("abi", 2, true, 1000000));
// console.log(checkSyaratKaryawanBPJS(2, true, 1000000));

function findUserCountry(user) {
  return (user.address && user.address.country) || "unknown";
  return user?.address?.country || "Unknown";

  // try {
  //   return user.address.country;
  // } catch (e) {
  //   return "Unknown";
  // }
}

let user1 = {
  name: "Puan Maharani",
  age: 25,
  address: {
    city: "Tangerang",
    country: "Indonesia",
  },
};

let user2 = {
  name: "Mega chan",
  age: 30,
};

console.log(findUserCountry(user1));
console.log(findUserCountry(user2));

// console.log(user2.address.country);
