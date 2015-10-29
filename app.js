/**
 * Created by danesmith on 10/28/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var person = require('./server/person.js');

app.set('port', (process.env.PORT || 5000));

app.get('/bluehat', function(request, response){
    response.send(person());
});


app.get("/*", function(request,response) {
    var file = request.params[0] || "index.html";
    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"));
console.log("Listening...");