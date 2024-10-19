const reverseString = function(str) {
    let fixstr = str.split("")

    fixstr.reverse()

    return fixstr.join("")


};

console.log(reverseString("hey man"))

// Do not edit below this line
module.exports = reverseString;
