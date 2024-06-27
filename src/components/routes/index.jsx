import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home/index.jsx';
import Login from '../pages/Login/index.jsx';
import NewP from '../pages/NewProd/index.jsx';
import Register from '../pages/Register/index.jsx';
import { useAuth } from '../../hooks/useAuth.js';
import Productos from '../pages/Products/index.jsx';
import FormNewP from '../FormNewProd/index.jsx';
import FormEditP from '../FormEditProd/index.jsx';
import AboutOf from '../pages/AboutOf/index.jsx';
import ContactUs from '../pages/ContactUs/index.jsx';

const AppRoutes = () => {
    const { user } = useAuth();
    let routes = useRoutes([
        { path: '/', element: user ? <Home /> : <Login /> },
        { path: '/register', element: <Register /> },
        { path: '/login', element: <Login /> },
        { path: '/Libros', element: <Productos /> },
        { path: '/NewLibro', element: <NewP /> },
        { path: '/nuevoLibro', element: <FormNewP /> },
        { path: '/editLibro', element: <FormEditP /> },
        { path: '/acerca de', element: <AboutOf /> },
        { path: '/Contacto', element: <ContactUs /> },
    ]);

    return routes;
}

export default AppRoutes;