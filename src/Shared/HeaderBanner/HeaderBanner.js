import React from 'react';
import image from '../../assets/images/Coding-workshop.png';
import './HeaderBanner.css';

const HeaderBanner = () => {
    return (
        <div className='py-2 header-banner'>
            <div className="px-4 px-md-5 mb-4 d-flex align-items-center">
                <div className="col-md-6 px-0">
                    <h1 className="mb-4">Learn without limits</h1>
                    <p className="my-3">An E-Learning Platform to start, switch, or advance your career by learn anything from anywhere from the best & Top rated Professionals</p>
                    {/* <p className="lead mb-0"><a href="#" className="text-white fw-bold">Continue reading...</a></p> */}
                </div>
                <div className='col-md-6 px-0'>
                    <img width="500" src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBanner;