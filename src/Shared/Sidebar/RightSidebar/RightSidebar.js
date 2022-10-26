import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSidebar.css';

const RightSidebar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/category`)
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div className='container my-lg-4'>
            <h5 className='ms-2'>Categories</h5>
            {
                categories.map(category=><p className='categoryList' key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default RightSidebar;