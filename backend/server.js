const express = require("express");
//debug staff
const chalk = require("chalk");
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const portNumber = process.env.port || 3000;

const sqlite3 = require('sqlite3').verbose();


app.use(morgan('tiny'));

app.get('/', function(req,res){
    res.send('sample app');
});
app.get('/books', function (req, res) {
    // open the database
let db = new sqlite3.Database('./db/PersonalBookStore.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the chinook database.');
  });
   
const sql = 'select id, title from  Book';

  db.all(sql, [], (err, rows)=>{

    if(err){
        console.log('error on getting data');
    }

    rows.forEach((row)=>{
        console.log(row.title);
    });

    res.json(rows);

  });
   
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });
  })
app.listen(portNumber, function(){
    debug(`start server on port ${chalk.green(portNumber)}`);
});



