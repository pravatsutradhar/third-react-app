import React from 'react'
import { Link } from 'react-router-dom'

const MainLayout = (props) => {
  return (
    <div className="main-layout">
        <header className="header">
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/blog'}>Blog</Link></li>
                <li><Link to={'/contact'}>Contact</Link></li>
                <li><Link to={'/services'}>Services</Link></li>
            </ul>
        </header>

        <main className="main-body">
            {props.children}
        </main>

        <footer className="footer">
            <h2>Footer</h2>
        </footer>
    </div>
  )
}

export default MainLayout