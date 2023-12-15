import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/public/HOME.jsx'
import Login from './pages/public/Login.jsx'

import './index.css'
import User from './pages/private/User.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
         path: 'sign-in',
         element: <Login />
      },
      {
        path: 'user',
        element: <User/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
