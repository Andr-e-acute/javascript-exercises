const repeatString = function(string,repeatAmount) {
    if(repeatAmount<0){return 'ERROR'}
    let repeatedString=""
    for (let index = 0; index < repeatAmount ; index++) {
        repeatedString+=string
        
    }
    return repeatedString
    
};
 repeatString();
// Do not edit below this line
module.exports = repeatString;
