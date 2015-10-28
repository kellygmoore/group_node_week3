/**
 * Created by danesmith on 10/28/15.
 */
var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

//app.get('') NEED URL FROM AJAX CALL

app.get("/*", function(request,response) {
    var file = request.params[0] || "index.html";

    response.sendFile(path.join(__dirname, "./public/", file));
});

app.listen(app.get("port"));
console.log("Listening...");