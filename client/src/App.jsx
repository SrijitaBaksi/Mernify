// import { useState } from 'react'
import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom';
import './App.css'
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ProtectedLayout from './utils/protectedLayout';
import Ananta from './pages/Dashboards/Ananta-dashboard';
import Srijita from './pages/Dashboards/Srijita-dashboard';
import Manna from './pages/Dashboards/Manna-dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
 { path: '/', element: <Navigate to='/login' /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  {
    element:<ProtectedLayout/>,
    children:[
       { path: '/ananta-dashboard/react/*', element: <Ananta /> },
       { path: '/srijita-dashboard/:stack/*', element: <Srijita /> },
       { path: '/manna-dashboard', element: <Manna /> },
    ]
  }
])

function App() {
 return(
  <>
    <ToastContainer position="top-right" autoClose={3000} />
    <RouterProvider router={router}/>
  </>
 )
}

export default App
