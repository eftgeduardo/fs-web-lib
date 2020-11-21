import React, { Component } from 'react'
import axios from 'axios'

class Books extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            customers:[]
        };
        
    }


    componentDidMount(){
        
        fetch('http://localhost:3050/book')
        .then(res=> res.json())
        .then(customers=>this.setState({customers:customers},()=> {
            console.log('customers fetched..', customers);
            console.log(customers[0].id);
            console.log(customers[0].book);
            console.log(customers[0].Desc);
            }));
    
    }



    render() {
        const{customers} = this.state;
        return (
            <div>
                <ul>
                    {this.state.customers.map(customers =>
                        <li key={customers.id}>{customers.id}{customers.book}{customers.Desc}</li>
                        )}

                </ul>
                <h2>hola</h2>
            </div>
        )
    }
}

export default Books;
