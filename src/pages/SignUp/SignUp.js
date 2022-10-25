import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './SignUp.css';
import image from '../../assets/images/Sign_up.png'

const SignUp = () => {
    return (
        <div className='container'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <div className='mb-4'>
                            <h2 className='my-4'>Welcome to CODEACADEMY</h2>
                            <h5>Sign Up to get started</h5>
                        </div>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Your name</Form.Label>
                                <Form.Control name="name" type="text" placeholder="Enter your name"/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control name="passwordConfirm" type="password" placeholder="Confirm Password" required/>
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Sign up
                            </Button> 
                            <Form.Text className="text-danger">

                            </Form.Text>

                            <div className='mt-3'>
                                <p>Sign up with social platforms</p>
                                <div className='d-flex'>
                                    <Link className='social-signup'><FcGoogle className='me-2'/>Signup with Google</Link>
                                    <Link className='social-signup'><FaGithub  className='me-2'/>Signup with GitHub</Link>
                                </div>
                            </div>
                        </Form>
                        <div className='mt-3'>
                            <p>Already Have an account? <Link to="/login">Login</Link></p>
                        </div>
                    </Col>
                    <Col>
                        <img src={image} width="500" alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SignUp;