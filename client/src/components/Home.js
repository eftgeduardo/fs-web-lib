import React from 'react'
import { Link } from 'react-router-dom'
import img from "./styles/Book_image.jpg"
import './styles/Home.css'

export default function home() {
    return (
        <div>
            <div className="container">
                <div className="row align-items-center background-blue">
                    <div className="col-8">
                        <h1 >Start writing, create your own story</h1>
                    </div>
                    <div className="col">
                        <img src={img} className="home" alt="-"/>
                    </div>
                    
                </div>
                <br/>
                <div className="row ">
                    <div className="col">
                        <h1>Once upon a time...</h1> 
                        <h2>Remember, books are made by people like you</h2>
                        <Link to="/newBook" className="btn btn-success">New Book</Link>
                    </div>
                    <div className="col">
                        <h2>Read as many books as you would like.</h2>
                        <p>while giving feedback to your favorite artist </p>
                        <Link to="/allBooks" className="btn btn-primary">read books</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
