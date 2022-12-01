//#region styles
import '../index.css';
//#endregion
//#region imports
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Routes } from './helpers/routes.helper';
import Axios from 'axios';
//#endregion

Axios.defaults.baseURL = 'https://agromarket-production.up.railway.app/api/v1/';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Routes} />
  </React.StrictMode>
);