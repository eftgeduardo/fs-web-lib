import React, { Component } from 'react'
import axios from "axios";
import ReactMarkdown from 'react-markdown';
import "./styles/Books.css"
import EditBook from './EditBook';
import { Link } from 'react-router-dom';

export default class Books extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            content:""
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
    deleteBook=()=>{
        axios.delete('http://localhost:3050/delete/'+this.props.match.params.id)
          .then(function (response) {
            console.log(response);
            if (response.data=== 'Book deleted') {
                alert("the book has been deleted");
            };
          })
          .catch(function (error) {
            console.log(error);
          });
        this.props.history.push('/');
    }   

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-2">
                            <Link to={"/edit/"+this.props.match.params.id} type="button" className="btn btn-secondary">Edit book</Link>
                        </div>
                        <div className="col-2">
                            <button type="button" onClick={this.deleteBook} className="btn btn-danger">Delete book</button>
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


