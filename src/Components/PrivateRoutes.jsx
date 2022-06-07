import React, {useContext} from 'react'
import {Route,Navigate,Outlet} from 'react-router-dom'
import { AuthContext } from '../Components/Auth'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const PrivateRoutes = () => {
    const loggedIn  = true;

  return loggedIn ? <Outlet/> : <Navigate to="/login" />
    
    

    
  
}

export default PrivateRoutes