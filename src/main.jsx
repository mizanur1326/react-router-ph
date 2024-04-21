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
import Home from './pages/Home';
import Phones from './components/Phones';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
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
      {
        path: "/posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        element: <Posts></Posts>,
      },
      {
        path: "/post/:id",
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`),
        element: <PostDetails></PostDetails>,
      },
      {
        path: "/phones",
        loader: () => fetch("phones.json"),
        element: <Phones></Phones>,
      },
      {
        path: "/phone",
        loader: () => fetch("phones.json"),
        element: <Phones></Phones>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
