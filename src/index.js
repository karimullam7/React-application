import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store'
import { Provider } from 'react-redux';
import Login from './features/components/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ContactUs from './features/components/ContactUs';
import Home from './features/components/Home';
import Register from './features/components/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Log',
        element: <Login/>,          
      },
      {
        path: '/Register',
        element: <Register/>,          
      },
      {
        path:'/cu',
        element:<ContactUs/>
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store} >
         <RouterProvider router={router} />
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
