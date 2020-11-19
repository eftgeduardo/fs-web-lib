const express = require('express');

const bodyParser= require('body-parser');
const PORT = process.env.PORT || 3050
const app = express();
app.use(bodyParser.json());


//my sql 
const mysql = require('mysql');
const connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'Eduardo',
    password: '12345',
    database: 'library',
    port    : '3306'
});
connection.connect(error=>{
    if(error) throw error;
    console.log('Database server running');
});
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
})
app.get('/',(req,res)=>{
    res.send('welcome to my api');
});