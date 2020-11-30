import React,{useState} from 'react'
import "./NewBook.css";

import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

import axios from "axios";

export default function MdWritter() {
    /*
  onSubmit(){
    axios.post('http://localhost:3050/add',{
            firstName: 'Fred',
            lastName: 'Flintstone'
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
  }*/
  
  
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
  const [title, setTitle] = useState("");  
  const [description, setDescription] = useState("");  
  const [valueContent, setValueContent] = useState("");
  const [selectedTab, setSelectedTab] = useState("write");
 
    return (
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
    )
}
