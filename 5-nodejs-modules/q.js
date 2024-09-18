/** 1
 * read JSON file employee.json
 * berisi data array of object, and write the names of the employee
 * using readFile
 */
// import fs from "fs";
const fs = require("fs");

try {
  const data = fs.readFileSync("./employees.json", "utf8");
  let mydata = JSON.parse(data);
  let l = mydata.length;
  for (let i = 0; i < l; i++) {
    console.log(mydata[i].nama);
  }
} catch (error) {
  console.log(error);
}

/** 2
 * add 1 json data to employees.json
 */
// let dataFromAPI = {
//   id: 6,
//   nama: "El Gibrsky",
//   age: 39,
//   jobDesk: [
//     {
//       title: "wapres",
//       salary: 199999999999,
//     },
//   ],
//   hobby: ["tawuran"],
// };
// fs.appendFile("./employees.json", JSON.stringify(dataFromAPI), (error) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log("konten berhasil ditambahkan");
// });
// try {
//   const data = fs.readFileSync("./employees.json", "utf8");
//   let mydata = JSON.parse(data);
//   //   console.log(mydata);
//   mydata.push(dataFromAPI);
//   //   console.log(mydata);

//   fs.writeFile("./employees.json", JSON.stringify(mydata), "utf8", (error) => {
//     if (error) {
//       console.log(error);
//       return;
//     }
//     console.log("File berhasil disimpan");
//   });
// } catch (error) {
//   console.log(error);
// }

/** 3
 * employee with age > 26
 */
try {
  const data = fs.readFileSync("./employees.json", "utf8");
  let mydata = JSON.parse(data);
  let res = mydata.filter((item) => {
    return item.age > 26;
  });

  fs.writeFile(
    "./karyawan_tuwir.json",
    JSON.stringify(res),
    "utf8",
    (error) => {
      if (error) {
        console.log(error);
        return;
      }
      console.log("File berhasil disimpan");
    }
  );
} catch (error) {
  console.log(error);
}

/** 4
 * delete employee with id = 1
 */
try {
  const data = fs.readFileSync("./employees.json", "utf8");
  let mydata = JSON.parse(data);
  let res = mydata.filter((item) => {
    return item.id != 1;
  });

  fs.writeFile("./deleted_data.json", JSON.stringify(res), "utf8", (error) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log("File berhasil disimpan");
  });
} catch (error) {
  console.log(error);
}
