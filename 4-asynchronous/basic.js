/** execution procedure in programming language: synchronous and asynchronous */

console.log("=== First execution===");
/** setTimeout : untuk menunda eksekusi suatu kode
 * setTimeout(function/codes,time(milisecond))
 */
function printLog() {
  console.log("===Second execution===");
}

setTimeout(printLog, 3000);
console.log("===Third execution===");
