
//requirements upon creating project
var frontEndReq, backEndReq, logicReq;

//number of employees in each category
var backEndEmployee = 0, frontEndEmployee = 0, logicEmployee = 0;

//total number of points in each scrum category
var frontEndTotal, backEndTotal, logicTotal;


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
    $("#projectOverviewDiv").empty();
    //Point requirements for each team.
    frontEndReq = randomNumber(10,60);
    backEndReq = randomNumber(10,60);
    logicReq = randomNumber(10,60);
    $("#projectOverviewDiv").append("<div id='frontEnd' class='taskBox'>Front<div class='well'>" + frontEndReq + "</div></div>" +
        "<div id='backEnd' class='taskBox'>Back<div class='well'>" + backEndReq + "</div></div>" +
        "<div id='logic' class='taskBox'>Logic<div class='well'>" + logicReq + "</div></div>");
    $("#projectOverviewDiv").append("<div id='assignStaffBtn' class='btn btn-lg btn-default'>Assign Staff</div>");
}
//Random number generator.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
//Creates random employees from the server as long as there is at least one empty team.
function assignStaff(){
    //while(frontEndEmployee < 1 && backEndEmployee < 1 && logicEmployee < 1) {
        $.ajax({
              type: "GET",
              url: "/bluehat",
              success: function(data){
                  console.log(data);
              }
            });
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

}


