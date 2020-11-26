import React, { Component } from 'react';
import noimage from "./no-image.png";

import './Books.css';
export default class ListBooks extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            listofBooks:[]
        };
        
    }
    componentDidMount(){
        fetch('http://localhost:3050/book')
            .then(res=> res.json())
            .then(res=>this.setState({listofBooks:res},()=> {
                console.log('Data fetched succesfully: ', res);
                }))
            .catch(error=>console.error(error));
            
    
    }

    renderBooks =({book_id, book_name,book_desciption}) => 
        <li key={book_id}>
            <div className="book-container container">
                <div className="row">
                    <div className="col-auto border">
                    <img className="img-fluid" src={noimage} alt="" width="150"  />
                    </div>
                    <div className="col-sm border">
                    <h2>{book_name}</h2>{book_desciption}
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
