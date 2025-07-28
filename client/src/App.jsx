// import { useState } from 'react'
import {createBrowserRouter, RouterProvider,Navigate} from 'react-router-dom';
import './App.css'
import Login from './auth/Login';
import SignUp from './auth/SignUp';
import ProtectedLayout from './utils/protectedLayout';
import Ananta from './pages/Dashboards/Ananta-dashboard';
import Srijita from './pages/Dashboards/Srijita-dashboard';
import Soumya from './pages/Dashboards/Soumya-dashboard';


const router = createBrowserRouter([
 { path: '/', element: <Navigate to='/login' /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },

  {
    element:<ProtectedLayout/>,
    children:[
       { path: '/ananta-dashboard/*', element: <Ananta /> },
       { path: '/srijita-dashboard/:stack/*', element: <Srijita /> },
       { path: '/Soumya-dashboard/*', element: <Soumya /> },
    ]
  }
])
function App() {
 return <RouterProvider router={router}/>
}

export default App
