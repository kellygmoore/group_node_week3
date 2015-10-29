/**
 * Created by danesmith on 10/28/15.
 */

var peopleArray = ["Kelly", "Dane", "Sam", "Aron", "Jason", "Dana", "Paul", "Paige", "Zeeshan", "Laryssa", "Heather", "Jake"];


//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



var whichPerson = function(){
    var getPersonIndex = randomNumber(0,11);
    return peopleArray[getPersonIndex];
};

module.exports = whichPerson;