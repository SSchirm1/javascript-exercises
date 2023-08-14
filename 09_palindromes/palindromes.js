const palindromes = function (string) {
    let stringToLettersOnly = string.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reversedString = stringToLettersOnly.split("").reverse().join("");

    console.log(stringToLettersOnly);
    console.log(reversedString);

    return reversedString == stringToLettersOnly;
  
};

palindromes("hello world");
palindromes("idjri,.oodk  e w");

// Do not edit below this line
module.exports = palindromes;
