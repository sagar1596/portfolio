import React from 'react';
import './navigation.styles.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => (<Navbar className="header" collapseOnSelect fixed="top" expand="lg" bg="custom" variant="dark">
        <Navbar.Brand href="/">Sagar Bhat</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                
            </Nav>
            <Nav>
                <Link onClick={_handleClick} className={`nav-link ${props.location.pathname==='/' ? 'active' : null}`} to="/">Home</Link>
                <Link onClick={_handleClick} className={`nav-link ${props.location.pathname==='/professional' ? 'active' : null}`} to="/professional">Experience</Link>
                <Link onClick={_handleClick} className={`nav-link ${props.location.pathname==='/skills' ? 'active' : null}`} to="/skills">Skills</Link>
                <Link onClick={_handleClick} className={`nav-link ${props.location.pathname==='/work' ? 'active' : null}`} to="/work">Work</Link>
                <Link onClick={_handleClick} className={`nav-link ${props.location.pathname==='/about' ? 'active' : null}`} to="/about">Contact Me</Link>
            </Nav>
            
        </Navbar.Collapse>
    </Navbar>
)

const _handleClick = (e) => {
    Array.from(e.target.parentElement.children).forEach((el) => {
        el.classList.remove('active');
    })
    e.target.classList.add("active");
}

export default Navigation;



