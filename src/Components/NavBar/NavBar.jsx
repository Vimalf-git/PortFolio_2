import React, { useState } from 'react'
import './NavBar.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Close, ContactSupport } from '@mui/icons-material';
import { MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  const menuItem = [
    {
      name: 'Home',
      menuURL: '/home'
    },
    {
      name: 'About',
      menuURL: '/about'
    }, {
      name: 'Skill',
      menuURL: '/skill'
    }, {
      name: 'Projects',
      menuURL: '/Project'
    }
  ]
  let navigate = useNavigate();
  const [hamburger, sethanmburger] = useState(false);
  return (
    <nav className='navbar'>
      <div className='logo'><h1><Link to={'home'} style={{ textDecoration: 'none', color: 'yellow' }}>VR</Link></h1></div>
      <div className='menu'>
        {menuItem.map((e) => <NavLink to={e.menuURL}>{e.name}</NavLink>)}
      </div>
      <div>
        <button className='menuBtn' onClick={() => navigate('/contact')}><ContactSupport className='contactSupt' />Contact Us</button>
      </div>
      <div className='hambugerIcon'>
        <span onClick={() => sethanmburger(prev => !prev)}>
          {hamburger ?
            <Close style={{ color: 'black' }} /> : <MenuIcon />
          }
        </span>
      </div>
      <div className={hamburger ? "hamburgerMenu" : "hamburgerMenuOff"}>
        {menuItem.map((e) => {
          return <NavLink to={e.menuURL} onClick={() => sethanmburger(prev => !prev)}>{e.name}</NavLink>
        })}
        <button className='hamburgermenuBtn' onClick={() => { navigate('/contact'); sethanmburger(prev => !prev) }}><ContactSupport className='contactSupt' />Contact Us</button>
      </div>
    </nav>
  )
}


export default NavBar 