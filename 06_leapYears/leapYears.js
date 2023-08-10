const leapYears = function(year) {
    if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0)) {
        return true;        
    }
    return false;
};


console.log(leapYears(1900));
// Do not edit below this line
module.exports = leapYears;

// 1. check if divisible by two 
// it should not be divisible by 100, unless it is also divisible by 400)