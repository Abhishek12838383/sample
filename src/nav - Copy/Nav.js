import React from 'react'
import './Nav.css'
import logo from '../assets/logo.png'

const Nav = () => {
  return (
    <div className='nav'>

       <div className="img">
        <img src={logo} alt="" />
       </div>

      <div className="nav-head">
        <div className="h-1">
            C.R.I FLUIDS SYSTEMS
        </div>
        <div className="h-2">
            Pumping trust. Worldwide.
        </div>
      </div>

    </div>
  )
}

export default Nav
