import React, { Component } from 'react'
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import "./styles/Books.css"

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            content:''
        }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3050/book/'+this.props.match.params.id)
        .then(response=>this.setState({
            name:response.data[0].book_name,
            content:response.data[0].book_content
        }))
        .catch(function (error) {
            console.log(error);
        });

        let para = document.querySelector('body');
        var style=window.getComputedStyle(para);
        var hr =document.getElementsByClassName("style-eight");
        if(style.getPropertyValue('background-color')==="rgb(0, 0, 0)"){//negro
            for (let index = 0; index < hr.length; index++) {
                hr[index].style.backgroundColor = "black";
                hr[index].style.borderColor = "white";
                
            }
            
        }
        else{
            for (let index = 0; index < hr.length; index++) {
                hr[index].style.backgroundColor = "white";
                hr[index].style.borderColor = "black";
                
            }
            
        }

    }   

    render() {
        return (
            <div>
                <div className="container">
                    <div class="row justify-content-between">
                        <div class="col-2">
                            <button type="button" class="btn btn-secondary">Edit book</button>
                        </div>
                        <div class="col-2">
                            <button type="button" class="btn btn-danger">Delete book</button>
                        </div>
                    </div>
                </div>
                
                
                <h1 id="title">{this.state.name}</h1>
                <hr className="style-eight"/>
                <ReactMarkdown>{this.state.content}</ReactMarkdown>
            </div>
        )
    }
}



//import axios from 'axios';
//import React from 'react'

//import React from 'react'
/*
export default function Books({ match }) {

    axios.get('http://localhost:3050/book/'+match.params.id)
      .then(function (response) {
        console.log(response.data[0].book_name);
        book.name=response.data[0].book_name;
        book.content=response.data[0].book_content;
        //if (response.data=== 'Book created') alert("the book has been created");
      })
      .catch(function (error) {
        console.log(error);
      });


    return (
        <div>
            <h1>{book.name}</h1>
            <h1>{""}</h1>
            <p>Me han pasado la id {match.params.id} en la url</p>
        </div>
    )
}
var book={
    name:'a',
    content:''
};
*/
/*

var book={
        name:'',
        content:''
    };

    axios.get('http://localhost:3050/book/'+match.params.id)
      .then(function (response) {
        console.log(response.data[0].book_name);
        book.name=response.data[0].book_name;
        book.content=response.data[0].book_content;
        //if (response.data=== 'Book created') alert("the book has been created");
      })
      .catch(function (error) {
        console.log(error);
      });

*/

