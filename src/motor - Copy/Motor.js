import React from 'react'
import './Motor.css'
import motor from '../assets/ex.png'

const Motor = () => {
  return (
    <div className='motor'>
      <div className="motor-head">
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9000 MILLION UNITS OF POWER FOR THE NATIONS.
      </div>

      <div className="motor-img">
        <img src={motor} alt="" />
      </div>

      <div className="motor-down">
        Valves-pumps-pipes-Iot Drives & Controllers -Wires & Cables - Solar System - Motors
      </div>

    <hr />
    </div>
  )
}

export default Motor
