const fibonacci = function(number) {
    if (number < 0) {
        return "OOPS";
    }
    let fibArray = [1,1];
    for(let i = 2; i < number; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2]; 
    }
    return fibArray[number-1]
};

fibonacci(5);
// Do not edit below this line
module.exports = fibonacci;
