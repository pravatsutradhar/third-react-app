import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import BlogPage from '../pages/BlogPage'
import ServicesPage from '../pages/ServicesPage'




const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/about' element={<AboutPage></AboutPage>} ></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>} ></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>} ></Route>
        <Route path='/services' element={<ServicesPage></ServicesPage>} ></Route>
      </Routes>
    
    
  )
}

export default AppRoutes