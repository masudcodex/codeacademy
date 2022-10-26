import React, { useContext, useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../assets/images/logo-background.jpg';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {

    const auth = useContext(AuthContext);
    const [error, setError] = useState('');
    const {logInUser} = auth;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> setError(error.message));
    }

    return (
        <div className='container'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <img src={image} width="600" alt="" />
                    </Col>
                    <Col>
                        <div>
                            <h2 className='my-4'>Sign In to CODEACADEMY</h2>
                        </div>
                        <div className='my-3 d-flex align-items-center justify-content-between'>
                            <p className='my-2 text-muted'>Sign in with</p>
                            <div className='d-flex'>
                                <FcGoogle className='social-icon fs-4 me-3'/>
                                <FaGithub className='social-icon fs-4' />
                            </div>
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" required/>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name="password" type="password" placeholder="Password" required/>
                            </Form.Group>
                            <Link className='d-block mb-3'>Forgot password?</Link>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <Form.Text className="text-danger">
                                {error}
                            </Form.Text>
                        </Form>
                        <div className='mt-3'>
                            <p>Dont Have an account? <Link to="/signup">Sign Up</Link></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;