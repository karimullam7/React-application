import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter as Router} from 'react-router-dom';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";  
import Home from './pages/Home';
import Rooms from './pages/Rooms';
// import SingleRoom from './pages/SingleRoom';

const router=  createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/rooms',
        element:<Rooms/>
      }
    ]
  } 
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
 
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
