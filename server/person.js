/**
 * Created by danesmith on 10/28/15.
 */
var name = require('./name.js');
var job = require('./job.js');
var skill = require('./skill.js');


function Employee(name, job, skill){
    this.name = name;
    this.job = job;
    this.skill = skill;
}

var makeEmployee = new Employee(name, job, skill);

module.exports = makeEmployee;