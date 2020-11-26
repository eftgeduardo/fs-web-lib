import {Link} from "react-router-dom";


import React,{useState} from 'react'
import Darkmode from "./Darkmode";

export default function Navbar() {
        const [click, setClick] = useState(0);

        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to="/" className="navbar-brand" onClick={()=>setClick(0)}>myWEBPAGE</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav"> 
                            
                            <li className="nav-item" onClick={()=>setClick(0)}>
                                <Link to="/" className={click===0? 'nav-link active':'nav-link'} >Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item" onClick={()=>setClick(1)}>
                                <Link to="/allBooks" className={click===1? 'nav-link active':'nav-link'}>BookList</Link>
                            </li>
                            <li className="nav-item" onClick={()=>setClick(2)}>
                                <Link to="/newBook" className={click===2? 'nav-link active':'nav-link'}>NewBook</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
                <nav className="navbar">
                 <div class="navbar-brand"/>
                    <div className="navbar-nav ">
                    <Darkmode></Darkmode>
                    </div>
                </nav>
            </div>
            
            
            



        )
}


