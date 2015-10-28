
//requirements upon creating project
var frontEndReq, backEndReq, logicReq;

//number of employees in each category
var backEndEmployee, frontEndEmployee, logicEmployee;

//total number of points in each scrum category
var frontEndTotal, backEndTotal, logicTotal;

$(document).ready(function(){
    $("#genButtonDiv").on('click', generateProject)


});



function generateProject(){
    $("#projectOverviewDiv").empty();
    frontEndReq = randomNumber(10,60);
    backEndReq = randomNumber(10,60);
    logicReq = randomNumber(10,60);
    $("#projectOverviewDiv").append("<div id='frontEnd' class='taskBox'>Front<div class='well'>" + frontEndReq + "</div></div>" +
        "<div id='backEnd' class='taskBox'>Back<div class='well'>" + backEndReq + "</div></div>" +
        "<div id='logic' class='taskBox'>Logic<div class='well'>" + logicReq + "</div></div>");
    $("#projectOverviewDiv").append("<div class='btn btn-lg btn-default'>Assign Staff</div>");
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

