const sumAll = function (int1, int2) {
  if (
    int1 < 0 ||
    int2 < 0 ||
    typeof int1 != "number" ||
    typeof int2 != "number"
  ) {
    return "ERROR";
  }
  // An alternative way to check if values are numbers:
  // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

  if (int2 < int1) {
    const temp = int1;
    int1 = int2;
    int2 = temp;
  }
  //An alternative way to swap the values using array destructuring syntax
  // if (int1 > int2) {[int1, int2] = [int2, int1]};

  let sum = 0;
  counter = int1;
  while (counter <= int2) {
    sum += counter;
    counter++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
