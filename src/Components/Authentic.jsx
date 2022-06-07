import React, {useState} from 'react'
import Mainhome from './Mainhome';
import { SignInSide } from '../sign-in/Login'
import { useSelector } from 'react-redux';


const Authentic = () => {
    // const [state,setToken1] = useState("")
 const state = useSelector((e)=>e.login.token)
 console.log(state,"token")



  return (
      <>
    {
        state ? <Mainhome/> : <SignInSide/> 
    }
    </>
  )
}

export default Authentic