
//requirements upon creating project
var frontEndReq, backEndReq, logicReq;

//number of employees in each category
var frontEndArray = [];
var backEndArray = [];
var logicArray = [];

//total number of points in each scrum category
var frontEndArrayTotal = 0, backEndArrayTotal = 0, logicArrayTotal = 0;

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
    frontEndArray = [0];
    backEndArray = [1];
    logicArray = [2];

    $("#projectOverviewDiv").empty();
    //Point requirements for each team.
    frontEndReq = randomNumber(10,60);
    backEndReq = randomNumber(10,60);
    logicReq = randomNumber(10,60);
    $("#projectOverviewDiv").append("<div id='frontEnd' class='taskBox'>Front<div class='well'>" + frontEndReq +
        "</div><div class='team', id='frontEndArray'></div>");

    $("#projectOverviewDiv").append( "<div id='backEnd' class='taskBox'>Back<div class='well'>" + backEndReq +
        "</div><div class='team', id='backEndArray'></div></div>");

    $("#projectOverviewDiv").append("<div id='logic' class='taskBox'>Logic<div class='well'>" + logicReq + "</div>" +
        "<div class='team', id='logicArray'></div></div>");

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
                if ((frontEndArray.length == 1) || (backEndArray.length == 1) || (logicArray.length == 1)) {
                    assignStaff();

                } else {
                    console.log(frontEndArray);
                    populateStaff(frontEndArray);
                    populateStaff(backEndArray);
                    populateStaff(logicArray);

                    $("#showTimeframeDiv").append("<h3>This project will take " + calculateProjectTime() + " sprints to complete.</h3>")
                }
            }
        });
}
//Calculates which team has the largest ration of scrum requirements to scrum points and calculates
//the number of weeks it will take that team to finish, and thus for the project to reach completion.
function calculateProjectTime(){
    var back, front, logic;

    back = backEndReq/backEndArrayTotal;
    front = frontEndReq/frontEndArrayTotal;
    logic = logicReq/logicArrayTotal;

    console.log(backEndReq);
    console.log("This is the array total: ", backEndArrayTotal)

    if(front > back && front > logic){
        return Math.ceil(front);
    } else if (back > front && back > logic){
        return Math.ceil(back);
    } else {
        return Math.ceil(logic);
    }

};

function sortJob(object){
    if(object.job == "Front End"){
        frontEndArray.push(object);
        //console.log(frontEndArray);
    } else if(object.job == "Back End") {
        backEndArray.push(object);
    } else {
        logicArray.push(object);
    }
}

function populateStaff(array) {
    //console.log(array);
    var y = 0;
    var $x;
    switch (array[0]) {
        case 0:
            $x = $("#frontEnd");
            break;
        case 1:
            $x = $("#backEnd");
            break;
        case 2:
            $x = $("#logic");
            break;
    }
    console.log($x);
    for (i = 1; i < array.length; i++) {
        $x.append("<div class='employee'>" + array[i].name + "\n" +
            array[i].skill + "</div>");
        y += array[i].skill;
    }
    switch (array[0]) {
        case 0:
            frontEndArrayTotal = y;
            break;
        case 1:
            backEndArrayTotal = y;
            break;
        case 2:
            logicArrayTotal = y;
            break;
    }
}


