import React from 'react'
import { Link } from 'react-scroll'
import './NavBar.css'
function NavBar() {
  return (
    <nav className='navbar'>
        <div className='logo'><h1>VR</h1></div>
        
        <div className='menu'>
           <Link to='intro' spy={true} smooth={true}className='menuListItem'>Home</Link>
           <Link to='about' smooth={true} offset={-40} className='menuListItem'>About</Link>
           <Link to='skill' smooth={true} offset={-40} className='menuListItem'>Skill</Link>
           <Link to='works' smooth={true} offset={-40} className='menuListItem'>Projects</Link>
        </div>
        <div>
          <Link to='contactPage' smooth={true} offset={-40}>
          <button className='menuBtn'>Contact Us</button>
          </Link>
        </div>
    </nav>
  )
}


export default NavBar