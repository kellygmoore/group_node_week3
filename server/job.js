/**
 * Created by danesmith on 10/28/15.
 */

    //this function will take a random # between 0 and 2 and assign a job skill
var whichJob = function(){
    switch(randomNumber(0,2)) {
        case 0:
            return "Front End";
            break;
        case 1:
            return "Back End";
            break;
        case 2:
            return "Logic";
            break;
    }
};

//console.log(whichJob);

//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = whichJob;
