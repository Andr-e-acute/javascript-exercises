const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1 -num2
};

const sum = function(numArr) {
	let sum =0;
  for (let num of numArr){
    sum = sum + Number(num)
  }
  return sum
};

const multiply = function(numArr) {
  let sum=1;
  for (let num of numArr){
    sum = sum* num
  }
 return sum
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let result =1;
  for (let i = 1; i <= num; i++) {
    result = result*i;  
  }
  return result
};
// is this the recusrion branch
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
