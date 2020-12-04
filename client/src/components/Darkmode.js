import React, { Component } from 'react'

import './styles/Darkmode.css';

export default class Darkmode extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        
    }


    handleClick() {
        console.log("button clicked");
        document.body.classList.toggle('dark');
        let para = document.querySelector('body');
        var style=window.getComputedStyle(para);
        var hr =document.getElementsByClassName("style-eight");
        console.log(hr[0]);
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
            <div className="custom-control custom-switch">
                <input type="checkbox" className="custom-control-input" id="darkSwitch" onClick={this.handleClick}></input>
                <label className="custom-control-label" htmlFor="darkSwitch">DarkMode</label>
            </div>
        )
    }
}
