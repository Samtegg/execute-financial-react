import React, {useState} from 'react'
import logo from './images/logo.png'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {

  // setting mobile nav //
  const [click, setClick]= useState(false)
  const handleClick = () => setClick(!click)

  //change nav color when scrolling //
  const [color, setColor] = useState(false)
  const good = window
  const changeColor = () => {
    if (good.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  good.addEventListener('scroll', changeColor)


  //close menu on click //
  const closeMenu = () => setClick (false)  

  return ( 

    <div className={color? "header header-bg" : "header" }>
      <nav className='navbar'>
        <a href='/signup' className='logo'>
          <img src={logo} alt='logo' />
        </a>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={30} style={{color: '#ffffff'}}/>) : <FaBars size={30} style={{color: '#ffffffff'}}/> }
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'>
            <a href='/' onClick={closeMenu}>Home</a>
          </li>
          <li className='nav-item'>
            <a href='#about' onClick={closeMenu}>About</a>
          </li>
          <li className='nav-item'>
            <a href='#testimonials' onClick={closeMenu}>Testimonials</a>
          </li>
          <li className='nav-item'>
            <a href='#demo' onClick={closeMenu}>Demo</a>
          </li>
        </ul>
        
      </nav>

    </div>
  )
}

export default Navbar