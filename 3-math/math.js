// Math.random() : buat ngehasilin angka acak/random
// contoh random angka dari 0-1
let randomNumber = Math.random();
console.log("math random : ", randomNumber);

// contoh random dari rentang angka tertentu
let min = 5;
let max = 30;
let randomize = Math.random() * (max - min + 1) + min; // rumus

console.log("Angka acak antara 5 dan 30 : ", randomize);

// Math.floor() : buat ngebulatin angka kebawah
let angkaBulatKebawah = Math.floor(2.9);
console.log("math floor : ", angkaBulatKebawah);

// Math.cell() : buat ngebuletin angka keatas
let angkaBulatKeatas = Math.ceil(2.9);
console.log("math ceil : ", angkaBulatKeatas);

// Math.round() : buat buletin angka terdekat
let angkaBulat = Math.round(4.5);
console.log("math round : ", angkaBulat);

// Math.max(parameter) : buat nyari nilai maksimum dari beberapa angka
let nilaiMax = Math.max(2, 5, 9, 1);
console.log("Math max : ", nilaiMax);

// Math.min(parameter) : buat nyari nilai minimum dari beberapa angka
let nilaiMin = Math.min(2, 5, 9, 1);
console.log("Math min : ", nilaiMin);

// Math.sqrt() : buat ngitung akar kuadrat
let akarKuadrat = Math.sqrt(16);
console.log("Math sqrt : ", akarKuadrat);

// Math.pow(nilai, pangkat) : buat ngitung pangkat
let hasilPangkat = Math.pow(2, 3);
console.log("Math pow : ", hasilPangkat);

// Math.PI : buat ngecek nilai pi
console.log("Math PI : ", Math.PI);
