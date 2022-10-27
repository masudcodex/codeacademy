import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const ResetPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [error, setError] = useState('');


    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        resetPassword(email)
        .then(result=>{
            form.reset();
            toast.success("Password reset link has been sent!");
        })
        .then(error=>setError(error))
    }
    return (
        <Container className='p-5 text-center'>
            <h2 className='mb-5'>Enter your email here to reset your password</h2>
            <div className='w-50 text-center mx-auto'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control name="email" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Text className="text-danger d-block">
                        {error}
                    </Form.Text>
                    <Button variant="primary" type="submit">
                        Reset Password
                        <Toaster />
                    </Button>
                </Form>
                <p className='mt-4'>Back to <Link to="/login">previous page</Link></p>
            </div>   
        </Container>
    );
};

export default ResetPassword;