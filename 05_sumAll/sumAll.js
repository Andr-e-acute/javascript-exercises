const sumAll = function (...numbers) {
  if([...numbers].some((number)=>{
    return number<0||(typeof number !== 'number')
  })){
    return "ERROR"
  }
  let biggerNum = Math.max(...numbers);
  let smallerNum = Math.min(...numbers);
  let sum = biggerNum;

  for (let index = smallerNum; index < biggerNum; index++) {
    sum += index;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
