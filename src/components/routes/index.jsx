import React from 'react';
import { useRoutes } from 'react-router-dom';
import Login from '../pages/Login/index.jsx';
import Home from '../pages/Home/index.jsx';
import Register from '../pages/Register/index.jsx'

const AppRoutes = () => {
    let routes = useRoutes([
        { path: '/', element: <Home /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> }
    ]);

    return routes;
}

export default AppRoutes;