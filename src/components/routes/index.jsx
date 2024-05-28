import React from 'react';
import {userRoutes} from 'react-router-dom';
import Login from '../pages/Login/index.jsx';
import Home from '../pages/Home/index.jsx';

const AppRoutes = () => {
let routes = userRoutes([
    { path: '/', Element: <Home/>},
    { path: '/login', Element: <Login/>}
]);

    return routes;
}

export default AppRoutes;