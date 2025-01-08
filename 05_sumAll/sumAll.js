const sumAll = function(first, second) {
    let result = 0;
    if (first < 0 
        || second < 0 
        || !Number.isInteger(first)
        || !Number.isInteger(second)) 
        {
        return "ERROR";
    }
    else if (first > second) {
        for (let i = second; i <= first; i++) {
            result += i;
        }
    }
    else {
        for (let i = first; i <= second; i++) {
            result += i;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
