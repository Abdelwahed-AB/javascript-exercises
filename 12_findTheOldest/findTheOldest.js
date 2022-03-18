const findTheOldest = function(people) {
    let arr = people.sort((personA, personB)=>{

        if('yearOfDeath' in personA)
            var ageA = personA.yearOfDeath - personA.yearOfBirth;
        else
            var ageA = (new Date()).getUTCFullYear() - personA.yearOfBirth;
        if('yearOfDeath' in personB)
            var ageB = personB.yearOfDeath - personB.yearOfBirth;
        else
            var ageB = (new Date()).getUTCFullYear() - personB.yearOfBirth;

        if(ageA > ageB) return -1;
        else return 1;
    });
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
