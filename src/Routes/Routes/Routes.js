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
import Categories from '../../pages/Categories/Categories';
import CourseDetails from '../../pages/Courses/CourseDetails/CourseDetails';
import Cart from '../../pages/Cart/Cart';
import Profile from '../../pages/Profile/Profile';
import PrivateRoutes from '../PrivateRoutes/PrivateRoutes';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('http://localhost:5000/course'),
                element: <Courses></Courses>
            },
            {
                path: '/category/:id',
                loader: async ({params}) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Categories></Categories>
            },
            {
                path: '/course/:id',
                loader: async({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },

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
                path: '/profile',
                element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
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
            },
            {
                path: '/course/:id/checkout',
                loader: async({params}) => fetch(`http://localhost:5000/course/${params.id}/cart`),
                element: <PrivateRoutes><Cart></Cart></PrivateRoutes>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])

export default Routes;