import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/images/404.gif';
const ErrorPage = () => {
    return (
        <div className="cover-container w-100 h-100 p-3 mx-auto">
            <main className="px-3 text-center">
                <img src={image} alt="" />
                <h1>We can’t find the page you’re looking for</h1>
                <p className="lead">
                <Link className='fw-bold' to="/">Back to Home</Link>
                </p>
            </main>
        </div>
    );
};

export default ErrorPage;