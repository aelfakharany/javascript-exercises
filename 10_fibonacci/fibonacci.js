const fibonacci = function(number) {
    if (number < 0) {return "OOPS";}
    else if (number == 0) {return 0;}
    else if (number == 1 || number == 2) {
        return 1;
    }
    else {
        let fibArray = [1, 1];
        for (let i = 2; i < number; i++) {
            let x = fibArray[i - 1] + fibArray[i - 2];
            fibArray.push(x);
            if (i + 1 == number) {return x;}
        }
    }
};

// Do not edit below this line
module.exports = fibonacci;
