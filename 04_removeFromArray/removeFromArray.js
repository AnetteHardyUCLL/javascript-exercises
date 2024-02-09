const removeFromArray = function (array, value) {
  valueIndex = array.indexOf(value);
  array.splice(valueIndex, 1);
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
