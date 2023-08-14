const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();


    return people.reduce((a, b) => ((a.yearOfDeath ? a.yearOfDeath : currentYear) - a.yearOfBirth)
     > ((b.yearOfDeath ? b.yearOfDeath : currentYear) - b.yearOfBirth) ? a : b);
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
