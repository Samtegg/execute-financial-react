import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container' id='footer'>
            <ul>
                <li className='nav-item'>
                    <a href='/'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>About</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Testimonials</a>
                </li>
                <li className='nav-item'>
                    <a href='/'>Demo</a>
                </li>
            </ul>
            <div className='bottom'>
                <span className='line'></span>
                <p>2020 Execute, Inc, All rights reserved</p>

            </div>
        </div>
    </div>
  )
}

export default Footer