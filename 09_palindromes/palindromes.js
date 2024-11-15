const palindromes = function (str) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    let splitStr = str.toLowerCase().split("")
    splitStr = splitStr.filter((character) => alphanumerical.includes(character));
    splitStr = splitStr.join("")


    revStr = splitStr.split("").reverse().join("")


    return revStr === splitStr


};

// Do not edit below this line
module.exports = palindromes;
