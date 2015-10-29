
//requirements upon creating project
var frontEndReq, backEndReq, logicReq;

//number of employees in each category
var frontEndArray = [];
var backEndArray = [];
var logicArray = [];

//total number of points in each scrum category
var frontEndArrayTotal, backEndArrayTotal, logicArrayTotal;

//jQuery call
$(document).ready(function(){
    //Calls the generateProject(generates project requirements) function on click of the generate function button.
    $("#genButtonDiv").on('click', generateProject)
    //Calls the assignstaff (generate employees untill there is one in each category) function on click of the assign staff button
    $("#projectOverviewDiv").on('click', '#assignStaffBtn', assignStaff)

});


//Function that sets the scrum point requirements for the project, creates thee columns for each team
//and populates those columns with the point requirements. Also creates the assign staff button.
function generateProject(){
    frontEndArray = [];
    backEndArray = [];
    logicArray = [];

    $("#projectOverviewDiv").empty();
    //Point requirements for each team.
    frontEndReq = randomNumber(10,60);
    backEndReq = randomNumber(10,60);
    logicReq = randomNumber(10,60);
    $("#projectOverviewDiv").append("<div id='frontEnd' class='taskBox'>Front<div class='well'>" + frontEndReq +
        "</div><div class='team', id='frontEndArray'>Front End Go Here</div>");

    $("#projectOverviewDiv").append( "<div id='backEnd' class='taskBox'>Back<div class='well'>" + backEndReq +
        "</div><div class='team', id='backEndArray'>Back End Go Here</div></div>");

    $("#projectOverviewDiv").append("<div id='logic' class='taskBox'>Logic<div class='well'>" + logicReq + "</div>" +
        "<div class='team', id='logicArray'>Logic End Go Here</div></div>");

    $("#projectOverviewDiv").append("<div id='assignStaffBtn' class='btn btn-lg btn-default'>Assign Staff</div>");
}
//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//Creates random employees from the server as long as there is at least one empty team.
function assignStaff() {
    //console.log(frontEndArray.length);

        $.ajax({
            type: "GET",
            url: "/bluehat",
            success: function (data) {
                console.log(data);
                sortJob(data);
                if ((frontEndArray.length == 0) || (backEndArray.length == 0) || (logicArray.length == 0)) {
                    assignStaff();
                }
            }
        });

    populateStaff(frontEndArray);
    populateStaff(backEndArray);
    populateStaff(logicArray);

    console.log("Here is my frontArray", frontEndArray);
}
//Calculates which team has the largest ration of scrum requirements to scrum points and calculates
//the number of weeks it will take that team to finish, and thus for the project to reach completion.
function calculateProjectTime(){
    var back = 0, front = 0, logic = 0;

    back = backEndReq/backEndTotal;
    front = frontEndReq/frontEndTotal;
    logic = logicReq/logicTotal;

    if(front > back && front > logic){
        return front;
    } else if (back > front && back > logic){
        return back;
    } else {
        return logic;
    }

};

function sortJob(object){
    if(object.job == "Front End"){
        frontEndArray.push(object);
        console.log(frontEndArray);
    } else if(object.job == "Back End") {
        backEndArray.push(object);
    } else {
        logicArray.push(object);
    }
}

function populateStaff(array){
    for(i=0; i<array.length; i++){

        $("#" + array).append("<div class='employee'>" + array[i].name + "\n" +
            array[i].skill + "</div>");
        var thisArray = (array + "Total");
        thisArray += array[i].skill;
    }
    $("#" + array).append("<div class='totalSum'>Total: " + (array + 'Total') + "</div>");
}


