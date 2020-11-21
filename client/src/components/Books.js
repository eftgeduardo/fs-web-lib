import React, { Component } from 'react'

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
        .then(customers=>this.setState({customers:customers},()=> console.log('customers fetched..', customers)));
    }
    render() {
        return (
            <div>
                <h2>customers</h2>
            </div>
        )
    }
}

export default Books;
