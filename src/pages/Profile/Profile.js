import React, { useContext } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthProvider';
import './Profile.css';

const Profile = () => {
    const { user , updateUserProfile, setLoading } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL);
        setLoading(true);
        handleUpdateUserProfile(name, photoURL);
        form.reset();
        setLoading(false);
    }

    const handleUpdateUserProfile=(name, photoURL)=>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(()=>{})
        .then(error=> console.error(error))
    }

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
                        {
                            user?.photoURL ? <img className='profile-photo' width="200" src={user.photoURL} alt="" /> :

                            <img className='profile-photo' width="200" src='https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png' alt="" />
                        }           
                    </div>
                    <div className='my-4'>
                        <h4>
                            {
                                user?.displayName ? user.displayName : <span className='text-muted'>Jon Doe</span>
                            }
                        </h4>
                    </div>
                </Col>
                <Col md="8">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Email
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control plaintext readOnly defaultValue={user?.email ? user.email : "email@example.com"} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Full Name
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control defaultValue={user?.displayName && user.displayName} type="text" name="name" placeholder="Update your name" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">
                            Profile picture url
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control name="photoURL" type="text" placeholder="Update your profile picture" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm="2">About yourself</Form.Label>
                            <Col sm="10">
                                <Form.Control name="bio" as="textarea" rows={3} />
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