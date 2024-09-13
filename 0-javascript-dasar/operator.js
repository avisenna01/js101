const a = 100;
const b = 5;

const add = a + b;
console.log("penjumlahan : ", add);
console.log("pengurangan : ", a - b);
console.log("perkalian : ", a * b);
console.log("pembagian : ", a / b);
console.log("modulus : ", a % b);
console.log("jumlah dan kali : ", (a + b) * b);

// OPERATOR PERBANDINGAN
console.log("===Equal===");
console.log(a === 20);
console.log(a == 20);

// apakah cukup dengan operator == ataukah perlu built in function untuk string comparison?
let sifat = "rajin";
console.log("===Not Equal===");
console.log(sifat != "nakal"); // true
console.log(sifat == "Rajin"); // false
console.log(sifat == "rajin"); // true

console.log("===Strict Equal==="); // sama dengan variabel dan tipe datanya
console.log(a === 100); // true
console.log(a === "100"); // false

console.log("====Strict Not Equal==="); // tidak sama dengan variabel dan tipe datanya
console.log(a !== "100"); // true
console.log(a !== 100); // false

console.log("===Kurang/Lebih dari atau sama dengan===");
console.log(a < 100); // false
console.log(a > 100); // false
console.log(a <= 100); // true
console.log(a >= 100); // true

// Operator kondisional OR (ngehasilin nilai true kalo ada salah satu nilai yang true)
console.log("true or true : ", true || true);
console.log("false or true : ", false || true);
console.log("false or false : ", false || false);
console.log("false or true or false : ", false || true || false);
console.log("false or false : ", false || false);
console.log("true or false or true or false", true || false || true || false);

// Operator kondisional AND (ngehasilin nilai true kalo semuanya harus true)
console.log("true and true : ", true && true);
console.log("false and true : ", false && true);
console.log("false and false : ", false && false);
console.log("false and true and false : ", false && true && false);
console.log("false and false : ", false && false);
console.log(
  "true and false and true and false",
  true && false && true && false
);
