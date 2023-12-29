
import { useState, useEffect } from 'react';
import { Nav,Container,Navbar,NavDropdown } from 'react-bootstrap'
import logo from '../assets/Logo1.jpg';



export const NavBar = () => {
const [activeLink, setActiveLink] = useState('home'); 
const [scrolled, setScrolled] = useState(false);
const onUpdateActiveLink = (value) =>{
    setActiveLink(value);
}

useEffect (()=>{

const onScroll = () =>{
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll',onScroll);
},[])

    return (
        <Navbar expand="lg" variant='darck' className={scrolled ? 'scrolled': ''}>
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} width="100" alt='Logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

                    <Nav.Link href="/"className={activeLink === 'home' ? 'active nabar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                    <Nav.Link href="/turnos"className={activeLink === 'turnos' ? 'active nabar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('turnos')} >Turnos</Nav.Link>
                    <Nav.Link href="/especialidades"className={activeLink === 'especialidades' ? 'active nabar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('especialidades')} >Especialidades</Nav.Link>
                    <Nav.Link href="/doctor"className={activeLink === 'profesionales' ? 'active nabar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('especialidades')}  >Profesionales</Nav.Link>
                    <Nav.Link href="/login"className={activeLink === 'login' ? 'active nabar-link': 'navbar-link'}onClick={() => onUpdateActiveLink('login')}  >Iniciar Sesión</Nav.Link>
                    <Nav.Link href="/signup"className={activeLink === 'signup' ? 'active nabar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('signup')} >Registrarse</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="/doctors/new"> Agregar Profesional</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
};
