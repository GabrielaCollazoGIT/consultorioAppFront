import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false);

    function toggleSidebar(){
        setShowSidebar(!setShowSidebar);
    }
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
    <div className="container">
        {/*logo*/}
    <Link to='/Specialities' className="ms-2">Especialidades</Link>
   {/*      <a className="navbar-brand fs-4 href=#home">Home</a> */}
    
        {/*toggle button*/}
        <button className="navbar-toggler shadow-none border-0" type="button" onClick={toggleSidebar}>
            <span className="navbar-toggle-icon"></span>
        </button>
        {/*sidebar*/}
        <div className={`sidebar offcanvas-start ${showSidebar ? 'show' :''}`} 
            tabIndex='-1' id='offcanvasNavbar' aria-labelledby="offcanvasNavbarLabel">
            {/*sideba heraderr*/}
            <div className="offcanvas-header text-white border-botton">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Home2</h5>
                <button className="btn-close btn-close-white shadow-none"  type="button" onClick={toggleSidebar} aria-label="Close">
                </button>
            </div>

            {/*sidebar body*/}
            <div className="offcanvas-body d-flex flex-column flex-lg-row p-4">
            {/*navbar links*/}  
            <ul className="navbar-nav justify-content-center align-items-center fs-5 flex-grow-1 pe-3">
                <li className="nav-item mx-2">
                <Link to='/login' className="ms-2">Login</Link>
                </li>

                <li className="nav-item mx-2">
                <Link to='/signup' className="ms-2">Signup</Link>
                </li>

                <li className="nav-item mx-2">
                <a className="nav-link-active" aria-current="page" href="#home">Home</a> */
                </li>
            </ul>

            {/*login/signUp*/}  
            <div className="d-flex flex-column justify-content-center align-items-center gap-3 flex-lg-row">
            <a className="text-white " href="#login">LoginHref</a>
            <a className="text-white decoration-none px-3 py-1 rounded-4 " href="#signup" style={{backgroundColor:'#f94ca4'}}>SignupHref</a> 
            </div>
            </div>

            
        
        </div>
    </div>
</nav>
);
}

export default Navbar;