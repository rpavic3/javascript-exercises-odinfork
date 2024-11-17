const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
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


const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  return people.reduce((oldest, currentPerson) => {
    let oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    let currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    console.log("oldestAge:", oldestAge, "currentAge:", currentAge)
    return oldestAge < currentAge ? currentPerson : oldest;
  },);
};

  
console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
