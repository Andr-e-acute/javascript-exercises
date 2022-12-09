const findTheOldest = function (arr) {
  let oldestPerson = arr[0];
  arr.reduce((oldest, currentPerson) => {
    let currentAge;
    if (!currentPerson.yearOfDeath) {
       currentAge=(new Date().getFullYear())-currentPerson.yearOfBirth;
    } else {
       currentAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
    }
   
    if (oldest < currentAge) {
      oldestPerson = currentPerson;
      return currentAge;
    }
    return oldest;
  }, 0);
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
