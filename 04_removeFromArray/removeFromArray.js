const removeFromArray = function(array, ...valuesToRemove) {
    for (let a = 0; a < valuesToRemove.length; a++) {
        for (let b = 0; b < array.length; b++) {
            if (valuesToRemove[a] === array[b]) {
                array.splice(b, 1);
                a--;
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
