import React from 'react';
import ReactDOM from "react-dom";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaRegCaretSquareRight, FaMobileAlt, FaTrophy, FaShoppingCart } from "react-icons/fa";
import { GiInfinity } from "react-icons/gi";
import { VscFilePdf } from "react-icons/vsc";
import './CourseDetails.css'

const CourseDetails = () => {
  const ref = React.createRef();
    const course = useLoaderData();
    const {_id, title, image_url, author, details, rating, total_students, course_duration, price} = course;
    return (
        <Container className='my-lg-4'>
          <Row>
            <Col lg="10">
              <div>
                <div className='mb-4'>
                  <Card>
                    <Card.Img variant="top" width="200" src={image_url} />
                  </Card>
                </div>
                <Card className='p-2'>
                  <Pdf targetRef={ref} filename="course-details.pdf">
                    {({ toPdf }) => <button className='course-details-pdf' onClick={toPdf}><VscFilePdf className='me-2'/> Download course details</button>}
                  </Pdf>
                  <Card.Body ref={ref}>
                    <Card.Title className='mt-4'>{title}</Card.Title>
                    <div className='d-flex'>
                      <p className='me-5'><b>Ratings:</b> {rating.number}</p>
                      <p>{total_students} students</p>
                    </div>
                    <p><b>Created by </b>{author.name}</p>
                    <p><b>Last Updated </b>{author.last_updated}</p>
                    <p><FaRegCaretSquareRight />  {course_duration} hours on-demand video</p>
                    <p><GiInfinity />  Full lifetime access</p>
                    <p><FaMobileAlt />  Access on mobile and TV</p>
                    <p><FaTrophy />  Certificate of completion</p>
                    <h4>Description</h4>
                    <Card.Text>
                      {details}
                    </Card.Text>
                  </Card.Body>
                  <div className='d-flex course-buy'>
                    <Button><Link to={`/course/${_id}/checkout`} className='course-purchase'>Get premium access</Link></Button>
                    <Button><FaShoppingCart />  <Link to={`/course/${_id}/checkout`} className='course-purchase'>Add to cart</Link></Button>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
    );
};

export default CourseDetails;