import {Link} from "react-router-dom";


import React,{useState} from 'react'

export default function Navbar() {
        const [click, setClick] = useState(0);


        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">myWEBPAGE</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item" onClick={()=>setClick(0)}>
                        <Link to="/" className={click===0? 'nav-link active':'nav-link'} >Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item" onClick={()=>setClick(1)}>
                        <Link to="/allBooks" className={click===1? 'nav-link active':'nav-link'}>BookList</Link>
                    </li>
                </ul>
            </nav>
        )
}


