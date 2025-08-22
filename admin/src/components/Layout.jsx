import React from 'react'
//import Fotter from '../fotter/Fotter'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

 const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    {/* <Fotter /> */}
    </>
  )
}
export default Layout