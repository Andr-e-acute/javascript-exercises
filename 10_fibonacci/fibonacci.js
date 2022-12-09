// 1, 1, 2, 3, 5, 8,
const fibonacci = function (member) {
  if(member <0) return "OOPS"
  let lastNumber = 1;
  let secondLastNumber = 0;
  let result = 1;


  for (let i = 1; i < member; i++) {
    result = lastNumber + secondLastNumber;
    secondLastNumber = lastNumber;
    lastNumber = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
