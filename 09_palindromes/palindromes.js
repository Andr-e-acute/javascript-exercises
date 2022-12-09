const palindromes = function (str) {
//remove all non word characters and lowercase them 
const  cleanStr = str.toLowerCase().replace(/[^a-z]/g,"")
//split to array reverse and join
let reversedCleanStr=cleanStr
    .split("")
    .reverse()
    .join("");
//compare str to reversed str 
return (cleanStr==reversedCleanStr)
};

// Do not edit below this line
module.exports = palindromes;
