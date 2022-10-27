import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import CourseGridView from '../CourseGridView/CourseGridView';
import './Courses.css';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='py-2 py-lg-5'>
            <h2>Let's start learning</h2>
            <div className="course-container">
                {
                    courses.map(course=> <CourseGridView key={course._id} course={course}></CourseGridView>)
                }
            </div>
        </div>
    );
};

export default Courses;