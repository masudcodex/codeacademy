import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light" className='header'>
            <Container>
                <Navbar.Brand href='/'>
                    <img src={logo} alt="" width="80"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <span className='nav-link'><Link to="/">ALL COURSES</Link></span>
                    <span className='nav-link'><Link to="/faq">FAQ</Link></span>
                    <span className='nav-link'><Link to="/blog">BLOG</Link></span>
                    <span className='nav-link'><Link to="/login">LOGIN/REGISTER</Link></span>
                    <NavDropdown title={<FaUserCircle></FaUserCircle>} id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Your Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">
                        Log Out
                    </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;