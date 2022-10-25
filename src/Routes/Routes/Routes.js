import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Courses from '../../pages/Courses/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Blog from '../../pages/Blog/Blog';
import Others from '../../layout/Others';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import Login from '../../pages/Login/Login';
import SignUp from '../../pages/SignUp/SignUp';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('http://localhost:5000/course'),
                element: <Courses></Courses>
            }

        ]
    },
    {
        path: '/',
        element: <Others></Others>,
        children: [
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;