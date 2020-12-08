//import React,{useState} from 'react'
import "./styles/MdWritter.css";

import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

import axios from "axios";

import React, { Component } from 'react'
import { Link, useHistory } from "react-router-dom";

export default class EditBook extends Component {
   constructor(props){
       super(props);
       this.state={
            title:"",
            description:"",

            valueContent:"",
            selectedTab:"write"

        }
   }

    componentDidMount(){
        axios.get('http://localhost:3050/book/'+this.props.match.params.id)
        .then(response=>this.setState({
            title:response.data[0].book_name,
            description:response.data[0].book_description,
            valueContent:response.data[0].book_content
        }))
        .catch(function (error) {
            console.log(error);
        });
    }

    mySubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3050/update/'+this.props.match.params.id,{
            book_name: this.state.title,
            book_description:this.state.description,
            book_content:this.state.valueContent
          })
          .then(function (response) {
            console.log(response);
            if (response.data=== 'Book updated') {
                alert("the book has been updated");
                
            };
          })
          .catch(function (error) {
            console.log(error);
          });
          //this.props.history.push('/book/'+this.props.match.params.id);
      }






    setTitle= (event)=>{
        this.setState({title:event.target.value});
    }
    setDescription= (event)=>{
        this.setState({description:event.target.value});
    }

   setValueContent=(event)=>{
    //console.log(event);
    this.setState({valueContent:event});
   }
   setSelectedTab=(event)=>{
    this.setState({selectedTab:event});
    }
   
   
    render() {
        return (
            <div>
            <Link to={"/book/"+this.props.match.params.id} type="button" class="btn btn-warning">return to page</Link>   
            <form onSubmit={this.mySubmitHandler}>
                <label htmlFor="title">Title</label>
                <div className="input-group-prepend" >
                    <input type="text" className="input-group-text" 
                    id="title"  required minLength="5" maxLength="20" 
                    placeholder="Write a title"
                    autoComplete="off"
                    value={this.state.title}
                    onChange={this.setTitle}
                    />
                </div>
                <label htmlFor="textDescription">Description</label>
                <div>
                    <textarea className="form-control" type="text"
                    id="textDescription" required minLength="5" 
                    maxLength="150" placeholder="Write a Description"
                    value={this.state.description}
                    onChange={this.setDescription}
                    />
                </div>
                <div>write the story</div>
                <ReactMde
                    value={this.state.valueContent}
                    onChange={this.setValueContent}
                    selectedTab={this.state.selectedTab}
                    onTabChange={this.setSelectedTab}
                    generateMarkdownPreview={(markdown) =>
                        Promise.resolve(<ReactMarkdown source={markdown} />)
                    }
                    childProps={{
                        writeButton: {
                        tabIndex: -1
                        }
                    }}
                />
                <div className="submitBtn">  
                    <button type="submit" className="btn btn-info">submit</button>
                </div>

                </form>
            </div>
            
        )
    }
}





/*
export default function EditBook() {
    const mySubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3050/add',{
            book_name: title,
            book_description:description,
            book_content:valueContent
          })
          .then(function (response) {
            console.log(response);
            if (response.data=== 'Book created') alert("the book has been created");
          })
          .catch(function (error) {
            console.log(error);
          });
      }
      console.log("error1");


      const [title, setTitle] = useState("");  
      const [description, setDescription] = useState("");  
      const [valueContent, setValueContent] = useState("");
      const [selectedTab, setSelectedTab] = useState("write");
     
        return (
           <div>
                <form onSubmit={mySubmitHandler}>
                        <label htmlFor="title">Title</label>
                        <div className="input-group-prepend" >
                        <input type="text" className="input-group-text" 
                        id="title"  required minLength="5" maxLength="20" 
                        placeholder="Write a title"
                        autoComplete="off"
                        onChange={event => setTitle(event.target.value)}
                        />
                        </div>
                        <label htmlFor="textDescription">Description</label>
                        <div>
                        <textarea className="form-control" type="text"
                        id="textDescription" required minLength="5" 
                        maxLength="150" placeholder="Write a Description"
                        onChange={event => setDescription(event.target.value)}
                        />
                        </div>
                        <div>write the story</div>
                        <ReactMde
                        value={valueContent}
                        onChange={setValueContent}
                        selectedTab={selectedTab}
                        onTabChange={setSelectedTab}
                        generateMarkdownPreview={(markdown) =>
                            Promise.resolve(<ReactMarkdown source={markdown} />)
                        }
                        childProps={{
                            writeButton: {
                            tabIndex: -1
                            }
                        }}
                        />
                        <div className="submitBtn">  
                        <button type="submit" className="btn btn-info">submit</button>
                        </div>
                </form>
           </div> 
        )
}

*/