const palindromes = function (str) {
    // convert all to lowercase and remove everything that is not a letter
    const cleanedStr = str
        .toLowerCase()
        .split('')
        .filter(char => char >= 'a' && char <= 'z')
        .join('');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
