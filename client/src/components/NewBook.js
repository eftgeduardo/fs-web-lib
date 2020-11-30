import React, { Component } from "react";
import MdWritter from "./MdWritter";




export default class newBook extends Component {
  
  
  constructor(props){
    super(props);
    this.state={
      tab:'',      
      username:''


    }

  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.username);
  }
  myChangeHandler = (event) => {
    console.log(event);
    this.setState({username: event.target.value});
  }
 // <div>
   //         <input type="text" onChange={this.myChangeHandler}/>
     //     </div>
  
  render() {
    return (
      <div>
        <div>
          <MdWritter></MdWritter>
        </div>
        
      </div>
    );
  }
}
