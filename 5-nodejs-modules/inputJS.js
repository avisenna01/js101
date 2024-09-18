// import modul readline dari nodejs(untuk input/output)
const readline = require("readline");

// buat interface untuk input ke terminal
const inputName = readline.createInterface({
  input: process.stdin, // untuk ngambil inputan dari keyboard user
  output: process.stdout, // untuk nampilin output ke terminal
});

// contoh ngambil 1 inputan
// .question untuk nampilin pertanyaan ke user
inputName.question("Masukkan nama: ", (nama) => {
  console.log("Halo, ", nama); // nampilin jawaban
  inputName.close(); // close input
});

// contoh ngambil 2 inputan
inputName.question("Input your name: ", (nama) => {
  inputName.question("Input your age: ", (age) => {
    console.log("Halo, ", nama, ", umur ", age);
    console.log(`Halo, ${nama} umur ${age}`);
    inputName.close();
  });
});
