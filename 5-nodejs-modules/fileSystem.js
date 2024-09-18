// FileSystem(fs) : mobil untuk berinteraksi dengan file di javascript

// import module
const fs = require("fs");

// Menulis file menggunakan .writeFile("filepath","isi file",encoding,return)
fs.writeFile(
  "./textFile.txt",
  "Hallo, nama saya mulyono. saya adalah king of Java",
  "utf8",
  (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File berhasil disimpan");
  }
);

// // .readFile("filepath",encoding,return) : read data from file
// fs.readFile("./textFile.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("read file: ", data);
// });

// // .readFileSync : membaca file secara synchronous
// try {
//   const data = fs.readFileSync("./textFile.txt", "utf8");
//   console.log("read sync: ", data);
// } catch (error) {
//   console.log(error);
// }

// .appendFile("filepath","isi data",encoding,return)
let dataFromAPI = "\n Saya adalah ayahnya fufufafa";
fs.appendFile("./textfile.txt", dataFromAPI, "utf8", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("konten berhasil ditambahkan");
});

// .readFile("filepath",encoding,return) : mmebaca data dari suatu file secara async
fs.readFile("./textFile.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("read file: ", data);
});

// .readFileSync : membaca file secara synchronous
try {
  const data = fs.readFileSync("./textFile.txt", "utf8");
  console.log("read sync: ", data);
} catch (error) {
  console.log(error);
}

// .unlink("filepath", return) : untuk menghapus file
// use delete.txt file in this folder
fs.unlink("./delete.txt", (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("File berhasil dihapus");
});
