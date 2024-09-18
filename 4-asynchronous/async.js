// // Simulating an asynchronous operation using setTimeout
// function fetchData(callback) {
//   console.log("Fetching data...");
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback(); // Call the callback function after data is fetched
//   }, 2000); // Simulates a delay of 2 seconds
// }

// function processData() {
//   console.log("Processing data...");
// }

// // Fetch data and then process it using a callback
// fetchData(processData);

/** async usually is used to call data/API */

function getDataFromServer() {
  // Promise : objek yang mewakili hasil dari operasi asynchronous
  return new Promise(function (resolve, reject) {
    let data = { id: 1, name: "danu", job: "frontend" };
    if (data) {
      resolve(data);
    } else {
      reject("data tidak ditemukan");
    }
  });
}

// async: dipakai untuk membuat/menandai kalo fungsi ini dijalanin secara asynchronous
async function fetchData() {
  // blok tryCatch buat menangani error jika data gagal diambil
  try {
    // await: kata kunci dalam async buat nunggu hasil dari sebuah promise
    const getData = await getDataFromServer();
    console.log("Data yang diterima: ", getData);
  } catch (error) {
    console.log("terjadi kesalahan saat mengambil data: ", error);
  }
}

fetchData();
