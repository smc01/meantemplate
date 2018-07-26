const express = require("express");

const app = express();
const portNumber = 3000;

app.get('/', function(req,res){
    res.send('sample app');
});


app.listen(portNumber, function(){
    console.log('start server on port ' + portNumber);
});