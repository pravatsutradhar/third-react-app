import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'




const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>} ></Route>
        <Route path='/' element={<AboutPage></AboutPage>} ></Route>
      </Routes>
    </MainLayout>
    
  )
}

export default AppRoutes