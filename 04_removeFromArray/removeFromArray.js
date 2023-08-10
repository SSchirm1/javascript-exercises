const removeFromArray = function(arr, ... elements) {

    let elementsToRemove = [...elements];
    console.log(elementsToRemove);

    const filteredArray = arr.filter((element) => elementsToRemove.indexOf(element) < 0);
    console.log("filtered: ", filteredArray);

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;


