import React, { Component } from 'react'

import './Darkmode.css';

export default class Darkmode extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
    }


    handleClick() {
        console.log("button clicked");
        document.body.classList.toggle('dark');
    }
    
    render() {
        return (
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onClick={this.handleClick}></input>
                <label className="custom-control-label" for="darkSwitch">DarkMode</label>
            </div>
        )
    }
}
