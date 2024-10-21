const sumAll = function(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number') || (a < 0) || (b < 0)) {
        return "ERROR";
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR"
    }
    
    if (a<b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }
    let sum = 0;
    for (let i = start; i <= end; i++) {
            sum = sum + i       
    }
    return sum
};

console.log(sumAll(10,"90"))
// Do not edit below this line
module.exports = sumAll;
