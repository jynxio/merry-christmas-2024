import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import App from './app';

const route: Parameters<typeof createBrowserRouter>[0] = [
    {
        path: '/',
        element: <Navigate to="/gift" replace />,
    },
    {
        path: '/gift',
        element: <App />,
    },
];

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter(route);

Component.displayName = 'RouterProvider';
function Component() {
    return <RouterProvider router={router} />;
}

export default Component;
