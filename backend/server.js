const express = require("express");
//debug staff
const chalk = require("chalk");
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const portNumber = 3000;

app.use(morgan('tiny'));

app.get('/', function(req,res){
    res.send('sample app');
});

app.listen(portNumber, function(){
    debug(`start server on port ${chalk.green(portNumber)}`);
});