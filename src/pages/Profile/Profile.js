import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Profile.css';

const Profile = () => {
    return (
        <Container className='p-2 p-lg-5'>
            <div className='mb-5 text-center'>
                <h2>Your profile</h2>
                <p>Add information about yourself</p>
            </div>
            <Row>
                <Col md="4" className="text-center display-profile">
                    <div>
                        <h5 className='mb-5 display-profile-heading'>Your public profile</h5>
                    </div>
                    <div>
                        <img rounded width="200" src='https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png' alt="" />
                    </div>
                    <div className='my-4'>
                        <h4>Jon Doe</h4>
                    </div>
                </Col>
                <Col md="8">
                    <Form>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue="email@example.com" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Full Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Update your name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Full Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Update your name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Profile picture url
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="url" placeholder="Update your profile picture" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">About yourself</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows={3} />
                            </Col>
                        </Form.Group>
                        <Button className='submit-button update-profile' type="submit">Update profile</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Profile;