/** PROMISE : objek yang mewakili hasil dari operasi asynchronous */
console.log("=== Promiseee ===");
function getDataFromServer() {
  return new Promise(function (resolve, reject) {
    let data = [1, 2, 3, 4, 5];
    resolve(data);
  });
}

getDataFromServer()
  // .then : untuk menangani hasil ketika Promise terpenuhi/data berhasil diambil
  // function(data) : fungsi yang dieksekusi dengan nilai yang diberikan dari resolve ketika promise terpenuhi
  .then(function (data) {
    console.log("Data yang diterima: ", data);
  })
  .catch(function (error) {
    // .catch : untuk menangani error ketika Promise tidak terpenuhi/data gagal diambil
    console.log("Terjadi kesalahan; ", error);
  });

// OTHER EXAMPLE mengambil beberapa data/API sekaligus (Memanggil beberapa promise sekaligus)

console.log("=== Paralel Promise ===");
// data pertama
function getFirstData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 1");
  });
}

// data kedua
function getSecondData() {
  return new Promise((resolve, reject) => {
    resolve("data ke 2");
  });
}

// ambil data secara paralel
const getDataInParalel = () => {
  return Promise.all([getFirstData(), getSecondData()]);
};

// jalanin fungsi getDataInParalel
getDataInParalel()
  .then((data) => {
    console.log("data: ", data);
  })
  .catch((error) => {
    console.log("error : ", error);
  });
