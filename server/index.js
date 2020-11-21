const express = require('express');

const bodyParser= require('body-parser');
const PORT = process.env.PORT || 3050
const app = express();
const cors=require('cors');
app.use(cors());



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

//----------------
app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send('welcome to my api');
});
app.get('/book',(req,res)=>{//list of books
    const sql = 'select * from books';
    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results);             
        }
        else res.send('no results');
    })
    //res.send('list of books');
});
app.get('/customers/:id',(req,res)=>{
    res.send('get customer by id');
});
app.post('/add', (req,res)=>{
    res.send('new customer');
});
app.put('/update/:id',(req,res)=>{
    res.send('update customer');
});
app.put('/delete/:id',(req,res)=>{
    res.send('delete customer');
});
