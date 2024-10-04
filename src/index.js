import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Dashboard from './Component/Dashboard';


const route = createBrowserRouter([{
  path:'/',
  element:<App/>
},{
  path:'/dashboard',
  element:<Dashboard/>
}])

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <>
   <RouterProvider router={route} />
  </>
);