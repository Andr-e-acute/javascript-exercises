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
if(num==0){
  return 1
}
else{
  return num * factorial(num-1)
}
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
