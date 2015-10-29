/**
 * Created by danesmith on 10/28/15.
 */


var whichValuePoint = function() {
    return randomNumber(1, 9);
}
//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = whichValuePoint;