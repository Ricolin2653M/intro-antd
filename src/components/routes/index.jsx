import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import Register from '../pages/Register/index.jsx';
import { useAuth } from '../../hooks/useAuth.js';

const AppRoutes = () => {
    const { user } = useAuth();
    let routes = useRoutes([
        { path: '/', element: user ? <Home />: <Login/> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> }
    ]);

    return routes;
}

export default AppRoutes;