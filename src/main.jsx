import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import About from './pages/About';
import Contact from './pages/Contact';
import Users from './pages/Users';
import Photos from './components/Photos';
import UserDetails from './components/UserDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/users",
        element: <Users></Users>,
      },
      {
        path: "/user/:userId",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        // loader: ({params}) => console.log(params),
        element: <UserDetails></UserDetails>,
      },
      {
        path: "/photos",
        loader: () => fetch("https://jsonplaceholder.typicode.com/photos"),
        element: <Photos></Photos>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
