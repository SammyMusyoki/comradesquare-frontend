import React  from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from'react-router-dom'
import BaseLayouts from './Layouts/BaseLayouts';
import Home from './Pages/Home';
import Login from './Pages/Authentication/Login';
import { AuthContextProvider } from './Contexts/AuthContext';
import PrivateRoutes from './Routes/PrivateRoutes';
import Registration from './Pages/Authentication/Registration';

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<BaseLayouts/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Registration/>}/>
        <Route path='/home/*' element={<PrivateRoutes/>}>
        <Route path='products' element={<Home/>}/>

        </Route>
      </Route>
    )
)
function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>
  )
}

export default App;
