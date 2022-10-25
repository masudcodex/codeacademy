import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryItemsSummary from './CategoryItemsSummary/CategoryItemsSummary';

const Categories = () => {
    const courses = useLoaderData();
    return (
        <div className='course-container'>
            {
                courses.map(course=><CategoryItemsSummary key={course._id} course={course}></CategoryItemsSummary>)
            }
        </div>
    );
};

export default Categories;