import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Link } from 'react-router-dom';
import { Container, Form, Nav, Navbar, NavDropdown, OverlayTrigger, Tooltip } from 'react-bootstrap';
import logo from '../../assets/images/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import "react-toggle/style.css"
import './Header.css';


const Header = () => {

    const {user, logOutUser } = useContext(AuthContext);

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
          {user?.displayName}
        </Tooltip>
      );


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
                    <NavDropdown title={user?.photoURL ? 
                    <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                    >
                    <img width={25} src={user?.photoURL} alt=""/>
                    </OverlayTrigger> : 
                    <FaUserCircle />}>
                        {user?.uid && 
                        <>
                            <NavDropdown.Item className="nav-link">
                                <Link to="/profile">Your profile</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item className='nav-link'>
                                <Link onClick={handleLogOut}>Log Out</Link>
                            </NavDropdown.Item>
                        </>

                        }
                    </NavDropdown>
                                         
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