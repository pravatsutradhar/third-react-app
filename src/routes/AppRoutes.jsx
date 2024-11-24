import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import BlogPage from '../pages/BlogPage'
import ContactPage from '../pages/ContactPage'
import MainLayout from '../layout/MainLayout'
import ServicesPage from '../pages/ServicesPage'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<AboutPage></AboutPage>} ></Route>
        <Route path='/blog' element={<BlogPage></BlogPage>}></Route>
        <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        <Route path='/services' element={<MainLayout><ServicesPage></ServicesPage></MainLayout>}></Route>
    </Routes>
  )
}

export default AppRoutes