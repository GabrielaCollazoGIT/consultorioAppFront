import React,{useEffect} from 'react';

import './Navbar.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = ()  => {
function animation(){
    let tabsNewAnim = $('#navbarSupportedContent');
    let activeItemNewAnim = tabsNewAnim.find('.active');
    let activeWidthNewAnimatedHeight = activeItemNewAnim.innerHeight();
    let activeWidthNewAnimateWidth = activeItemNewAnim.innerWidth();
    let itemPosNewAnimTop = activeItemNewAnim.position();
    let itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimatedHeight,
        "whidth": activeWidthNewAnimateWidth + "px"
    });

    $("#navbarSupportedContent").on("click","li",function(e){
        $("#navbarSupportedContent ul li").removeClass("active");

        $(this).addClass('active');
        let activeWidthNewAnimatedHeight = $(this).innerHeight();
    let activeWidthNewAnimateWidth = $(this).innerWidth();
    let itemPosNewAnimTop = $(this).position();
    let itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px",
        "left": itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimatedHeight,
        "whidth": activeWidthNewAnimateWidth + "px"
    });
    })
}
useEffect(()=>{
    animation();
    $(window).on('resize', function(){
        setTimeout(function(){
            animation();
        },500);
    });
},[]);




    return(
        <nav className='navbar-expand-lg navbar-mainbg'>
            <Link className="navbar-brand navbar-logo" to="/">
            Hospital
            </Link>

            <button
            className='navbar-toggler'
            onClick={function(){
                setTimeout(function(){
                    animation();
                });
            }}
            type='button' data-toggle='collapse'
            data-target = "#navbarSupportedContent"
            aria-expanded = "false"
            aria-label='Toggle navigation'>
                <i className='fas far-bar text-white'></i>
            </button>

            <div className='collapse' id='navbarSuppotedContent'>
                <ul className='navbar-nav ml-auto'>
                    <div className='hori-selector'>
                        <div className='left'></div>
                        <div className='rigth'></div>
                    </div>
                </ul>
            </div>

            <li className='nav-item active'>
                <Link className="nav-link" to="/" exact>
                    <i className='fas fa-tachometer-alt'></i>Home
                </Link>
            </li>

            <li className='nav-item active'>
                <Link className="nav-link" to="/" exact>
                    <i className='fas fa-tachometer-alt'></i>Reserva
                </Link>
            </li>

            <li className='nav-item active'>
                <Link className="nav-link" to="/" >
                    <i className='fas fa-tachometer-alt'></i>Mis Turnos
                </Link>
            </li>

            <li className='nav-item active'>
                <Link className="nav-link" to="/" >
                    <i className='fas fa-tachometer-alt'></i>Profesionales
                </Link>
            </li>

            <li className='nav-item active'>
                <Link className="nav-link" to="/" >
                    <i className='fas fa-tachometer-alt'></i>Especialidades
                </Link>
            </li>
        </nav>
    )

}
export default Navbar;