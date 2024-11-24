import React from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'

const MainLayout = (props) => {
  return (
    <div className="main-layout">
        <Header></Header>

        <main className="main-body">
            {props.children}
        </main>

        <Footer></Footer>
    </div>
  )
}

export default MainLayout