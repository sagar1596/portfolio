import React from 'react';
import './footer.styles.scss';
import { Navbar, Container, Nav} from 'react-bootstrap';

const Footer = () => (
    <Navbar className="footer" expand="lg" fixed="bottom" variant="light" bg="custom">
        <Container>
            <Nav></Nav>
            <Nav>
                <Nav.Link target="_blank" href="//www.linkedin.com/in/sagarbhatt"><i className="fab fa-linkedin-in"></i></Nav.Link>
                <Nav.Link target="_blank" href="//github.com/sagar1596"><i className="fab fa-github"></i></Nav.Link>
                <Nav.Link target="_blank" href="//sagarspeaks.blogspot.com"><i className="fab fa-blogger-b"></i></Nav.Link>
                <Nav.Link target="_blank" href="//www.facebook.com/sagar.bhatt"><i className="fab fa-facebook-f"></i></Nav.Link>
                <Nav.Link target="_blank" href="//twitter.com/sagar1596"><i className="fab fa-twitter"></i></Nav.Link>
                <Nav.Link target="_blank" href="//www.instagram.com/thereaper007"><i className="fab fa-instagram"></i></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Footer;