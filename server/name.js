/**
 * Created by danesmith on 10/28/15.
 */

var peopleArray = ["Kelly", "Dane", "Sam"];


//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var getPersonIndex = randomNumber(0,2);

var whichPerson = function(){
    return peopleArray[getPersonIndex];
};

module.exports = whichPerson;