import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from './pages/login.jsx';
import Register from './pages/register.jsx';
import Articles from "./pages/articles.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>,
    },
    {
        path: '/register',
        element: <Register/>,
    },
    {
        path: '/dashboard',
        element: <Articles/>,
    },
    {
        path: '*',
        element: <Login/>,
    },
]);

const RouteList = () => {
    return <RouterProvider router={router}/>;
};

export default RouteList;