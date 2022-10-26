import React, { useContext } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, ToggleButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import "react-toggle/style.css"
import './Header.css';
import { AuthContext } from '../../contexts/AuthProvider';


const Header = () => {

    const {user, logOutUser, setLoading} = useContext(AuthContext);


    //-------Logout users--------//

    const handleLogOut = () => {
        logOutUser()
        .then(result=> {})
        .then(error=> console.error(error))
    }


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
                    {
                        user?.uid &&  
                        <NavDropdown title={<FaUserCircle></FaUserCircle>}>
                        <NavDropdown.Item className="nav-link"><Link to="/profile">Your profile</Link></NavDropdown.Item>
                        <NavDropdown.Item className='nav-link'>
                            <Link onClick={handleLogOut}>Log Out</Link>
                        </NavDropdown.Item>
                        </NavDropdown>
                    }
                    
                    <span className='nav-link'>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Dark mode"
                        />
                    </span>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;