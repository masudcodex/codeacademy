import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';

const Others = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Others;