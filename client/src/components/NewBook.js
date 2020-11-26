/*import * as React from "react";
import ReactMde from "react-mde";
import ReactDOM from "react-dom";
import * as Showdown from "showdown";
import "./NewBook.css";
import "react-mde/lib/styles/css/react-mde-all.css";

export default function NewBook() {

    const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] = React.useState("write");

    return (
       
       <div className="container">
      <ReactMde
        value={value}
        onChange={setValue}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={markdown =>
          Promise.resolve(converter.makeHtml(markdown))
        }
        loadSuggestions={loadSuggestions}
        childProps={{
          writeButton: {
            tabIndex: -1
          }
        }}
      />
    </div>
    )
}*/





import React,{useState} from 'react'
import "./NewBook.css";

import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";
import ReactMarkdown from "react-markdown";

export default function NewBook() {
    const [value, setValue] = useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = useState("write");
    return (
      <div>
        <form a>
        <div>
            <input type="text"/>
        </div>
        <button type="submit">submit</button>
      </form>
        <div>
            <ReactMde
            value={value}
            onChange={setValue}
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
        </div>
      </div>
    )
}





/*

import React, { Component } from 'react

export default class newBook extends Component {


    render() {
        return (
            <div>
                hola
                <textarea name="hola" id="" cols="30" rows="10"></textarea>
            </div>
        )
    }
}*/


