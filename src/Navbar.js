import React from "react";
import { Link } from "react-router-dom";


function Navbars(){
    return(
        <>
         <nav className="navbar navbar-expand-bg bg-info fixed-top">
            <div className="container">
                <div className="navbar-brand">Navbar-Pages</div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                       <Link to={'/'}>Function</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/Class'}>Class</Link>
                    </li>
                    <li className="nav-item">
                    <Link to={'/Higher'}>Higher</Link>
                    </li>
                </ul>
            </div>
         </nav>
        </>
    )
}

export default Navbars;