import React from 'react';
import './footer.styles.scss';
import { Navbar, Container, Nav} from 'react-bootstrap';

const Footer = () => (
    <Navbar expand="lg" fixed="bottom" variant="light" bg="custom">
        <Container>
            <Nav></Nav>
            <Nav>
                <Nav.Link target="_blank" href="//www.linkedin.com/in/sagarbhatt"><i class="fab fa-linkedin-in"></i></Nav.Link>
                <Nav.Link target="_blank" href="//www.facebook.com/sagar.bhatt"><i class="fab fa-facebook-f"></i></Nav.Link>
                <Nav.Link target="_blank" href="//twitter.com/sagar1596"><i class="fab fa-twitter"></i></Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)

export default Footer;