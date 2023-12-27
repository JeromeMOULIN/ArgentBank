import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@pages/public/HOME.jsx'
import Login from '@pages/public/Login.jsx'
import AuthGuard from './_helpers/AuthGuard.jsx'
import { Provider } from 'react-redux'
import { mainStore } from '@components/redux/UserSlice.jsx'

import './index.css'

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
        path: '/login',
        element: <Login />
      },
      {
        path: '/user',
        element: <AuthGuard/>

      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={mainStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
