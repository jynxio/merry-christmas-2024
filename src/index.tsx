import '@/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterProvider from './router';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider />
    </React.StrictMode>,
);
