import React from 'react'
import './Footer.css'
function Footer() {
  let date=new Date();
  return (
    <footer className='footer'>
        Copyright &#169;{date.getFullYear()} Vimal. All right received.
    </footer>
    )
}

export default Footer