import React from "react";
import '../components/Layout.css'
const Layout = ({children}) =>{
    return(
        <>
        <div className="main">
            <div className="layout">
                <div className="sidebar">
                    <div className="logo">MENU</div>
                    
                    <hr/>
                    <div className="menu">Menu</div>
                </div>
                <div className="content">
                    <div className="header">Header</div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Layout;