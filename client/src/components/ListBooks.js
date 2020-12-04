import React, { Component } from 'react';
import noimage from "./styles/no-image.png";
import axios from "axios";

import './styles/ListBooks.css';
import { Link } from 'react-router-dom';
export default class ListBooks extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            listofBooks:[]
        };
        
    }
    componentDidMount(){
        /*fetch('http://localhost:3050/book')
            .then(res=> res.json())
            .then(res=>this.setState({listofBooks:res},()=> { 
                console.log('Data fetched succesfully: ', res);
                }))
            .catch(error=>console.error(error));*/
        //axios.get('http://localhost:3050/book')
        axios.get('http://localhost:3050/book')
            .then(res=>this.setState({listofBooks:res.data},()=> {
                //this.setState({listofBooks:res.data});
                console.log('axios: ', res.data);
                //console.log('book_id: ', res.data);
              }))
            .catch(error=>console.error(error));   
            
    }

    renderBooks =({book_id, book_name,book_description,book}) => 
        <li key={book_id}>
            <div className="book-container container">
                <div className="row">
                    
                    <div className="col-auto border">
                    <img className="img-fluid" src={noimage} alt="" width="150"  />
                    </div>
                    <div className="col-sm border">
                        <Link to={'/book/'+book_id}><h2 className="title">{book_name}</h2></Link>
                        
                        <div className="description">
                            {book_description}
                        </div>
                    </div>   
                </div>
            </div>
        </li>

    render() {
        return (
            <div>
                <ul className="list-group" >
                    {this.state.listofBooks.map(this.renderBooks)}
                </ul>
            </div>
        )
    }
}