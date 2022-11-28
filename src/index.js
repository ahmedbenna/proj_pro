import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import NavGuest from './comp/nav/guest/NavGuest.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <NavGuest />
        <App />
    </>


);
