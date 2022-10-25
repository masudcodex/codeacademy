import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='container'>
            <h2>All Courses</h2>
            {
                courses.map(course=> console.log(course))
            }
        </div>
    );
};

export default Courses;