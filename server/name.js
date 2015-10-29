/**
 * Created by danesmith on 10/28/15.
 */

var peopleArray = ["Irene", "Nicole", "Tina", "Ryan", "Joe", "Helen", "Evelyn", "Denise", "Nicole", "Phillip", "Ruth", "Anne", "Emily"

];


//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



var whichPerson = function(){
    var getPersonIndex = randomNumber(0, peopleArray.length-1);
    return peopleArray[getPersonIndex];
};

module.exports = whichPerson;