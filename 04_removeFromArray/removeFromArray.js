const removeFromArray = function(array,...toRemove) {

return array
        .filter((element)=>{
        return(!toRemove.includes(element))
});
}
// Do not edit below this line
module.exports = removeFromArray;
