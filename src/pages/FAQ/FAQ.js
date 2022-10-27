import React from 'react';
import { Card, Container } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container className='p-2 p-lg-5'>
            <div className='mb-5'>
                <h2>Learning With Codeacademy: FAQ</h2>
            </div>
            <div>
                <p>
                    Codeacademy's mission is to create new possibilities for people and organizations everywhere. Our global marketplace features an extensive, multi-language library, which includes thousands of courses taught by real-world experts. You can take courses across a wide range of categories, some of which include: business & entrepreneurship, programming, academics, the arts, health & fitness, language, music and much more!<br /> 
                    Below are answers to some of the frequently asked questions we receive about Codeacademy and Codeacademy courses.
                </p>
            </div>
            <div className='mt-5'>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>What do Codeacademy courses include?</Card.Title>
                    <Card.Text>
                        Each Codeacademy course is created, owned and managed by the instructor(s). The foundation of each Codeacademy course are its lectures, which can include videos, slides, and text. In addition, instructors can add resources and various types of practice activities, as a way to enhance the learning experience of students. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>How do I take a Codeacademy course?</Card.Title>
                    <Card.Text>
                        Codeacademy courses are entirely on-demand and they can be accessed from several different devices and platforms, including a desktop, laptop, and our mobile app. <br /> 
                        After you enroll in a course, you can access it by clicking on the course link you will receive in your confirmation email (provided you’re logged into your Codeacademy account). You can also begin the course by logging in and navigating to your course page. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>Do I have to start my Codeacademy course at a certain time? And how long do I have to complete it?</Card.Title>
                    <Card.Text>
                        There are no deadlines to begin or complete a course.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>How can I pay for a course?</Card.Title>
                    <Card.Text>
                        Codeacademy supports several different payment methods, depending on your account country and location. 
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>What if I don’t like a course I purchased?</Card.Title>
                    <Card.Text>
                        We want you to be satisfied, so all eligible courses purchased on Codeacademy can be refunded within 30 days. If you are unhappy with a course, you can request a refund, provided the request meets the guidelines in our refund policy. 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </Container>
    );
};

export default FAQ;