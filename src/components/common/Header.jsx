import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <h2>App Logo</h2>
        </div>
        <ul className='Menu'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/blog'}>Blog</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/services'}>Services</Link></li>
        </ul>
    </header>
  )
}

export default Header