const pembagian = (num1, num2) => {
  try {
    if (num2 === 0 || num1 < num2) {
      throw "cannot divide by zero";
    }
    return num1 / num2;
  } catch (error) {
    console.log("masuk ke error");
    console.log(error);
  }
};

console.log("success: ", pembagian(10, 2));
console.log("failed: ", pembagian(10, 0));
