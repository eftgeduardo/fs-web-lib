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
            //res.json(results);
            res.json(results) 
            //console.log('book sent');          
        }
        else res.send('no results');
    })
    //res.send('list of books');
});
app.get('/book/:id',(req,res)=>{
    const {id}= req.params;
    const sql = `select * from books where book_id = ${id}`;
    connection.query(sql, (error, results)=>{
        if(error) throw error;
        if(results.length>0){
            //res.json(results);
            res.json(results)
                     
        }
        else res.send('no results');
    })

});
app.post('/add', (req,res)=>{
    const sql = `insert into books set ?`;

    const booksObj = {
        book_name: req.body.book_name,
        book_description: req.body.book_description,
        book_content: req.body.book_content
    };
    //{book_name,book_description,content}
    connection.query(sql,booksObj, error=>{
        if(error) throw error;
        else res.send('Book created');
    })
    
    /*const books=req.body;
    if(booksObj!=""){
        console.log("hola");
    }
    console.log(books);
    console.log(books.book_content);*/
    //res.send(client);
});
app.put('/update/:id',(req,res)=>{



    res.send('update customer');
});
app.delete('/delete/:id',(req,res)=>{
    res.send('delete customer');
});
