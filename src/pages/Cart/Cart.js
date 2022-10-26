import React from 'react';
import { Button, Col, Container, Form, InputGroup, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const course = useLoaderData();
    const {title, price} = course;

    const handleSubmit = event=> {
        event.preventDefault();
    }
    return (
        <Container>
            <Row className="p-2 p-md-5">
                <Col lg="8">
                    <h4 className="mb-3">Billing address</h4>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-4 d-flex">
                            <div className='me-3 w-50'>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control name="fname" type="text" placeholder="First name" required/>
                            </div>
                            <div className='w-50'>
                                <Form.Label>Last name</Form.Label>
                                <Form.Control name="lname" type="text" placeholder="Last name" required/>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" required/>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="1243 Main St" required/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Address 2 <span className='text-muted'>(Optional)</span></Form.Label>
                            <Form.Control type="text" placeholder="Apartment or suit" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check defaultChecked type="checkbox" label="Save my address" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <div className='d-flex'>
                                <div className='w-100'>
                                    <Form.Label>Country</Form.Label>
                                    <Form.Select aria-label="Country">
                                        <option>Choose...</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="United states">United States</option>
                                        <option value="United kingdom">United Kingdom</option>
                                    </Form.Select>
                                </div>
                                <div className='w-100 mx-5'>
                                    <Form.Label>State</Form.Label>
                                    <Form.Select aria-label="State">
                                        <option>Choose...</option>
                                        <option value="chattogram">Chattogram</option>
                                        <option value="dhaka">Dhaka</option>
                                        <option value="california">California</option>
                                    </Form.Select>
                                </div>
                                <div className='w-100'>
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control type="text" placeholder=" " />
                                </div>
                            </div>
                        </Form.Group>
                        <div className='my-3'>
                            <hr/>
                        </div>

                        <h4 className='mb-3'>Payment method</h4>
                        <Form.Group className="my-3">
                            <div className="form-check">
                            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" defaultChecked required />
                            <label className="form-check-label" htmlFor="credit">Credit card</label>
                            </div>
                            <div className="form-check">
                            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" htmlFor="debit">Debit card</label>
                            </div>
                            <div className="form-check">
                            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required />
                            <label className="form-check-label" htmlFor="paypal">PayPal</label>
                            </div>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <div className='mb-3 d-flex'>
                                <div className='me-4 w-50'>
                                    <Form.Label htmlFor='cc-name'>Name on card</Form.Label>
                                    <Form.Control name="nameOnCard" type="text" id="cc-name" placeholder=" " required/>
                                    <small class="text-muted">Full name as displayed on card</small>
                                </div>
                                <div className='w-50'>
                                    <Form.Label htmlFor='cc-number'>Credit card number</Form.Label>
                                    <Form.Control name="cardNumber" type="text" id='cc-number' placeholder=" " required/>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div className='me-4'>
                                    <Form.Label htmlFor='cc-expiration'>Expiration</Form.Label>
                                    <Form.Control name="cardExpiration" type="text" id="cc-expiration" placeholder=" " required/>
                                </div>
                                <div>
                                    <Form.Label htmlFor='cc-cvv'>CVV</Form.Label>
                                    <Form.Control name="cardCvv" type="text" id='cc-cvv' placeholder=" " required/>
                                </div>
                            </div>
                        </Form.Group>


                        <Button variant="primary" type="submit">
                            Update billing information
                        </Button>
                    </Form>
                </Col>
                <Col lg="4">
                <h4 className="mb-3">Your Cart</h4>
                <div>
                <ListGroup>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <span><b>{title}</b></span>
                        <span>${price}</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <span><b>Promo Code</b></span>
                        <span>$ 0.00</span>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex justify-content-between align-items-center'>
                        <span><b>Total(USD)</b></span>
                        <span>$ 0.00</span>
                    </ListGroup.Item>
                </ListGroup>
                <ListGroup>
                    <ListGroupItem className='d-flex align-items-center my-5'>
                        <InputGroup>
                            <Form.Control name="promoCode" type="text" placeholder="Promo code" required/>
                            <button className='btn submit-button'>Redeem</button>
                        </InputGroup>
                    </ListGroupItem>
                </ListGroup>
                </div>
                </Col>
            </Row>
            
        </Container>
    );
};

export default Cart;