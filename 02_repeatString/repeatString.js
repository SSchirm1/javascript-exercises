const repeatString = function(string, num) {

    repeatedString = "";
    if (parseInt(num) < 0) {
        repeatedString = 'ERROR';
    }
    else {
        for (i = 1; i <= num; i++) {
            repeatedString += string;
        }
      
    }
    return repeatedString;
    

};

repeatString("hey", -1)

// Do not edit below this line
module.exports = repeatString;
