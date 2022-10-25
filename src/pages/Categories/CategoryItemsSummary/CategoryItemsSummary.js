import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const CategoryItemsSummary = ({course}) => {
    
    const {title, image_url, author, details, rating, price} = course;
    
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>{author.name}</p>
            <Card.Text>
                {details.slice(0, 90) + '...'}
            </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between'>
                <span className='fw-bold'><small>Ratings: {rating.number}</small></span>
                <span className='fw-bold'><small>${price}</small></span>
            </Card.Footer>
        </Card>
    );
};

export default CategoryItemsSummary;