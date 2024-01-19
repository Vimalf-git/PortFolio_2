import React from 'react'
// import { Link } from 'react-scroll'
import './NavBar.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { ContactSupport } from '@mui/icons-material';
function NavBar() {
  let navigate=useNavigate();
  return (
    <nav className='navbar'>
      <div className='logo'><h1>VR</h1></div>

      <div className='menu'>
        <Link to={'/home'} >Home</Link>
        <Link to={'/about'}  >About</Link>
        <Link to={'/skill'} >Skill</Link>
        <Link to={'/project'} >Projects</Link>
      </div>
      <div>
        {/* <Link to='/contact'> */}
          <button className='menuBtn' onClick={()=>navigate('/contact')}><ContactSupport className='contactSupt'/>Contact Us</button>
        {/* </Link> */}
      </div>
    </nav>
  )
}


export default NavBar