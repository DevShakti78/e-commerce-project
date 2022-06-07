import React, {useState} from 'react'
import Mainhome from './Mainhome';
import { SignInSide } from '../sign-in/Login'
const Authentic = () => {
    const [token1,setToken1] = useState("")
 
  var token = localStorage.getItem('token')
var tokens = JSON.parse(token)
  setToken1(tokens.user.uid)

console.log(token1)
  return (
      <>
    {
        token1 ? <Mainhome/> : <SignInSide/> 
    }
    </>
  )
}

export default Authentic