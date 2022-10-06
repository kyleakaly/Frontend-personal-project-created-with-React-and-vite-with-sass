import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../component/BasicLayout/Header'
import Footer from '../component/BasicLayout/Footer'



const BasicLayout = () => {
  return (
      <>
<Header/>

   <Outlet/>

<Footer/>

   </>
  )
}

export default BasicLayout