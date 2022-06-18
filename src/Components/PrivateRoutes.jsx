import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState } from 'react';

const PrivateRoutes = () => {
    const state = useSelector((e)=>e.login.token)
     
  return (
    state ? <Outlet/> : <Navigate to = "/login"/>
  )
}

export default PrivateRoutes