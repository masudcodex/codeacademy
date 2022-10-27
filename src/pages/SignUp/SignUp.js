import React, { useContext, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import './SignUp.css';
import image from '../../assets/images/Sign_up.png';
import { AuthContext } from '../../contexts/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';



const SignUp = () => {
    
    const {createUser, providerLogin, updateUserProfile} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('');
    


     //----------SignUp with email and password--------------//

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordConfirm = form.passwordConfirm.value;

        createUser(email, password)
        .then(result=> {
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name);
            toast.success('Sign up successful');
        })
        .catch(error=> setError(error.message))
    }

     //----------Google SignUp--------------//

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then(result=> {
            const user = result.user;
            console.log(user);
            toast.success('Registration successful!');
        })
        .catch(error=> {
            setError(error.message)
        })
    }

    //----------Github SignUp--------------//

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('Registration successful!');
        })
        .catch(error=>setError(error.message))
    }

    //--------Update User Profile-------//
    const handleUpdateUserProfile=(name)=>{
        const profile = {
            displayName: name
        }
        updateUserProfile(profile)
        .then(result=>{})
        .then(error=> console.error(error))
    }

    return (
        <div className='container'>
            <Container>
                <Row className='align-items-center'>
                    <Col>
                        <div className='mb-4'>
                            <h2 className='my-4'>Welcome to CODEACADEMY</h2>
                            <h5>Sign Up to get started</h5>
                        </div>
                        <Form onSubmit={handleSubmit}>
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
                                <Toaster />
                            </Button> 
                            <Form.Text className="text-danger d-block">
                                {error}
                            </Form.Text>
                        </Form>
                        <div className='mt-3'>
                            <p>Sign up with social platforms</p>
                            <div className='d-flex'>
                                <Link onClick={handleGoogleSignIn} className='social-signup'><FcGoogle className='me-2'/>Signup with Google</Link>
                                <Link onClick={handleGithubSignIn} className='social-signup'><FaGithub  className='me-2'/>Signup with GitHub</Link>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <p className='mb-5'>Already Have an account? <Link to="/login">Login</Link></p>
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