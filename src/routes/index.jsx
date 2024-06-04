import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from '../Components/pages/Home/index.jsx';
import Login from '../Components/pages/Login';
import Register from '../Components/pages/Register';

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home />},
        { path: '/login', element: <Login />},
        { path: '/register', element: <Register />},
    ]);
    return routes;
};

export default AppRoutes;