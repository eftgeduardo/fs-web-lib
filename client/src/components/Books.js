import React, { Component } from 'react'
const { StringDecoder } = require('string_decoder');

class Books extends Component {
    
    
    constructor(props){
        super(props);
        this.state={
            customers:[]
        };
    }


    componentDidMount(){
        fetch('http://localhost:3050/book')
        .then(response=> response.json())
        .then(customers=>this.setState({customers:customers},()=> {
            console.log('customers fetched..', customers)
            
            const {id,book,description}=customers[0];
            
            const decoder = new StringDecoder('utf8');
            console.log('Hola');
            const cent = Buffer.from([0xC2, 0xA2]);
            console.log(customers[0]);
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
