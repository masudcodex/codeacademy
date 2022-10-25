import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layout/Main';
import Courses from '../../pages/Courses/Courses/Courses';
import FAQ from '../../pages/FAQ/FAQ';
import Blog from '../../pages/Blog/Blog';
import Others from '../../layout/Others';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
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
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;