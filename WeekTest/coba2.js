// // coba-coba segitiga sama kaki
// let height = 7;
// let i = 2;
// let spasi = " ".repeat(height - i);
// let bintang = "*".repeat(2 * i - 1);
// console.log("yow");
// console.log(spasi + bintang);
// // console.log(bintang + spasi);
// console.log("yow");

function getHighestPrice(mydata1) {
  return new Promise((resolve, reject) => {
    resolve(1000);
  });
}
function getLowestPrice(mydata1) {
  return new Promise((resolve, reject) => {
    resolve(100);
  });
}

const getDataInParalel = () => {
  return Promise.all([getHighestPrice(), getLowestPrice()]);
};

async function selisihHarga() {
  try {
    const res = await getDataInParalel();
    console.log(res[0] - res[1]);
  } catch (error) {
    console.log("error: ", error);
  }
}

selisihHarga();
