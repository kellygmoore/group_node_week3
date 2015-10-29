/**
 * Created by danesmith on 10/28/15.
 */


var peopleArray = ["Irene", "Nicole", "Tina", "Ryan", "Joe", "Helen", "Evelyn", "Denise", "Nicole", "Phillip", "Ruth", "Anne", "Emily",
    "Judith","Joshua","Anna","Tina","John","Kimberly","Martha","Anna","Donna","Juan","Ernest","Michelle","Gloria","Henry","Joyce",
    "Joan","Robert","Jean","Michelle","Kathleen","Jimmy","Lawrence","Sam","Dane","Heather","Paige","Kelly", "Andy", "Mike", "Scott", "Kris", "Danny", "Pui", "Aron"
];



//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}



var whichPerson = function(){

    var getPersonIndex = randomNumber(0, peopleArray.length-1);
    return peopleArray.splice(getPersonIndex, 1).toString()

};

module.exports = whichPerson;